import React, {Component} from 'react';
import CustomerCompanyTable from './customer_companyTable'

class CustomerCompany extends Component {

  constructor(){
    super();
    this.state = { customer_company: []};
  }
  componentDidMount() {
    
    fetch('http://localhost:5000/db/customer_company')
      .then(response => response.json())
      .then(customer_company => (this.setState({customer_company})))
        .catch(err => console.warn(err));
  }
    
    render (){
      return(
        <CustomerCompanyTable rows = {this.state.customer_company}/>
      )
  }
}

export default CustomerCompany;
