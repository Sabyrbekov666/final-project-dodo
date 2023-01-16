import { Header } from '../components'
import { Footer } from '../components/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default MainLayout
