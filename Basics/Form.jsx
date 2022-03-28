import React, { Component } from 'react'
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Email: '',
            password: ''
        }
    }
    changeHandler = (e) => {
        this.setState({ Email: e.target.value })
    }
    changepassword = (event) => {

        this.setState({ password: event.target.value })
    }
    submithandler = (eve) => {
        eve.preventDefault();
        console.log(this.state)

    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.submithandler}>
                    <label>Email</label>
                    <input type="text" onChange={this.changeHandler} placeholder='Email' name='FirstName' /><br /><br />
                    <label>Password</label>
                    <input type="Password" onChange={this.changepassword} placeholder='Password' name='password' /><br /><br />
                    <button className='btn btn-primary' >Button</button>
                </form>



            </div>
        )
    }
}

export default Form