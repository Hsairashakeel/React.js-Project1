import React from 'react'
import {Link} from 'react-router-dom'
export default class RoomsLayout extends React.Component
{
    render(){
        return (
      <section className="section-room bg-white text-left">
        <div className="container">
          <div className="room-wrap-1">
            <div className="row">
              {/* ITEM */}
              <div className="col-md-6">
                <div className="room_item-1">
                  <h2><a href="#">COUPLE ROOM</a></h2>
                  <div className="img">
                    <a href="#"><img src="images/images/room/grid/img-1.jpg" alt="" /></a>
                  </div>
                  <div className="desc">
                    <p>Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.</p>
                    <ul>
                      <li>Max: 4 Person(s)</li>
                      <li>Size: 35 m2 / 376 ft2</li>
                      <li>View: Ocen</li>
                      <li>Bed: King-size or twin beds</li>
                    </ul>
                  </div>
                  <div className="bot">
                    <span className="price">Starting <span className="amout">$260</span> /days</span>
                    <Link to='/roomdetails' className="awe-btn awe-btn-13">VIEW Details</Link>
                  </div>
                </div>
              </div>
              {/* END / ITEM */}

              <div className="col-md-6">
                <div className="room_item-1">
                  <h2><a href="#">FAMILY ROOM</a></h2>
                  <div className="img">
                    <a href="#"><img src="images/images/room/grid/img-2.jpg" alt="" /></a>
                  </div>
                  <div className="desc">
                    <p>Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.</p>
                    <ul>
                      <li>Max: 4 Person(s)</li>
                      <li>Size: 35 m2 / 376 ft2</li>
                      <li>View: Ocen</li>
                      <li>Bed: King-size or twin beds</li>
                    </ul>
                  </div>
                  <div className="bot">
                    <span className="price">Starting <span className="amout">$260</span> /days</span>
                    <Link to='/roomdetails' className="awe-btn awe-btn-13">VIEW Details</Link>
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