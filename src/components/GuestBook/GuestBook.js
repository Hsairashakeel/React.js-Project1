import React from 'react'
import GuestComp from './GuestBookComponent'
import Intro from './Intro'

function GuestBook (){
    return (
        <div>
            <Intro />
            <GuestComp />
        </div>
    );
}

export default GuestBook;