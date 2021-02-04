import React from 'react'
import GalleryComp from './GalleryComponent'
import Info from './Info'

function Gallery (){
    return (
        <div>
            <Info />
            <div className="container">
            <GalleryComp />
            </div>
        </div>
    );
}

export default Gallery;