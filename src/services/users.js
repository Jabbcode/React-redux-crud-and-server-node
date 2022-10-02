import axios from 'axios'

export const GetAllUsers = () => {
	return axios.get('http://localhost:3000/api/users')
}

export const GetUser = (id) => {
	return axios.get(`http://localhost:3000/api/users/${id}`)
}

export const UserCreated = (data) => {
	return axios.post('http://localhost:3000/api/users/user', data)
}

export const EditUser = (data, id) => {
	return axios.put(`http://localhost:3000/api/users/user/${id}`, data)
}

export const DeleteUser = (id) => {
	return axios.delete(`http://localhost:3000/api/users/user-delete/${id}`)
}
