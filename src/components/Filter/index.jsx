import * as S from './Filter.style'
import { useState } from 'react'

const Filter = () => {
  const [filter, setFilter] = useState(null)

  const selectFilter = (f) => {
    filter === f ? setFilter(null) : setFilter(f)
  }

  return (
    <S.Filter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <div>
        <S.FilterButton
          $active={filter === 'author'}
          onClick={() => selectFilter('author')}
        >
          исполнителю
        </S.FilterButton>
        {filter === 'author' && (
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
        <S.FilterButton
          $active={filter === 'year'}
          onClick={() => selectFilter('year')}
        >
          году выпуска
        </S.FilterButton>
        {filter === 'year' && (
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
        <S.FilterButton
          $active={filter === 'genre'}
          onClick={() => selectFilter('genre')}
        >
          жанру
        </S.FilterButton>
        {filter === 'genre' && (
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
