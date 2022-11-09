import http from "../http-common";

class RecommendationsDataService {
    getAll() {
        return http.get(`recommendations/`);
    }
}

export default new RecommendationsDataService();