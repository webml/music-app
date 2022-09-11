import './Logo.css'

const Logo = () => {
  return (
    <img
      className="logo__image"
      src={process.env.PUBLIC_URL + '/img/logo.png'}
      alt="logo"
    />
  )
}

export default Logo
