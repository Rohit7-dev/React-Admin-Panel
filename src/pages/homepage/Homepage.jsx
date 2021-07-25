import './homepage.css'
import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Charts from '../../components/charts/Charts'
import { userData } from '../../dummyData'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'

const Homepage = () => {
    return (
        <div className="homepage">
            <FeaturedInfo />
            <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidget">
            <WidgetSmall/>
            <WidgetLarge/>
            </div>
            
        </div>
    )
}

export default Homepage
