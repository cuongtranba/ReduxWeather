import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAddress } from '../actions/address_action';

class Searchbar extends Component{
    constructor(props) {
         super(props);
         this.state = { streetName:'' };

         this.onInputChange = this.onInputChange.bind(this);
         this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term:event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchAddress(this.state.streetName);
        this.setState({ streetName:'' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get city by name" 
                    className="form-control" 
                    value={this.state.streetName} 
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchAddress},dispatch);
}

export default connect(null,mapDispatchToProps)(Searchbar);