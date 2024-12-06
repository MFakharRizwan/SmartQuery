import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h1 {
    text-align: center;
    margin-bottom: 5%;
  }
  .answer-section {
    margin-left: 25%;
  }
  .input-area #questionSelect {
    width: 50%;
  }
  .input-area option {
    width: 50%;
    height: 50%;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .nav-logo img {
    height: 10%;
    width: 45%;
    margin-left: 25%;
    
  }
`
export default Wrapper