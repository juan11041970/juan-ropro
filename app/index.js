import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import Avatar from './Avatar'
// import Label from './Label'
// import List from './List'
import Popular from './components/Popular'
import Container from './components/Container'
import Count    from './components/Count'

class App extends React.Component {
    render() {
        return(
        <div>
            <Container />
            <Count />
            <Popular />
        </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
