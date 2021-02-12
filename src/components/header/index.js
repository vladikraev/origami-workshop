import React from 'react'
import styles from './index.module.css'
import Link from '../link'
import logo from '../../images/white-origami-bird.png'
import getNavigation from '../../utils/navigation'

const Header = () => {
  const links = getNavigation()
  return (
    <header className={styles.navigation}>
      <img className={styles.logo} src={logo} />
      {
        links.map(navElement => {
          return (
            <Link
              key={navElement.title}
              href={navElement.link}
              title={navElement.title}
              type="header"
            />
          )
        })
      }
    </header >
  )
}

export default Header