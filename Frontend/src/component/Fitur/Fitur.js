import React from "react"
import "./Fitur.css"
import Data from "./Data"
import Kotak from "./Kotak"

const Fitur = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h1>Saya Menguasai: </h1>
          </div>

          <div className='content grid'>
            {Data.map((val, index) => {
              return <Kotak key={index} title={val.title} desc={val.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Fitur