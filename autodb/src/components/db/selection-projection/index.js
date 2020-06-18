import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SelectionTable from './selectionTable';

class Selection extends Component {
    constructor(){
        super();
        this.state = {
            select: "",
            from: "",
            where: "",
            rows: [],
            showResult: false,
            cols: "",
        };
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                // console.log(this.state.rows);
                return { unseen: "does not display" }
            });
        }, 5000);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });

    }

    submitForm(e){
        e.preventDefault();
        var select = '/' + this.state.select;
        var from = '/' + this.state.from;
        var where = '/' + this.state.where;

        // this.setState({
        //     select: "",
        //     from: "",
        //     where: ""
        // });
        var url = 'http://localhost:5000/db/selection/customer' + select + from + where;

        fetch(url)
        .then(response => response.json())
        .then(rows => (this.setState({rows})))
        .catch(err => console.warn(err));

        // fetch(url, { mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', 
        // })
        // .then(res => res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' }))
        // .then(rows => (this.setState({rows})))
        // .catch(err => console.log(err))
        this.setState({showResult: true});
        e.preventDefault();
       
    };

    render () {
        return (<div className ="form">
            <h1>Table Project & Selection</h1>
            <form  onSubmit={this.submitForm}>
           <label>SELECT    :  <input type="text" placeholder="Selection" name="select" value={this.state.select} onChange={this.handleChange}/><br/></label>
           <label>FROM:  <input type="text" placeholder="FROM which table" name="from" value={this.state.from} onChange={this.handleChange}/><br/></label>
           <label>WHERE:  <input type="text" placeholder="Where Condition" name="where" value={this.state.where} onChange={this.handleChange}/><br/></label>
           <Button variant="contained" color="primary" onClick={this.submitForm}>
            Get Results
            </Button>
            { this.state.showResult ? <SelectionTable rows = {this.state.rows} cols= {this.state.select} table = {this.state.from} /> : null }
            
           </form>
           </div>);
    };
};
export default Selection;