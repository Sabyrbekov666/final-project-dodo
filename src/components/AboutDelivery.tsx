import '../scss/components/_about-delivery.scss'
import { Link } from 'react-router-dom'

export const AboutDelivery = () => {
	return (
		<div className='about__delivery'>
			<h2>Доставка и оплата</h2>
			<div className='delivery'>
				<div className='free__pizza'>
					<p className='orange__title'>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</p>
					<p>
						Если мы не успеем доставить любые продукты, кроме сувенирной
						продукции и соусов, в течение 60 минут, курьер подарит вам
						сертификат на большую пиццу.
					</p>
				</div>
				<div className='max__min__time'>
					<div className='min__time'>
						<p className='orange__title'>365 СОМ</p>
						<p>Минимальная сумма доставки</p>
					</div>
					<div className='max__time'>
						<p className='orange__title'>25 000 СОМ</p>
						<p>Максимальная сумма при оплате наличными</p>
						<p>Изображения продуктов могут отличаться от продуктов в заказе.</p>
					</div>
				</div>
				<div className='delivery__area'>
					<p className='orange__title'>ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</p>
					<Link to='https://yandex.ru/maps/10309/bishkek/?ll=74.594459%2C42.857014&mode=usermaps&source=constructorLink&um=constructor%3A3a93abb59fdca673ae328e5e6fe4195b8b300c58a88f60fcf24e83331e094895&z=12.6'>
						<img src='https://dodopizza-a.akamaihd.net/site-static/dist/fcd1f4fda959e86e45a7.jpg'></img>
					</Link>
				</div>
			</div>
		</div>
	)
}
