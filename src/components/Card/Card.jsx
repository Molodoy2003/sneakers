import { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import styles from './Card.module.scss'

function Card({ imageUrl, title, price, onPlus }) {
	const [isAdded, setIsAdded] = useState(false)

	const onClickAdded = () => {
		setIsAdded(!isAdded)
		onPlus({ imageUrl, title, price })
	}

	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src='/img/like.svg' alt='Unliked' />
			</div>
			<img width={133} height={112} src={imageUrl} alt='Sneakers' />
			<h5>{title}</h5>
			<div className={styles.cardInfo}>
				<div className={styles.cardPrice}>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<button
					style={{ margin: '10px 20px 0px 0px' }}
					className='button'
					onClick={onClickAdded}
				>
					{isAdded ? (
						<img src='/img/checked.svg'></img>
					) : (
						<BiPlus width={11} height={11} opacity={0.6} />
					)}
				</button>
			</div>
		</div>
	)
}
export default Card
