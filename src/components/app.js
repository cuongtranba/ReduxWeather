import React, { Component } from 'react';
import Searchbar from '../containers/search_bar';
import AddressList from '../containers/address_list';
import AddNewAddressForm from '../containers/add_new_address';
export default class App extends Component {
  render() {
    return (
      <div>
        <br/>
        <h1>Address management</h1>
        <AddNewAddressForm/>
        <AddressList/>
      </div>
    );
  }
}
