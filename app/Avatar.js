import React from 'react'
import ReactDOM from 'react-dom'

class Avatar extends React.Component {
    render() {
        return (
            <img src={this.props.img} />
        )
    }
}
export default Avatar
