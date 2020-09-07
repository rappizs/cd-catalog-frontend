import { apiEndpont } from "../config";

export function getDiscs(searchValue) {
    const url = "/discs?search-value=" + searchValue;
    return fetch(apiEndpont + url);
}

export function createDisc(data) {
    const url = "/discs";
    return fetch(apiEndpont + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export function deleteDisc(id) {
    const url = "/discs/" + id;
    return fetch(apiEndpont + url, {
        method: "DELETE"
    });
}

export function saveDisc(id, data) {
    const url = "/discs/" + id;
    return fetch(apiEndpont + url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}