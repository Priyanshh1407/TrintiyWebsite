import Details from './Details'
import { useEffect } from 'react'
import useWindowDimensions from './GetWindowWidth'
import { HomePageBgVid } from './HomePageBgVid'
// import Department_reveal from './Department-components/Department_reveal';


function Home() {
	useEffect(() => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}, [])

	const { width } = useWindowDimensions();
	if (width <= 500) {
		return (
			<div className='home-page-main-container'>
				<HomePageBgVid />
				<div className='home-page-text'>
					<div>
						<h1 className='TrinityTextAnimation'>TRINITY</h1>
					</div>
					<div >
						<h1 className="expTheThrill">Experience the Thrill</h1>
					</div>
				</div>
				<Details />
				{/* <Department_reveal/> */}
			</div>
		)
	}
	else {
		return (
			<div className='home-page-main-container'>
				<HomePageBgVid />
				<div className='home-page-text'>
					<div>
						<h1 className='TrinityTextAnimation'>TRINITY</h1>
					</div>
					<div >
						<h1 className="expTheThrill">Experience the Thrill</h1>
					</div>
				</div>
				<Details />
				{/* <Department_reveal/> */}
			</div>
		)
	}

}


export default Home