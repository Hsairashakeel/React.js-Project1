import React from 'react'
export default class Info extends React.Component {
    render() {
        return (
            <div className="widget widget_social">
                <h4 className="widget-title">lotus SOCIALS</h4>
                <div className="widget-social">
                    <a href="#"><i className="fa fa-pinterest" /></a>
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                </div>
            </div>
        );
    }
}