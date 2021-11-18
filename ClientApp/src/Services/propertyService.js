
export function getAll() {
    const data = fetch('https://localhost:44372/properties').then((response) => response.json());

    console.log(data);
    return data;
}

export function getOne(id) {
    return fetch(`properties/${id}`)
        .then(res => res.json())
}
