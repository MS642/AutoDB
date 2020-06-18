import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CustomerPlansTable from './customerplans';

class CustomerPlans extends Component {
    constructor(){
        super();
        this.state = {
            rows: [],
            showResult: false,
        };
        this.submitForm = this.submitForm.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    
    componentDidMount() {
        fetch('http://localhost:5000/db/customerall')
        .then(response => response.json())
        .then(rows => (this.setState({rows})))
        .catch(err => console.warn(err));
    }


    submitForm(e){
        e.preventDefault();

        this.setState({showResult: !this.state.showResult});
        // e.preventDefault();
       
    };

    render () {
        return (<div className ="form">
            <h3> Customers with all Plans</h3>
            
            
            { this.state.showResult ? <CustomerPlansTable rows = {this.state.rows} table="Hospitlizations per General" /> : null }
           <Button variant="contained" color="primary" onClick={this.submitForm}>
            Customer with all Plans
            </Button>
            
           </div>);
    };
};
export default CustomerPlans;