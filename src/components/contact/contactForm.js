import React from 'react'

class contactForm extends React.Component {

    render() {
        return (
        <section className="section-contact">
            <div className="container">
                <div className="contact">
                    <div className="row">
                        <div className="col-md-6 col-lg-5">
                            <div className="text text-left">
                                <h2>Contact</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                <ul>
                                    <li><i className="icon lotus-icon-location" /> 225 Beach Street, Australian</li>
                                    <li><i className="icon lotus-icon-phone" /> +61 2 6854 8496</li>
                                    <li><i className="icon fa fa-envelope-o" /> lotushotel@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-lg-offset-1">
                            <div className="contact-form">
                                <form id="send-contact-form" action="send_mail_contact.php" method="post">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="text" className="field-text" name="name" placeholder="Name" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="field-text" name="email" placeholder="Email" />
                                        </div>
                                        <div className="col-sm-12">
                                            <input type="text" className="field-text" name="subject" placeholder="Subject" />
                                        </div>
                                        <div className="col-sm-12">
                                            <textarea cols={30} rows={10} name="message" className="field-textarea" placeholder="Write what do you want" defaultValue={""} />
                                        </div>
                                        <div className="col-sm-6 text-left">
                                            <button type="submit" className="awe-btn awe-btn-13">SEND</button>
                                        </div>
                                    </div>
                                    <div id="contact-content" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
export default contactForm;

// <div className="contact-location">
// <a className="btn-collapse" data-toggle="collapse" href="#location">OTHER LOCATION <span className="fa fa-angle-down" /></a>
// <div className="collapse" id="location">
//     <div className="location-group">
//         <h6>NORTH AMERICA</h6>
//         <span>Caribbean, French West Indies</span>
//         {/* ITEM */}
//         <div className="location-item" data-location="39.0926986,-94.5747324">
//             <div className="img">
//                 <img src="images/contact/img-1.jpg" alt="" />
//                 <i className="fa  fa-map-marker" />
//             </div>
//             <div className="text">
//                 <address>PO Box 4077, 2584 St Martin, CEDEX, French West Indies</address>
//                 <p>
//                     Tel: 858 634 8975 <br />
// Fax: +1 212 854 7039
// </p>
//             </div>
//         </div>
//         {/* END / ITEM */}
//         {/* ITEM */}
//         <div className="location-item" data-location="39.0912284,-94.5743515">
//             <div className="img">
//                 <img src="images/contact/img-2.jpg" alt="" />
//                 <i className="fa  fa-map-marker" />
//             </div>
//             <div className="text">
//                 <address>PO Box 4077, 2584 St Martin, CEDEX, French West Indies</address>
//                 <p>
//                     Tel: 858 634 8975 <br />
// Fax: +1 212 854 7039
// </p>
//             </div>
//         </div>
//         {/* END / ITEM */}
//     </div>
// </div>
// </div>