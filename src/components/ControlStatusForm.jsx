import { useDispatch, useSelector } from 'react-redux'
import { HandleStateFormSlice } from '../redux/features/user/userSlice'

export const ControlStatusForm = () => {
	const dispatch = useDispatch()
	const { stateForm } = useSelector((state) => state.user)

	const handleStateForm = (value) => {
		dispatch(HandleStateFormSlice(value))
	}

	return (
		<span className="d-flex justify-content-between align-items-center">
			<h6>Cambiar a </h6>{' '}
			{!stateForm ? (
				<button className="btn btn-warning btn-sm" onClick={() => handleStateForm(true)}>
					Editar
				</button>
			) : (
				<button className="btn btn-primary btn-sm" onClick={() => handleStateForm(false)}>
					Guardar
				</button>
			)}
		</span>
	)
}
