import React, { Component } from 'react'

class Message extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            emp_id: 101,
            emp_name: 'vijay',
            emp_sal: 45000,
            emp_img:"https://www.financialexpress.com/wp-content/uploads/2021/09/1200-19.jpg"
        }
    }
    render() {
        return (
            <div>
                <h3>This is from the Message Component</h3>
           <h4>{this.state.emp_id}</h4>
           <h4>{this.state.emp_name}</h4>
           <h4>{this.state.emp_sal}</h4>
           <img src={this.state.emp_img} style={{width:50}}/>
                </div>
        )
    }
}

export default Message