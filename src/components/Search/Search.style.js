import styled from 'styled-components'

export const SearchInput = styled.input`
  width: 100%;

  background-color: transparent;
  border: none;
  padding: 13px 10px 10px 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.basicTextColor};

  &::placeholder {
    background-color: transparent;
    color: ${(props) => props.theme.basicTextColor};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`
export const Search = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.optionalColor};
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    margin-left: 4px;
    width: 17px;
    height: 17px;
    stroke: ${(props) => props.theme.activeIconColor};
    background: url('/img/icon/search.svg#icon-search');
  }
`
