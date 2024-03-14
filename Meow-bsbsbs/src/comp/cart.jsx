import React from "react";
import img from '../assets/Think.png'

const Cart = (props) => {

    return (
        <div>

            <img src={img} alt="Faisal Basha" />

            <div>
                <h4> Rating: </h4>
                <p>
                    {props.title}
                </p>
                <h3> <b> From ${props.price} </b> / person </h3>
            </div>
        </div>
    )
}

export default Cart