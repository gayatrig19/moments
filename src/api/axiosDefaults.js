import axios from 'axios';

axios.defaults.baseURL = 'https://djangorest-api-project-d779bee7fbda.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true