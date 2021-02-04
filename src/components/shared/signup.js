import React from 'react'

class SignUp extends React.Component {
    render() {
        return (
            <section className="section-account parallax bg-11">
                <div className="awe-overlay" />
                <div className="container">
                    <div className="login-register">
                        <div className="text text-center">
                            <h2>REGISTER FORM</h2>
                            <p>If you no have account in lotus Hotel! Register and feeling</p>
                            <form action="#" className="account_form">
                                <div className="field-form">
                                    <input type="text" className="field-text" placeholder="User name*" />
                                </div>
                                <div className="field-form">
                                    <input type="text" className="field-text" placeholder="Email*" />
                                </div>
                                <div className="field-form">
                                    <input type="password" className="field-text" placeholder="Password*" />
                                    <span className="view-pass"><i className="lotus-icon-view" /></span>
                                </div>
                                <div className="field-form field-submit">
                                    <button className="awe-btn awe-btn-13">REGISTER</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default SignUp;