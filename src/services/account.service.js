import http from "../http-common";



class AccountDataService {
    get() {
        return http.get(`account/me/`);
    }

    transfer(dest, amount) {
        return http.post(`account/transfer/`, {destWallet: dest, amount: amount});
    }
}

export default new AccountDataService();