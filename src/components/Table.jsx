import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { DeleteUserRedux, GetAllUserRedux, GetUserRedux } from '../redux/features/user/thunks'

export const Table = () => {
	const dispatch = useDispatch()
	const { users, stateForm } = useSelector((state) => state.user)

	useEffect(() => {
		dispatch(GetAllUserRedux())
	}, [users])

	const handleInfoUser = (id) => dispatch(GetUserRedux(id))
	const handleDelete = (id) => dispatch(DeleteUserRedux(id))

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
