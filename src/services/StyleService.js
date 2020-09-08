import { apiEndpont } from "../config";

export function getStyles(searchValue, type) {
    const url = "/styles?search-value=" + searchValue
        + "&type=" + (type ? "asc" : "desc");

    return fetch(apiEndpont + url);
}

export function createStyle(data) {
    const url = "/styles";
    return fetch(apiEndpont + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export function deleteStyle(id) {
    const url = "/styles/" + id;
    return fetch(apiEndpont + url, {
        method: "DELETE"
    });
}

export function saveStyle(id, data) {
    const url = "/styles/" + id;
    return fetch(apiEndpont + url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}