import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Head from '../src/components/Head';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';

export const QuizContainer = styled.div`
  width:100%;
  max-width:380px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <Head title={db.title} imgBg={db.bg} favicon={db.favicon} description={db.description} />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Welcome Exile !</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>

              <form onSubmit={function (evt) {
                evt.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <Input
                  onChange={function (evt) {
                    setName(evt.target.value);
                  }}
                  placeholder="Tell me your name"
                />
                <Button type="submit" disabled={name.length === 0}>
                  Enter
                  {' '}
                  {name}
                </Button>
              </form>

            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Visit Hideouts !</h1>
              <p>lorem ipsum</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/gabyfutemma" />
      </QuizBackground>
    </>
  );
}
