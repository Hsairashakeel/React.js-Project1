import React from 'react'
import { Link } from 'react-router-dom'

export default class Gallery extends React.Component {

    render() {
        return (
            <section class="section-gallery bg-white">
                <div class="gallery  no-padding">
                    <h2 class="heading text-center">GALLERY</h2>

                    <div class="gallery-cat text-center">
                        <ul class="list-inline">
                            <li class="active"><a href="#" data-filter="*">All</a></li>
                            <li><a href="#" data-filter=".ground">HOTEL &amp; GROUND</a></li>
                            <li><a href="#" data-filter=".suite">ROOM/SUITE </a></li>
                            <li><a href="#" data-filter=".bathroom">BATHROOM</a></li>
                            <li><a href="#" data-filter=".dining">DINING</a></li>
                        </ul>
                    </div>
                    <div class="gallery-content hover-img">
                        <div class="row">
                            <div class="gallery-isotope col-6 pd-0">
                                <div class="item-size"></div>
                                {/*Item*/}
                                <div class="item-isotope ground">
                                    <div class="gallery_item">
                                        <a href="images/images/gallery/img-12.jpg" class="gallery-popup mfp-image" title="Luxury Room view all">
                                            <img src="images/images/gallery/img-12.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                {/*END Item*/}
                                <div class="item-isotope ground">
                                    <div class="gallery_item">
                                        <a href="images/images/gallery/img-1.jpg" class="gallery-popup mfp-image" title="Luxury Room view all">
                                            <img src="images/images/gallery/img-1.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="item-isotope suite dining">
                                    <div class="gallery_item">
                                        <a href="images/images/gallery/img-19.jpg" class="gallery-popup mfp-image" title="Luxury Room view all">
                                            <img src="images/images/gallery/img-19.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="item-isotope bathroom">
                                    <div class="gallery_item">
                                        <a href="images/images/gallery/img-8.jpg" class="gallery-popup mfp-image" title="Luxury Room view all">
                                            <img src="images/images/gallery/img-8.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="item-isotope suite dining">
                                    <div class="gallery_item">
                                        <a href="images/images/gallery/img-14.jpg" class="gallery-popup mfp-image" title="Luxury Room view all">
                                            <img src="images/images/gallery/img-14.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="our-gallery text-center">
                            <Link to="/gallery" className="awe-btn awe-btn-default">BROWSE OUR GALLERY</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}