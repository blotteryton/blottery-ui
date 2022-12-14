import React, {Component} from 'react';

import AccountDataService from "../../services/account.service"
import Heading from "../Heading/Heading";
import Balance from "../Balance/Balance";
import Cookies from "js-cookie";


export default class CabinetWallet extends Component {
    constructor(props) {
        super(props);
        this.getWallet = this.getWallet.bind(this);

        this.state = {
            Wallet: {
                "wallet_address": "",
                "balance": {
                    "ton": 0,
                    "rub": 0,
                    "usd": 0
                },
                "is_wallet_deployed": false
            },
        };
    }

    componentDidMount() {
        this.getWallet();
    }


    getWallet() {
        AccountDataService.get()
            .then(response => {
                this.setState({
                    Wallet: response.data
                });

                Cookies.set("wallet_address", response.data.wallet_address, {SameSite: "None", secure: true})
                Cookies.set("ton_balance", response.data.balance.ton, {SameSite: "None", secure: true})
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { Wallet } = this.state;

        return (
            <div className="wrapper__section">
                <Heading title={'Личный кабинет'} />
                <Balance ton={Wallet.balance.ton} currency={Wallet.balance.rub}
                         getActive={!!Wallet.wallet_address} sendActive={Wallet.is_wallet_deployed}
                         historyActive={false} premiumActive={false}/>
            </div>
        );
    }
}