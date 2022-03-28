import React, { Component } from 'react'

class Card extends Component {
    state = {
        Name: "POCO M3 Pro 5G (Yellow, 64)",
        product_price: 11999,
        image: "https://rukminim2.flixcart.com/image/416/416/kpmy8i80/mobile/x/q/n/m3-pro-5g-mzb0956in-poco-original-imag3th5e4thsxjt.jpeg?q=70",
        qty: 2
    }

    IncrHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    DecrHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <table className='table table-row'>
                            <div className='col-md-8'>
                                <thead className='bg-primary'>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </thead>
                                <tr>
                                    <td>{this.state.Name}</td>
                                    <td><img src={this.state.image} height="80px" /></td>
                                    <td>{this.state.product_price}</td>
                                    <td> <i class="fa fa-plus-circle" onClick={this.IncrHandler}></i>
                                    {this.state.qty}
                                    <i class="fa fa-minus-circle" onClick={this.DecrHandler}></i></td>
                                    <td>{this.state.product_price * this.state.qty}</td>

                                </tr>

                            </div>
                        </table>

                    </div>
                </div>
            </div >
        )
    }
}

export default Card