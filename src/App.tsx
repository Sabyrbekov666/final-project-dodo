import { Header } from './components'
import { Login } from './components/Auth/login'
import { Register } from './components/Auth/register'
import MainLayout from './layouts/MainLayout'
import { About } from './pages/About'
import { Action } from './pages/Action'
import { Combo } from './pages/Combo'
import { Contacts } from './pages/Contacts'
import { Desserts } from './pages/Desserts'
import { Dodocoins } from './pages/Dodocoins'
import { Drinks } from './pages/Drinks'
import Home from './pages/Home'
import { Other } from './pages/Other'
import { Pizzas } from './pages/Pizzas'
import { Snacks } from './pages/Snacks'
import './scss/app.scss'
import React, { Suspense } from 'react'
import Loadable from 'react-loadable'
import { Routes, Route, Navigate } from 'react-router-dom'

const Cart = Loadable({
	loader: () => import('./pages/Cart'),
	loading: () => <div>Идёт загрузка корзины...</div>,
})

const FullPizza = React.lazy(() => import('./pages/FullPizza'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

function App() {
	const user = localStorage.getItem('token')

	return (
		<Routes>
			{user && (
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<Home />} />
					<Route
						path='cart'
						element={
							<Suspense fallback={<div>Идёт загрузка корзины...</div>}>
								<Cart />
							</Suspense>
						}
					/>
					<Route
						path='combo'
						element={
							<Suspense>
								<Combo />
							</Suspense>
						}
					/>
					<Route
						path='pizzas'
						element={
							<Suspense>
								<Pizzas />
							</Suspense>
						}
					/>
					<Route
						path='snacks'
						element={
							<Suspense>
								<Snacks />
							</Suspense>
						}
					/>
					<Route
						path='dodocoins'
						element={
							<Suspense>
								<Dodocoins />
							</Suspense>
						}
					/>
					<Route
						path='desserts'
						element={
							<Suspense>
								<Desserts />
							</Suspense>
						}
					/>
					<Route
						path='drinks'
						element={
							<Suspense>
								<Drinks />
							</Suspense>
						}
					/>
					<Route
						path='other'
						element={
							<Suspense>
								<Other />
							</Suspense>
						}
					/>
					<Route
						path='action'
						element={
							<Suspense>
								<Action />
							</Suspense>
						}
					/>
					<Route
						path='contacts'
						element={
							<Suspense>
								<Contacts />
							</Suspense>
						}
					/>
					<Route
						path='about'
						element={
							<Suspense>
								<About />
							</Suspense>
						}
					/>
					<Route
						path='pizza/:id'
						element={
							<Suspense>
								<FullPizza />
							</Suspense>
						}
					/>
					<Route
						path='*'
						element={
							<Suspense>
								<NotFound />
							</Suspense>
						}
					/>
				</Route>
			)}
			<Route path='/' element={<Navigate replace to='/login' />} />
			<Route
				path='register'
				element={
					<Suspense>
						<Register />
					</Suspense>
				}
			/>
			<Route
				path='login'
				element={
					<Suspense>
						<Login />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default App
