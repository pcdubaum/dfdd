import React from 'react'
import styles from '../components/MainContent.module.css'
import Slideshow from '../components/Slideshow'

const StartingGuide = () => {
  return (
    <section>
      <div className={styles.mainContainer}>
      <h1>Começando (Tela #1)</h1>
     

      <div className={styles.informations}>
      <div className={styles.informations}id={styles.left}>
      <ul id={styles.green}>
        <li id={styles.green}>Novo Jogo <span id = {styles.white}>- Começa a criação de uma nova SAF do zero.</span></li>
        <li id={styles.green}>Continuar "Nome da SAF" <span id = {styles.white}>- Continua o último jogo de onde você parou.</span></li>
        <li id={styles.green}>Carregar <span id = {styles.white}>- Permite selecionar qualquer jogo anteriormente salvo.</span></li>
      </ul>
      <hr></hr>
      <h3>Após as Boas Vindas (Tela #2)</h3>
      <ul id={styles.green}>
        <li id={styles.green}>Novo da SAF <span id = {styles.white}>- O nome da empresa detentora de uma equipe de futebol.</span></li>
        <li id={styles.green}>Dificuldade <span id = {styles.white}>- Selecione uma dificuldade. Veja mais abaixo.</span></li>
        <li id={styles.green}>Estadual a ser disputado <span id = {styles.white}>- Selecione em qual estado sua Equipe irá atuar.</span></li>
        <li id={styles.green}>Seu Nome <span id = {styles.white}>- Seu Nome.</span></li>
        <li id={styles.green}>Sua data de Nascimento<span id = {styles.white}>- Sua data de Nascimento.</span></li>
      </ul>
      <hr></hr>
      <h3>Identificação da Equipe (Tela #3)</h3>
      <ul id={styles.green}>
        <li id={styles.green}>Novo do Time <span id = {styles.white}>- O nome da equipe que irá ser criada.</span></li>
        <li id={styles.green}>Estilo do Escudo <span id = {styles.white}>- Estilo visual do escudo da nova equipe.</span></li>
        <li id={styles.green}>Esquema de Cores <span id = {styles.white}>- Esquema de cores do novo Clube.</span></li>
      </ul>
      <hr></hr>
      <h3>Níveis de Dificuldade (Tela #4)</h3>
      <ul id={styles.green}>
        <li id={styles.green}>Muito Fácil<span id = {styles.white}>- A SAF recebe 4 aportes anuais de 120M, CT nível 5 e Staff nível 5.</span></li>
        <li id={styles.green}>Fácil <span id = {styles.white}>- A SAF recebe 4 aportes anuais de 60M, CT nível 4 e Staff nível 5.</span></li>
        <li id={styles.green}>Equilibrado <span id = {styles.white}>- A SAF recebe 4 aportes anuais de 30M, CT nível 2 e Staff nível 5.</span></li>
        <li id={styles.green}>Difícil <span id = {styles.white}>- A SAF recebe 4 aportes anuais de 5M e Staff nível 5.</span></li>
      </ul>
      </div>
      <div  className={styles.informations} id={styles.right}>
  
      <Slideshow  
          image1 = "images/NovoJogo1.png" 
          image2 = "images/NovoJogo2.png" 
          image3 = "images/NovoJogo3.png" 
          image4 = "images/NovoJogo4.png" 
          image5 = "images/NovoJogo5.png" 
        />
      </div>
      </div>

      </div>
    </section>
  )
}

export default StartingGuide