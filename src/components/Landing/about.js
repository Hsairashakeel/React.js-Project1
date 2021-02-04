import React from 'react'
import {Link} from 'react-router-dom'
export default class Availability extends React.Component{
    render(){
        return(
        <section class="section-home-about bg-white">
            <div class="container">
                <div class="home-about">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="img">
                                <Link to='#'><img src="images/images/home/about/img-1.jpg" alt="" /></Link>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text">
                                <h2 class="heading">ABOUT US</h2>
                                <span class="box-border"></span>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
                                <Link to='#' className="awe-btn awe-btn-default">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}