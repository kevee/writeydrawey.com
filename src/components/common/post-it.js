import styled from '@emotion/styled'

const PostIt = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transform: rotate(-15deg);
  z-index: 10;
  right: 10px;
  font-family: 'Indie Flower', cursive;
  font-size: 2rem;
  padding: 1.5rem;
  background: #ffff99;
  @media (min-width: 800px) {
    float: right;
  }
  @media (min-width: 1100px) {
    position: absolute;
    right: -200px;
    top: 0;
  }
`

export default PostIt
