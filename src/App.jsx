import { useState } from 'react'
import { ControlStatusForm, Form, Table } from './components'

function App() {
	const [stateForm, setStateForm] = useState(false)
	const [users, setUsers] = useState([])
	const [id, setId] = useState('')

	const [form, setForm] = useState({
		name: '',
		lastname: '',
		age: '',
		address: '',
	})

	return (
		<div className="container">
			<div className="mt-4">
				<h1> Redux Form</h1>
				<hr />
				<div className="row">
					<div className="col-4">
						<div className="card">
							<div className="card-header">
								<ControlStatusForm stateForm={stateForm} setStateForm={setStateForm} />
							</div>
							<div className="card-body">
								<Form stateForm={stateForm} form={form} setForm={setForm} id={id} />
							</div>
						</div>
					</div>
					<div className="col-8">
						<Table users={users} setUsers={setUsers} stateForm={stateForm} setForm={setForm} setId={setId} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
