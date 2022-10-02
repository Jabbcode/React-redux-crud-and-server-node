import { DeleteUserService, EditUserService, GetAllUsersService, GetUserService, UserCreatedService } from '../../../services/users'
import { GetAllUserSlice, GetUserSlice } from './userSlice'

export const GetAllUserRedux = () => {
	return async (dispatch) => {
		try {
			const { data } = await GetAllUsersService()
			dispatch(GetAllUserSlice(data))
		} catch (error) {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: error,
				showConfirmButton: false,
				timer: 1500,
			})
		}
	}
}

export const GetUserRedux = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await GetUserService(id)
			dispatch(GetUserSlice(data))
		} catch (error) {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: error,
				showConfirmButton: false,
				timer: 1500,
			})
		}
	}
}

export const UserCreatedRedux = (data) => {
	return async () => {
		try {
			const {
				data: { user, msg },
			} = await UserCreatedService(data)

			Swal.fire({
				position: 'center',
				icon: 'success',
				title: msg,
				showConfirmButton: false,
				timer: 1500,
			})
		} catch (error) {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: error,
				showConfirmButton: false,
				timer: 1500,
			})
		}
	}
}

export const EditUserRedux = (data, id) => {
	return async () => {
		try {
			const {
				data: { msg },
			} = await EditUserService(data, id)

			Swal.fire({
				position: 'center',
				icon: 'success',
				title: msg,
				showConfirmButton: false,
				timer: 1500,
			})
		} catch (error) {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: error,
				showConfirmButton: false,
				timer: 1500,
			})
		}
	}
}

export const DeleteUserRedux = (id) => {
	return async () => {
		try {
			const {
				data: { msg },
			} = await DeleteUserService(id)
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: msg,
				showConfirmButton: false,
				timer: 1500,
			})
		} catch (error) {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: error,
				showConfirmButton: false,
				timer: 1500,
			})
		}
	}
}
