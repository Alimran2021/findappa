import React from 'react';
import FinancialDashboard from '../Dashboard/FinancialDashboard/FinancialDashboard';
import Navmenu from '../Navmenu/Navmenu';

import"./navigation.css";


const Navigation = () => {
    return (
        <div className='wrapper'>
            <div className="main_nav">
             <div className='logo'>
                <div className="icon_box">
                    <div className="logo_box">
                        <img className='logo_1' src="images/lines.png" alt=""/>
                    </div>
                </div>
                <div className='finWave'>
                    Findappa
                </div>
                <div className="back" >
                    <img src="images/back.png" alt=""/>
                </div>
                <div className='bottom-line'>

                </div>
            </div>
            <Navmenu/>

        </div>
        <div className='finan_board'>
           <FinancialDashboard/>
        </div>

        </div>
    );
};

export default Navigation;