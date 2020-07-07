import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = async() =>{
 const request = await axios.get(baseUrl) 
 return request.data 
}

const create = async(obj)=> {
    const request = await axios.post(baseUrl, obj)
    return request.data
}

const update = async(id, newObj)=>{
 const request = await axios.put(`${baseUrl}/${id}`,newObj)
 return request.data
}

const remove = async(id) => {
const request = await axios.delete(`${baseUrl}/${id}`)
 return request.data
}

export default { getAll, create, update, remove }