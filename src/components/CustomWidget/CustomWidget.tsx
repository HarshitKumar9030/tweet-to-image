import './CustomWidget.css';
import { useState, useEffect } from 'react';
import React from 'react'

const CustomWidget = () => {

    const [Enabled, setEnabled] = useState(false)
    const [fadeOut, setfadeOut] = useState('fadeIn')

    useEffect(() => {
        console.log('rendering')
    }, [Enabled])

    const handlefade = () => {
        setEnabled(!Enabled)
        if (Enabled) {
            setfadeOut('fadeOut')
        }else{
            setfadeOut('fadeIn')
        }
    }
    return (
        <>
            <div onClick={handlefade} className='main-widget'>
            </div>
            {Enabled && <div className={`widget-enabled ${fadeOut}`}>
                <a href="https://www.harshitkumar.tech"><img className='radius' width={400} height={200} src="https://i.imgur.com/kS3iyT6_d.webp?maxwidth=760&fidelity=grand" alt="site-preview" /></a>
            </div>}
        </>
    )
}

export default CustomWidget;