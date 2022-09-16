import styled from 'styled-components'

export const Filter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  cursor: pointer;
  color: ${(props) => (props.$active ? '#ad61ff' : '#ffffff')};
  border-color: ${(props) => (props.$active ? '#ad61ff' : '#ffffff')};
  margin-right: 10px;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
  }
`

export const FilterPopup = styled.div`
  margin-top: 10px;
  min-width: 248px;
  background: #313131;
  border-radius: 12px;
  padding: 34px;
  position: fixed;
`

export const FilterPopupItem = styled.div`
  max-height: 237px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    background-color: #4b4949;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fff;
  }
`

export const PopupYear = styled.div`
  flex-direction: row;
  overflow: hidden;

  & input[type='radio'] {
    display: none;
  }

  & label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 25px;
    margin-right: 10px;
    line-height: 18px;
    user-select: none;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      background: url('img/icon/radio_disable.png') 0 0 no-repeat;

      &:hover:before {
        filter: brightness(80%);
      }
    }

    & input[type='radio']:checked + label:before {
      background: url('img/icon/radio_active.png') 0 0 no-repeat;
    }
  }
`
