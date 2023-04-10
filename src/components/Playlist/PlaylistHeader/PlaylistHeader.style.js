import styled from 'styled-components'

export const PlaylistTitle = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.optionalColor};
  text-transform: uppercase;
`
export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => props.theme.optionalColor};
`
export const PlaylistCol01 = styled(PlaylistTitleCol)`
  width: 451px;
`
export const PlaylistCol02 = styled(PlaylistTitleCol)`
  width: 291px;
`
export const PlaylistCol03 = styled(PlaylistTitleCol)`
  width: 215px;
`
export const PlaylistCol04 = styled(PlaylistTitleCol)`
  width: 60px;
  text-align: end;
  padding-right: 16px;
`
