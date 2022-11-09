import http from "../http-common";

class NotificationsDataService {
    getAll(limit, offset) {
        return http.get(`notifications/?limit=${limit}&offset=${offset}`);
    }

    getByCategory(category, limit, offset) {
        return http.get(`notifications/?category=${category}&limit=${limit}&offset=${offset}`);
    }
}

export default new NotificationsDataService();