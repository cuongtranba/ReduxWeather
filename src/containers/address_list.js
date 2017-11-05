import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAddress} from '../actions/address_action'
import {bindActionCreators} from 'redux';
import _ from "lodash"

class AddressList extends Component {
    constructor(props) {
        super(props);
    };
    renderAddress(address) {
        return (
            <tr key={address._id}>
                <td>{address.StreetName}</td>
                <td>{address.Ward}</td>
                <td>{address.District}</td>
                <td>{address.City}</td>
                <td>{address.Country}</td>
            </tr>
        );
    };
    componentWillMount() {
        this
            .props
            .fetchAddress();
    }
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
                    {Object
                        .keys(this.props.address)
                        .map((key) => {
                            return (
                                <tr key={key}>
                                <td>{this.props.address[key].StreetName}</td>
                                <td>{this.props.address[key].Ward}</td>
                                <td>{this.props.address[key].District}</td>
                                <td>{this.props.address[key].City}</td>
                                <td>{this.props.address[key].Country}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAddress: () => dispatch(fetchAddress())
})

function mapStateToProps(state) {
    return {address: state.address}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressList);