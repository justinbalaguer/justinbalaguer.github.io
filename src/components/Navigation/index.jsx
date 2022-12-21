import './style.scss'
import LogoDark from '../../justinbalaguer-dark.svg'
import LogoLight from '../../justinbalaguer-light.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navigation = () => {
  const [themeIcon, setThemeIcon] = useState(faMoon)
  const [themeLogo, setThemeLogo] = useState(LogoDark)

  const toggle = () => {
    document.querySelector('html').getAttribute('data-theme') === 'light' ?
    (document.querySelector('html').setAttribute('data-theme', 'dark'), setThemeIcon(faMoon), setThemeLogo(LogoDark)) :
    (document.querySelector('html').setAttribute('data-theme', 'light'), setThemeIcon(faSun), setThemeLogo(LogoLight))
  }

  return (
    <nav>
      <ul className='image-container'>
        <li>
          <img src={themeLogo} alt='Justin Balaguer logo' />
        </li>
        <li>
          <p>Justin Balaguer</p>
        </li>
      </ul>
      <ul>
        <li>
          <div>
            <FontAwesomeIcon icon={themeIcon} onClick={() => toggle()}/>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation