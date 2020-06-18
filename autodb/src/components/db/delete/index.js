import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Delete extends Component {
    constructor(){
        super();
        this.state = {
            id: ""
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

        this.setState({
            id: ""
        });

        var url = 'http://localhost:5000/db/delete/' + 'customer' + id ;
        fetch(url, {
        })
        .then(res => res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' }))
        .then(data => console.log(data))
        .catch(err => console.log(err))

        e.preventDefault();
       
    };

    render () {
        return (<div className ="form">
            <h1>Delete a Customer</h1>
            <form  onSubmit={this.submitForm}>
            <label>ID:  <input type="text" placeholder="Customer ID to Delete" name ="id" value={this.state.id} onChange={this.handleChange}/><br/></label>
            <Button variant="contained" color="secondary" onClick={this.submitForm}>
            Delete
            </Button>
           </form></div>);
    };
};
export default Delete;