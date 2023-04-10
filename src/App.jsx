import { useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import * as S from './App.style'
import { AppRoutes } from './routes'
import { ThemeContext, themes } from './themes'
import { TrackContext, isPlayingContext, PlaylistContext } from './player'
import { store } from './redux/store/store'

function App() {
  const user = localStorage.getItem('token')

  const [currentTheme, setCurrentTheme] = useState(themes.dark)
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playlist, setPlaylist] = useState(null)

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
        <isPlayingContext.Provider
          value={{ isPlaying: isPlaying, setIsPlaying }}
        >
          <TrackContext.Provider
            value={{ track: currentTrack, setCurrentTrack }}
          >
            <PlaylistContext.Provider
              value={{ playlist: playlist, setPlaylist }}
            >
              <Provider store={store}>
                <div className="App">
                  <S.Wrapper>
                    <S.Container>
                      <AppRoutes user={user} />
                    </S.Container>
                  </S.Wrapper>
                </div>
              </Provider>
            </PlaylistContext.Provider>
          </TrackContext.Provider>
        </isPlayingContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
