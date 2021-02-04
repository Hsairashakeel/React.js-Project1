import React from 'react'
import { Link } from 'react-router-dom'
import Datepicker from '../Landing/datepicker'
class ReservationSideBar extends React.Component {
    render() {
        return (
            <section className="section-reservation-page bg-white">
                <div className="container">

                    <div className="reservation-page ">
                        <div className="row">
                            <div className="col-md-4 col-lg-3">
                                <div className="reservation-sidebar">
                                </div>
                            </div>
                            <div className="offset-md-3 col-md-6">
                                {/* SIDEBAR AVAILBBILITY */}
                                <div className="reservation-sidebar_availability bg-gray">
                                    {/* HEADING */}
                                    <h2 className="reservation-heading">YOUR RESERVATION</h2>
                                    {/* END / HEADING */}
                                    <h6 className="check_availability_title">your stay dates</h6>
                                    <div className="check_availability-field">
                                        <label>Arrive</label>
                                        <div className="awe-calendar-wrapper"><Datepicker /></div>
                                    </div>
                                    <div className="check_availability-field">
                                        <label>Departure</label>
                                        <div className="awe-calendar-wrapper"><Datepicker /></div>
                                    </div>
                                    <h6 className="check_availability_title">GUESTS</h6>
                                    <div className="btn-group bootstrap-select awe-select " style={{width:"100%"}}>
                                        <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Adults">
                                            <span className="filter-option pull-left" style={{ "color": "black" }}>Adults</span>&nbsp;
                                                <span className="caret" style={{ "color": "black" }} />
                                        </button>
                                        <div className="dropdown-menu open ">
                                            <ul className="dropdown-menu inner" role="menu">
                                                <li data-original-index={0} className="selected"><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">Adults</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                                <li data-original-index={1}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">1</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                                <li data-original-index={2}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">2</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                                <li data-original-index={3}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">3</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ReservationSideBar;