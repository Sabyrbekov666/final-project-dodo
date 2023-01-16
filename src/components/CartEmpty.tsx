import '../scss/components/_cart-empty.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export const CartEmpty: React.FC = () => (
	<div className='cart cart--empty'>
		<img
			src='https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg'
			alt='Empty cart'
		/>
		<h2>Ой пусто!</h2>
		<p>
			Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар. Мы
			доставим ваш заказ от 365 сом
		</p>
		<Link to='/pizzas' className='button button--black'>
			<span>Вернуться назад</span>
		</Link>
	</div>
)
