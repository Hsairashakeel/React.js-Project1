import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Navbar from './header'
import Home from '../Landing/Home'
import Footer from './footer'
import AboutUs from '../about/AboutUs'
import Gallery from '../Gallery/Gallery'
import GuestBook from '../GuestBook/GuestBook'
import ContactUs from '../contact/ContactUs'
import RoomDetails from '../Room/RoomDetails'
import Blog from '../blog/blog'
import Rooms from '../Room/Rooms'
import ReservationForm from '../reservation/ReservationForm'
import Reservation from '../reservation/reservation'
import Confirmation from '../reservation/Confirmation'
import Login from './login'
import SignUp from './signup';


class Main extends React.Component{
    render()
    {
        return (
            <div id="page-wrap">
            <Navbar/>
            <Switch>
                <Route exact path='/' component={()=><Home />}></Route>
                <Route path='/aboutus' component={()=><AboutUs/>}></Route>
                <Route path='/rooms' component={()=><Rooms/>}></Route>
                <Route path='/gallery' component={()=><Gallery/>}></Route>
                <Route path='/guestbook' component={()=><GuestBook/>}></Route>
                <Route path='/contactus' component={()=><ContactUs/>}></Route>
                <Route path='/roomdetails' component={()=><RoomDetails/>}></Route>
                <Route path='/reservation' component={()=><Reservation/>}></Route>
                <Route path='/reservationform' component={()=><ReservationForm/>}></Route>
                <Route path='/confirmation' component={()=><Confirmation/>}></Route>
                <Route path='/blog' component={()=><Blog/>}></Route>
                <Route path='/login' component={()=><Login/>}></Route>
                <Route path='/signup' component={()=><SignUp/>}></Route>
                <Redirect to='/' />
            </Switch>
            <Footer />
          </div>
        );
    }
}
export default Main;