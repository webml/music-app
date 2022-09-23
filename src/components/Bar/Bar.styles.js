import styled from 'styled-components'

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.backgroundColor};
  box-shadow: 0 -2px 20px ${(props) => props.theme.backgroundColor};
`

export const Audio = styled.audio`
  display: none;
`

export const BarContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const BarPlayerProgress = styled.div.attrs((props) => ({
  style: {
    width: props.$width,
  },
}))`
  height: 5px;
  background: ${(props) => props.theme.progressBarColor};
`

export const BarPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BarVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`
