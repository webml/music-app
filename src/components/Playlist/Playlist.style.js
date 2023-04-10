import styled from 'styled-components'

export const Playlist = styled.div`
  display: flex;
  flex-direction: column;
`

export const PlaylistTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  height: 51px;
  margin-bottom: 8px;
`

export const PlaylistHeader = styled.div`
  margin-bottom: 12px;
  box-shadow: 0 2px 20px ${(props) => props.theme.backgroundColor};
`

export const PlaylistItems = styled.div`
  height: ${(props) =>
    props.track !== null ? `calc(100vh - 462px)` : `calc(100vh - 388px)`};
  overflow: hidden;
  overflow-y: auto;
  padding-right: 16px;

  &::-webkit-scrollbar {
    margin-bottom: 24px;
    width: 4px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.basicIconColor};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.hoverIconColor};
  }
`
