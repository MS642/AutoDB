import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import GroupByTable from './groupbyTable';

class GroupBy extends Component {
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
        fetch('http://localhost:5000/db/groupby')
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
            <h3>Hospitlizations</h3>
            
            
            { this.state.showResult ? <GroupByTable rows = {this.state.rows} table="Hospitlizations per General" /> : null }
           <Button variant="contained" color="primary" onClick={this.submitForm}>
            Show Hospitlizations for hospitals with the word General
            </Button>
            
           </div>);
    };
};
export default GroupBy;