import * as S from './Logo.style'
import { useThemeContext, themes } from '../../themes'

const Logo = () => {
  const { theme } = useThemeContext()

  const light = '/img/logo.png'
  const dark = '/img/logo-dark.png'

  const logoImg = theme === themes.dark ? light : dark

  return <S.Logo src={logoImg} alt="logo" />
}

export default Logo
