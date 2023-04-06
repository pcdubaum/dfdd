import React, { createRef } from 'react'
import styles from './Slideshow.module.css'

const Slideshow = ({titulo, descricaoTitulo, dscricaoConteudo2, dscricaoConteudo, image1, image2, image3, image4, image5}) => {

  let control = 1;

  const img0 = createRef();
  const img1 = createRef();
  const img2 = createRef();
  const img3 = createRef();
  const img4 = createRef();

function hideImages (index) {

  control += index;

  if(control > 5)
    control = 5

    if(control < 1)
    control = 1

  img0.current.style.display = 'none'
  img1.current.style.display = 'none'
  img2.current.style.display = 'none'
  img3.current.style.display = 'none'
  img4.current.style.display = 'none'

  if (control === 1)
    img0.current.style.display = 'block'
  else if(control === 2)
    img1.current.style.display = 'block'
  else if(control === 3)
    img2.current.style.display = 'block'
  else if(control === 4)
    img3.current.style.display = 'block'
  else if(control === 5)
    img4.current.style.display = 'block'

}
   return (
  <div>
    <h1>{titulo}</h1>
    
    <div>
        <img ref={img0} src={image1} className="mySlides1" alt="Campo de jogo nível 5" width="1152" height="648" style={{display: "block"}}></img>
        <img ref={img1} src={image2} className="mySlides1" alt="Campo de jogo nível 4" width="1152" height="648" style={{display: "none"}}></img>
        <img ref={img2} src={image3} className="mySlides1" alt="Campo de jogo nível 3" width="1152" height="648" style={{display: "none"}}></img>
        <img ref={img3} src={image4} className="mySlides1" alt="Campo de jogo nível 2" width="1152" height="648" style={{display: "none"}}></img>
        <img ref={img4} src={image5} className="mySlides1" alt="Campo de jogo nível 1" width="1152" height="648" style={{display: "none"}}></img>
    </div>


    <button className={styles.btnLeft} onClick={() => hideImages(-1)}>&#10094;</button>
    <button className={styles.btnRight} onClick={() => hideImages(+1)}>&#10095;</button>

    <div className="textBox">
        
        <h2>{descricaoTitulo}</h2>
        <p>{dscricaoConteudo}</p>
        <p>{dscricaoConteudo2}</p>
    </div>
    </div>

  )
}

export default Slideshow