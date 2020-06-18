import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import JoinTable from './joinTable';

class Join extends Component {
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
        fetch('http://localhost:5000/db/join')
        .then(response => response.json())
        .then(rows => (this.setState({rows})))
        .catch(err => console.warn(err));
    }


    submitForm(e){
        e.preventDefault();

        // this.setState({
        //     select: "",
        //     from: "",
        //     where: ""
        // });

        // fetch(url, { mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', 
        // })
        // .then(res => res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' }))
        // .then(rows => (this.setState({rows})))
        // .catch(err => console.log(err))
        this.setState({showResult: !this.state.showResult});
        // e.preventDefault();
       
    };

    render () {
        return (<div className ="form">
            <h1>Customers and Vehicles</h1>
            
           <Button variant="contained" color="primary" onClick={this.submitForm}>
            Show Results
            </Button>
            { this.state.showResult ? <JoinTable rows = {this.state.rows} table="Customer and Vehicles" /> : null }
            
           </div>);
    };
};
export default Join;