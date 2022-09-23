import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import * as S from './App.style'
import { AppRoutes } from './routes'
import { ThemeContext, themes } from './themes'

function App() {
  const user = localStorage.getItem('token')

  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <div className="App">
          <S.Wrapper>
            <S.Container>
              <AppRoutes user={user} />
            </S.Container>
          </S.Wrapper>
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
