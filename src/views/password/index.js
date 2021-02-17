import React from 'react'
import HeaderComponent from '../../components/Header/index'
import './style.css'

class PasswordView extends React.Component {
    render() {
        const token = this.props.match.params.token;
        console.log(token)
            
        return (
            <div className="App">

                <HeaderComponent />

                <div className="password-inputs">
                    <p className="password-title">Password Reset</p>
                    <p className="password-description">Please insert your new password.</p>

                    <input placeholder="Password" className="input"></input>
                    <input placeholder="Password confirm" className="input"></input>

                    <div className="button">
                        <p>Modifier</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PasswordView;