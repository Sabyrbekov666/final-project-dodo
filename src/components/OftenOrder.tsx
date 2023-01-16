import '../scss/components/_swiper.css'
import { FC } from 'react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

export const OftenOrder: FC = (): JSX.Element => {
	return (
		<div>
			<div className='ribbon__youLike'>
				<div className=' mt-8 	'>
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
										src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fe70ef7c8468472d8d07fdd2fa4874c6_292x292.webp'
										width={250}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Две пиццы</b>
										</p>
										<p>от 1290 сом</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/0bd7315279e34250b85f45c2526c1b65_292x292.webp'
										width={250}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Додстер</b>
										</p>
										<p>от 179 сом</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/22eead365d6a451eb0e398a6bab07823_292x292.webp'
										width={210}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Пепперони</b>
										</p>
										<p>от 445 сом</p>
									</div>
								</div>{' '}
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/f9c45bf823264d0683bb281e575d8154_292x292.webp'
										width={250}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Маффин</b>
										</p>
										<p>от 198 сом</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/185862584ae2444cb7ae1351a119b4ff_292x292.webp'
										width={250}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Сырники</b>
										</p>
										<p>от 295 сом</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/e2393e247dc64ecbbf23c82243c0a399_292x292.webp'
										width={220}
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
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/8baa3a6169af4f1cbc6c251494cbb917_292x292.webp'
										width={250}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Овощи и гриб</b>
										</p>
										<p>от 445 сом</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{' '}
								<div className='slide__content'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Products/dd4a774484364fa18fcdc0f5dd1b1b28_292x292.webp'
										width={250}
									></img>
									<div className='slide__content-description'>
										<p>
											<b>Ванильный айс</b>
										</p>
										<p>от 205 сом</p>
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
