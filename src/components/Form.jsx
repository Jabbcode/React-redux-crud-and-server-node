import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { EditUserRedux, UserCreatedRedux } from '../redux/features/user/thunks'

export const Form = () => {
	const dispatch = useDispatch()
	const { user, stateForm } = useSelector((state) => state.user)

	const [onDisabled, setOndisabled] = useState(true)
	const [form, setForm] = useState({
		name: '',
		lastname: '',
		age: '',
		address: '',
	})

	// Cuando se cargan datos de la tabla al formulario, para renderizar el formulario y se actualice la data
	useEffect(() => {
		setForm(user)
	}, [user])

	// Cuando el formulario no tiene todos lo campos llenos, el boton esta deshabilitado
	useEffect(() => {
		if (form.name !== '' && form.lastname !== '' && form.age !== '' && form.address !== '') {
			setOndisabled(false)
		} else {
			setOndisabled(true)
		}
	}, [form])

	const handleSubmit = (e) => {
		e.preventDefault()

		if (stateForm === true) {
			dispatch(EditUserRedux(form, user.id))
		} else {
			dispatch(UserCreatedRedux(form))
			setForm({
				name: '',
				lastname: '',
				age: '',
				address: '',
			})
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
