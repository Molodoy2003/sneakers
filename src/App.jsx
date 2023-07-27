import { useEffect, useRef, useState } from 'react'
import { FiX } from 'react-icons/fi'
import Card from './components/Card/Card'
import Drawer from './components/Drawer/Drawer'
import Header from './components/Header/Header'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [cartOpened, setCartOpened] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const inputRef = useRef()

	useEffect(() => {
		fetch('https://64c1046cfa35860bae9fc798.mockapi.io/items')
			.then(res => res.json())
			.then(json => setItems(json))
	}, [])

	const onAddToCart = obj => {
		setCartItems(prev => [...prev, obj])
	}

	const onClickDrawer = () => {
		setCartOpened(!cartOpened)
	}

	const onChangeInput = e => {
		setSearchValue(e.target.value)
	}

	const onClearInput = () => {
		setSearchValue('')
		inputRef.current.focus()
	}

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<Drawer
					onClickDrawer={onClickDrawer}
					cartItems={cartItems}
					setCartItems={setCartItems}
				/>
			)}
			<Header onClickDrawer={onClickDrawer} />
			<div className='content'>
				<div className='card-wrapper'>
					<h1>Все кроссовки</h1>
					<div className='search-block'>
						<img src='/img/search.svg' alt='Search' />
						<input
							ref={inputRef}
							placeholder='Поиск...'
							onChange={onChangeInput}
							value={searchValue}
						/>
						{searchValue && (
							<FiX
								onClick={onClearInput}
								style={{ marginTop: '15px', cursor: 'pointer' }}
								opacity={0.6}
							/>
						)}
					</div>
				</div>

				<div style={{ display: 'flex', flexWrap: 'wrap' }}>
					{items
						.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
						.map((item, index) => (
							<Card
								key={index}
								title={item.title}
								price={item.price}
								imageUrl={item.imageUrl}
								onClick={() => console.log(item)}
								onPlus={item => onAddToCart(item)}
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export default App
