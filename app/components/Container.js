import React from 'react'

export  default class Container extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mode: 'light'
        }
        this.handleDarkMode = this.handleDarkMode.bind(this)
        this.handleLightMode = this.handleLightMode.bind(this)
    }
    handleLightMode() {
        this.setState({
            mode: 'light'
        })
    }
    handleDarkMode() {
        this.setState({
            mode: 'dark'
        })
    }
    render() {
        const { mode } = this.state

        return (
            <div style={{
                height: '100%',
                background: mode === 'light' ? '#fff' : '#000'
            }}>
                {mode === 'light'
                    ? <button onClick={this.handleDarkMode}>Dark Mode</button>
                    : <button onClick={this.handleLightMode}>Light Mode</button>}
            </div>
        )
    }
}
