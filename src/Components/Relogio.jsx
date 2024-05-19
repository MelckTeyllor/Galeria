import React, { useState, useEffect } from 'react'; 
import "./Relogio.css"

function Relogio() { 

  const [hora, setHora] = useState(new Date().toLocaleTimeString()); 

  

  useEffect(() => { 

    const interval = setInterval(() => { 

      setHora(new Date().toLocaleTimeString()); 

    }, 1000); 

  

    return () => clearInterval(interval); 

  }, []); 

  

  return ( 

    <div> 

      <h2 className='title'>Relógio Digital</h2> 

      <p className="time">{hora}</p> 

    </div> 

  ); 

} 

  

export default Relogio; 