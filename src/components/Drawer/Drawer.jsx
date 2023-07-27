import { useEffect, useState } from 'react'
import styles from './Drawer.module.scss'

function Drawer({ onClickDrawer, cartItems = [], setCartItems }) {

	// useEffect(() => {
	// 	fetch('https://64c1046cfa35860bae9fc798.mockapi.io/cart')
	// 		.then(res => res.json())
	// 		.then(json => setCartItems(json))
	// }, [])

	return (
		<div className={styles.overlay}>
			<div className={styles.drawer}>
				<h2 className={styles.cart}>
					Корзина{' '}
					<img
						src='/img/remove.png'
						width={15}
						height={15}
						alt='Remove'
						onClick={onClickDrawer}
					/>
				</h2>

				<div className={styles.cartItems}>
					{cartItems.map(item => (
						<div className={styles.cartItem}>
							<div>
								<img
									src={item.imageUrl}
									alt='sn1'
									width={80}
									height={80}
								/>
							</div> 

							<div className={styles.cartInfo}>
								<p>{item.title}</p>
								<b>{item.price} руб.</b>
							</div>
							<img
								className={styles.removeImg}
								src='/img/remove.png'
								alt='Remove'
							/>
						</div>
					))}
				</div>

				<div className={styles.cartTotal}>
					<ul>
						<li className={styles.total}>
							<span>Итого:</span>
							<div></div>
							<b>21 498 руб. </b>
						</li>
						<li className={styles.tax}>
							<span>Налог 5%:</span>
							<div></div>
							<b>1074 руб. </b>
						</li>
					</ul>
					<button className='greenButton'>Оформить заказ</button>
				</div>
			</div>
		</div>
	)
}

export default Drawer
