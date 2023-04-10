import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.basicTextColor};
`
export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
`
