export const ControlStatusForm = ({ stateForm, setStateForm }) => {
	return (
		<span className="d-flex justify-content-between align-items-center">
			<h6>Cambiar a </h6>{' '}
			{!stateForm ? (
				<button className="btn btn-warning btn-sm" onClick={() => setStateForm(true)}>
					Editar
				</button>
			) : (
				<button className="btn btn-primary btn-sm" onClick={() => setStateForm(false)}>
					Guardar
				</button>
			)}
		</span>
	)
}
