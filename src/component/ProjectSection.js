import React from 'react'

function ProjectSection() {

	const Cards = Array.from({length: 6}).map((_, index) =>(
		<div key={index} className="card">
		</div>
	))
	return (
		<div className='projectSection'>
			<div className='projectHeader'>
			<h1>Projects</h1>
			</div>
			<div className='projectCards'>
				{Cards}
			</div>

		</div>
	)
}

export default ProjectSection