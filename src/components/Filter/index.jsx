import * as S from './Filter.style'
import { useState } from 'react'

const Filter = () => {
  const [activeAuthor, setActiveAuthor] = useState(false)
  const [visibleAuthor, setVisibleAuthor] = useState(false)
  const handleClickAuthor = () => {
    setActiveAuthor(!activeAuthor)
    setVisibleAuthor(!visibleAuthor)
    setActiveYear(false)
    setVisibleYear(false)
    setActiveGenre(false)
    setVisibleGenre(false)
  }

  const [activeYear, setActiveYear] = useState(false)
  const [visibleYear, setVisibleYear] = useState(false)
  const handleClickYear = () => {
    setActiveYear(!activeYear)
    setVisibleYear(!visibleYear)
    setActiveAuthor(false)
    setVisibleAuthor(false)
    setActiveGenre(false)
    setVisibleGenre(false)
  }

  const [activeGenre, setActiveGenre] = useState(false)
  const [visibleGenre, setVisibleGenre] = useState(false)
  const handleClickGenre = () => {
    setActiveGenre(!activeGenre)
    setVisibleGenre(!visibleGenre)
    setActiveAuthor(false)
    setVisibleAuthor(false)
    setActiveYear(false)
    setVisibleYear(false)
  }

  return (
    <S.Filter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <div>
        <S.FilterButton $active={activeAuthor} onClick={handleClickAuthor}>
          исполнителю
        </S.FilterButton>
        {visibleAuthor && (
          <S.FilterPopup>
            <S.FilterPopupItem>
              <p>Michael Jackson</p>
              <p>Frank Sinatra</p>
              <p>Calvin Harris</p>
              <p>Zhu</p>
              <p>Arctic Monkeys</p>
              <p>Nero</p>
              <p>Skeeter Davis</p>
            </S.FilterPopupItem>
          </S.FilterPopup>
        )}
      </div>
      <div>
        <S.FilterButton $active={activeYear} onClick={handleClickYear}>
          году выпуска
        </S.FilterButton>
        {visibleYear && (
          <S.FilterPopup>
            <S.FilterPopupItem>
              <S.PopupYear>
                <input type="radio" name="sort" id="new" />
                <label htmlFor="new">Более новые</label>
                <input type="radio" name="sort" id="old" />
                <label htmlFor="old">Более старые</label>
              </S.PopupYear>
            </S.FilterPopupItem>
          </S.FilterPopup>
        )}
      </div>
      <div>
        <S.FilterButton $active={activeGenre} onClick={handleClickGenre}>
          жанру
        </S.FilterButton>
        {visibleGenre && (
          <S.FilterPopup>
            <S.FilterPopupItem>
              <p>Michael Jackson</p>
              <p>Frank Sinatra</p>
              <p>Calvin Harris</p>
              <p>Zhu</p>
              <p>Arctic Monkeys</p>
              <p>Nero</p>
              <p>Skeeter Davis</p>
            </S.FilterPopupItem>
          </S.FilterPopup>
        )}
      </div>
    </S.Filter>
  )
}

export default Filter
