import { selectCartItemById } from '../../redux/cart/selectors'
import { addItem } from '../../redux/cart/slice'
import { CartItem } from '../../redux/cart/types'
import { useMotionValue, useTransform, motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const typeNames = ['тонкое', 'традиционное']

type PizzaBlockProps = {
	id: string
	title: string
	description: string
	price: number
	imageUrl: string
	sizes: number[]
	types: number[]
	rating: number
}

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
	id,
	title,
	description,
	price,
	imageUrl,
	sizes,
	types,
}) => {
	const dispatch = useDispatch()
	const cartItem = useSelector(selectCartItemById(id))
	const [activeType, setActiveType] = React.useState(0)
	const [activeSize, setActiveSize] = React.useState(0)

	const addedCount = cartItem ? cartItem.count : 0

	const onClickAdd = () => {
		const item: CartItem = {
			id,
			title,
			price,
			imageUrl,
			type: typeNames[activeType],
			size: sizes[activeSize],
			count: 0,
		}
		dispatch(addItem(item))
	}

	const x = useMotionValue(0)
	const y = useMotionValue(0)
	const rotateX = useTransform(y, [100, -100], [30, -30])
	const rotateY = useTransform(y, [-100, 100], [-30, 30])

	return (
		<div style={{ perspective: 2000 }}>
			<motion.div
				className='pizza-block-wrapper'
				style={{ x, y, rotateX, rotateY, z: 100 }}
				drag
				dragElastic={0.18}
				dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
				whileTap={{ cursor: 'grabbing' }}
			>
				<div className='pizza-block'>
					<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
					<h4 className='pizza-block__title'>{title}</h4>
					<span>{description}</span>
					<div className='pizza-block__selector'>
						<ul>
							{types.map(typeId => (
								<li
									key={typeId}
									onClick={() => setActiveType(typeId)}
									className={activeType === typeId ? 'active' : ''}
								>
									{typeNames[typeId]}
								</li>
							))}
						</ul>
						<ul>
							{sizes.map((size, i) => (
								<li
									key={size}
									onClick={() => setActiveSize(i)}
									className={activeSize === i ? 'active' : ''}
								>
									{size} см.
								</li>
							))}
						</ul>
					</div>
					<div className='pizza-block__bottom'>
						<div className='pizza-block__price'>от {price} сом</div>
						<button
							onClick={onClickAdd}
							className='button button--outline button--add'
						>
							<span>В корзину</span>
							{addedCount > 0 && <i>{addedCount}</i>}
						</button>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
