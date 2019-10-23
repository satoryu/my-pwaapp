import axios from 'axios'
import '@/config/axios'

function postPhoto(name, dataUrl) {
console.log(axios.defaults.baseURL)
    axios.post('/api/PostPicture', { file: { name, dataUrl }})
}

export {
    postPhoto
}