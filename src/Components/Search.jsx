import React from 'react'

export default function Search(props) {
    console.log(props)
let searchRef = props.search


  return (
    <div>
        <label className='inputs'>Serch Here</label>
<input ref={searchRef} className='search' type="text" onChange={searchRef}/>
</div>
  )
}
