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

    componentDidMount() {
        this.props.fetchActivities();
    }

    render () {
        const { basketball, golf, soccer, football, tennis  } = this.props;
        // if (!activities) return null;
        // debugger
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
                        <Link to='/activity/basketball' className='see-all'>See all</Link> 
                    </div>
                    
                    <div className='event-items'>
                        { basketball.map(activity => <DashBoardItem activity={activity} />) }
                    </div>
                        
                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Golf</h1>
                        <Link to="/dashboard" className='see-all'>See all</Link>
                    </div>

                    <div className='event-items'>
                        {golf.map(activity => <DashBoardItem activity={activity} />)}
                    </div>

                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Football</h1>
                        <Link to="/dashboard" className='see-all'>See all</Link>
                    </div>        

                    <div className='event-items'>
                        {football.map(activity => <DashBoardItem activity={activity} />)}
                    </div>

                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Soccer</h1>
                        <Link to="/dashboard" className='see-all'>See all</Link>
                    </div>  

                    <div className='event-items'>
                        {soccer.map(activity => <DashBoardItem activity={activity} />)}
                    </div>

                </div>

                <div className='event-category'>

                    <div className='event-category-header'>
                        <h1>Tennis</h1>
                        <Link to="/dashboard" className='see-all'>See all</Link>
                    </div> 

                    <div className='event-items'>
                        {tennis.map(activity => <DashBoardItem activity={activity} />)}
                    </div>

                </div>

            </div>
        )
    }
}

export default DashBoard;