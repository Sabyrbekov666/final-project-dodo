import './_modal.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Modal() {
	const [modal, setModal] = useState(false)

	const toggleModal = () => {
		setModal(!modal)
	}

	if (modal) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}

	const [fix, setFix] = useState(false)

	function setFixedSidebar() {
		if (window.scrollY >= 500) {
			setFix(true)
		} else {
			setFix(false)
		}
	}
	return (
		<>
			<button onClick={toggleModal} className='btn-modal'>
				Open
			</button>

			{modal && (
				<div className='modal'>
					<div onClick={toggleModal} className='overlay'></div>
					<div className='modal-content'>
						<nav className='nav'>
							<ul className={fix ? 'nav__conteiner.fixed' : 'nav__container'}>
								<li className='nav__items'>
									<Link to='/' className='nav__item'>
										Пиццы
									</Link>
								</li>
								<li className='nav__items'>
									<Link to='/combo' className='nav__item'>
										Комбо
									</Link>
								</li>
								<li className='nav__items'>
									<Link to='/snacks' className='nav__item'>
										Закуски
									</Link>
								</li>
								<li className='nav__items'>
									<Link to='/desserts' className='nav__item'>
										Десерты
									</Link>
								</li>
								<li className='nav__items'>
									<Link to='/drinks' className='nav__item'>
										Напитки
									</Link>
								</li>
								<li className='nav__items'>
									<Link to='/other' className='nav__item'>
										Другие товары
									</Link>
								</li>
								<li className='nav__items'>
									<Link to='/action' className='nav__item'>
										Акции
									</Link>
								</li>
								<li className='nav__items'>
									<Link to='/contacts' className='nav__item'>
										Контакты
									</Link>
								</li>
								<li className='nav__items'>
									<Link to='/about' className='nav__item'>
										О нас
									</Link>
								</li>
							</ul>
						</nav>
						<button className='close-modal' onClick={toggleModal}>
							CLOSE
						</button>
					</div>
				</div>
			)}
		</>
	)
}
