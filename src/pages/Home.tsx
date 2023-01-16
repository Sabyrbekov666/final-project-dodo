import { PizzaBlock, Skeleton, Pagination } from '../components'
import Modal from '../components/ModalNavigate/Modal'
import { PizzasMenu } from '../components/PizzasMenu'
import { selectFilter } from '../redux/filter/selectors'
import { setCurrentPage } from '../redux/filter/slice'
import { fetchPizzas } from '../redux/pizza/asyncActions'
import { selectPizzaData } from '../redux/pizza/selectors'
import { useAppDispatch } from '../redux/store'
import '../scss/pages/_home.scss'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

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

const Home: React.FC = () => {
	const dispatch = useAppDispatch()

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
	return (
		<motion.div className='container' initial='hidden' whileInView='visible'>
			<div className='about__pizzas'>
				<div className='actions'>
					<motion.img
						custom={0}
						variants={textAnimation}
						src='https://cdn.dodopizza.info/files/marketing/sources/RUShipping1.jpg'
						width={300}
					></motion.img>
				</div>
				<div className='descriptions'>
					<div className='after__header'>
						<div className='phone__number'>
							<div className='phone'>
								<motion.p custom={1} variants={textAnimation}>
									0 (551) 550 550
								</motion.p>
							</div>
							<div className='phone__description'>
								<motion.p custom={1} variants={textAnimation}>
									Звонок по телефону
								</motion.p>
							</div>
						</div>
						{/* <div className='dodo__coins'>
							<motion.button
								custom={1}
								variants={textAnimation}
								className='button button--outline button--add'
								onClick={handleLogout}
							>
								Выйти
							</motion.button>
						</div> */}
					</div>
					<div className='main__description'>
						<motion.h2 custom={2} variants={textAnimation}>
							Додо пицца доставка пиццы
						</motion.h2>
						<motion.h2 custom={2} variants={textAnimation} className='orange'>
							до вашей двери!
						</motion.h2>
					</div>
					<div className='about__delivery'>
						<motion.div
							className='delivery'
							custom={3}
							variants={textAnimation}
						>
							<img
								src='https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png'
								width={30}
							></img>
							<p>Средняя доставка пиццы 37 минут | 4.5 / 5</p>
						</motion.div>
					</div>
					<div className='first__block'>
						<motion.img
							className='hidde__image'
							custom={4}
							variants={textAnimation}
							src='https://sun9-16.userapi.com/impg/ikgxeyAK_EULsQ03TgFroVOCzdOi6ykQ4QPPxA/cNxZlEHHPC0.jpg?size=807x807&quality=96&sign=5ea9b61358cc3a681a33e35503a70ffa&type=album'
							width={265}
						></motion.img>
						<motion.img
							className='hidden__image'
							custom={5}
							variants={textAnimation}
							src='https://avatars.mds.yandex.net/get-altay/2384894/2a0000017427aad77722ee7669930203d5eb/XXXL '
							width={265}
						></motion.img>
						<motion.img
							custom={6}
							variants={textAnimation}
							src='https://s14.stc.yc.kpcdn.net/share/i/12/10635331/de-1200.jpg'
							width={265}
						></motion.img>
					</div>
				</div>
			</div>
			<PizzasMenu />
		</motion.div>
	)
}

export default Home
