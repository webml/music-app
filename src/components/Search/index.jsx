import * as S from './Search.style'

const Search = () => {
  return (
    <div className="search">
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchInput type="search" placeholder="Поиск" name="search" />
    </div>
  )
}

export default Search
