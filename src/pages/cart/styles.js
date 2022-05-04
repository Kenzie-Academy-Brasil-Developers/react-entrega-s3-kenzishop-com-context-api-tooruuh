import styled from 'styled-components'

export const NoProductCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

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
  
  @media(max-width: 930px){
    width: 80%;
    margin: 30px auto;

    h1{
      font-size: 20px;
    }
  }

  @media(max-width: 575px){

    h1{
      font-size: 18px;
      margin: 5px;
    }
  }
`

export const Container = styled.div`
  max-width: 900px;
  margin-left: 15%;
  font-family: "Roboto Mono", monospace;

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    margin: 35px 0 35px 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: var(--white);
    margin: 5px;
    border-radius: 10px;
    border: 2px solid var(--pink);

    img {
        width: 250px;
        height: 240px;
        border-radius: 8px;
      
    }

    span{
        margin: 0;
        width: 35%;
    }

    h4 {
      font-size: 15px;
      height: 80px;
      text-align: justify;
      padding: 10px;
    }

    button {
        display: flex;
        border: none;
        width: 50px;
        height: 50px;
        margin: 20px 0 25px 0;
        border-radius: 50%;
        background-color: var(--pink);
        color: var(--white);
        justify-content: center;
        align-items: center;

        svg {
          pointer-events: none;
        }
    }
    button:hover{
      background-color: var(--pinkHover);
    }
  }

  @media(max-width: 1800px){
      max-width: 1500px;
      height: 260px;
      margin-left: 5%;

      ul {
        height: 100%;
        justify-content: center;
        margin-top: 10px;
        overflow-x: scroll;
      }

      li {
        width: 500px;
        justify-content: center;
      }
    }

    @media(max-width: 1600px){
      max-width: 1200px;
      height: 260px;
      margin-left: 5%;
    }

    @media(max-width: 1285px){
      max-width: 900px;
      height: 260px;
      margin-left: 5%;
    }

    @media(max-width: 975px){
      max-width: 500px;
      height: 260px;
      margin-left: 5%;
    }

    @media(max-width: 555px){
      max-width: 350px;
      height: 260px;
      margin-left: 5%;
    }
`

export const Price = styled.h4`
  display: flex;
  align-items: center;
`

export const ResumPrice = styled.div`
    background-color: var(--white);
    position: absolute;
    right: 5%;
    top: 13%;
    border-radius: 10px;
    border: 2px solid var(--pink);
    width: 500px;
    height: 300px;

    hr {
        background: var(--pink);
        width: 95%;
        height: 3px;
        margin: 15px auto;
    }

    @media(max-width: 1800px){
      left: 6%;
      top: 54%;
    }

    @media(max-width: 555px){
      width: 330px;
    }

`

export const ContentPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
    margin: 20px 0 0 100px;

    h3 {
        margin: 5px;
    }

    h4 {
        margin: 5px;
    }

    @media(max-width: 555px){
      margin: 20px 0 0 70px;
    }
`

export const ContentButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;

    button {
        margin: 5px;
        width: 60%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: var(--pink);
        color: var(--white);
        border-radius: 10px;

        svg{
          margin-left: 16px;
        }
    }
    button:hover{
      background-color: var(--pinkHover);
    }

`