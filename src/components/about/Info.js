import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Info() {
    return (
        <div>
            <section className="section-sub-banner bg-9">
                <div className="awe-overlay" />
                <div className="sub-banner">
                    <div className="container">
                        <div className="text text-center">
                            <h2>ABOUT lotus</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* END / SUB BANNER */}
            {/* ABOUT */}
            <section className="section-about">
                <div className="container">
                    <div className="about">
                        {/* ITEM */}
                        <div className="about-item">
                            <div className="img owl-single">
                                    <img src="images/images/about/img-1.jpg" alt="" />
                            </div>
                                <div className="text">
                                    <h2 className="heading">ABOUT lotus</h2>
                                    <div className="desc">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <b>The point of using Lorem Ipsum is that it has a more-or-less normal</b> distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing<br /> packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p><br />
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    </div>
                                </div>
                            </div>
                            {/* END / ITEM */}
                            {/* ITEM */}
                            <div className="about-item about-right">
                                <div className="img">
                                    <img src="images/images/about/img-1.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <h2 className="heading">WHY GUEST CHOOSE lotus HOTEL?</h2>
                                    <div className="desc">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, <b>sometimes by accident, sometimes on purpose</b> (injected humour and the like).</p>
                                    </div>
                                </div>
                            </div>
                            {/* END / ITEM */}
                        </div>
                    </div>
                </section>
            </div>
        );
}