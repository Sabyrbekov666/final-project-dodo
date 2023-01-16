import RegisterLogo from '../../../assets/img/dodopizza-logo-r.png'
import styles from '../register/style.module.scss'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {
	const [data, setData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	})
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const url = 'http://localhost:8080/api/users'
			const { data: res } = await axios.post(url, data)
			navigate('/login')
			console.log(res.message)
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
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<img src={RegisterLogo} width={65}></img>
					<h3>Уже есть аккаунт?</h3>
					<Link to='/login'>
						<button type='button' className={styles.white_btn}>
							Войти
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Создать аккаунт</h1>
						<input
							type='text'
							placeholder='Имя'
							name='firstName'
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type='text'
							placeholder='Фамилия'
							name='lastName'
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
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
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type='submit' className={styles.green_btn}>
							Зарегестрироваться
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register
