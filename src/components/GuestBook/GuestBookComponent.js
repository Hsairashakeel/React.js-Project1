import React from 'react'
function RenderGuestBookItem({Item})
{
return(
    <div className="item-masonry col-xs-6 col-md-4">
        <div className="guest-book_item guest-book_item-2">
            <span className="icon lotus-icon-quote-left" />
            <div className="avatar">
                <img src="images/images/avatar/img-1.jpg" alt="" />
            </div>
            <h2>BEST PRICE</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing</p>
            <span><b>Jonatha Owens</b> - Sydney Australia</span>
        </div>
    </div>
);
}
class GuestBook extends React.Component{

    state={
        GuestBook:[
            {
                ImageLink:"",
                Heading:"",
                Content:"",
                Author:"",
                Location:""
            }
        ]
    }
    render(){
        const guest=this.state.GuestBook.map((item)=>{
            return (
                <RenderGuestBookItem Item={item} /> 
            );
        });

        return (
            <section className="section-guest-book">
        <div className="container">
          <div className="guest-book">
            {/* GUEST BOOK HEAD */}
            <div className="guest-book_head guest-book_head-2 text-center">
              <div className="text">
                <h2>READ OUR GUEST BOOK FROM CUSTOMER</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal .</p>
                <a href="ajax/ajax-guest-book-form.html" className="awe-btn awe-btn-13 awe-ajax">WRITE IN GUEST BOOK</a>
              </div>
            </div>
            {/* END / GUEST BOOK HEAD */}
            {/* GUEST BOOK MASONRY */}
            <div className="guest-book_content">
              <div className="row">
                <div className="guest-book_mansory">
                  {guest}
                  {guest}
                  {guest}
                  {guest}
                  {guest}
                  
                </div>
              </div>
            </div>
            {/* END / GUEST BOOK MASONRY */}
          </div>
        </div>
      </section>
        );
    }
}

export default GuestBook;