import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import Avatar from './Avatar'
// import Label from './Label'
// import List from './List'
import Popular from './components/Popular'
import Container from './components/Container'
import Count    from './components/Count'
import Battle from './components/Battle'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({theme}) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }))
            },
            checked: 'false'
        }
    }


    render() {
        return(
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className='container'>
                            <Nav />
                            <Route exact path='/' component={Popular} />
                            <Route exact path='/battle' component={Battle} />
                            <Battle />
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
