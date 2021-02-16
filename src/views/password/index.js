import React from 'react'
import './style.css'

class PasswordView extends React.Component {
    render() {
        const token = this.props.match.params.token;
        console.log(token)
            
        return (
            <>
                <div className="password-inputs">
                    <p className="password-title">Log in</p>
                    <p className="password-description">Veuillez inserer votre nouveau mdp.</p>

                    <input placeholder="Password" className="input"></input>
                    <input placeholder="Password confirm" className="input"></input>

                    <div className="button">
                        <p>Modifier</p>
                    </div>
                </div>
            </>
        );
    }
}

export default PasswordView;