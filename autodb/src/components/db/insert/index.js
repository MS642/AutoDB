import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Insert extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            address: "",
        };
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });

    }

    submitForm(e){
        e.preventDefault();
        var name = '/' + this.state.name;
        var address = '/' + this.state.address;

        this.setState({
            name: "",
            address: ""
        });

        var url = 'http://localhost:5000/db/insert/customer' + name + address;
        fetch(url, {
        })
        .then(res => res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' }))
        .then(data => console.log(data))
        .catch(err => console.log(err))

        e.preventDefault();
       
    };

    render () {
        return (<div className ="form">
            <h1>Insert a Customer</h1>
            <form  onSubmit={this.submitForm}>
           <label>Name:  <input type="text" placeholder="Add a Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/></label>
           <label>Address:  <input type="text" placeholder="Add an Address" name="address" value={this.state.address} onChange={this.handleChange}/><br/></label>
           <Button variant="contained" color="primary" onClick={this.submitForm}>
            Add
            </Button>
           </form></div>);
    };
};
export default Insert;