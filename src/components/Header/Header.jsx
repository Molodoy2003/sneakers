import React from 'react'
import styles from './Header.module.scss'
import { FaRegHeart } from "react-icons/fa";

const Header = ({onClickDrawer}) => {
	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<img width={40} height={40} src='/img/logo.svg' />
				<div className={styles.headerInfo}>
					<h3>React Sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className={styles.headerRight}>
				<li className={styles.shop} onClick={onClickDrawer}>
					<img width={18} height={18} src='/img/cart.svg' />
					<span>1205 руб.</span>
				</li>
				<li className={styles.user}>
					<FaRegHeart className={styles.like} width={18} height={18} opacity={0.5}/>
				</li>
				<li className={styles.user}>
					<img width={18} height={18} src='/img/user.svg' />
				</li>
			</ul>
		</header>
	)
}

export default Header
