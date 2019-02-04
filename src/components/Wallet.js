import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
    state = {
        balance: undefined
    };

    updateBalance = event => this.setState({ balance: +event.target.value });

    deposit = () => this.props.deposit(this.state.balance);

    withdraw = () => this.props.withdraw(this.state.balance);

    render() {
        return (
            <div>
                <h2 className="balance">Wallet balance: {this.props.balance}</h2>
                <br/>
                <input 
                    className='input-wallet'
                    onChange={this.updateBalance}
                />
                <button 
                    className='btn-deposit'
                    onClick={this.deposit}
                    children="Deposit"
                />
                <button 
                    className="btn-withdraw"
                    onClick={this.withdraw}
                    children="Withdraw" 
                />
            </div>
        )
    }
}

export default connect(state => { return { balance: state }}, { deposit, withdraw })(Wallet);