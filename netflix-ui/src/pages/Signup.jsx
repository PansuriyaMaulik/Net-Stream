import React from 'react'
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

export default function signup() {
  return <Container>
    <BackgroundImage />

    <div className="content">
    <Header />
    <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited movies, TV Shows and more</h1>
          <h4>watch anywhere. Cancel anytime.</h4>
          <h6>
            Ready to watch? Enter your email to create or restart membership
          </h6>
        </div>

        <div className="form">
          <input type="email" placeholder='Enter you email here...' name='email' />
          <input type="password" name="enter your password here..." id="password" />
          <button>Get Started</button>
        </div>

        <button>Log In</button>
     </div>
    </div>
  </Container>
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0 ,0 ,0 ,0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rowa: 15vh 85vh;
  } 
`;