import axios from 'axios'

function postPhoto(name, dataUrl) {
    axios.post('/api/PostPhoto', { file: { name, dataUrl }})
}

export {
    postPhoto
}