import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Itemcard.module.css'

function ItemCard({author, title, notes}) {

  const truncateText = (text) => {
    return text.length > 300 ? text.slice(0, 100) + '...' : text;
  };

  return (
    <>
    <Link style={{textDecoration: "none"}}>
    <div className={styles.itemcardWrapper}>
        <p>{title}</p>
        <p>{truncateText(notes)}</p>
        <p>Dibuat oleh {author}</p>
        <div className={styles.filetypeWrapper}>
            <h1>CSV</h1>
        </div>
    </div>
    </Link>
    </>
  )
}

export default ItemCard