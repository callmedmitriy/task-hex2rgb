import React, { useState, useEffect } from 'react'

import './Colors.scss'

function Colors() {
  
  const [hex, setHex] = useState('#0000ff')
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(255)
  const [error, setError] = useState(false)

  const handleChange = ({target}) => {
    setHex('#'+target.value.substr(1))
  }

  useEffect(() => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      setRed(parseInt(result[1], 16));
      setGreen(parseInt(result[2], 16));
      setBlue(parseInt(result[3], 16));
      setError(false)
    } else {
      setError(true)
    }
  })

  return(
    <div className="wrapper" style={{ backgroundColor: 'rgb('+red+','+green+','+blue+')' }}>
      <form className="form">
        <input type="text" className="input" value={hex} onChange={handleChange}/>
        <span className="span">{error ? 'Ошибка!' : 'rgb('+red+','+green+','+blue+')'}</span>
      </form>
    </div>
  )
}

export default Colors;