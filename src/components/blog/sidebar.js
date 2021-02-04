import React from 'react'
import {Link} from 'react-router-dom'
import Datepicker from '../Landing/datepicker'
class ReservationSideBar extends React.Component {
    render() {
        return (
            <div className="widget widget_check_availability">
                <h4 className="widget-title">YOUR RESERVATION</h4>
                <div className="check_availability">
                    <h6 className="check_availability_title">your stay dates</h6>
                    <div className="check_availability-field">
                        <label>Arrive</label>
                        <div className="awe-calendar-wrapper"><Datepicker /></div>
                    </div>
                    <div className="check_availability-field">
                        <label>Depature</label>
                        <div className="awe-calendar-wrapper"><Datepicker /></div>
                    </div>
                    <h6 className="check_availability_title">Accomodation</h6>
                    <div className="btn-group bootstrap-select awe-select container">
                        <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Adults">
                            <span className="filter-option pull-left" style={{"color":"black"}}>People</span>&nbsp;
                                                <span className="caret" style={{"color":"black"}} />
                        </button>
                        <div className="dropdown-menu open">
                            <ul className="dropdown-menu inner" role="menu">
                                <li data-original-index={0} className="selected"><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">Adults</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                <li data-original-index={1}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">1</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                <li data-original-index={2}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">2</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                                <li data-original-index={3}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">3</span><span className="glyphicon glyphicon-ok check-mark" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/reservationform" className="awe-btn awe-btn-13">CHECK AVAILABLE</Link>
                </div>
            </div>
        );
    }
}

export default ReservationSideBar;