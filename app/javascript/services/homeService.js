import http from '../http-common';

const testEnpoint = () => {
    return http.get(`/`);
};

const HomeService = {
    testEnpoint
};

export default HomeService;