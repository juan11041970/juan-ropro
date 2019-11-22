import React from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utils/api'
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'

function LanguagesNav ({selected, onUpdateLanguage}) {
    const languages = ['All', 'Java', 'Groovy', 'Javascript', 'Scala', 'Ruby']

    return(
        <ul className='flex-center'>
            {
                languages.map((language) => (
                    <li key={language}>
                        <button className='btn-clear nav-link'
                                style={language === selected ? { color: 'rgb(187, 46, 31'} : null }
                                onClick={() => onUpdateLanguage(language)}>
                            {language}
                        </button>
                    </li>
                ))}
        </ul>
    )
}
LanguagesNav.prototypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

function ReposGrid({ repos } ) {
    return (
    <ul className='grid space-around'>
        {
            repos.map((repo, index) => {
                const { name, owner, html_url, stargazers_count, forks, open_issues} = repo
                const { login, avatar_url } = owner

                return (
                    <li key={html_url} className='repo bg-light'>
                        <h4 className='header-lg center-text'>
                            #{index + 1}
                        </h4>
                        <img
                            className='avatar'
                            src={avatar_url}
                            alt={`Avatar for ${login}`}
                        />
                        <h2 className='center-text'>
                            <a className='link' href={html_url}>{login}</a>
                        </h2>
                        <ul className='card-list'>
                            <li>
                                <FaUser color='rgb(255, 191, 116)' size={22}/>
                                {login}
                            </li>
                            <li>
                                <FaStar color='rgb(255, 215, 0)' size={22}/>
                                {stargazers_count.toLocaleString()} stars
                            </li>
                            <li>
                                <FaCodeBranch color='rgb(129, 195, 245)' size={22}/>
                                {forks.toLocaleString()} forks
                            </li>
                            <li>
                                <FaExclamationTriangle color='rgb(241, 215, 0)' size={22}/>
                                {open_issues.toLocaleString()} issues
                            </li>
                        </ul>
                    </li>
                )
            })
        }
    </ul>
    )
}

ReposGrid.propTypes = {
    repos: PropTypes.array.isRequired
}

export default class Popular extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All',
            repos: {},
            error: null
        }
        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount() {
        console.log("Component mounted")
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component updated")
    }
    componentWillMount() {
        console.log("Component componentWillMount")
    }

    updateLanguage(selectedLanguage) {
        console.log(`In updateLanguage ${selectedLanguage}`)
        this.setState({
            selectedLanguage,
            error: null
        })

        if (!this.state.repos[selectedLanguage]) {
            fetchPopularRepos(selectedLanguage)
                .then((data) => {
                    this.setState(({ repos }) => ({
                        repos: {
                            ...repos,
                            [selectedLanguage]: data
                        }
                    }))
                })
                .catch(() => {
                    console.warn("Error", error)

                    this.setState({
                        error: "There was an error"
                    })
                })
        }
    }

    isLoading() {
        const { selectedLanguage, repos, error } = this.state

        return !repos[selectedLanguage] && this.state.error === null
    }

    render() {

        const { selectedLanguage, repos, error } = this.state

        return (
            <React.Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}/>
                { this.isLoading() && <p>LOADING</p> }
                { error && <p>LOADING</p>}

                {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}

            </React.Fragment>
        )
    }
}