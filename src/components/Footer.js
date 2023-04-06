import React from 'react'
import { NavLink }  from 'react-router-dom'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={styles.footercontainer}>
        <div>
          <h1><NavLink to="/privacy">Política de Privacidade</NavLink></h1>
        </div>
        <div><h1>Contato</h1></div>
      </div>
    </footer>
  )
}

export default Footer