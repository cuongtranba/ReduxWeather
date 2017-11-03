import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAddress} from '../actions/address_action'
import { bindActionCreators } from 'redux';

class AddressList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchAddress();
    };
    renderAddress(address) {
        return(
            <tr key={address._id}>
                <td>{address.StreetName}</td>
                <td>{address.Ward}</td>
                <td>{address.District}</td>
                <td>{address.City}</td>
                <td>{address.Country}</td>
            </tr>
        );
    };

    render() {
        return (
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Street Name</th>
                        <th>Ward</th>
                        <th>District</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.address.map(this.renderAddress)}
                </tbody>
            </table>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchAddress:fetchAddress,
    },dispatch);
}

function mapStateToProps(state){
    return {
        address:state.address
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddressList);