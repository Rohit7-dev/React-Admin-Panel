import './widgetLarge.css'
import React from 'react'

const WidgetLarge = () => {

    const Button = ({type}) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTitle">Latest transactions</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">Customer</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Amount</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/7014504/pexels-photo-7014504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="widgetLargeImage" alt="" />
                        <span className="widgetLargeName">Susan Swift</span>
                    </td>
                    <td className="widgetLargeDate">20 July 2021</td>
                    <td className="widgetLargeAmount">₹31,730.94</td>
                    <td className="widgetLargeStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/7014504/pexels-photo-7014504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="widgetLargeImage" alt="" />
                        <span className="widgetLargeName">Susan Swift</span>
                    </td>
                    <td className="widgetLargeDate">20 July 2021</td>
                    <td className="widgetLargeAmount">₹31,730.94</td>
                    <td className="widgetLargeStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/7014504/pexels-photo-7014504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="widgetLargeImage" alt="" />
                        <span className="widgetLargeName">Susan Swift</span>
                    </td>
                    <td className="widgetLargeDate">20 July 2021</td>
                    <td className="widgetLargeAmount">₹31,730.94</td>
                    <td className="widgetLargeStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/7014504/pexels-photo-7014504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="widgetLargeImage" alt="" />
                        <span className="widgetLargeName">Susan Swift</span>
                    </td>
                    <td className="widgetLargeDate">20 July 2021</td>
                    <td className="widgetLargeAmount">₹31,730.94</td>
                    <td className="widgetLargeStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLarge
