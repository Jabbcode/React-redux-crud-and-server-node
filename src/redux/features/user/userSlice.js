import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	users: [],
	user: {},
	stateForm: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		GetAllUserSlice: (state, { payload }) => {
			state.users = payload
		},
		GetUserSlice: (state, { payload }) => {
			state.user = payload
		},
		HandleStateFormSlice: (state, { payload }) => {
			state.stateForm = payload
		},
	},
})

export const { GetAllUserSlice, GetUserSlice, HandleStateFormSlice } = userSlice.actions
export default userSlice.reducer
