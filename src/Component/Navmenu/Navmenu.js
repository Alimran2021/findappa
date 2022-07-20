import React from 'react';
import "./navmenu.css"
const Navmenu = () => {
    return (
        <div className="nav_menu">
            <div className="notifications">
                <span>3</span>
                <div className='oval'>

                </div>
            </div>
            <div className="icons">
                <div className='layers'>
                   <img className='grid_icon' src="images/grid.png" alt=""/>
                   <img className='pie_icon' src="images/pie-chart.png" alt=""/>
                   <img className='credit_icon' src="images/credit-card.png" alt=""/>
                   <img className='box_icon' src="images/box.png" alt=""/>
                   <img className='calendar_icon' src="images/calendar.png" alt=""/>
                   <img className='user_icon' src="images/user.png" alt=""/>
                   <img className='shopping_icon' src="images/shopping-cart.png" alt=""/>
                   <img className='layer_icon' src="images/layers.png" alt=""/>
                   <img className='mask_icon' src="images/Mask.png" alt=""/>
                    
                </div>
                <div className='active'>

                </div>
                <div className='dashboard'>
                    <a className='grid_dashboard' href="/#">Dashboard</a>
                    <a className='chart' href="/#">Charts</a>
                    <a className='bank' href="/#">Bank</a>
                    <a className='crypto' href="/#">Crypto</a>
                    <a className='calendar' href="/#">Calendar</a>
                    <a className='chat' href="/#">Chat & Messages</a>
                    <a className='user' href="/#">User Profile</a>
                    <a className='sales' href="/#">Sales URM</a>
                    <a className='porject' href="/#">Project</a>
                </div>
            </div>
            <div className='bottom'>
                <div className='pdf_repokt'>
                    <p className='report'>
                       PDF Report
                    </p>
                    <p className='download'>
                       Download monthly report
                    </p>
                    <div className='btn'>
                        <p>Download</p>
                        <img src="/images/download.png" alt=""/>
                    </div>
                </div>
                <div className='bottom_line'>
                    
                </div>
                <div className='dark_mode'>
                    <p>
                      Dark Mode
                    </p>
                    <img src="images/off.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Navmenu;