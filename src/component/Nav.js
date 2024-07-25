import React, { useState } from 'react'


export default function Nav() {
	const[menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	}
	return (
		<nav className='nav-bar'>
			<div className='Logo'>

			</div>
		  {/*mobile menu*/}
			<div className="menu-bar" onClick={toggleMenu}>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</div>

			<ul className={`nav-item ${menuOpen ? "visible" : ""}`}>
					<li ><a href='#Home' >Home</a></li>
					<li ><a href='#About'>About</a></li>
					<li ><a href='#Portfolio'>Portfolio</a></li>
			</ul>

		</nav>
	)
}
