import './newProduct.css'
import React from 'react'
import { Publish } from '@material-ui/icons'

const NewProduct = () => {
    return (
        <div className="newProduct">
            <div className="newProductLeft">
            <form className="newProductForm">
                <div className="newProductAdd">
                    <label for="idImage">
                        <Publish  className="newProductLogo"/> Add Image
                    </label>
                    <input type="file" id="idImage" style={{display:'none'}} />
                    <label>Name</label>
                    <input type="text" placeholder="Product name" />
                    <label>Stock</label>
                    <input type="text" placeholder="Availibilty in units" />
                    <label for="idActive">Active</label>
                    <select name="active" id="idActive" className="newProductSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    </div>
                    <button className="newProductButton">Add</button>
            </form>

            
            </div>
        </div>
    )
}

export default NewProduct
