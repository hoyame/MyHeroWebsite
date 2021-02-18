import React from 'react'
import HeaderComponent from '../../components/Header/index'
import './style.css'
require('dotenv').config();

class PasswordView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: "",
            password: "",
            cPassword: "",
            error: false,
            succes: false,
            succesMail: false
        };
    }

    render() {
        const token = this.props.match.params.token || "";
        const pass = this.state.password;
        const passConfirm = this.state.cPassword;
        const mail = this.state.mail;
        const setState = this.setState.bind(this)

        function pushNotif() {
            var obje = {
                token: token,
                new_password: pass
            }
        
            if (pass == passConfirm) {
                setState({error: false})

                fetch(`http://146.59.227.90:3333/user/reset_password`, {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obje)
                })
                    .then(function(res) {
                        console.log(res);
                        setState({succes: true})
                    })
                    
                    .catch(function(err) {
                        console.log("errror", err)
                    })
                ;
            } else {
                setState({error: true})
            }
        }

        function pushMail() {
            var obje = {
                email: mail,
            }
        
            fetch(`http://146.59.227.90:3333/user/forgot_password`, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(obje)
            })
                .then(function(res) {
                    console.log(res);
                    setState({succes: true})
                })
                    
                .catch(function(err) {
                    console.log("errror", err)
                })
            ;
    
        }

        if (token !== "new") {
            return (
                <div className="App">
                    <HeaderComponent />

                    <div className="password-inputs">
                        <p className="password-title">Password Reset</p>
                        <p className="password-description">Please insert your new password.</p>

                        <input onChange={e => this.setState({ password: e.target.value })} placeholder="Password" className="input"></input>
                        <input onChange={e => this.setState({ cPassword: e.target.value })} placeholder="Password confirm" className="input"></input>

                        { this.state.error &&
                            <p style={{color: 'red'}}>Password do not match</p>
                        }

                        { this.state.succes &&
                            <p style={{color: 'green'}}>Password changed</p>
                        }

                        <div className="button" onClick={() => pushNotif()}>
                            <p>Edit</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <HeaderComponent />

                    <div className="password-inputs">
                        <p className="password-title">Password Reset</p>
                        <p className="password-description">Please enter your email, <br></br>you will receive an email with instructions.</p>

                        <input onChange={e => this.setState({ mail: e.target.value })} placeholder="Mail" className="input"></input>

                        { this.state.succesMail &&
                            <p style={{color: 'green'}}>Mail send.</p>
                        }

                        <div className="button" onClick={() => pushMail()}>
                            <p>Send</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default PasswordView;