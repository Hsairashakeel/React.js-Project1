import React from 'react'

export default class Team extends React.Component  {

  
    RenderTeamMember({member})
    {
      return (
        <div className="col-xs-6 col-md-3">
                  <div className="team_item text-center">
                    <div className="img">
                      <a href><img src="images/images/team/img-1.jpg" alt="" /></a>
                    </div> 
                    <div className="text">
                      <h2>David Gari</h2>
                      <span>Lorem lipsum</span>
                      <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                      <div className="team-share">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-google-plus" /></a>
                      </div>
                    </div>
                  </div>
                </div>
      );
    }
    render(){
        return (
    <section className="section-team">
        <div className="container">
          <div className="team">
            <h2 className="heading text-center">Team Member</h2>
            <p className="sub-heading text-center">Lorem Ipsum is simply dummy text of the printing</p>
            <div className="team_content">
              <div className="row">


              <div className="col-xs-6 col-md-3">
                  <div className="team_item text-center">
                    <div className="img">
                      <a href><img src="images/images/team/img-1.jpg" alt="" /></a>
                    </div> 
                    <div className="text">
                      <h2>Chris Black</h2>
                      <span>CEO</span>
                      <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                      <div className="team-share">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-google-plus" /></a>
                      </div>
                    </div>
                  </div>
                </div>
 
                {/* ITEM */}
                <div className="col-xs-6 col-md-3">
                  <div className="team_item text-center">
                    <div className="img">
                      <a href><img src="images/images/team/img-2.jpg" alt="" /></a>
                    </div> 
                    <div className="text">
                      <h2>JESSICA ALBA</h2>
                      <span>Manager lotus Hotel</span>
                      <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                      <div className="team-share">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-google-plus" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END / ITEM */}

                <div className="col-xs-6 col-md-3">
                  <div className="team_item text-center">
                    <div className="img">
                      <a href><img src="images/images/team/img-3.jpg" alt="" /></a>
                    </div> 
                    <div className="text">
                      <h2>Charles Brown</h2>
                      <span>CFO</span>
                      <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                      <div className="team-share">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-google-plus" /></a>
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