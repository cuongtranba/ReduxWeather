import React, { Component } from 'react';
import { connect } from 'react-redux';
import {IsValid} from '../actions/address_action'
import {AddNewAddress} from '../actions/address_action'
import { bindActionCreators } from 'redux';


class AddNewAddressForm extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    onFormSubmit(event) {
        event.preventDefault();
        let formValues = {
            StreetName: event.target.StreetName.value,
            Ward: event.target.Ward.value,
            District: event.target.District.value,
            City: event.target.City.value,
            Country: event.target.Country.value
        }            
        this.props.IsValid(formValues);  
    }
    
    

    render(){
        return (
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <div className="form-group">
                        <label htmlFor="Street Name">Street Name:</label>
                        <input required type="text" name="StreetName" className="form-control" id="StreetName"></input>
                    </div>
                        <div className="form-group">
                        <label htmlFor="Ward">Ward:</label>
                        <input type="text" name="Ward" required={this.props.result.ward} className="form-control" id="Ward"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="District">District:</label>
                        <input type="text" name="District" required={this.props.result.district} className="form-control" id="District"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="City">City:</label>
                        <input type="text" name="City" className="form-control" id="City"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Country	">Country:</label>
                        <input type="text" name="Country" className="form-control" id="Country"></input>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="form-control" className="btn btn-secondary">Create new address</button>
                    </div>
                </form>
        );
    }

    newFunction() {
        return this;
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({IsValid,AddNewAddress},dispatch);
}

function mapStateToProps(state){
    return{
        result:state.isValid
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddNewAddressForm)