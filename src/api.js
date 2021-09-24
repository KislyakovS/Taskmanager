import { Task } from './model/task';

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
        })
            .then(result => result.json())
            .then(Task.parseTasks);
    }

    updateTask(id, task) {
        return fetch(`${FETCH_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: this._headers,
            body: JSON.stringify(task.toRAW())
        })
            .then(response => response.json())
            .then(Task.parseTask)
    }
}

export { API };