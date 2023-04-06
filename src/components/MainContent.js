import React from 'react'
import styles from './MainContent.module.css'
import Slideshow from './Slideshow'

const MainContent = () => {
  return (
    <section>
      <div className={styles.mainContainer}>
        <h1>Minha SAF - Jogo</h1>

        <Slideshow  
          titulo = "Campo de Jogo"
          descricaoTitulo = "O Grande Palco"
          dscricaoConteudo = "Um time excepcional requer um gramado excepcional. Um campo descuidado pode ser o grande vilão de uma derrota inesperada. Dedique recursos para plantar e manter um gramado nível FIFA."
          dscricaoConteudo2 = "Evolua seu campo. Saindo de um campo de areia cheio de pedras, passando por um campo com grama seca, grama morrendo para um campo bem cuidado até chegar ao padrão FIFA."

          image1 = "images/Campo5.png" 
          image2 = "images/Campo4.png" 
          image3 = "images/Campo3.png" 
          image4 = "images/Campo2.png" 
          image5 = "images/Campo1.png" 
        />

        <hr></hr>

        <Slideshow  
          titulo = "Vestiário"
          descricaoTitulo = "O lugar sagrado para os atletas"
          dscricaoConteudo = "O local onde tudo pode ir para o brejo ou o lugar onde tudo pode mudar."
          dscricaoConteudo2 = "Vestiários moderno fazem com que o time entre em campo com mais atenção, podendo mudar o nível de atenção da equipe para o segundo tempo."


          image1 = "images/Vestiario5.png" 
          image2 = "images/Vestiario4.png" 
          image3 = "images/Vestiario3.png" 
          image4 = "images/Vestiario2.png" 
          image5 = "images/Vestiario1.png" 
        />

        <hr></hr>

        <Slideshow  
          titulo = "Centro de Treinamento"
          descricaoTitulo = "Aqui os atletas evoluem"
          dscricaoConteudo = "Quatro campos de treinamento e equipamentos modernos faz com que seus atletas tenham maior facilidade de evoluir suas caracteristicas técnicas."
          dscricaoConteudo2 = ""

          image1 = "images/CT5.png" 
          image2 = "images/CT4.png" 
          image3 = "images/CT3.png" 
          image4 = "images/CT2.png" 
          image5 = "images/CT1.png" 
      />
      </div>
    </section>
  )
}

export default MainContent