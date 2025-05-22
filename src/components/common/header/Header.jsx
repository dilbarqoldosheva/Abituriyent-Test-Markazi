import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Biz haqimizda</Link>
            </li>
            <li>
              <Link to='/courses'>Universitetlar</Link>
            </li>
            <li>
              <Link to='/about'>Natijalar</Link>
            </li>
            <li>
              <Link to='/team'>Galereya</Link>
            </li>
            <li>
              <Link to='/pricing'>Kantakt</Link>
            </li>
            
          </ul>
          <div className='start'>
            <a className="startt" href="https://new.birdarcha.uz/document/b9003fe2-70a3-40bd-9269-f0e5b210fe82"><div className='button'>Guvohnomani olish</div></a>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
