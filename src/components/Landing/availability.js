import React from 'react'
import Datepicker from './datepicker'
export default class Availability extends React.Component {

    render() {
        return (
            <section className="section-check-availability">
                <div className="container">
                    <div className="check-availability">
                        <div className="row">
                            <div className="col-lg-3">
                                <h2>CHECK AVAILABILITY</h2>
                            </div>
                            <div className="col-lg-9">
                                <form id="ajax-form-search-room" action="search_step_2.php" method="post" noValidate="novalidate">
                                    <div className="availability-form">
                                        <div className="awe-calendar-wrapper"><Datepicker /><i className="lotus-icon-calendar" /></div>
                                        <div className="awe-calendar-wrapper"><Datepicker /><i className="lotus-icon-calendar" /></div>
                                        <select className="awe-select bs-select-hidden" name="adults">
                                            <option>People</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <div className="btn-group bootstrap-select awe-select">
                                            <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Adults">
                                                <span className="filter-option pull-left">Adults</span>&nbsp;
                                                <span className="caret" />
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
                                        <div className="vailability-submit">
                                            <button className="awe-btn awe-btn-13">FIND THE BEST ROOMS</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}