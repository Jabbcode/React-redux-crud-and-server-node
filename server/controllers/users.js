const fs = require('fs')
const { v4: uuid } = require('uuid')

const json_users = fs.readFileSync('users.json', 'utf-8')
let users = JSON.parse(json_users)

const GetAllUsers = (req, res) => {
	res.json(users)
}

const GetUser = (req, res) => {
	const { id } = req.params

	let user = users.filter((user) => {
		return user.id === id
	})

	res.json(user[0])
}

const UserCreated = (req, res) => {
	const { name, lastname, age, address } = req.body

	const newUser = {
		id: uuid(),
		name,
		lastname,
		age,
		address,
	}

	users.push(newUser)

	const json_users = JSON.stringify(users, null, 2)
	fs.writeFileSync('users.json', json_users)

	res.json({
		msg: 'User Created',
		user: newUser,
	})
}

const EditUser = (req, res) => {
	const { id } = req.params
	const { name, lastname, age, address } = req.body

	users.map((user) => {
		if (user.id === id) {
			user.name = name
			user.lastname = lastname
			user.age = age
			user.address = address
		}
	})

	res.json({
		msg: 'User Edit',
	})
}

const DeleteUser = (req, res) => {
	const { id } = req.params

	filterUsers = users.filter((user) => {
		return user.id != id
	})

	const newData = JSON.stringify(filterUsers, null, 2)
	fs.writeFileSync('users.json', newData)

	res.json({
		msg: 'User deleted',
	})
}

module.exports = {
	GetAllUsers,
	GetUser,
	UserCreated,
	EditUser,
	DeleteUser,
}
