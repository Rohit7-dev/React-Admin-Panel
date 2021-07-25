import './user.css'
import React from 'react'
import { PermIdentity,CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div className="user">
           <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
          </div> 
          <div className="userContainer">
              <div className="userShow">
                  <div className="userShowTop">
                      <img src="https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="userShowImage" />
                      <div className="userShowTopTitle">
                          <span className="userShowUsername">Taylor Swift</span>
                          <span className="userShowUserDesg">Album Creator</span>
                      </div>

                  </div>
                  <div className="userShowBottom">
                      <span className="userShowTitle">Account Details</span>
                      <div className="userShowInfo">
                      <PermIdentity className="userShowIcon"/>
                      <span className="userShowInfoTitle">swiftt98</span>
                      </div>
                      <div className="userShowInfo">
                      <CalendarToday className="userShowIcon"/>
                      <span className="userShowInfoTitle">12.11.1971</span>
                      </div>
                      <span className="userShowTitle">Contact Details</span>
                      <div className="userShowInfo">
                      <PhoneAndroid className="userShowIcon"/>
                      <span className="userShowInfoTitle">+91-4246743</span>
                      </div>
                      <div className="userShowInfo">
                      <MailOutline className="userShowIcon"/>
                      <span className="userShowInfoTitle">taylor@swift.com</span>
                      </div>
                      <div className="userShowInfo">
                      <LocationSearching className="userShowIcon"/>
                      <span className="userShowInfoTitle">New York | USA</span>
                      </div>
                  </div>
              </div>
              <div className="userUpdate">
                  <span className="userUpdateTitle">Edit</span>
                  <form action="" className="userUpdateForm">
                      <div className="userUpdateLeft">
                          <div className="userUpdateItem">
                              <label>Username</label>
                              <input type="text" placeholder="swiftt98" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label>Full Name</label>
                              <input type="text" placeholder="Taylor Swift" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label>E-mail</label>
                              <input type="email" placeholder="taylor@swift.com" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label>Phone</label>
                              <input type="text" placeholder="+91-4246743" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label>Address</label>
                              <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                          </div>
                          
                      </div>
                      <div className="userUpdateRight">
                          <div className="userUpdateUpload">
                              <img className="userUpdateImage" src="https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                              <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                              <input type="file" id="file" style={{display:'none'}} />
                          </div>
                          <button className="userUpdateButton">Update</button>
                      </div>
                  </form>
              </div>
              
          </div>
        </div>
    )
}

export default User
