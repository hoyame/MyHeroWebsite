import React from 'react'
import './style.css'

class PasswordView extends React.Component {
    render() {
        const token = this.props.match.params.token;
        console.log(token)
            
        return (
            <>
                <p>pass</p>
            </>
        );
    }
}

export default PasswordView;