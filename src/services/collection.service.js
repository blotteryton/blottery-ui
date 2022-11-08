import http from "../http-common";

class CollectionsDataService {
    getAll(limit, offset) {
        return http.get(`collections/?limit=${limit}&offset=${offset}`);
    }

    getNew(limit, offset) {
        return http.get(`collections/new/?limit=${limit}&offset=${offset}`);
    }

    getPopular(limit, offset) {
        return http.get(`collections/popular/?limit=${limit}&offset=${offset}`);
    }

    get(id) {
        return http.get(`collections/${id}/`);
    }

    getCollectionNfts(id, limit, offset) {
        return http.get(`collections/${id}/nfts/?limit=${limit}&offset=${offset}`)
    }
}

export default new CollectionsDataService();