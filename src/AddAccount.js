import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewAccount } from "./redux/actions";
import { Link } from "react-router-dom";

class AddAccount extends Component {
  handleOnSubmit = event => {
    event.preventDefault();
    let newAcount = {
      id: Math.random()
        .toString(36)
        .substr(2, 5),
      accountName: event.target.elements.accountName.value,
      accountNumber: event.target.elements.accountNumber.value,
      bankName: event.target.elements.bankName.value,
      bankBranch: event.target.elements.bankBranch.value
    };
    this.props.addNewAccount(newAcount);
    this.props.history.push("/");
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <Link to="/">
            <p>Accounts</p>
        </Link>
        <div class="form-group">
          <label for="exampleInputEmail1">Account Name</label>
          <input
            name="accountName"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          /> 
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Account Number</label>
          <input
            name="accountNumber"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Bank Name</label>
          <input
            name="bankName"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          /> 
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Bank Branch</label>
          <input
            name="bankBranch"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          /> 
        </div>
        <button type="submit" class="btn btn-primary">
          Add Account
        </button>
      </form>

      /*<form onSubmit={this.addAccount}>
                <Link to="/">
                    <p>Accounts</p>
                </Link>
                <h1>Add new Account</h1>
                <div>
                    <label>Account Name</label>
                    <input type="text" name="accountName"/>
                </div>
                <div>
                    <label>Account Number</label>
                    <input type="text" name="accountNumber"/>
                </div>
                <div>
                    <label>Bank Name</label>
                    <input type="text" name="bankName"/>
                </div>
                <div>
                    <label>Bank Branch</label>
                    <input type="text" name="bankBranch"/>
                </div>
                <button type="submit">Add Account</button>
            </form>*/
    );
  }
}

const mapDispatchToProps = {
  addNewAccount
};

export default connect(null, mapDispatchToProps)(AddAccount);
