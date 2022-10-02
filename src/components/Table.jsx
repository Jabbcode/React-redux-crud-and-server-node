import { useEffect } from 'react'
import { DeleteUser, GetAllUsers, GetUser } from '../services/users'

export const Table = ({ users, setUsers, stateForm, setForm, setId }) => {
	const getUsers = async () => {
		try {
			const { data } = await GetAllUsers()
			setUsers(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getUsers()
	}, [users])

	const handleInfoUser = async (id) => {
		setId(id)
		try {
			const { data } = await GetUser(id)
			setForm(data)
		} catch (error) {
			console.log(error)
		}
	}

	const handleDelete = async (id) => {
		try {
			const {
				data: { msg },
			} = await DeleteUser(id)
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: msg,
				showConfirmButton: false,
				timer: 1500,
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="card">
			<div className="card-header">
				<h6>Users</h6>
			</div>
			<div className="card-body">
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Name</th>
							<th>Lastname</th>
							<th>Age</th>
							<th>Address</th>
							{stateForm ? <th>Edit</th> : ''}
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => {
							return (
								<tr key={user.id}>
									<td>{user.name}</td>
									<td>{user.lastname}</td>
									<td>{user.age}</td>
									<td>{user.address}</td>
									{stateForm ? (
										<td>
											<button className="btn btn-success btn-sm" onClick={() => handleInfoUser(user.id)}>
												O
											</button>
										</td>
									) : (
										''
									)}
									<td>
										<button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
											X
										</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
