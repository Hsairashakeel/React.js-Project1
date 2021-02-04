import React from 'react'
class Login extends React.Component {
    render() {
        return (
            <section className="section-account parallax bg-11">
                <div className="awe-overlay" />
                <div className="container">
                    <div className="login-register">
                        <div className="text text-center">
                            <h2>LOGIN ACCOUNT</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <form action="#" className="account_form">
                                <div className="field-form">
                                    <input type="text" className="field-text" placeholder="User name" />
                                </div>
                                <div className="field-form">
                                    <input type="password" className="field-text" placeholder="Password" />
                                    <span className="view-pass"><i className="lotus-icon-view" /></span>
                                </div>
                                <div className="field-form field-submit">
                                    <button className="awe-btn awe-btn-13">Login</button>
                                </div>
                                <span className="account-desc">I don’t have an account  -  <a href="#">Forgot Password</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;