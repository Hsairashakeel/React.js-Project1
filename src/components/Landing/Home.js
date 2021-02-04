import React from 'react'
import About from './about'
import RoomsRate from './roomsRate'
import Welcome from './welcome'
import Gallery from './gallery'
import Availability from './availability'

class Home extends React.Component{
    render()
    {
        return (
            <div>
                <Welcome/ >
                <Availability />
                <RoomsRate />
                <About />
                <Gallery />
            </div>
        );
    }
}
export default Home;