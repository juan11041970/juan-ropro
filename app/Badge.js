import React from 'react'

class Badge extends React.Component {
    render() {
        return (
            <div>
                <img src= '' />
                <h1>Name: {'this.props.user.name'}</h1>
                <h3>username: </h3>
            </div>
        )
    }
}

Badge.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

ReactDOM.render(
    <Badge user={{
        name: 'Tyler McGinnis',
        img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
        username: 'tylermcginnis'
    }} />,
    document.getElementById('app')
);
