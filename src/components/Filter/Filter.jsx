import './Filter.css'
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
    <div className="filter">
      <div className="filter__title">Искать по:</div>
      <div
        className={
          'filter__button button-author _btn-text' +
          (activeAuthor ? ' _btn-active' : '')
        }
        onClick={handleClickAuthor}
      >
        исполнителю
      </div>
      {visibleAuthor && (
        <div className="filter__popup container-author">
          <div className="filter__popup-item popup-author">
            <p>Michael Jackson</p>
            <p>Frank Sinatra</p>
            <p>Calvin Harris</p>
            <p>Zhu</p>
            <p>Arctic Monkeys</p>
            <p>Nero</p>
            <p>Skeeter Davis</p>
          </div>
        </div>
      )}
      <div
        className={
          'filter__button button-year _btn-text' +
          (activeYear ? ' _btn-active' : '')
        }
        onClick={handleClickYear}
      >
        году выпуска
      </div>
      {visibleYear && (
        <div className="filter__popup container-year">
          <div className="filter__popup-item popup-year">
            <input type="radio" name="sort" id="new" />
            <label htmlFor="new">Более новые</label>
            <input type="radio" name="sort" id="old" />
            <label htmlFor="old">Более старые</label>
          </div>
        </div>
      )}
      <div
        className={
          'filter__button button-genre _btn-text' +
          (activeGenre ? ' _btn-active' : '')
        }
        onClick={handleClickGenre}
      >
        жанру
      </div>
      {visibleGenre && (
        <div className="filter__popup container-genre">
          <div className="filter__popup-item popup-genre">
            <p>Michael Jackson</p>
            <p>Frank Sinatra</p>
            <p>Calvin Harris</p>
            <p>Zhu</p>
            <p>Arctic Monkeys</p>
            <p>Nero</p>
            <p>Skeeter Davis</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Filter
