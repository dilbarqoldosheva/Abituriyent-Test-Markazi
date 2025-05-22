import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='Bilim sari ishonchli qadam' title='Abituriyent Test Xizmati' />
            <p>Abituriyent Test Xizmati — bu abituriyentlarga OTMga kirish testlariga sifatli, tizimli va zamonaviy usulda tayyorlanish imkonini beruvchi o‘quv platforma.</p>
            <div className='button'>
              <button className='primary-btn'>
              HOZIR BOSHLASH <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
              KURSNI KO'RISH <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
