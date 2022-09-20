import React from 'react'
import Styles from './SingleAlbumn.module.css'


export default function SingleAlbumn({image, url, title}) {
  return (
    <div className={Styles.container}>
      <a href={url}><img src={image} alt="albumn"/></a>
      <h3>{title}</h3>
    </div>
  )
}
