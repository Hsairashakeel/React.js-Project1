import React from "react"

export default class roomsRate extends React.Component{

    render()
    {
        return (
    <section class="section-accomd awe-parallax bg-14">
            <div class="container">
                <div class="accomd-modations">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="accomd-modations-header">
                                <h2 class="heading">ROOMS And RATES</h2>
                                <img src="images/icon-accmod.png" alt="icon" />
                                <p>Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="accomd-modations-content owl-single">
                                
                                <div class="row">

                                    {/* <!-- ITEM --> */}
                                    <div class="col-xs-4">
                                        <div class="accomd-modations-room">
                                            <div class="img">
                                                <a href="#"><img src="images/images/room/img-1.jpg" alt="" /></a>
                                            </div>
                                            <div class="text">
                                                <h2><a href="#">Jaffa Suite</a></h2>
                                                <p class="price">
                                                    <span class="amout">$420</span>/days
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="accomd-modations-room">
                                            <div class="img">
                                                <a href="#"><img src="images/images/room/img-2.jpg" alt="" /></a>
                                            </div>
                                            <div class="text">
                                                <h2><a href="#">Couple Room</a></h2>
                                                <p class="price">
                                                    <span class="amout">$300</span>/days
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- END / ITEM --> */}
                                    <div class="col-xs-4">
                                        <div class="accomd-modations-room">
                                            <div class="img">
                                                <a href="#"><img src="images/images/room/img-3.jpg" alt="" /></a>
                                            </div>
                                            <div class="text">
                                                <h2><a href="#">Family Room</a></h2>
                                                <p class="price">
                                                    <span class="amout">$250</span>/days
                                                </p>
                                            </div>
                                        </div>
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