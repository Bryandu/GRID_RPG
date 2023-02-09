import styled from 'styled-components'

interface GridCanvasProps {
  height: string;
  width: string;
  cursor: string;
  top: string;
  left: string;
}

export const GridCanvas = styled.canvas`
  display: flex;
  position: fixed;
  justify-content: center;
  align-content: center;
  background-color: #CCC;
`