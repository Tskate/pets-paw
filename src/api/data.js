export const apiKey = '33d0442b-b0dc-4f44-a23d-6eb26431367e'

export const headerForJSON = {
    'Content-Type' : 'application/json',
    'x-api-key' : apiKey
}

export const headerForFormData = {
    'x-api-key' : apiKey
}

function subId() {
    const subID = `paw-user-${Math.floor(Math.random() * (1000 - 1 + 1) + 1)}`
    localStorage.setItem('sub-id', subID)

    return subID
}

export const subID = localStorage.getItem('sub-id') || subId()