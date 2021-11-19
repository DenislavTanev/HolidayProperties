
export function getAll() {
    const data = fetch('properties').then((response) => response.json());

    console.log(data);
    return data;
}

export function getOne(id) {
    return fetch(`properties/${id}`)
        .then(res => res.json())
}

export function getLatest() {
    return fetch(`properties/latest`)
        .then(res => res.json())
}
