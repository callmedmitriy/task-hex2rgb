import React, { useState, useEffect } from 'react'

import './Colors.scss'

function Colors() {
  
  const [hex, setHex] = useState('#0000ff')
  const [rgb, setRgb] = useState('0,0,0')
  const [error, setError] = useState(false)

  const handleChange = ({target}) => {
    setHex('#'+target.value.substr(1))
  }

  useEffect(() => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      setRgb(parseInt(result[1], 16)+','+parseInt(result[2], 16)+','+parseInt(result[3], 16))
      setError(false)
    } else {
      setError(true)
    }
  })

  return(
    <div className="wrapper" style={{ backgroundColor: 'rgb('+rgb+')' }}>
      <form className="form">
        <input type="text" className="input" value={hex} onChange={handleChange}/>
        <span className="span">{error ? 'Ошибка!' : 'rgb('+rgb+')'}</span>
      </form>
    </div>
  )
}

export default Colors;