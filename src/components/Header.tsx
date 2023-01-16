import DodopizzaLogo from '../assets/img/dodopizzalogo.png'
import { selectCart } from '../redux/cart/selectors'
import { selectFilter } from '../redux/filter/selectors'
import { setCategoryId, setCurrentPage } from '../redux/filter/slice'
import { fetchPizzas } from '../redux/pizza/asyncActions'
import { useAppDispatch } from '../redux/store'
import { Search } from './'
import Modal from './ModalNavigate/Modal'
import { PizzaNavigate } from './PizzaNavigate'
import { Sort } from './Sort'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Header: React.FC = () => {
	const slocation = useLocation()

	const handleLogout = () => {
		localStorage.removeItem('token')
		window.location.reload()
	}

	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { categoryId, sort, currentPage, searchValue } =
		useSelector(selectFilter)

	const onChangeCategory = React.useCallback((idx: number) => {
		dispatch(setCategoryId(idx))
	}, [])

	const onChangePage = (page: number) => {
		dispatch(setCurrentPage(page))
	}

	const { items } = useSelector(selectCart)
	const location = useLocation()
	const isMounted = React.useRef(false)
	const totalCount = items.reduce(
		(sum: number, item: any) => sum + item.count,
		0
	)

	const getPizzas = async () => {
		const sortBy = sort.sortProperty.replace('-', '')
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
		const category = categoryId > 0 ? String(categoryId) : ''
		const search = searchValue

		dispatch(
			fetchPizzas({
				sortBy,
				order,
				category,
				search,
				currentPage: String(currentPage),
			})
		)

		window.scrollTo(0, 0)
	}

	React.useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(items)
			localStorage.setItem('cart', json)
		}
		isMounted.current = true
	}, [items])

	React.useEffect(() => {
		getPizzas()
	}, [categoryId, sort.sortProperty, searchValue, currentPage])

	const [fix, setFix] = useState(false)

	function setFixed() {
		if (window.scrollY >= 392) {
			setFix(true)
		} else {
			setFix(false)
		}
	}

	window.addEventListener('scroll', setFixed)

	return (
		<div className='header'>
			<div className='container'>
				<Link to='/'>
					<img width={250} src={DodopizzaLogo}></img>
				</Link>
				<div className='nav'>
					<Link to='/'>
						<div className='nav__item'>Главная</div>
					</Link>
					<Link to='/pizzas'>
						<div className='nav__item'>Пиццы</div>
					</Link>
					<Link to='/about'>
						<div className='nav__item'>О нас</div>
					</Link>
				</div>
				{window.location.pathname !== '/cart' && (
					<Link to='/cart' className='button button--cart'>
						<span>Корзина</span>
						<div className='button__delimiter'></div>
						<span>{totalCount}</span>
					</Link>
				)}

				{/* <div className='about__delivery'>
					<h3>Доставка пиццы Бишкек</h3>
					<div className='delivery__rating'>
						<h5 className='tooltip'>
							34 мин, 4.78
							<p className='tooltiptext'>
								{' '}
								36 МИНУТ, Среднее время доставки, Если мы не успеем за 60минут
								вы получите сертификат на большую пиццу{' '}
							</p>
						</h5>
						<img
							width={20}
							src='http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286Star.png'
						></img>
					</div>
				</div> */}
				{/* <div className='header__contacts'>
					<p>0(551) 550-550</p>
					<p className='mobile__number'>Звонок по телефону</p>
				</div> */}
			</div>
		</div>
	)
}
