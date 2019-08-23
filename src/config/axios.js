import axios from 'axios'

axios.defaults.baseURL = PHOTO_API_API_HOST
axios.defaults.headers.common['x-functions-key'] = PHOTO_API_FUNCTION_KEY
