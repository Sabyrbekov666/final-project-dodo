import '../scss/pages/_about.scss'
import { motion } from 'framer-motion'

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

export const About = () => {
	return (
		<motion.div
			className='about-us__content'
			initial='hidden'
			whileInView='visible'
		>
			<div className='about__us'>
				<motion.h1 custom={0} variants={textAnimation}>
					Мы
				</motion.h1>
				<div className='about'>
					<motion.div
						className='description__about'
						custom={1}
						variants={textAnimation}
					>
						<p>
							Обычно люди приходят в Додо Пиццу, чтобы просто поесть. Наши
							промоутеры раздают листовки про кусочек пиццы или ещё что-то
							выгодное. Мы делаем это как первый шаг, чтобы познакомиться.
						</p>
						<p>
							Но для нас Додо — не только пицца. Это и пицца тоже, но в первую
							очередь это большое дело, которое вдохновляет нас, заставляет
							каждое утро просыпаться и с интересом продолжать работу.
						</p>
					</motion.div>
				</div>
			</div>
			<div className='why__dodo'>
				<motion.h1 custom={2} variants={textAnimation}>
					Почему додо?
				</motion.h1>
				<motion.div
					custom={3}
					variants={textAnimation}
					className='why-dodo__images'
				>
					<img
						src='https://www.macmillandictionary.com/external/slideshow/full/Dodo_full.jpg'
						width={500}
					></img>
					<img
						src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/cdf09d44083949.5807485df2440.jpg'
						width={500}
					></img>
				</motion.div>
				<div className='why-dodo__description'>
					<p>
						Знаете почему мы называемся в честь этой странной птицы? Додо, или
						маврикийские дронты, были очень доверчивыми и наивными, и вымерли в
						конце семнадцатого века с приходом колонизаторов. Жаль, что
						маврикийские дронты не дожили до сегодняшнего дня. Мы уверены:
						сейчас доверие, отзывчивость и открытость — серьёзные конкурентные
						преимущества. Именно благодаря открытости и доверию, мы смогли за
						семь лет стать самой крупной сетью пиццерий в России. Звучит как
						парадокс, но мы видим в этом закономерность. Мы хотим жить и
						работать в мире, где люди доверяют друг другу. Мы создаём такой мир,
						делая очень простой и приземлённый продукт: пиццу. Это лишь способ
						жить так, как мы хотим!
						<img
							src='https://dodopizza-a.akamaihd.net/site-static/dist/b4badae461fde32f136b.png'
							width={300}
						></img>
					</p>
				</div>
				<div className='halal-mode'>
					<img src='https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg'></img>
					<div className='halal-mode__description'>
						<p>Без свинины</p>
						<p className='p-gray'>Мы готовим из говядины и цыпленка</p>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
