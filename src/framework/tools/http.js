class HTTP {
    constructor() {}

    get(url) {
        return sendRequest('GET', url)
    }
}

function sendRequest(method, url, data = {}, headers = {}) {
    return fetch(url, { method }).then(response => response.json())
}

export const http = new HTTP();
