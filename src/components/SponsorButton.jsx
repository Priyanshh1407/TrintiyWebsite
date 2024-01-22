import '../index.css'

function SponsorButton() {
	return (
		<div className='sponsor-buttons'>
			<a
				style={{ backgroundColor: 'silver' }}
				className='sponsorSideBtns'
				href='#platinum'
			>
				Platinum
			</a>
			<a
				style={{ backgroundColor: 'gold' }}
				className='sponsorSideBtns'
				href='#gold'
			>
				Gold
			</a>
			<a
				style={{ backgroundColor: 'grey' }}
				className='sponsorSideBtns'
				href='#silver'
			>
				Silver
			</a>
			<a
				style={{ backgroundColor: 'brown' }}
				className='sponsorSideBtns'
				href={'#bronze'}
			>
				Bronze
			</a>
		</div>
	)
}
export default SponsorButton
