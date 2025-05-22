import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ATX</h1>   
            {/* <span>Abituriyent Test Xizmati</span> */}
          </div>
          <div className='social'>
            <a href=""><i className='fab fa-facebook-f icon'></i></a>
           <a href="https://www.instagram.com/ATX_2019/"> <i className='fab fa-instagram icon'></i></a>
            <a href="https://www.t.me/ATX_UZ"><i className='fab fa-telegram icon'></i></a>
           <a href=""> <i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
