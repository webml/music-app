import './Search.css'

const Search = () => {
  return (
    <div className="search">
      <svg className="search__svg">
        <use xlinkHref="../../public/img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}

export default Search
