import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

import '../CSS/footer.css'

const Footer = () => {
	return (
		<div className='footer-box'>
			<div className='footerContainer'>
				<div className='footerRow'>
					<div className='column'>
						<p className='heading'>About Us</p>
						<p className='footerDesc'>
							SVKM's Dwarkadas J. Sanghvi College of Engineering's Official festival -
							Mumbai
						</p>
					</div>
					<div className='column'>
						<div>
							<p className='heading'>Address</p>
							<p className='footerDesc'>
								SVKM's Dwarkadas J. Sanghvi College of Engineering, Vile Parle West,
								Mumbai-400056
							</p>
						</div>
						<div>
							<p className='heading'>Contact</p>
							<div className='footerDesc'>
								<a
									href='mailto:djscetrinity@gmail.com'
									target='_blank'
									rel='noreferrer'
								>
									djscetrinity@gmail.com
								</a>
								<p>
									Farhan Mahida: <a href='tel:+91 8452885193'>+91 8452885193</a>
								</p>
							</div>
						</div>
					</div>
					<div className='column footer-links'>
						<p className='heading'>Links</p>
						<Link className='footerLinks' to='/'>
							Home
						</Link>
						<Link className='footerLinks' to='/about'>
							About
						</Link>

						<Link className='footerLinks' to='/team'>
							Team
						</Link>

						<a className='footerLinks' href='https://idpt-leaderboard.web.app/'>
							Leaderboard
						</a>

						<div className='footerLinks'>
							<Dropdown>
								<Dropdown.Toggle variant='success' id='eventsDropDown'>
									Events
								</Dropdown.Toggle>
								<Dropdown.Menu id='dropDownItems'>
									<Dropdown.Item id='dropDownItem'>
										<Link to='/sports'>SPORTS</Link>
									</Dropdown.Item>
									<Dropdown.Item id='dropDownItem'>
										<Link to='/cultural'>CULTURAL</Link>
									</Dropdown.Item>
									<Dropdown.Item id='dropDownItem'>
										<Link to='/technical'>TECHNICAL</Link>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<Link className='footerLinks' to='/sponsors'>
							Sponsors
						</Link>
						<Link className='footerLinks' to='/gallery'>
							Gallery
						</Link>
						<Link className='footerLinks' to='/contact'>
							Contact Us
						</Link>
					</div>
					<div className='column'>
						<p className='heading'>Follow Us</p>
						<div className='socialsList'>
							<a
								title='Instagram'
								href='https://www.instagram.com/djsce.trinity'
								target='_blank'
								rel='noreferrer'
								className='footerLinks'
							>
								<InstagramIcon />
							</a>
							<a
								title='Facebook'
								href='https://www.facebook.com/people/Djsce-Trinity/100005340645201/'
								target='_blank'
								rel='noreferrer'
								className='footerLinks'
							>
								<FacebookIcon />
							</a>
							<a
								title='Twitter'
								href='https://twitter.com/djscetrinity'
								target='_blank'
								rel='noreferrer'
								className='footerLinks'
							>
								<TwitterIcon />
							</a>
							<a
								title='YouTube'
								href='https://www.youtube.com/@djscetrinity1543/videos'
								target='_blank'
								rel='noreferrer'
								className='footerLinks'
							>
								<YouTubeIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
