import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

export const GetAllUsersService = () => {
	return axios.get(`${BASE_URL}/users`)
}

export const GetUserService = (id) => {
	return axios.get(`${BASE_URL}/users/${id}`)
}

export const UserCreatedService = (data) => {
	return axios.post(`${BASE_URL}/users/user`, data)
}

export const EditUserService = (data, id) => {
	return axios.put(`${BASE_URL}/users/user/${id}`, data)
}

export const DeleteUserService = (id) => {
	return axios.delete(`${BASE_URL}/users/user-delete/${id}`)
}
