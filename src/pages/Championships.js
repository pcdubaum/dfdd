import React from 'react'
import styles from '../components/MainContent.module.css'

const Championships = () => {
  return (
    <section>
       <div className={styles.mainContainer}>
      <h1>Campeonatos</h1>
      <h2>Campeonatos Estaduais</h2>
      <p>Campeonatos Estaduais são os campeonatos mais tradicionais do Brasil, esses campeonatos, dentro do jogo Minha SAF, tem as seguintes caracteristicas:</p>
      <ul id={styles.goldenrod}>
        <li id={styles.goldenrod}>Número de Rodadas:<span id = {styles.white}> Possuem 15 rodadas, sendo 12 rodadas de fase de grupos onde todos se enfrentam, somados mais duas rodadas de Semi Finais, onde os melhores colocados tem
         o beneficio do empate, mais 2 rodadas de Finais, com disputa de penautis em caso de dois empates.</span></li>
        <li id={styles.goldenrod}>Premiação: 

          <ul id={styles.green}>
            <li id={styles.green}>Campeão:<span id = {styles.white}> Possuem 15 rodadas, sendo 12 rodadas de fase de grupos onde todos se enfrentam, somados mais duas rodadas de Semi Finais, onde os melhores colocados tem
              o beneficio do empate, mais 2 rodadas de Finais, com disputa de penautis em caso de dois empates.</span></li>
            <li id={styles.green}>Vice Campeão: <span id = {styles.white}>- A SAF recebe 4 aportes anuais de 60MJ, CT nível 4 e Staff nível 5.</span></li>
            <li id={styles.green}>3º e 4º Colocados: <span id = {styles.white}>- A SAF recebe 4 aportes anuais de 30M, CT nível 2 e Staff nível 5.</span></li>
            <li id={styles.green}>Rebaixamento e assenção: <span id = {styles.white}>- A SAF recebe 4 aportes anuais de 5M e Staff nível 5.</span></li>
          </ul>

        </li>
        <li id={styles.goldenrod}>Classifica para: <span id = {styles.white}>- A SAF recebe 4 aportes anuais de 30M, CT nível 2 e Staff nível 5.</span></li>
        <li id={styles.goldenrod}>Rebaixamento e assenção: <span id = {styles.white}>- A SAF recebe 4 aportes anuais de 5M e Staff nível 5.</span></li>
      </ul>
      </div>
      </section>
  )
}

export default Championships