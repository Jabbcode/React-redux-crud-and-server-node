import { useEffect, useState } from 'react'
import { EditUser, UserCreated } from '../services/users'

export const Form = ({ stateForm, form, setForm, id }) => {
	const [onDisabled, setOndisabled] = useState(true)

	useEffect(() => {
		if (form.name !== '' && form.lastname !== '' && form.age !== '' && form.address !== '') {
			setOndisabled(false)
		} else {
			setOndisabled(true)
		}
	}, [form])

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (stateForm === true) {
			try {
				const {
					data: { msg },
				} = await EditUser(form, id)

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
		} else {
			try {
				const {
					data: { user, msg },
				} = await UserCreated(form)

				Swal.fire({
					position: 'center',
					icon: 'success',
					title: msg,
					showConfirmButton: false,
					timer: 1500,
				})

				setForm({
					name: '',
					lastname: '',
					age: '',
					address: '',
				})
			} catch (error) {
				console.log(error)
			}
		}
	}

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-2">
				<label className="form-label"> Name:</label>
				<input type="text" className="form-control is-invalid" name="name" onChange={handleChange} value={form.name} />
			</div>
			<div className="mb-2">
				<label className="form-label">Lastname:</label>
				<input type="text" className="form-control is-invalid" name="lastname" onChange={handleChange} value={form.lastname} />
			</div>
			<div className="mb-2">
				<label className="form-label">Age:</label>
				<input type="number" className="form-control is-invalid" name="age" onChange={handleChange} value={form.age} />
			</div>
			<div className="mb-3">
				<label className="form-label">Address:</label>
				<input type="text" className="form-control is-invalid" name="address" onChange={handleChange} value={form.address} />
			</div>
			<div className="d-grid">
				{stateForm ? (
					<button className="btn btn-warning" type="submit" disabled={onDisabled}>
						Editar
					</button>
				) : (
					<button className="btn btn-primary" type="submit" disabled={onDisabled}>
						Guardar
					</button>
				)}
			</div>
		</form>
	)
}
