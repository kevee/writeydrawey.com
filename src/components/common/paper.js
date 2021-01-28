import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

const flyOut = keyframes`
100% {
  transform: translate3d(400%,40px,0) rotate(20deg);
}
`

const flyIn = keyframes`
0%{
  transform: translate3d(-200%, 0, 0) rotate(-20deg);
}


100% {
  transform: translate3d(0,0,0) rotate(0deg);
}
`

const Paper = styled.div`
  background: white;
  position: relative;
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  background: #ffffff;
  width: 90%;
  margin: 1rem auto;
  border-radius: 0 15px 15px 0;

  ${(props) =>
    props.flyOut &&
    css`
      animation: ${flyOut} 0.75s ease-in;
      animation-fill-mode: forwards;
    `}
  ${(props) =>
    props.flyIn &&
    css`
      animation: ${flyIn} 0.75s ease-out;
      animation-fill-mode: forwards;
    `}
`

const PaperContent = styled.div`
  padding: 1.5rem;
  border-left: 2.5px solid pink;
  min-height: 50vh;
  width: 100%;
`

const PaperHole = styled.div`
  background: rgb(226, 226, 225);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  left: 15px;
  &:first-child {
    top: 30px;
  }
  &:nth-child(2) {
    top: calc(50% - 10px);
  }

  &:last-child {
    bottom: 30px;
  }
`

const PaperSide = styled.div`
  width: 60px;
  position: relative;
  background: ffffff;
`

export { Paper, PaperContent, PaperHole, PaperSide }
