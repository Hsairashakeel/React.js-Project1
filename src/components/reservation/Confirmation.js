import React from 'react'
export default class Confirmation extends React.Component {
    render() {
        return (
            <div >
                <section className="section-reservation-page bg-white ">
                    <div className="container">
                        <div className="row">
                            {/* SIDEBAR */}
                            <div className="col-md-4 col-lg-3">
                                <div className="reservation-sidebar">
                                    {/* RESERVATION DATE */}
                                    <div className="reservation-date bg-gray">
                                        {/* HEADING */}
                                        <h2 className="reservation-heading">Dates</h2>
                                        {/* END / HEADING */}
                                        <ul style={{ textAlign: "left" }}>
                                            <li>
                                                <span>Check-In</span>
                                                <span>Thu 06/03/2015</span>
                                            </li>
                                            <li>
                                                <span>Check-Out</span>
                                                <span>Sat 06/06/2015</span>
                                            </li>
                                            <li>
                                                <span>Total Rooms</span>
                                                <span>2</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* END / RESERVATION DATE */}
                                    {/* ROOM SELECT */}
                                    <div className="reservation-room-selected bg-gray" style={{ textAlign: "left" }}>
                                        {/* HEADING */}
                                        <h2 className="reservation-heading">Selected Rooms</h2>
                                        {/* END / HEADING */}
                                        {/* ITEM */}
                                        <div className="reservation-room-seleted_item">
                                            <h6>ROOM 1</h6> <span className="reservation-option">2 Adult, 1 Child</span>
                                            <div className="reservation-room-seleted_name has-package">
                                                <h2><a href="#">LUXURY ROOM</a></h2>
                                            </div>
                                            <div className="reservation-room-seleted_package">
                                                <h6>Space Price</h6>
                                                <ul>
                                                    <li>
                                                        <span>2 days</span>
                                                        <span>$470.00</span>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <span>Service</span>
                                                        <span>Free</span>
                                                    </li>
                                                    <li>
                                                        <span>Tax</span>
                                                        <span>$320.00</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="reservation-room-seleted_total-room">
                                                TOTAL Room 1
                                            <span className="reservation-amout">$470.00</span>
                                            </div>
                                        </div>
                                        {/* END / ITEM */}
                                        {/* TOTAL */}
                                        <div className="reservation-room-seleted_total bg-blue">
                                            <label>TOTAL</label>
                                            <span className="reservation-total">$470.00</span>
                                        </div>
                                        {/* END / TOTAL */}
                                    </div>
                                    {/* END / ROOM SELECT */}
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <div className="reservation_content">
                                    <div className="reservation-billing-detail">
                                        <p className="reservation-login">Returning customer? <a href="#">Click here to login</a></p>
                                        <h4>BILLING DETAILS</h4>
                                        <label>Country <sup>*</sup></label>
                                        <div className="btn-group bootstrap-select awe-select container">
                                            <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Adults">
                                                <span className="filter-option pull-left" style={{ "color": "black" }}>Pakistan</span>&nbsp;
                                                <span className="caret" style={{ "color": "black" }} />
                                            </button>
                                            <div className="dropdown-menu open">
                                                <ul className="dropdown-menu inner" role="menu">
                                                    <li data-original-index={0} className="selected"><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">China</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                                    <li data-original-index={1}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">Russia</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                                    <li data-original-index={2}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">America</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                                    <li data-original-index={3}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">Turkey</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row text-left">
                                            <div className="col-sm-6">
                                                <label>First Name<sup>*</sup></label>
                                                <input type="text" className="input-text" />
                                            </div>
                                            <div className="col-sm-6">
                                                <label>Last Name<sup>*</sup></label>
                                                <input type="text" className="input-text" />
                                            </div>
                                        </div>
                                        <label className="text-left">Company Name</label>
                                        <input type="text" className="input-text" />
                                        <label className="text-left">Address<sup>*</sup></label>
                                        <input type="text" className="input-text" placeholder="Street Address" />
                                        <br /><br />
                                        <input type="text" className="input-text" placeholder="Apartment, suite, unit etc. (Optional)" />
                                        <div className="row text-left">
                                            <div className="col-sm-6">
                                                <label>Town / City<sup>*</sup></label>
                                                <input type="text" className="input-text" />
                                            </div>
                                            <div className="col-sm-6 text-left">
                                                <label>Country<sup>*</sup></label>
                                                <input type="text" className="input-text" />
                                            </div>
                                        </div>
                                        <div className="row text-left">
                                            <div className="col-sm-6">
                                                <label>Email Address<sup>*</sup></label>
                                                <input type="text" className="input-text" />
                                            </div>
                                            <div className="col-sm-6 text-left">
                                                <label>Phone<sup>*</sup></label>
                                                <input type="text" className="input-text" />
                                            </div>
                                        </div>
                                        <label className="text-left">Order Notes</label>
                                        <textarea className="input-textarea" placeholder="Notes about your order, eg. special notes for delivery" defaultValue={""} />
                                        <label className="label-radio ">
                                            <input type="radio" className="input-radio" />
                                        Create an account?
                                </label>
                                        <ul className="option-bank">
                                            <li>
                                                <label className="label-radio">
                                                    <input type="radio" className="input-radio" name="chose-bank" />
                                                Credit Card
                                         </label>
                                                <img src="images/icon-card.jpg" alt="" />
                                            </li>
                                        </ul>
                                        {/* <button className="awe-btn awe-btn-13">PLACE ORDER</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}