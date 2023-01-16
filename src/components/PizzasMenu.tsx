import '../scss/components/_swiper.css'
import { FC } from 'react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

export const PizzasMenu: FC = (): JSX.Element => {
	return (
		<div>
			<div className='ribbon__youLike'>
				<div className=' mt-8 '>
					<h1>Меню пицц:</h1>
					<div className=' mt-6'>
						<Swiper
							slidesPerView={4}
							spaceBetween={4}
							slidesPerGroup={4}
							loop={true}
							loopFillGroupWithBlank={true}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className='mySwiper'
						>
							<SwiperSlide>
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/22eead365d6a451eb0e398a6bab07823_292x292.webp'
										width={215}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Пепперони</b>
										</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/5235270a2b6049a7b350350f8a170390_292x292.webp'
										width={215}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Сырный цыпленок</b>
										</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/ebbfdf6f8fa74935af77b784a1ff2e1d_292x292.webp'
										width={215}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Аррива!</b>
										</p>
									</div>
								</div>{' '}
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/d0c76679a4a34891b35635ec6803b8d5_292x292.webp'
										width={215}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Цыпленок барбекю</b>
										</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/02dc29c27c294172839bcee0f06cb4db_292x292.webp'
										width={215}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Четыре сыра</b>
										</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/e2393e247dc64ecbbf23c82243c0a399_292x292.webp'
										width={215}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Сырная</b>
										</p>
										<p>от 295 сом</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/a5fbe87430b943b7833e632e94807355_292x292.webp'
										width={215}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Азиатская</b>
										</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/4f760d108a3f47fea43520d234157ac2_292x292.webp'
										width={215}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Жгучая пепперони</b>
										</p>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}
