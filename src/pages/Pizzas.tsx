import { PizzaBlock, Skeleton, Pagination, Search } from '../components'
import { Sort } from '../components'
import { AboutDelivery } from '../components/AboutDelivery'
import { Categories } from '../components/Categories'
import Modal from '../components/ModalNavigate/Modal'
import { OftenOrder } from '../components/OftenOrder'
import { PizzaNavigate } from '../components/PizzaNavigate'
import { selectFilter } from '../redux/filter/selectors'
import { setCategoryId, setCurrentPage } from '../redux/filter/slice'
import { fetchPizzas } from '../redux/pizza/asyncActions'
import { selectPizzaData } from '../redux/pizza/selectors'
import { useAppDispatch } from '../redux/store'
import '../scss/pages/_home.scss'
import '../scss/pages/_pizzas.scss'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export const Pizzas: React.FC = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const pizzasSection = useRef(null)

	// const gotoPizzasSection = () => {
	// 	window.scrollTo({
	// 		top: pizzasSection.current.offsetTop,
	// 		behavior: 'smooth',
	// 	})
	// }

	const { items, status } = useSelector(selectPizzaData)
	const { categoryId, sort, currentPage, searchValue } =
		useSelector(selectFilter)

	const onChangePage = (page: number) => {
		dispatch(setCurrentPage(page))
	}

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
		getPizzas()
	}, [categoryId, sort.sortProperty, searchValue, currentPage])

	const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />)
	const skeletons = [...new Array(6)].map((_, index) => (
		<Skeleton key={index} />
	))

	const handleLogout = () => {
		localStorage.removeItem('token')
		window.location.reload()
	}

	const onChangeCategory = React.useCallback((idx: number) => {
		dispatch(setCategoryId(idx))
	}, [])

	return (
		<div className='container'>
			{/* <PizzaNavigate /> */}

			<div className='often-order'>
				<motion.h1 custom={1} variants={textAnimation}>
					Часто заказывают:
				</motion.h1>
				<OftenOrder />
			</div>

			<div className='catalog'>
				<h1>Пиццы</h1>
				<div className='catalogs'>
					<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				</div>
			</div>

			<div className='title__and__sort'>
				{location.pathname !== '/cart' && <Search />}
				<Sort value={sort} />
			</div>

			{status === 'error' ? (
				<div className='content__error-info'>
					<h2>Ошибка!</h2>
					<p>Попробуйте позже, произошло ошибка</p>
				</div>
			) : (
				<div className='content__items'>
					{status === 'loading' ? skeletons : pizzas}
				</div>
			)}
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
			<AboutDelivery />
		</div>
	)
}
function dispatch(arg0: any) {
	throw new Error('Function not implemented.')
}

export default Pizzas
