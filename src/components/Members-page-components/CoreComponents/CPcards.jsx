import React from 'react'
import CoreCard from './CoreCard'

import img1 from '../../../resources/Core_Members_images/1.png'
const ID_list = [
    img1
]
export default function CPcards() {
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
