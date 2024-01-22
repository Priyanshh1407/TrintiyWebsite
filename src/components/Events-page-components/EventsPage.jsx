import React, { useEffect } from 'react'

export default function EventsPage() {
    useEffect(() => {
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }, [])
    return (
        <div className='events-page-container'>
            <h1>COMING SOON</h1>
        </div>
    )
}
