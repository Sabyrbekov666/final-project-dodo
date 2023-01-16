import '../scss/components/_footer.scss'
import { Link } from 'react-router-dom'

export const Footer = () => {
	return (
		<div className='footer'>
			<div className='dodopizza__stock'>
				<div className='stock__container'></div>
			</div>
			<div className='container'>
				<div className='about__dodopizza'>
					<div>
						<h4>Додо пицца</h4>
						<p>О нас</p>
						<p>Додо-книга</p>
						<p>Блог "Сила ума"</p>
						<p>Додо ИС</p>
					</div>
					<div>
						<h4>Работа</h4>
						<p>В пиццерии</p>
					</div>
					<div>
						<h4>Партнёрам</h4>
						<p>Предложить помещение</p>
					</div>
					<div>
						<h4>Это Интересно</h4>
						<p>Почему мы готовим без перчаток?</p>
						<p>Экскурсии и мастер-классы</p>
					</div>
					<div className='contacts'>
						<div className='contacts__icons'>
							звонок по:
							<img
								src='https://cdn.dodostatic.net/static/Img/CallCenterIcons/35a3090c0e41458086520f78ab9f892f.svg'
								width={30}
							></img>
							<img
								src='https://cdn.dodostatic.net/static/Img/CallCenterIcons/092d276870e24dacaeb098fb1768d585.svg'
								width={25}
							></img>
							<img src='https://cdn.dodostatic.net/static/Img/CallCenterIcons/d2a8e028a02042b6b72ff780d9fdbdd8.svg'></img>
						</div>
						<h2>0 (551) 550 550</h2>
						<span>feedback@dodopizza.kg</span>
					</div>
				</div>
				<div className='about__payment'>
					<div className='payment'>
						<p>Принимаем к оплате:</p>
						<img src='https://dodopizza-a.akamaihd.net/site-static/dist/aec84a569e79a4696301.png'></img>
					</div>
				</div>
				<hr></hr>
				<div className='about-legal__information'>
					<span>DODOPIZZA © 2023 Правовая информация</span>
					<div>
						<Link to='https://www.facebook.com/dodopizzakg'>
							<img src='https://i.pinimg.com/474x/96/e4/a8/96e4a8fe94354ade535f4ee784085d73.jpg'></img>
						</Link>
						<Link to='https://www.instagram.com/dodopizzakg/'>
							<img src='https://thumbs.dreamstime.com/b/instagram-icon-filled-website-design-mobile-app-development-social-collection-isolated-black-background-155364050.jpg'></img>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
