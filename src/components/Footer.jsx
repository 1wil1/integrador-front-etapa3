import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__warranty">
        <div className="footer__warranty__secure-payment">
          <div className="footer__icon">
            <i className="fa-solid fa-shield"></i>
          </div>
          <div className="footer__warranty__description">
            <p className="footer__warranty__title">Pagos seguros</p>
            <p className="footer__warranty__text">Paga de forma segura con nuestra plataforma de pagos.</p>  
          </div>
        </div> 
        <div className="footer__warranty__free-shipping">
          <div className="footer__icon">
            <i className="fa-solid fa-truck-moving"></i>
          </div>
          <div className="footer__warranty__description">
            <p className="footer__warranty__title">Envío gratis desde $100.000</p>
            <p className="footer__warranty__text">Para pagos con nuestra tarjeta a partir de $100.000 COP.</p>
          </div>
        </div> 
        <div className="footer__warranty__refund">
          <div className="footer__icon">
            <i className="fa-solid fa-sack-dollar"></i>
          </div>
          <div className="footer__warranty__description">
            <p className="footer__warranty__title">Garantia de rembolso</p>
            <p className="footer__warranty__text">Si no estas conforme con tu compra te devolvemos tu dinero.</p>
          </div>
        </div> 
      </div>
      <div className="footer__info">
        <div className="footer__info__payment-method">
          <div className="footer__icon">
            <i className="fa-regular fa-credit-card"></i>
          </div>
          <div className="footer__icon">
            <i className="fa-brands fa-paypal"></i>
          </div>
          <div className="footer__icon">
            <i className="fa-brands fa-cc-visa"></i>
          </div>
          <div className="footer__icon">
            <i className="fa-brands fa-cc-mastercard"></i>
          </div>
        </div>
        <div className="footer__info__contact-support">
          <p className="footer__info__contact-text"><i className="fa-solid fa-location-dot"></i> Av 5 L502 Bogota - Colombia</p>
          <p className="footer__info__contact-text"><i className="fa-regular fa-envelope"></i> c.on@coninfo.com.co</p>
          <p className="footer__info__contact-text"><i className="fa-solid fa-phone-flip"></i> 12345678</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer