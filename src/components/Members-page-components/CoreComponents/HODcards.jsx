import React from 'react'
import CoreCard from './CoreCard'

import img1 from '../../../resources/Core_Members_images/20.png'
import img2 from '../../../resources/Core_Members_images/21.png'
import img3 from '../../../resources/Core_Members_images/22.png'
import img4 from '../../../resources/Core_Members_images/23.png'
import img5 from '../../../resources/Core_Members_images/24.png'
import img6 from '../../../resources/Core_Members_images/25.png'
import img7 from '../../../resources/Core_Members_images/26.png'
import img8 from '../../../resources/Core_Members_images/27.png'
import img9 from '../../../resources/Core_Members_images/28.png'
import img10 from '../../../resources/Core_Members_images/29.png'
import img11 from '../../../resources/Core_Members_images/30.png'
import img12 from '../../../resources/Core_Members_images/35.png'
const ID_list = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
]


export default function HODCards() {
    return (
        <>
            <div className='cards-container'>
                {ID_list.map((ele, id) => {
                    return (
                        <CoreCard
                            name="mentor 1"
                            post="Mentor"
                            imgUrl={ele}
                            fb="wwww.google.com"
                            insta="wwww.google.com"
                            linkdin="wwww.google.com"
                            key={id}
                        />
                    )
                })}
            </div>
        </>
    )
}
