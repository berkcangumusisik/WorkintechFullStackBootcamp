import Logo from '../atoms/Logo'

function Header() {
  return (
    <header className="header">
      <Logo as="link" to="/" size="md" />
    </header>
  )
}

export default Header
