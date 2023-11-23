import './HeaderTitle.scss'

const HeaderTitle = ( { title, subtitle }) => {
  return (    
    <header className="section-Title__header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </header>
  )
}

export default HeaderTitle