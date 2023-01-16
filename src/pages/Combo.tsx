import '../scss/pages/_combo.scss'

export const Combo = () => {
	return (
		<div className='combo__container'>
			<h1 className='combo__title'>Комбо</h1>
			<div className='combos'>
				<div className='combo'>
					<img src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/6dec535255c0444abdae131fe0c72cc7_292x292.webp'></img>
					<p className='combo__title'>2 пиццы и напиток</p>
					<p className='combo__description'>
						2 пиццы 25 см, напиток на выбор 1л. Для компании из 2–4 человек
					</p>
					<div className='combo__price__add-cart'>
						<p className='combo__price'>885 coм</p>
						<button className='button button--outline button--add'>
							<span>Выбрать</span>
						</button>
					</div>
				</div>
				<div className='combo'>
					<img src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fe70ef7c8468472d8d07fdd2fa4874c6_292x292.webp'></img>
					<p className='combo__title'>2 пиццы</p>
					<p className='combo__description'>
						Самое популярное комбо из 2 пицц 30 см. Большой выбор
					</p>
					<div className='combo__price__add-cart'>
						<p className='combo__price'>1095 coм</p>
						<button className='button button--outline button--add'>
							<span>Выбрать</span>
						</button>
					</div>
				</div>
				<div className='combo'>
					<img src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/2b42c40263984bce80abf7ddd1b882a4_292x292.webp'></img>
					<p className='combo__title'>3 пиццы</p>
					<p className='combo__description'>
						3 пиццы 30 см на любой вкус. Для компании из 5–10 человек
					</p>
					<div className='combo__price__add-cart'>
						<p className='combo__price'>1645 coм</p>
						<button className='button button--outline button--add'>
							<span>Выбрать</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
