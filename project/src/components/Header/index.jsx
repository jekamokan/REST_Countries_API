import React, { useEffect, useState } from 'react'
import './style.css'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import Container from '../Container'
import { Link } from 'react-router-dom';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toogleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <header className='header'>
      <Container>
        <div className='wrapper'>
          <Link to="/" className='header-title'>Where is the world?</Link>
          <div className='header-switcher' onClick={toogleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size='14px' />
            ) : (
              <IoMoon size='14px' />
            )}
            {theme} Theme
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header