import styles from './NotFoundBlock.module.scss'
import React from 'react'

export const NotFoundBlock: React.FC = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>😕</span>
				<br />
				Ничего не найдено
			</h1>
			<p className={styles.description}>Произошла ошибка при попытке поиска!</p>
		</div>
	)
}
