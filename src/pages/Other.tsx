import '../scss/pages/_other.scss'

export const Other = () => {
	return (
		<div className='other__product'>
			<h2 className='content__title'>Другие товары</h2>
			<div className='product'>
				<img src='https://dodopizza-a.akamaihd.net/static/Img/Products/65c0f3ac99b44aed9b92822c735ce1a2_292x292.webp'></img>
				<p>Детская раскраска</p>
				<span>10 coм</span>{' '}
				<button className='button button--outline button--add'>
					<span>Выбрать</span>
				</button>
			</div>
		</div>
	)
}
