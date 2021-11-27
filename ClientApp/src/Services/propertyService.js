
export function getAll(type) {
    return fetch(`properties?type=${type}`)
        .then((response) => response.json());
}

export function getOne(id) {
    return fetch(`properties/getbyid?id=${id}`)
        .then(res => res.json())
}

export function getLatest() {
    return fetch(`properties/latest`)
        .then(res => res.json())
}

export const create = async (propertyData) => {
    let response = await fetch('properties', {
        method: 'POST',
        //mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(propertyData)
    });
    console.log(propertyData);
    let result = await response.json();

    return result;
}
