import React from 'react'

class Recent extends React.Component {

    state = {
        recent: [
            {
                //data structure needs to be defined
            }
        ]
    }
    render() {
        const items = this.state.recent.map((item) => {
            return (
                <RenderRecentItems Item={item} />
            );
        });
        return (
            <div className="widget widget_recent_entries has_thumbnail">
                <h4 className="widget-title">Recent Posts</h4>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

function RenderRecentItems({item}){
    return (
        <li>
        <div className="img">
          <a href="#"><img src="images/images/blog/thumbnail/img-2.jpg" alt="" /></a>
        </div>
        <div className="text">
          <a href>Relaxing &amp; travel in our hotel</a>
          <span className="date">at 12:30 Pm, Thu 01 Oct 2015</span>
        </div>
      </li>
    );
}
export default Recent;
// import React from 'react'

// class Recent extends React.Component{


//     render(){
//         return (

//         );
//     }
// }