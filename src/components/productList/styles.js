import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  font-family: "Roboto Mono", monospace;

  ul {
    width: 100%;
    margin: 35px 0 35px 0;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    box-sizing: border-box;
  }

  @media(max-width: 1075px){
    ul{
      justify-content: center;
    }
  }

  li {
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    max-width: 350px;
    background: var(--white);
    margin: 5px;
    border-radius: 10px;

    img {
      width: 330px;
      height: 320px;
      border-radius: 8px;
      
    }

    h4 {
      font-size: 15px;
      width: 80%;
      height: 80px;
      text-align: justify;
      padding: 10px;
    }

    button {
      border: none;
      width: 250px;
      height: 40px;
      margin: 20px 0 25px 0;
      border-radius: 8px;
      background-color: var(--pink);
      color: var(--white);
    }
    button:hover{
      background-color: var(--pinkHover);
    }
  }
`

export const Price = styled.h4`
  display: flex;
  align-items: center;
`