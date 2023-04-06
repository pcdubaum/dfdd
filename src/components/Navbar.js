import React from 'react'
import { NavLink }  from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
       
        <NavLink to="/">
            <p className= {styles.black}>Minha <span><b>SAF</b></span></p>
        </NavLink>

        <div className={styles.spaceb}>
        <ul>
            <li>
                <NavLink to="/startingguide">Começando</NavLink>
            </li>
            <li>
                <NavLink to="/championships">Campeonatos</NavLink>
            </li>
            <li>
                <NavLink to="/teams">Clubes</NavLink>
            </li>
            <li>
                <NavLink to="/players">Jogadores</NavLink>
            </li>
            <li>
                <NavLink to="/about">Sobre</NavLink>
            </li>
            <li id={styles.android}>
                <NavLink to="/buy">Android</NavLink>
            </li>
            <li id={styles.facebook}>
            <a href='https://www.facebook.com/MinhaSAF' target="_blank" rel="noreferrer" >Facebook</a>
            </li>
            <li id={styles.youtube}> 
            <a href='https://www.youtube.com/channel/UCXlyCryqlDq3LD0_tQ_pFsg' target="_blank" rel="noreferrer" >YouTube</a>
            </li>
            <li></li>
        </ul>
        </div>
        
    </nav>
  )
}

export default Navbar