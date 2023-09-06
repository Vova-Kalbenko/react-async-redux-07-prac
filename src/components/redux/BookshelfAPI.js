import axios from 'axios'
axios.defaults.baseURL = '4to-to-tam'
// METODI DLYA FETCHA
// eto sinhronnie atcioni dlya reducera
export async function fetchAuthors(){
    const {data} = await axios.get('/4to-to-tam ewe')
    return data
}

export async function fetchBooks(){
    const {data} = await axios.get('/4to-to-tam ewe/books')
    return data
}

export async function fetchBookById(id){
    const {data} = await axios.get(`/4to-to-tam ewe/${id}`)
    return data
}