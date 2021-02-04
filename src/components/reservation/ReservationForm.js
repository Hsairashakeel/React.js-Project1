import React from 'react'
import RoomsLayout from './reservationRoomsLayout'
import { Link } from 'react-router-dom'
class ReservationForm extends React.Component {
    render() {
        return (
            <div>
                <section className="section-reservation-page bg-white">
                    <div className="container">
                        
                    <div className="row">
                        {/* SIDEBAR */}
                        <div className="col-md-4 col-lg-3">
                            <div className="reservation-sidebar">
                                <div className="reservation-room-selected bg-gray">
                                    {/* HEADING */}
                                    <h2 className="reservation-heading text-left">Selected Rooms</h2>
                                    {/* END / HEADING */}
                                    {/* ITEM */}
                                    <div className="reservation-room-seleted_item text-left">
                                        <h6>ROOM 1</h6>
                                        <div className="reservation-room-seleted_name">
                                            <h2><a href="#">LUXURY ROOM</a></h2>
                                            <span className="reservation-amout">$470.00</span>
                                        </div>
                                        <a href="#" className="reservation-room-seleted_change">Remove Room</a>
                                    </div>
                                    {/* END / ITEM */}
                                    {/* TOTAL */}
                                    <div className="reservation-room-seleted_total text-left">
                                        <label>TOTAL</label>
                                        <span className="reservation-total">$470.00</span>
                                    </div>
                                    {/* END / TOTAL */}
                                    
                                {/* <Link to="/confirmation" className="awe-btn awe-btn-13" style={{ marginTop: "5px",marginBottom:"10px" }}>DONE</Link> */}
                                </div>
                        </div>
                    </div>
                    <RoomsLayout />
                    </div>
                    </div>
                </section>
            </div >
        );
    }
}
export default ReservationForm;
