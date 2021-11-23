
export function getAll() {
    const data = fetch('properties/getall').then((response) => response.json());

    return data;
}

export function getOne(id) {
    return fetch(`properties/getbyid?id=${id}`)
        .then(res => res.json())
}

export function getLatest() {
    return fetch(`properties/latest`)
        .then(res => res.json())
}
