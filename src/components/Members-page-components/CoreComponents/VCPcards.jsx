import React from 'react'
import CoreCard from './CoreCard'
import img1 from '../../../resources/Core_Members_images/4.png'
import img2 from '../../../resources/Core_Members_images/5.png'
import img3 from '../../../resources/Core_Members_images/6.png'
import img4 from '../../../resources/Core_Members_images/7.png'
import img5 from '../../../resources/Core_Members_images/8.png'
import img6 from '../../../resources/Core_Members_images/9.png'
import img7 from '../../../resources/Core_Members_images/10.png'
import img8 from '../../../resources/Core_Members_images/11.png'
import img9 from '../../../resources/Core_Members_images/12.png'
const ID_list1 = [
    img1, img2, img3
]
const ID_list2 = [
    img4, img5, img6
]
const ID_list3 = [
    img7, img9, img8
]
export default function VCPcards() {
    return (
        <>
            <div className='cards-container'>
                {ID_list1.map((ele, id) => {
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
            <div className='cards-container'>
                {ID_list2.map((ele, id) => {
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
            <div className='cards-container'>
                {ID_list3.map((ele, id) => {
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
