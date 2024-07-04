import React from 'react'


export default function Nav() {
	return (
		<nav className="nav-bar">
			<div className='Logo'>

			</div>
			<div className='nav-menu'>
				<ul className='nav-item'>
						<li className='nav-list'><a href='#Home' className='nav-link'>Home</a></li>
						<li className='nav-list'><a href='#About' className='nav-link'>About</a></li>
						<li className='nav-list'><a href='#Portfolio' className='nav-link'>Portfolio</a></li>
					</ul>
			</div>
		</nav>
	)
}
