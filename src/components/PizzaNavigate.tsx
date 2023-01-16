import { selectCart } from '../redux/cart/selectors'
import { selectFilter } from '../redux/filter/selectors'
import { setCategoryId, setCurrentPage } from '../redux/filter/slice'
import { fetchPizzas } from '../redux/pizza/asyncActions'
import { useAppDispatch } from '../redux/store'
import '../scss/components/_navigate.scss'
import { Sort } from './Sort'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

type CategoriesProps = {
	value: number
	onChangeCategory: (idx: number) => void
}

export const PizzaNavigate = () => {
	const [fix, setFix] = useState(false)

	function setFixedSidebar() {
		if (window.scrollY >= 500) {
			setFix(true)
		} else {
			setFix(false)
		}
	}

	window.addEventListener('scroll', setFixedSidebar)
	return (
		<nav className='nav'>
			<ul className={fix ? 'nav__conteiner.fixed' : 'nav__container'}>
				<li className='nav__items'>
					<Link to='/' className='nav__item'>
						Пиццы
					</Link>
				</li>
				<li className='nav__items'>
					<Link to='/combo' className='nav__item'>
						Комбо
					</Link>
				</li>
				<li className='nav__items'>
					<Link to='/snacks' className='nav__item'>
						Закуски
					</Link>
				</li>
				<li className='nav__items'>
					<Link to='/desserts' className='nav__item'>
						Десерты
					</Link>
				</li>
				<li className='nav__items'>
					<Link to='/drinks' className='nav__item'>
						Напитки
					</Link>
				</li>
				<li className='nav__items'>
					<Link to='/other' className='nav__item'>
						Другие товары
					</Link>
				</li>
				<li className='nav__items'>
					<Link to='/action' className='nav__item'>
						Акции
					</Link>
				</li>
				<li className='nav__items'>
					<Link to='/contacts' className='nav__item'>
						Контакты
					</Link>
				</li>
				<li className='nav__items'>
					<Link to='/about' className='nav__item'>
						О нас
					</Link>
				</li>
			</ul>
		</nav>
	)
}
