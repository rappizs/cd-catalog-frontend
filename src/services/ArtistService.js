import { apiEndpont } from "../config";

export function getArtists(searchValue) {
    const url = "/artists?search-value=" + searchValue;
    return fetch(apiEndpont + url);
}

export function createArtist(data) {
    const url = "/artists";
    return fetch(apiEndpont + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export function deleteArtist(id) {
    const url = "/artists/" + id;
    return fetch(apiEndpont + url, {
        method: "DELETE"
    });
}

export function saveArtist(id, data) {
    const url = "/artists/" + id;
    return fetch(apiEndpont + url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}