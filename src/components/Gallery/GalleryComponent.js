import React from 'react'

function RenderGalleryItem({ Item }) {
  return (
    <div>
    <div className="item-isotope larger suite bathroom dining">
      <div className="gallery_item">
        <a href="images/images/gallery/popup/img-1.jpg" className="mfp-image">
          <img src="images/images/gallery/page-3/img-1.jpg" alt="" />
        </a>
        <h6 className="text">Lorem Ipsum is simply dummy text of the printing</h6>
      </div>
    </div>

    {/*Needs to be removed*/}
    <div className="item-isotope suite bathroom dining">
      <div className="gallery_item">
        <a href="images/images/gallery/popup/img-1.jpg" className="mfp-image">
          <img src="images/images/gallery/page-3/img-3.jpg" alt="" />
        </a>
        <h6 className="text">Lorem Ipsum is simply dummy text of the printing</h6>
      </div>
    </div>

    <div className="item-isotope suite bathroom dining">
      <div className="gallery_item">
        <a href="images/images/gallery/popup/img-1.jpg" className="mfp-image">
          <img src="images/images/gallery/page-3/img-2.jpg" alt="" />
        </a>
        <h6 className="text">Lorem Ipsum is simply dummy text of the printing</h6>
      </div>
    </div>
    
    <div className="item-isotope suite bathroom dining">
      <div className="gallery_item">
        <a href="images/images/gallery/popup/img-1.jpg" className="mfp-image">
          <img src="images/images/gallery/page-3/img-4.jpg" alt="" />
        </a>
        <h6 className="text">Lorem Ipsum is simply dummy text of the printing</h6>
      </div>
    </div>

    <div className="item-isotope suite bathroom dining">
      <div className="gallery_item">
        <a href="images/images/gallery/popup/img-1.jpg" className="mfp-image">
          <img src="images/images/gallery/page-3/img-5.jpg" alt="" />
        </a>
        <h6 className="text">Lorem Ipsum is simply dummy text of the printing</h6>
      </div>
    </div>

    <div className="item-isotope larger suite bathroom dining">
      <div className="gallery_item">
        <a href="images/images/gallery/popup/img-1.jpg" className="mfp-image">
          <img src="images/images/gallery/page-3/img-1.jpg" alt="" />
        </a>
        <h6 className="text">Lorem Ipsum is simply dummy text of the printing</h6>
      </div>
    </div>

    {/*Needs to be removed*/}
    <div className="item-isotope suite bathroom dining">
      <div className="gallery_item">
        <a href="images/images/gallery/popup/img-1.jpg" className="mfp-image">
          <img src="images/images/gallery/page-3/img-3.jpg" alt="" />
        </a>
        <h6 className="text">Lorem Ipsum is simply dummy text of the printing</h6>
      </div>
    </div>

    <div className="item-isotope suite bathroom dining">
      <div className="gallery_item">
        <a href="images/images/gallery/popup/img-1.jpg" className="mfp-image">
          <img src="images/images/gallery/page-3/img-2.jpg" alt="" />
        </a>
        <h6 className="text">Lorem Ipsum is simply dummy text of the printing</h6>
      </div>
    </div>
    
    <div className="item-isotope suite bathroom dining">
      <div className="gallery_item">
        <a href="images/images/gallery/popup/img-1.jpg" className="mfp-image">
          <img src="images/images/gallery/page-3/img-4.jpg" alt="" />
        </a>
        <h6 className="text">Lorem Ipsum is simply dummy text of the printing</h6>
      </div>
    </div>

    <div className="item-isotope suite bathroom dining">
      <div className="gallery_item">
        <a href="images/images/gallery/popup/img-1.jpg" className="mfp-image">
          <img src="images/images/gallery/page-3/img-5.jpg" alt="" />
        </a>
        <h6 className="text">Lorem Ipsum is simply dummy text of the printing</h6>
      </div>
    </div>
    

</div>
    /*Needs to be removed*/

  );
}
class Gallery extends React.Component {
  state = {
    Gallery: [
      {
        link: "",
        ImageLink: "",
        ImageText: "",
      }
    ]
  }
  render() {
    const gallery = this.state.Gallery.map((item) => {
      return (
        <RenderGalleryItem Item={item} />
      );
    });

    return (
      <div className="gallery-content">
        <div className="row">
          <div className="gallery-isotope col-4">
            <div className="item-size" ></div>
          {gallery}
        </div>
      </div>
      </div>
    );
  }
}
export default Gallery;