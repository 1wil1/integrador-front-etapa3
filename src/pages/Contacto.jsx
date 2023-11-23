import React from 'react'
import "./Contacto.scss"
import HeaderTitle from '../components/HeaderTitle'


const Contacto = () => {
  return (
    
    <section className="section-contact">

    <HeaderTitle title={"Contáctanos"}></HeaderTitle>
    
      <div className="contactus">
        <div className="contactus__info">
          <h2 className="contactus__info__heading">Mas información</h2>
          <ul className="contactus__info__contact-list">
            <li className="contactus__info__contact-item">
              <p className="contactus__info__contact-text"><i className="fa-solid fa-location-dot"></i> Av 5 L502 Bogota - Colombia</p>
            </li>
            <li className="contactus__info__contact-item">
              <p className="contactus__info__contact-text"><i className="fa-regular fa-envelope"></i> c.on@coninfo.com.co</p>
            </li>
            <li className="contactus__info__contact-item">
              <p className="contactus__info__contact-text"><i className="fa-solid fa-phone-flip"></i> 12345678</p>
            </li>
          </ul>
          <div className="contactus__info__description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati tempora, ratione facilis
              totam
              maiores!</p>
          </div>
          <ul className="contactus__info__social-list">
            <li className="contactus__info__social-item">
              <a href="#" className="contactus__info__social-link" target="_blank"><i className="fa-brands fa-facebook fa-2xl"></i></a>
            </li>
            <li className="contactus__info__social-item">
              <a href="#" className="contactus__info__social-link" target="_blank"><i className="fa-brands fa-twitter fa-2xl"></i></a>
            </li>
            <li className="contactus__info__social-item">
              <a href="#" className="contactus__info__social-link" target="_blank"><i className="fa-brands fa-instagram fa-2xl"></i></a>
            </li>
          </ul>
        </div>

        <form action="" className="contactus__form-container">
          <input type="text" className="contactus__form-txtImp" id="nombre" placeholder="Nombre"/>
          <input type="email" className="contactus__form-txtImp" id="email" placeholder="Correo Electrónico"/>
          <input type="text" className="contactus__form-txtImp" id="phone" placeholder="Telefono"/>
          <textarea id="coments" className="contactus__form-txtImp" name="coments" rows="5" cols="20" placeholder="Comentarios"></textarea>
          <input type="submit" value="Enviar" className="contactus__form-submit" />
        </form>
      </div> 

    </section>
  )
}

export default Contacto