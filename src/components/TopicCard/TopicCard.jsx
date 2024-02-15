import React from 'react'
import styles from './TopicCard.module.css'

function TopicCard({name, img}) {
  return (
    <div className={styles.cardWrapper}>
      <img src={img} alt="Ilustration" />
      <h6>{name}</h6>
    </div>
  )
}

export default TopicCard