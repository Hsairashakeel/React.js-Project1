import React from 'react'

function RenderDealItem() {
    return (
        <div className="item">
            <div className="img">
                <img src="images/images/hotel/img-1.jpg" alt="" />
            </div>
            <div className="text">
                <h2>Luxury ROOM FORM</h2>
                <p className="price">$320</p>
                <a href="#" className="awe-btn awe-btn-12">VIEW MORE</a>
            </div>
        </div>
    );
}

class Deals extends React.Component {
    state={
        Items:[
            {}
        ]
    }
    render() {

        const deals=this.state.Items.map((item)=>{
            return (
                <RenderDealItem Item={item} />
            );
        });
                  
        return (
            <div className="widget widget_deal">
                <h4 className="widget-title">DEAL</h4>
                <div className="widget-deal owl-single">
                    {deals}
                </div>
            </div>
        );
    }
} 

export default Deals;