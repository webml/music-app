import { useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import * as S from './App.style'
import { AppRoutes } from './routes'
import { ThemeContext, themes } from './themes'
import { store } from './store/store'

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
        <Provider store={store}>
          <div className="App">
            <S.Wrapper>
              <S.Container>
                <AppRoutes user={user} />
              </S.Container>
            </S.Wrapper>
          </div>
        </Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
