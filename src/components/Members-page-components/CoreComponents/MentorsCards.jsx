import React from 'react'
import CoreCard from './CoreCard'

import img1 from '../../../resources/Core_Members_images/31.png'
import img2 from '../../../resources/Core_Members_images/32.png'
import img3 from '../../../resources/Core_Members_images/33.png'
import img4 from '../../../resources/Core_Members_images/34.png'
const ID_list = [
    img1, img2, img3, img4
]

export default function MentorsCards() {
    return (
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
    )
}
