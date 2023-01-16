import styles from '../login/style.module.scss'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
	const [data, setData] = useState({ email: '', password: '' })
	const [error, setError] = useState('')

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const url = 'http://localhost:8080/api/auth'
			const { data: res } = await axios.post(url, data)
			localStorage.setItem('token', res.data)
			window.location = '/'
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message)
			}
		}
	}

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<img
						src='https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Dodo_Logo.svg/2560px-Dodo_Logo.svg.png'
						width={200}
					></img>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<input
							type='email'
							placeholder='Электронная почта'
							name='email'
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type='password'
							placeholder='Пароль'
							name='password'
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && (
							<div className={styles.error_msg}>
								Неправильный пароль или электронная почта
							</div>
						)}
						<button type='submit' className={styles.green_btn}>
							Вход
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>Нет аккаунта ?</h1>
					<Link to='/register'>
						<button type='button' className={styles.white_btn}>
							Регистрация
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Login
