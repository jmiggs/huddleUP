import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import '../../reset.css';
import NavBarContainer from '../navbar/navbar_container'
import DashBoardItem from './dashboard_item'
import Footer from "../footer/footer";

import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class DashBoard extends React.Component {
    componentDidMount() {
        this.props.fetchActivities();
    }

    render () {
        const { basketball, golf, soccer, football, tennis  } = this.props;
        
        const settings = {
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
        };

        const basketballSlides =
            basketball.map(activity =>
                <div key={activity._id} >
                    <DashBoardItem activity={activity} key={activity._id} />
                </div>
            );

        const golfSlides =
            golf.map(activity =>
                <div key={activity._id} >
                    <DashBoardItem activity={activity} key={activity._id} />
                </div>
            );

        const footballSlides =
            football.map(activity =>
                <div key={activity._id} >
                    <DashBoardItem activity={activity} key={activity._id} />
                </div>
            );


        const soccerSlides = 
            soccer.map(activity =>
                <div key={activity._id} >
                    <DashBoardItem activity={activity} key={activity._id} />
                </div>
            );

        const tennisSlides =
            tennis.map(activity =>
                <div key={activity._id} >
                    <DashBoardItem activity={activity} key={activity._id} />
                </div>
            );

        return (
            <div className='outer-div-dashboard'>
            <NavBarContainer />
                <div className='dashboard-top-header'>
                    <h1>Find a huddle for all the events you love</h1>
                    {/* <img className='dashboard-top-header-img'src='dashboard-header-img2.png' alt="" /> */}
                    <img className='dashboard-top-header-img' src='dashboard.png' alt='dashboard' />
                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Basketball</h1>
                        <Link to='/basketball' className='see-all'>See all</Link> 
                    </div>
                    
                    {/* <div className='event-items'>
                        {basketball.slice(0, 5).map(activity => 
                        <DashBoardItem activity={activity} key={activity._id} />) }
                    </div> */}
                    <div className="slider-wrapper">
                        <Slider {...settings}>
                            {basketballSlides}
                        </Slider>
                    </div>
                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Golf</h1>
                        <Link to="/golf" className='see-all'>See all</Link>
                    </div>

                    {/* <div className='event-items'>
                        {golf.slice(0, 5).map(activity => <DashBoardItem activity={activity} key={activity._id} />)}
                    </div> */}

                    <div className="slider-wrapper">
                        <Slider {...settings}>
                            {golfSlides}
                        </Slider>
                    </div>
                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Football</h1>
                        <Link to="/football" className='see-all'>See all</Link>
                    </div>        

                    {/* <div className='event-items'>
                        {football.slice(0, 5).map(activity => <DashBoardItem activity={activity} key={activity._id} />)}
                    </div> */}

                    <div className="slider-wrapper">
                        <Slider {...settings}>
                            {footballSlides}
                        </Slider>
                    </div>
                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Soccer</h1>
                        <Link to="/soccer" className='see-all'>See all</Link>
                    </div>  

                    {/* <div className='event-items'>
                        {soccer.slice(0, 5).map(activity => <DashBoardItem activity={activity} key={activity._id} />)}
                    </div> */}
                    <div className="slider-wrapper">
                        <Slider {...settings}>
                            {soccerSlides}
                        </Slider>
                    </div>
                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Tennis</h1>
                        <Link to="/tennis" className='see-all'>See all</Link>
                    </div> 

                    {/* <div className='event-items'>
                        {tennis.slice(0, 5).map(activity => <DashBoardItem activity={activity} key={activity._id} />)}
                    </div> */}
                    
                    <div className="slider-wrapper">
                        <Slider {...settings}>
                            {tennisSlides}
                        </Slider>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default DashBoard;