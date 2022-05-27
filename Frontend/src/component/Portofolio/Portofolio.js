import React from "react"
import "../Portofolio/Portofolio.css"
import Card from "../Portofolio/Kartu"
import Portfolio_data from "../Portofolio/Data_P"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>\
            <h1>Portfolio Saya</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} title={value.title} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio