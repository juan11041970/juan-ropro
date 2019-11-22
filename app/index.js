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

class App extends React.Component {
    render() {
        return(
        <div>
            <Battle />
        </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
