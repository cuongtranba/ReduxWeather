import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IsValid} from '../actions/address_action'
import {AddNewAddress} from '../actions/address_action'
import {bindActionCreators} from 'redux';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'

class AddNewAddressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ''
        };
        this.onChange = (address) => {
            this.setState({address})
        };
        const handleEnter = (address) => {
            geocodeByAddress(address).then(results => {
                console.log('results', results)
            })
        }

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

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange
        }
        const handleSelect = (address, placeId) => {
            geocodeByAddress(this.state.address)
                .then(results => {
                    let addressComponent = results[0].address_components;
                    let formValues = {
                        StreetName: addressComponent[1].long_name,
                        Ward: addressComponent[2].long_name,
                        District: addressComponent[3].long_name,
                        City: addressComponent[4].long_name,
                        Country: addressComponent[5].long_name
                    } 
                    console.log(formValues);
                });
        }
        return (
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={this.onFormSubmit} className="input-group col-6">
                        <div className={"form-group " + this.props.result.streetName}>
                            <label htmlFor="Street Name">Street Name:</label>
                            <input type="text" name="StreetName" className="form-control" id="StreetName"></input>
                        </div>
                        <div className={"form-group " + this.props.result.ward}>
                            <label htmlFor="Ward">Ward:</label>
                            <input type="text" name="Ward" className="form-control" id="Ward"></input>
                        </div>
                        <div className={"form-group " + this.props.result.district}>
                            <label htmlFor="District">District:</label>
                            <input type="text" name="District" className="form-control" id="District"></input>
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
                </div>
                <div className="col-md-6">
                    <PlacesAutocomplete onSelect={handleSelect} inputProps={inputProps} />
                </div>
            </div>
        );
    }

    newFunction() {
        return this;
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        IsValid,
        AddNewAddress
    }, dispatch);
}

function mapStateToProps(state) {
    return {result: state.isValid}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNewAddressForm)