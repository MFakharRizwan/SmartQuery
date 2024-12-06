import styled from 'styled-components';

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: 3rem;
  }

  .logo {
    max-width: 60px; /* Added px unit */
    height: 50px;
  }

  h1 {
    font-weight: 700;
    font-size: 3rem; /* Adjusted font size */
    span {
      color: var(--primary-500);
    }
  }

  p {
    color: var(--grey-600);
    font-size: 1.25rem; /* Adjusted font size */
    margin-top: 1rem; /* Added margin for spacing */
  }

  .main-img {
    display: none;
    width: 100%;
    max-width: 500px; /* Ensure it does not get too large */
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }

    .main-img {
      display: block;
    }
  }

  .cssbuttons-io-button {
    background: #a370f0;
    color: white;
    font-family: inherit;
    padding: 0.5em 1.5em; /* Adjusted padding */
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #714da6;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
    width: 50%; /* Adjusted width */
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    right: 0.3em;
    transition: all 0.3s;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }

  .cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }

  .aboutpic {
    width: 60%; /* Made it more visible */
    display: block;
    margin: 0 auto; /* Center image */
  }

  .about {
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    align-items: center;
    margin-top: 3rem;
    justify-content: space-between; /* Adjusted for layout */
  }

  .about h1 {
    font-weight: 700;
    font-size: 2.5rem; /* Adjusted font size */
    span {
      color: var(--primary-500);
    }
  }

  .about p {
    color: var(--grey-600);
  }
`;

export default Wrapper;

