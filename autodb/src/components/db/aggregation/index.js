import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Aggregate extends Component {
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
        fetch('http://localhost:5000/db/aggregate')
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
        console.log((this.state.rows)[0]);
        console.log(this.state.rows);
        this.setState({showResult: !this.state.showResult});
        // e.preventDefault();
       
    };

    render () {
        return (<div className ="form">
            <h3>Average Salary</h3>
            
            
            { this.state.showResult ? <h3> The average salary for company 1 is = ${((this.state.rows)[0])['AVG']}</h3> : null }
           <Button variant="contained" color="primary" onClick={this.submitForm}>
            Show avg Salary for company 1
            </Button>
            
           </div>);
    };
};
export default Aggregate;