import React from 'react'
import Info from './Info'
import ImageGallery from 'react-image-gallery';
import Datepicker from '../Landing/datepicker'
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        //   description:"Hello WOrld"
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

class RoomDetails extends React.Component {

    state = {
        basePrice: "",
    }
    render() {
        return (
            <div>
                <Info />
                <section className="section-room-detail bg-white text-left">
                    <div className="container">
                        {/* DETAIL */}
                        <div className="room-detail">

                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="room-detail_img">
                                        <div className="room_img-item">
                                            <ImageGallery items={images} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    {/* FORM BOOK */}
                                    <div className="room-detail_book">
                                        <div className="room-detail_total">
                                            <img src="images/icon-logo.png" alt="" className="icon-logo" />
                                            <h6>STARTING ROOM FROM</h6>
                                            <p className="price">
                                                <span className="amout">$260</span>  /days
                                         </p>
                                        </div>
                                        <div className="room-detail_form">
                                            <label>Arrive</label>
                                            <Datepicker />
                                            <label>Depature</label>
                                            <Datepicker />
                                            <label>Persons</label>
                                            <div className="btn-group bootstrap-select awe-select">
                                                <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Adults">
                                                    <span className="filter-option pull-left" style={{ "color": "black" }}>Adults</span>&nbsp;
                                                <span className="caret" style={{ "color": "black" }} />
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
                                            <button className="awe-btn awe-btn-13">Book Now</button>
                                        </div>
                                    </div>
                                    {/* END / FORM BOOK */}
                                </div>
                            </div>
                        </div>
                        {/* END / DETAIL */}
                        {/* TAB */}
                        <div className="room-detail_tab">
                            <div className="row">
                                <div className="col-md-3">
                                    <ul className="room-detail_tab-header">
                                        <li><a href="#overview" data-toggle="tab">OVERVIEW</a></li>
                                        <li className="active"><a href="#amenities" data-toggle="tab">amenities</a></li>
                                        <li><a href="#package" data-toggle="tab">PACKAGE</a></li>
                                        <li><a href="#feedback" data-toggle="tab">Customer Feedback</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-9">
                                    <div className="room-detail_tab-content tab-content">
                                        {/* OVERVIEW */}
                                        <div className="tab-pane fade" id="overview">
                                            <div className="room-detail_overview">
                                                <h5 className="text-uppercase">de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                                                <p>Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.</p>
                                                <div className="row">
                                                    <div className="col-xs-6 col-md-4">
                                                        <h6>SPECIAL ROOM</h6>
                                                        <ul>
                                                            <li>Max: 4 Person(s)</li>
                                                            <li>Size: 35 m2 / 376 ft2</li>
                                                            <li>View: Ocen</li>
                                                            <li>Bed: King-size or twin beds</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xs-6 col-md-4">
                                                        <h6>SERVICE ROOM</h6>
                                                        <ul>
                                                            <li>Oversized work desk</li>
                                                            <li>Hairdryer</li>
                                                            <li>Iron/ironing board upon request</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* END / OVERVIEW */}
                                        {/* AMENITIES */}
                                        <div className="tab-pane fade active in" id="amenities">
                                            <div className="room-detail_amenities">
                                                <p>Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.</p>
                                                <div className="row">
                                                    <div className="col-xs-6 col-lg-4">
                                                        <h6>LIVING ROOM</h6>
                                                        <ul>
                                                            <li>Oversized work desk</li>
                                                            <li>Hairdryer</li>
                                                            <li>Iron/ironing board upon request</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xs-6 col-lg-4">
                                                        <h6>KITCHEN ROOM</h6>
                                                        <ul>
                                                            <li>AM/FM clock radio</li>
                                                            <li>Voicemail</li>
                                                            <li>High-speed Internet access</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xs-6 col-lg-4">
                                                        <h6>balcony</h6>
                                                        <ul>
                                                            <li>AM/FM clock radio</li>
                                                            <li>Voicemail</li>
                                                            <li>High-speed Internet access</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xs-6 col-lg-4">
                                                        <h6>bedroom</h6>
                                                        <ul>
                                                            <li>Coffee maker</li>
                                                            <li>25 inch or larger TV</li>
                                                            <li>Cable/satellite TV channels</li>
                                                            <li>AM/FM clock radio</li>
                                                            <li>Voicemail</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xs-6 col-lg-4">
                                                        <h6>bathroom</h6>
                                                        <ul>
                                                            <li>Dataport</li>
                                                            <li>Phone access fees waived</li>
                                                            <li>24-hour Concierge service</li>
                                                            <li>Private concierge</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xs-6 col-lg-4">
                                                        <h6>Oversized work desk</h6>
                                                        <ul>
                                                            <li>Dataport</li>
                                                            <li>Phone access fees waived</li>
                                                            <li>24-hour Concierge service</li>
                                                            <li>Private concierge</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* END / AMENITIES */}
                                        {/* PACKAGE */}
                                        <div className="tab-pane fade" id="package">
                                            <div className="room-detail_package">
                                                {/* ITEM package */}
                                                <div className="room-package_item">
                                                    <div className="text">
                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                                        <div className="room-package_price">
                                                            <p className="price">
                                                                <span className="amout">$260</span> / Package
                      </p>
                                                            <a href="#" className="awe-btn awe-btn-default">Book package</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END / ITEM package */}
                                                {/* ITEM package */}
                                                <div className="room-package_item">
                                                    <div className="text">
                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                                        <div className="room-package_price">
                                                            <p className="price">
                                                                <span className="amout">$260</span> / Package
                      </p>
                                                            <a href="#" className="awe-btn awe-btn-default">Book package</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END / ITEM package */}
                                                {/* ITEM package */}
                                                <div className="room-package_item">
                                                    <div className="text">
                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                                        <div className="room-package_price">
                                                            <p className="price">
                                                                <span className="amout">$260</span> / Package
                      </p>
                                                            <a href="#" className="awe-btn awe-btn-default">Book package</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END / ITEM package */}
                                            </div>
                                        </div>
                                        {/* END / PACKAGE */}
                                        <div className="tab-pane fade" id="feedback">
                                            <div id="comments" style={{ "borderTop": "none" }}>
                                                <h4 className="comment-title">COMMENT (3)</h4>
                                                <ul className="commentlist">
                                                    <li>
                                                        <div className="comment-body">
                                                            <a className="comment-avatar"><img src="images/avatar/img-1.jpg" alt="" /></a>
                                                            <h4 className="comment-subject">Lorem Ipsum is simply dummy text of the printing</h4>
                                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
                                                            <span className="comment-meta">
                                                                <a href="#">Jessica Anba</a> - 20PM 15 Oct 2015
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END / TAB */}

                        {/* COMPARE ACCOMMODATION */}
                        <div className="room-detail_compare">
                            <h2 className="room-compare_title">MORE ROOMS</h2>
                            <div className="room-compare_content">
                                <div className="row">
                                    {/* ITEM */}
                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <div className="room-compare_item">
                                            <div className="img">
                                                <a href="#"><img src="images/images/room/detail/compare/img-1.jpg" alt="" /></a>
                                            </div>
                                            <div className="text">
                                                <h2><a href>LUxury room</a></h2>
                                                <ul>
                                                    <li><i className="lotus-icon-person" /> Max: 2 Person(s)</li>
                                                    <li><i className="lotus-icon-bed" /> Bed: King-size or twin beds</li>
                                                    <li><i className="lotus-icon-view" /> View: Ocen</li>
                                                </ul>
                                                <a href="#" className="awe-btn awe-btn-default">VIEW DETAIL</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END / ITEM */}
                                </div>
                            </div>
                        </div>
                        {/* END / COMPARE ACCOMMODATION */}
                    </div>
                </section>
            </div>
        );
    }
}

export default RoomDetails;