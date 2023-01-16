import { CartItem, CartEmpty } from '../components'
import { selectCart } from '../redux/cart/selectors'
import { clearItems } from '../redux/cart/slice'
import '../scss/components/_cart.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart: React.FC = () => {
	const dispatch = useDispatch()
	const { totalPrice, items } = useSelector(selectCart)

	const totalCount = items.reduce(
		(sum: number, item: any) => sum + item.count,
		0
	)

	const onClickClear = () => {
		if (window.confirm('Очистить корзину?')) {
			dispatch(clearItems())
		}
	}

	if (!totalPrice) {
		return <CartEmpty />
	}

	return (
		<div className='container container--cart'>
			<div className='cart'>
				<div className='cart__content__count'>
					<div className='cart__counter'>
						<h2>
							{totalCount} товар на {totalPrice} сом{' '}
						</h2>
					</div>
					<div onClick={onClickClear} className='cart__clear'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/240px-Grey_close_x.svg.png'
							width={20}
						></img>
					</div>
				</div>
				<div className='content__items'>
					{items.map((item: any) => (
						<CartItem key={item.id} {...item} />
					))}
				</div>
				<div className='cart__bottom-buttons'>
					<Link
						to='/pizzas'
						className='button button--outline button--add go-back-btn'
					>
						<svg
							width='8'
							height='14'
							viewBox='0 0 8 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7 13L1 6.93015L6.86175 1'
								stroke='#D3D3D3'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
						</svg>

						<span>Вернуться назад</span>
					</Link>
					<div className='button pay-btn'>
						<span>Оплатить сейчас</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
