import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Update extends Component {
    constructor(){
        super();
        this.state = {
            id: "",
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
        var id = '/' + this.state.id;
        var name = '/' + this.state.name;
        var address = '/' + this.state.address;

        this.setState({
            id: "",
            name: "",
            address: ""
        });
        console.log("heeere");
        console.log(id);
        console.log(name);
        console.log(address);
        var url = 'http://localhost:5000/db/update/customer' + name + address + id;
        fetch(url, { mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', 
        })
        .then(res => res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' }))
        .then(data => console.log(data))
        .catch(err => console.log(err))

        e.preventDefault();
       
    };

    render () {
        return (<div className ="form">
            <h1>Update Name and Address of a Customer</h1>
            <form  onSubmit={this.submitForm}>
           <label>ID:  <input type="text" placeholder="Customer ID to Change" name="id" value={this.state.id} onChange={this.handleChange}/><br/></label>
           <label>Name:  <input type="text" placeholder="New Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/></label>
           <label>Address:  <input type="text" placeholder="New Address" name="address" value={this.state.address} onChange={this.handleChange}/><br/></label>
           <Button variant="contained" color="primary" onClick={this.submitForm}>
            Update
            </Button>
           </form></div>);
    };
};
export default Update;