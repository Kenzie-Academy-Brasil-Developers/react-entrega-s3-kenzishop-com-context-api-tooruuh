import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 80px;
  background-color: var(--vanilla);
  color:  var(--black);
  font-family: "Roboto Mono", monospace;

  h1 {
    margin-left: 2%;
    color: var(--pink);
    cursor: pointer;
  }

  div {
    display: flex;
    margin-right: 2%;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    background: transparent;
    width: 150px;
    font-size: 20px;
    border: none;
    height: 40px;
    border-radius: 8px;

    &:hover{
      background-color: var(--pink);
      color: var(--white);
    }

    svg {
        margin-right: 16px;
    }
  }

  @media(max-width: 565px){
    h1{
      font-size: 20px;
    }

    div{
      margin-right: 5%;
    }

    button {
      width: 120px;
    }
  }
`

export const Hr = styled.hr`
  border: 1px solid var(--pink);
`

export const CartCount = styled.span`
  padding: 1px 6px;
  border-radius: 100%;
  position: absolute;
  right: 300px;
  top: 2%;
  font-size: 14px;
  background: var(--pink);
  color: var(--white);

  @media(max-width: 1455px){
    right: 290px;
  }

  @media(max-width: 1115px){
    right: 285px;
  }

  @media(max-width: 825px){
    right: 280px;
  }

  @media(max-width: 730px){
    right: 275px;
  }

  @media(max-width: 565px){
    right: 240px;
  }

  @media(max-width: 400px){
    right: 255px;
  }

  @media(max-width: 3950px){
    right: 235px;
  }
`
