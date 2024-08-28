import React from 'react'

export default function HeroSection() {
	return (
		<header className='heroSection'>
			<section>
				<div className="imageSection">
					<img alt='' width={355.97} height={562}/>
				</div>
				<div className='textSection'>
					<div className="text">
						<h1>Hi,</h1>
						<h2>I'm Solomon,</h2>
						<p>I'm a <span>Software <br/> Engineer</span></p>
						<div className='btn'>
							<button className="contact-Me"> Contact me </button>
							<button className='view-project'> View my project</button>
						</div>
					</div>
				</div>
			</section>
		</header>
	)
}