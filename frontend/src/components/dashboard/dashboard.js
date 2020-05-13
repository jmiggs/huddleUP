import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import '../../reset.css';
import NavBarContainer from '../navbar/navbar_container'
import DashBoardItem from './dashboard_item'

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        const { activity } = this.props;

        return (
            <div className='outer-div-dashboard'>
            <NavBarContainer />
                <div className='dashboard-top-header'>
                    <h1>Find a huddle for all the events you love</h1>
                    <img className='dashboard-top-header-img'src='dashboard-header-img2.png' />
                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Basketball</h1>
                        <Link to="/dashboard" className='see-all'>See all</Link> 
                    </div>
                    
                    <div className='event-items'>
                    {/* Map events from state */}
                        <DashBoardItem />
                        <DashBoardItem />
                        <DashBoardItem />
                        <DashBoardItem />
                        <DashBoardItem />
                    </div>
                        
                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Golf</h1>
                        <Link to="/dashboard" className='see-all'>See all</Link>
                    </div>

                    <div className='event-items'>
                        <img className='event-img' src='event2-img.jpg' />
                        <img className='event-img' src='event2-img.jpg' />
                        <img className='event-img' src='event2-img.jpg' />
                        <img className='event-img' src='event2-img.jpg' />
                        <img className='event-img' src='event2-img.jpg' />
                    </div>

                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Football</h1>
                        <Link to="/dashboard" className='see-all'>See all</Link>
                    </div>        

                    <div className='event-items'>
                        <img className='event-img' src='event3-img.jpg' />
                        <img className='event-img' src='event3-img.jpg' />
                        <img className='event-img' src='event3-img.jpg' />
                        <img className='event-img' src='event3-img.jpg' />
                        <img className='event-img' src='event3-img.jpg' />
                    </div>

                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Soccer</h1>
                        <Link to="/dashboard" className='see-all'>See all</Link>
                    </div>  

                    <div className='event-items'>
                        <img className='event-img' src='event4-img.jpg' />
                        <img className='event-img' src='event4-img.jpg' />
                        <img className='event-img' src='event4-img.jpg' />
                        <img className='event-img' src='event4-img.jpg' />
                        <img className='event-img' src='event4-img.jpg' />
                    </div>

                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Tennis</h1>
                        <Link to="/dashboard" className='see-all'>See all</Link>
                    </div> 

                    <div className='event-items'>
                        <img className='event-img' src='event5-img.jpg' />
                        <img className='event-img' src='event5-img.jpg' />
                        <img className='event-img' src='event5-img.jpg' />
                        <img className='event-img' src='event5-img.jpg' />
                        <img className='event-img' src='event5-img.jpg' />
                    </div>

                </div>

            </div>
        )
    }
}

export default DashBoard;