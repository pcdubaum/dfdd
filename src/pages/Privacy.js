import React from 'react'
import styles from '../components/MainContent.module.css'

const Privacy = () => {
  return (
    <section>
      <div className={styles.mainContainer}>
      <h1>Política de Privacidade</h1>
      <h2>Dados gravados e identificação pessoasl</h2>
      <p>O jogo Minha SAF não registra nenhuma informação pessoal do usuário tais como: Nome, identificação, localização, dados de contato, não limitado a esses.</p>

      <h2>Dados transmitidos pelos servidores</h2>
      <p>São transmitidos dados aos servidores da plataforma Google Play ou para servidores da plataforma Unity3D. São transmitidos apenas dados referentes ao uso do jogo Minha SAF.</p>

      <h2>Permisões no Aplicativo</h2>
        <ul id={styles.green}>
          <li id={styles.green}>"android.permission.INTERNET"<span id = {styles.white}> - Necessário para compras dentro do jogo e para o sistema de bônus.</span></li>
          <li id={styles.green}>"android.permission.WRITE_EXTERNAL_STORAGE"<span id = {styles.white}> - Necessário para o sistema de salvamento e carregamento de jogos.</span></li>
          <li id={styles.green}>"android.permission.READ_EXTERNAL_STORAGE"<span id = {styles.white}> - Necessário para o sistema de salvamento e carregamento de jogos.</span></li>
          <li id={styles.green}>"android.permission.VIBRATE"<span id = {styles.white}> - Necessário para informar eventos no jogo(pose ser ignorado).</span></li>
        </ul>

        <h2>Contatos para outras Informações</h2>

        <ul id={styles.green}>
          <li id={styles.green}>Email<span id = {styles.white}> - Necessário para compras dentro do jogo e para o sistema de bônus.</span></li>
          <li id={styles.green}>Página do Facebook.<span id = {styles.white}> - Necessário para o sistema de salvamento e carregamento de jogos.</span></li>
        </ul>
        </div>
    </section>
  )
}

export default Privacy