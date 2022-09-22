import styled from 'styled-components'

export const Player = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
const PlayerButton = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;

  & svg {
    fill: #d9d9d9;
  }

  &:hover svg {
    fill: #696969;
    cursor: pointer;
  }
`
export const PlayerButtonPrev = styled(PlayerButton)`
  margin-right: 23px;
`
export const PlayerButtonPlay = styled(PlayerButton)`
  margin-right: 18px;
`

export const PlayerButtonNext = styled(PlayerButton)`
  margin-right: 28px;
`

export const PlayerButtonRepeat = styled(PlayerButton)`
  margin-right: 24px;
`

export const PlayerButtonShuffle = styled(PlayerButton)`
  display: flex;
  align-items: center;
`

export const PlayerButtonPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`

export const PlayerButtonPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
`

export const PlayerButtonNextSvg = styled.svg`
  width: 15px;
  height: 14px;
`

export const PlayerButtonRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const PlayerButtonShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
