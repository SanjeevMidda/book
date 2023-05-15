import React, { useState } from 'react'
import upArrow from "../images/up.svg"
import downArrow from "../images/down.svg"

function Book({letter}) {

    const [state, setState] = useState(true);

  return (
    <div className={state? "book" : "book bookTransformed"} onClick={() => {setState(!state)}}>

        <img src={upArrow} alt="up arrow" className={state? null : "imgRotate"}/>

        {
            state? <><h1>{letter}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est, nostrum dolorum, ea praesentium tenetur quo, deserunt doloribus consequatur reprehenderit illum reiciendis. Eos dolorem illo, nemo assumenda necessitatibus maxime consequatur.</p></> : null
        }
        

    </div>
  )
}

export default Book