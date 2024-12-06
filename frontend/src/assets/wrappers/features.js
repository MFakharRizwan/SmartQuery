import styled from 'styled-components';

const FeaturesWrapper = styled.main`
  .container {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  .features-container {
    border: 1px solid #ccc;
    margin-left: 15px;
    margin-right: 15px;
  }
  .title {
    margin-bottom: 35px;
    margin-top: 25px;
  }
  .cards {
    display: flex;
    justify-content: space-around;
    margin-bottom: 12%;
  }
  .card {
    width: 380px;
    height: 120px;
    padding: 0.5rem;
    background: rgba(198, 198, 198, 0.34);
    border-radius: 8px;
    backdrop-filter: blur(5px);
    border-bottom: 3px solid rgba(255, 255, 255, 0.440);
    border-left: 2px rgba(255, 255, 255, 0.545) outset;
    box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.280);
    transform: skewX(10deg);
    transition: .4s;
    overflow: hidden;
    color: black;
  }
  .card:hover {
    height: 254px;
    transform: skew(0deg);
  }
  .align {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-self: flex-start;
  }
  .red {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff605c;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
  }
  .yellow {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffbd44;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
  }
  .green {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00ca4e;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
  }
  .card h3 {
    text-align: center;
    margin: 1.3rem;
    color: black;
    text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
  }
  .btn-hero {
    width: 75%;
    align-content: center;
    margin-left: 8%;
  }
`;

export default FeaturesWrapper;
