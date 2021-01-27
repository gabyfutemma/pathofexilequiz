import { Fragment } from 'react'
import styled from 'styled-components'
import db from '../db.json'
import Head from '../src/components/Head'
import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'
import Footer from '../src/components/Footer'

export const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <Fragment>
      <Head title={db.title} imgBg={db.bg} favicon={db.favicon}/>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Welcome Exile !</h1>
            </Widget.Header>
            <Widget.Content>
              <p>lorem ipsum</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Visit Hideouts !</h1>
              <p>lorem ipsum</p>
            </Widget.Content>
          </Widget>
          <Footer/>
        </QuizContainer>
        <GitHubCorner projectUrl="/https://github.com/gabyfutemma" />
      </QuizBackground>
    </Fragment>
  )
}
