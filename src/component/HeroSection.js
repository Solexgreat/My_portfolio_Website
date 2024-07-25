import React from 'react'

export default function HeroSection() {
	return (
		<div className='heroSection'>
			<div className="imageSection">
				<img alt='' width={355.97} height={562}/>
			</div>
			<div className='textSection'>
				<div className="text">
					<h1>Hi,</h1>
					<h2>I'm Solomon,</h2>
					<p>I'm a <span>Software <br/> Engineer</span></p>
				</div>
				<div className='btn'>
					<div className="contact-Me">
						<button > Contact me</button>
					</div>
					<div className="view-project">
						<button> View my project</button>
					</div>
					
			</div>
			</div>
			
		</div>
	)
}