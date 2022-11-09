import http from "../http-common";

class AuthorDataService {
    get(id) {
        return http.get(`bloggers/${id}/`);
    }

    getCollections(id, limit, offset) {
        return http.get(`bloggers/${id}/collections/?limit=${limit}&offset=${offset}`);
    }

}

export default new AuthorDataService();