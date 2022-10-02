import { ControlStatusForm, Form, Table } from './components'

function App() {
	return (
		<div className="container">
			<div className="mt-4">
				<h1> Redux Form</h1>
				<hr />
				<div className="row">
					<div className="col-4">
						<div className="card">
							<div className="card-header">
								<ControlStatusForm />
							</div>
							<div className="card-body">
								<Form />
							</div>
						</div>
					</div>
					<div className="col-8">
						<Table />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
