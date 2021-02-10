import React from 'react'
import styles from './index.module.css'
import image from '../images/blue-origami-bird.png'

const Origam = ({ description, author }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <div className={styles.description}>
        {description}
      </div>
      <div>
        <span className={styles.user}>
          <small>Author: </small>
          {author}
        </span>
      </div>
    </div>
  )
}

export default Origam