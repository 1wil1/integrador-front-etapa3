import React from 'react'
import "./Nosotros.scss"
import HeaderTitle from '../components/HeaderTitle'

const Nosotros = () => {
  return (
    
  <main>
  <section className="section-about-us">

  <HeaderTitle title={"Nosotros"}></HeaderTitle>
    <div className="about-us">
      <div className="about-us__info__C-ON">
        <h2 className="about-us__info__heading">Acerca de C-ON</h2>
        <p className="about-us__info__abaut-con-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ex qui doloremque perferendis? Dolor alias esse, similique nesciunt accusamus architecto harum earum nemo totam a rem perspiciatis facilis vitae. Odit doloremque praesentium possimus dolorum sapiente.
        </p>
      </div> 

      <div className="about-us__info__services">
        <h2 className="about-us__info__heading">Nuestros servicios</h2>
        <p className="about-us__info__abaut-con-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ex qui doloremque perferendis? Dolor alias esse, similique nesciunt accusamus architecto harum earum nemo totam a rem perspiciatis facilis vitae. Odit doloremque praesentium possimus dolorum sapiente.
        </p>
      </div>
      
      <div className="about-us__info__purpose">
        <h2 className="about-us__info__heading">Nuestro proposito</h2>
        <p className="about-us__info__abaut-con-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ex qui doloremque perferendis? Dolor alias esse, similique nesciunt accusamus architecto harum earum nemo totam a rem perspiciatis facilis vitae. Odit doloremque praesentium possimus dolorum sapiente.
        </p>
      </div> 
    </div> 

  </section> 
</main>

  )
}

export default Nosotros