import './newUser.css'
import React from 'react'

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="James" />
                </div>
                <div className="newUserItem">
                    <label>Full name</label>
                    <input type="text" placeholder="James Bond" />
                </div>
                <div className="newUserItem">
                    <label>E-mail</label>
                    <input type="email" placeholder="James@bond.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="*******" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder=" +91-12345678" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="LA, USA" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                    <input type="radio" name="gender" id="Male" value="male" />
                    <label for="Male">Male</label>
                    <input type="radio" name="gender" id="Female" value="female" />
                    <label for="Female">Female</label>
                    <input type="radio" name="gender" id="Others" value="others" />
                    <label for="Others">Others</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active"id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                </div>
                <div className="newUserButtonContainer">
                <button className="newUserButton">Create</button>
                {/* <button className="newUserCanButton">Cancel</button> */}
                </div>
            </form>
            
        </div>
    )
}

export default NewUser
