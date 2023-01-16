import '../scss/pages/_action.scss'

export const Action = () => {
	return (
		<div className='action__container'>
			<h1>Акции</h1>
			<div className='actions'>
				<div className='free__coke'>
					<img src='https://cdn.dodostatic.net/static/Img/BonusActionBanners/Gallery/0340c406610d40c3ae0b6a43132d88dd.jpeg'></img>
					<p className='action__title'>
						Coca-Cola 1,5 л в подарок при заказе любых 2-х пицц на доставку
					</p>
					<p className='action__description'>
						Закажите 2 любые пиццы и получите гарантированный подарок 1,5л Coca
						Cola. Промокод B2. Акция не действует при заказе комбо и с другими
						акциями по промокоду. Только на доставку.
					</p>
				</div>
				<div className='cheese__side'>
					<img src='https://cdn.dodostatic.net/static/Img/BonusActionBanners/Gallery/g_1624938214_227a000f010c4b66919f6199fdf49cdd.jpeg'></img>
					<p className='action__title'>Сырный бортик</p>
					<p className='action__description'>
						Сыра много не бывает. Добавьте в бортик яркий сыр чеддер и
						наслаждайтесь любимой пиццей до последней крошки. Доступен для всех
						пицц 30 и 35 см, кроме пиццы Четыре сезона, пиццы из половинок и
						сладких пицц.
					</p>
				</div>
			</div>
		</div>
	)
}
