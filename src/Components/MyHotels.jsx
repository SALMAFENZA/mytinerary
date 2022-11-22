import React from 'react'
import "../Styles/myHotels.css"

export default function MyHotels() {
return (
    <>
    <div className='main-myHotels'>
        <div className='acount-myHotels'>
            <div className='name-myHotels'>
                <h1>Have an acount?</h1>
            </div>
            <div>
                <label className='email-password-myHotels'>
                    <input type="email" placeholder='User Mail'/>
                </label>
            </div>
            <div>
                <label className='email-password-myHotels'>
                    <input type="password" placeholder='Password'/>
                </label>
            </div>
            <div>
                <label className='singIng-myHotels'>
                SING IN
                    <input className='' type="button" value="SING IN" />
                </label>
            </div>
        </div>
    </div>
    </>
)
}
