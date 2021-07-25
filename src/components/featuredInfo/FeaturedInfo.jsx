import './featuredInfo.css'
import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">₹45,395</span>
                    <span className="featuredMoneyRate">-99.6 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">₹30,317</span>
                    <span className="featuredMoneyRate">-956.6 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">₹11,845</span>
                    <span className="featuredMoneyRate">+76.8 <ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
