import styled from 'styled-components'

export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: ${(props) => props.theme.activeIconColor};
  fill: transparent;
`

export const SearchInput = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
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
