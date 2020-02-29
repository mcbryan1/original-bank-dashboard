import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import { deleteAccount, getAllAccounts } from './redux/actions'
import './App.css'
class Home extends React.Component {
    
    handleOnDelete = (id)=>{
        this.props.deleteAccount(id)
    }
    componentDidMount(){
        this.props.getAllAccounts()
    }
    render(){
        return (
            <div>
                <div class="ml-auto add">
                <Link to="/add">
                    <a href="">Add Account</a>
                </Link>

            </div>
            <table className="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>Account Name</th>
                    <th>Account Number</th>
                    <th>Account Bank Name</th>
                    <th>Account Bank Branch</th>
                    <th>Actions</th>
                </tr>
            </thead>
                {this.props.loading && <p>Loading...</p>}
                {this.props.accounts.map(account=>{
                    return (
                    <tr>
                        <td>{account.accountName}</td>
                        <td>{account.accountNumber}</td>
                        <td>{account.bankName}</td>
                        <td>{account.bankBranch}</td>
                        <td>
                            <a onClick={()=>{this.handleOnDelete(account.id)}}>Delete</a>   
                            <Link to={`/edit/${account.id}`}> <a> Edit </a></Link>
                        </td>
                    </tr>
                    )
                })}
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return state
}




export default connect(mapStateToProps, {deleteAccount, getAllAccounts})(Home);
