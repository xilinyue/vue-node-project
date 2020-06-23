import http from './index';

export default {
    register(data) {
        return http.post("/users/register",data);
    },
    login(data) {
        return http.post("/users/login",data);
    }
}