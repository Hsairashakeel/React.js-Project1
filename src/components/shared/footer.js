import React from "react"
import {Link} from "react-router-dom"

export default class Footer extends React.Component{

    render(){
        return(
            <footer id="footer">

            <div className="footer_top">
                <div className="container">
                    <div className="row">
        
                        <div className="col-lg-9">
                            <div className="mailchimp">
                                <h4>News &amp; Offers</h4>
                                <div className="mailchimp-form">
                                    <form action="#" method="POST">
                                        <input type="text" name="email" placeholder="Your email address" className="input-text" />
                                        <button className="awe-btn">SIGN UP</button>
                                    </form>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-3">
                            <div className="social">
                                <div className="social-content">
                                    <Link to='#'><i className="fa fa-pinterest"></i></Link>
                                    <Link to='#'><i className="fa fa-facebook"></i></Link>
                                    <Link to='#'><i className="fa fa-twitter"></i></Link>
                                    <Link to='#'><i className="fa fa-google-plus"></i></Link>
                                    <Link to='#'><i className="fa fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        
            <div className="footer_center">
                <div className="container">
                    <div className="row">
        
                        <div className="col-xs-12 col-lg-5">
                            <div className="widget widget_logo">
                                <div className="widget-logo">
                                    <div className="img">
                                        <Link to='#' ><h3 style={{"color":"white"}}><img src="/images/images/footer.png" alt=""/></h3></Link>
                                    </div>
                                    <div className="text text-left">
                                        <p><i className="lotus-icon-location"></i> 225 Beach Street, Australian</p>
                                        <p><i className="lotus-icon-phone"></i> 1-548-854-8898</p>
                                        <p><i className="fa fa-envelope-o"></i> <a href="mailto:hello@thelotushotel.com">hello@thelotushotel.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-xs-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Page site</h4>
                                <ul>
                                    <li><Link to='#'>Guest Book</Link></li>
                                    <li><Link to='#'>Gallery</Link></li>
                                    <li><Link to='#'>Restaurant</Link></li> 
                                    <li><Link to='#'>Event</Link></li>
                                </ul>
                            </div>
                        </div>
        
                        <div className="col-xs-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">ABOUT</h4>
                                <ul>
                                    <li><Link to='#'>About</Link></li>
                                    <li><Link to='#'>Blog</Link></li>
                                    <li><Link to='#'>Contact Us</Link></li>
                                    <li><Link to='#'>Comming Soon</Link></li>
                                </ul>
                            </div>
                        </div>
        
                        <div className="col-xs-4 col-lg-3">
                            <div className="widget widget_tripadvisor">
                                <h4 className="widget-title">Tripadvisor</h4>
                                <div className="tripadvisor">
                                    <p>Now with hotel reviews by</p>
                                    <img src="images/tripadvisor.png" alt="" />
                                    <span className="tripadvisor-circle">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i className="part"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
        
        
                    </div>
                </div>
            </div>
        
            <div className="footer_bottom">
                <div className="container">
                    <p>&copy; 2020 Jaffa Suites All rights reserved.</p>
                </div>
            </div>
        
        </footer>
        );
    }
}