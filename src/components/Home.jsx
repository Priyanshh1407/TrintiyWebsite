import Details from './Details'
import { useEffect } from 'react'
import useWindowDimensions from './GetWindowWidth'
import { HomePageBgVid } from './HomePageBgVid'
import Gods_reveal from './Department_reveal-components/Gods_reveal'
import './Department_reveal-components/deprev_card.css'


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
				<main className="hand">
      {/* Render original Gods_reveals */}
      <Gods_reveal Gods_revealClass="hand__polyphemus" cloneClass="hand__polyphemus-clone" />
      <Gods_reveal Gods_revealClass="hand__andromeda" cloneClass="hand__andromeda-clone" />
      <Gods_reveal Gods_revealClass="hand__cerberus" cloneClass="hand__cerberus-clone" />
      <Gods_reveal Gods_revealClass="hand__nyx" cloneClass="hand__nyx-clone" />
      <Gods_reveal Gods_revealClass="hand__horse" cloneClass="hand__horse-clone" />
      <Gods_reveal Gods_revealClass="hand__athena" cloneClass="hand__athena-clone" />
      {/* ... Repeat for other Gods_reveals ...

      {/* Add any additional components or elements here */}
    </main>
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
				<main className="hand">
					{/* <div className="text-animation">DEPARTMENT GODS</div> */}

      <Gods_reveal cardClass="hand__polyphemus" cloneClass="hand__polyphemus-clone" />
      <Gods_reveal cardClass="hand__andromeda" cloneClass="hand__andromeda-clone" />
      <Gods_reveal cardClass="hand__cerberus" cloneClass="hand__cerberus-clone" />
      <Gods_reveal cardClass="hand__nyx" cloneClass="hand__nyx-clone" />
      <Gods_reveal cardClass="hand__horse" cloneClass="hand__horse-clone" />
      <Gods_reveal cardClass="hand__athena" cloneClass="hand__athena-clone" />

    </main>
				
				
			 </div>
		)
	}

}


export default Home