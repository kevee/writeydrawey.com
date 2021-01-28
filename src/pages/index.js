import React, { useState } from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import sampleImage from '../images/sample.png'
import {
  Paper,
  PaperContent,
  PaperHole,
  PaperSide,
} from '../components/common/paper'

const SampleSentence = styled.blockquote`
  font-size: 2rem;
`
const SampleImage = styled.img`
  max-width: 300px;
  margin: 2rem;
  display: block;
`

const LoginButton = styled.a`
  background: #ed6442;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 4px;
  padding: 1rem;
  text-decoration: none;
  margin: 2rem 0;
  display: inline-block;
  &:hover {
    background: #99412b;
  }
`

const Homepage = () => {
  const [isFlying, setIsFlying] = useState(false)
  return (
    <Layout
      title="Writey Drawey"
      description="A silly game to play with friends and family."
    >
      <Paper flyIn={!isFlying} flyOut={isFlying}>
        <PaperSide>
          <PaperHole />
          <PaperHole />
          <PaperHole />
        </PaperSide>
        <PaperContent>
          <h1>Writey drawey</h1>
          <LoginButton
            href="https://play.writeydrawey.com"
            onClick={(event) => {
              event.preventDefeault()
              setIsFlying(true)
              setTimeout(() => {
                window.location.href = 'https://play.writeydrawey.com'
              }, 750)
            }}
          >
            Start playing
          </LoginButton>
          <p>
            A game where everyone wins. Everyone starts with a piece of paper,
            and writes down a sentence or two:
          </p>
          <SampleSentence>
            The pomegranates were floating in the open ocean.
          </SampleSentence>
          <p>
            You then pass your paper to the person to your right. They draw a
            picture of the sentence:
          </p>
          <SampleImage src={sampleImage} alt="" aria-hidden />
          <p>
            Everyone then folds the paper to hide the original sentence. Pass
            the paper to the person to the right and they must write a
            description of the image:
          </p>
          <SampleSentence>
            The two kings with tiny crowns were swimming with the fish.
          </SampleSentence>
          <p>
            You continue drawing and writing until your paper comes back to you.
            Unfold and enjoy the hilarious way your sentence changed.
          </p>
        </PaperContent>
      </Paper>
    </Layout>
  )
}

export default Homepage
