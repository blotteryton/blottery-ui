import http from "../http-common";

class NftDataService {
    get(id) {
        return http.get(`nfts/${id}/`);
    }
}

export default new NftDataService();