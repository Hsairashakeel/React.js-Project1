import React from 'react'
class RoomLayout extends React.Component {
    render() {
        return (
            <div className="col-md-8 col-lg-9 text-left">
                <div className="reservation_content">
                    {/* RESERVATION ROOM */}
                    <div className="reservation-room">
                        {/* ITEM */}
                        <div className="reservation-room_item">
                            <h2 className="reservation-room_name"><a href="#">Luxury room</a></h2>
                            <div className="reservation-room_img">
                                <a href="images/images/reservation/img-1.jpg"><img src="images/images/reservation/img-1.jpg" alt="" /></a>
                            </div>
                            <div className="reservation-room_text">
                                <div className="reservation-room_desc text-left">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                                    <ul>
                                        <li>1 King Bed</li>
                                        <li>Free Wi-Fi in all guest rooms</li>
                                        <li>Separate sitting area</li>
                                    </ul>
                                </div>
                                <a href="#" className="reservation-room_view-more">View More Infomation</a>
                                <div className="clear" />
                                <p className="reservation-room_price">
                                    <span className="reservation-room_amout">$260</span> / days
                                </p>
                                <a href="#" className="awe-btn awe-btn-default">BOOK ROOM</a>
                            </div>
                            <div className="reservation-room_package">
                                <a data-toggle="collapse" href="#reservation-room_package-1" className="reservation-room_package-more collapsed">Show more package</a>
                                <div className="reservation-room_package-content collapse" id="reservation-room_package-1">
                                    {/* ITEM PACKAGE */}
                                    <div className="reservation-package_item">
                                        <div className="reservation-package_img">
                                            <a href="#"><img src="images/reservation/package/img-1.jpg" alt="" /></a>
                                        </div>
                                        <div className="reservation-package_text">
                                            <h4><a href="#">package standar</a></h4>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            <div className="reservation-package_book-price">
                                                <p className="reservation-package_price">
                                                    <span className="amout">$260</span>
                                                </p>
                                                <a href="#" className="awe-btn awe-btn-default">Book package</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Item*/}

                        <div className="reservation-room_item">
                            <h2 className="reservation-room_name"><a href="#">Couple room</a></h2>
                            <div className="reservation-room_img">
                                <a href="images/images/reservation/img-1.jpg"><img src="images/images/reservation/img-2.jpg" alt="" /></a>
                            </div>
                            <div className="reservation-room_text">
                                <div className="reservation-room_desc text-left">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                                    <ul>
                                        <li>1 King Bed</li>
                                        <li>Free Wi-Fi in all guest rooms</li>
                                        <li>Separate sitting area</li>
                                    </ul>
                                </div>
                                <a href="#" className="reservation-room_view-more">View More Infomation</a>
                                <div className="clear" />
                                <p className="reservation-room_price">
                                    <span className="reservation-room_amout">$260</span> / days
                                </p>
                                <a href="#" className="awe-btn awe-btn-default">BOOK ROOM</a>
                            </div>
                            <div className="reservation-room_package">
                                <a data-toggle="collapse" href="#reservation-room_package-1" className="reservation-room_package-more collapsed">Show more package</a>
                                <div className="reservation-room_package-content collapse" id="reservation-room_package-1">
                                    {/* ITEM PACKAGE */}
                                    <div className="reservation-package_item">
                                        <div className="reservation-package_img">
                                            <a href="#"><img src="images/reservation/package/img-1.jpg" alt="" /></a>
                                        </div>
                                        <div className="reservation-package_text">
                                            <h4><a href="#">package standar</a></h4>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            <div className="reservation-package_book-price">
                                                <p className="reservation-package_price">
                                                    <span className="amout">$260</span>
                                                </p>
                                                <a href="#" className="awe-btn awe-btn-default">Book package</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="reservation-room_item">
                            <h2 className="reservation-room_name"><a href="#">Jaffa Suite</a></h2>
                            <div className="reservation-room_img">
                                <a href="images/images/reservation/img-1.jpg"><img src="images/images/reservation/img-3.jpg" alt="" /></a>
                            </div>
                            <div className="reservation-room_text">
                                <div className="reservation-room_desc text-left">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                                    <ul>
                                        <li>1 King Bed</li>
                                        <li>Free Wi-Fi in all guest rooms</li>
                                        <li>Separate sitting area</li>
                                    </ul>
                                </div>
                                <a href="#" className="reservation-room_view-more">View More Infomation</a>
                                <div className="clear" />
                                <p className="reservation-room_price">
                                    <span className="reservation-room_amout">$260</span> / days
                                </p>
                                <a href="#" className="awe-btn awe-btn-default">BOOK ROOM</a>
                            </div>
                            <div className="reservation-room_package">
                                <a data-toggle="collapse" href="#reservation-room_package-1" className="reservation-room_package-more collapsed">Show more package</a>
                                <div className="reservation-room_package-content collapse" id="reservation-room_package-1">
                                    {/* ITEM PACKAGE */}
                                    <div className="reservation-package_item">
                                        <div className="reservation-package_img">
                                            <a href="#"><img src="images/reservation/package/img-1.jpg" alt="" /></a>
                                        </div>
                                        <div className="reservation-package_text">
                                            <h4><a href="#">package standar</a></h4>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            <div className="reservation-package_book-price">
                                                <p className="reservation-package_price">
                                                    <span className="amout">$260</span>
                                                </p>
                                                <a href="#" className="awe-btn awe-btn-default">Book package</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default RoomLayout;