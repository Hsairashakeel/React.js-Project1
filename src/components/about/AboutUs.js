import React from 'react'
import Info from './Info'
import Statistics from './statistics'
import Team from './Team'


export default class AboutUs extends React.Component{
    render(){
        return(
            <div>
            <Info />
            <Statistics />
            <Team />
            </div>
        );
    }
}