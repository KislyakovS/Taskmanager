import { FETCH_URL } from './const';

class API {
    constructor(authorization) {
        if (!authorization) {
            throw new Error('Error during authorization');
        }

        this._authorization = authorization;
    }

    get _headers() {
        const header = new Headers();

        header.append('Authorization', this._authorization);

        return header;
    }

    getTasks() {
        return fetch(`${FETCH_URL}/tasks`, {
            headers: this._headers
        }).then(result => result.json());
    }
}

export { API };