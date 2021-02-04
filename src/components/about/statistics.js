import React from 'react'
import CountUp from 'react-countup';
export default class Statistics extends React.Component  {

    renderStatistics(obj){
      return (
        <div className="col-xs-6 col-md-3">
          <div className="statistics_item">
          <span className="count"> <CountUp start={0} end={768} delay={1}  duration={5} /></span>
            <span>Guest Stay</span>
          </div>
        </div>
      );
    }
    render(){
        return (
            <section className="section-statistics bg-10">
            <div className="awe-overlay" />
            <div className="container">
              <div className="statistics">
                <h2 className="heading white text-center">Hotel statistics</h2>
                <div className="statistics_content">
                  <div className="row">
                    {/* ITEM */}
                    <div className="col-xs-6 col-md-3">
                      <div className="statistics_item">
                        <span className="count"> <CountUp start={0} end={768} delay={1}  duration={5} /></span>
                        <span>Guest Stay</span>
                      </div>
                    </div>

                    <div className="col-xs-6 col-md-3">
                      <div className="statistics_item">
                        <span className="count"> <CountUp start={0} end={500} delay={1}  duration={5} /></span>
                        <span>Member Stay</span>
                      </div>
                    </div>

                    <div className="col-xs-6 col-md-3">
                      <div className="statistics_item">
                        <span className="count"> <CountUp start={0} end={1000} delay={1}  duration={5} /></span>
                        <span>Meals Served</span>
                      </div>
                    </div>

                    <div className="col-xs-6 col-md-3">
                      <div className="statistics_item">
                        <span className="count"> <CountUp start={0} end={500} delay={1}  duration={5} /></span>
                        <span>Rooms Booked</span>
                      </div>
                    </div>

                    {/* END ITEM */}
                  </div>
                </div>
              </div>
            </div>
          </section>
            );
    }
}