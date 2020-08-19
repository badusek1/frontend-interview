import React from 'react'
import ContactPage from './pages/ContactPage'

import background from './assets/icons/bg.svg';

function App() {
	return (
		<div>
			<ContactPage />
			<img className="bg" src={background} alt="Pozadie" />
		</div>
	)
}

export default App
