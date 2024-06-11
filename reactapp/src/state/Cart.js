import React, { useState } from 'react'

let products = [
    { name: 'Select Product' },
    { name: 'iPhone 15', price: 120000 },
    { name: 'iPad Air', price: 50000 },
    { name: 'PowerBeats Pro', price: 25000 },
    { name: 'AirPods', price: 30000 }
]

export default function Cart() {
    let [cart, setCart] = useState([])
    let [item, setItem] = useState({ idx: 0, qty: 1 })

    function addToCart(e) {
        e.preventDefault()
        item.idx = parseInt(item.idx)
        if (item.idx === 0) {
            alert("Please select a product!")
            return;
        }
        // add item to cart 
        let itemName = products[item.idx].name
        let itemPrice = products[item.idx].price

        let cartItem = cart.find((item, idx) => item.name === itemName)
        if (cartItem)  // item is found in cart 
        {
            cartItem.qty += parseInt(item.qty)  // increment qty for the item
            setCart([...cart])   // update cart 
        }
        else {
            // add new item to cart
            setCart([...cart, { name: itemName, price: itemPrice, qty: parseInt(item.qty) }])
        }
    }

    function updateItem(e) {
        let name = e.target.name
        let value = e.target.value
        setItem({ ...item, [name]: value })
    }
    
    function getTotal() {
        let total = 0
        cart.forEach(item => total += item.qty * item.price)
        return total
    }

    function deleteItem(idxToDelete) {
        setCart ( cart.filter ( (item, idx) => idx !== idxToDelete))
    }

    return (
        <>
            <form onSubmit={addToCart}>
                <h2>Products</h2>
                Select Product <br />
                <select name="idx" value={item.idx} onChange={updateItem}>
                    {
                        products.map((p, idx) =>
                            <option key={idx} value={idx}>{p.name}</option>
                        )
                    }
                </select>
                <p />
                Quantity <br />
                <input style={{ width: '100px' }} name="qty" type="number" value={item.qty} onChange={updateItem} />
                <p></p>
                <button>Add To Cart</button>
            </form>
            <p></p>
            {cart.length > 0 &&
                <div>

                    <h2>Cart</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) =>
                                    <tr key={idx}>
                                        <td>{item.name}</td>
                                        <td className="text-end">{item.price}</td>
                                        <td className="text-end">{item.qty}</td>
                                        <td className="text-end">{item.price * item.qty}</td>
                                        <td className="text-center"
                                            onClick={() => deleteItem(idx)}><button>Delete</button></td>
                                    </tr>
                                )
                            }
                            <tr>
                                <td className="text-primary"  colSpan="3">Total</td>
                                <td className="text-primary text-end">{getTotal()}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            }
        </>
    )
}
