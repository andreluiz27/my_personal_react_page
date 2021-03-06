import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import axios from 'axios'

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then(response => {
      this.setState({customerList: response})
    })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {
          <Panel bsStyle="info" className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">About me</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Button bsStyle="info" >
                Click to View Details
              </Button>
            </Panel.Body>
          </Panel>

          
        }

        {
          <Panel bsStyle="info" className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">My portfolio</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <Button bsStyle="info" >
                    Click to View Details
                  </Button>
                </Panel.Body>
              </Panel>
        }
  
      {
          <Panel bsStyle="info" className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Contact</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <Button bsStyle="info" >
                    Click to View Details
                  </Button>
                </Panel.Body>
              </Panel>
      }
  
      </div>
      <div className="col-md-6">
        <CustomerDetails val={this.state.selectedCustomer}/>
      </div>
    </div>)
  }

}