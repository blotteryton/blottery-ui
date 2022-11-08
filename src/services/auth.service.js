import http from "../http-common";

class AuthDataService {
    get(user_uid) {
        return http.get(`auth/token/?user_uid=${user_uid}`);
    }
}

export default new AuthDataService();