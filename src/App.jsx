import * as S from './App.style'
import { AppRoutes } from './routes'

function App() {
  const user = localStorage.getItem('token')

  return (
    <div className="App">
      <S.Wrapper>
        <S.Container>
          <AppRoutes user={user} />
        </S.Container>
      </S.Wrapper>
    </div>
  )
}

export default App
