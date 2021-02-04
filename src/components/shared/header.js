import React from "react"
import {Link} from "react-router-dom"

export default class Navbar extends React.Component{

    state = {
              links: [
                {
                  id: 1,
                  name: "Home",
                  to: "/",
                  className: "nav-link"
                },
                {
                  id: 2,
                  name: "Rooms",
                  to: "/rooms",
                  className: "nav-link"
                },
                {
                  id: 3,
                  name: "Reservation",
                  to: "/reservation",
                  className: "nav-link"
                },
                {
                  id: 4,
                  name: "Guest Book",
                  to: "/guestbook",
                  className: "nav-link"
                },
                {
                    id: 5,
                    name: "Gallery",
                    to: "/gallery",
                    className: "nav-link"
                },
                {
                    id: 6,
                    name: "Blog",
                    to: "/blog",
                    className: "nav-link"
                },
                {
                    id: 7,
                    name: "About",
                    to: "/aboutus",
                    className: "nav-link"
                },
                {
                    id: 8,
                    name: "Contact Us",
                    to: "/contactus",
                    className: "nav-link"
                }
              ],
              activeLink: 1
            };
          
        handleClick = id => {
            this.setState({ activeLink: id });
            };
    render()
    {
        const { links, activeLink } = this.state;

        const nav=links.map(link => {
          return (
            <li key={link.id} className={(link.id === activeLink ? "current-menu-item" : "")} >
                <Link to={link.to} className={link.className} onClick={() => this.handleClick(link.id)}>{link.name}</Link>
            </li>
          );
        });

        return (
        <header id="header" >

            <div className="header_top">
                <div className="container">
                    <div className="header_left float-left">
                        <span><i className="lotus-icon-cloud"></i> 18 °C</span>
                        <span><i className="lotus-icon-location"></i> 225 Beach Street, Australian</span>
                        <span><i className="lotus-icon-phone"></i> 1-548-854-8898</span>
                    </div>
                    <div className="header_right float-right">

                        <span className="login-register">
                            <Link to="/login">LOGIN</Link>
                            <Link to="/signup">Register</Link>
                        </span>
                    </div>
                </div>
            </div>

            <div className="header_content" id="header_content">

                <div className="container">
                <div className="header_logo">
                        <Link to="/" className="nav-link"><img src="/images/images/header_155x58.jpg" alt="" /></Link> 
                </div>
                    <nav className="header_menu">
                        <ul className="menu">
                        {nav}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        );
    }
}