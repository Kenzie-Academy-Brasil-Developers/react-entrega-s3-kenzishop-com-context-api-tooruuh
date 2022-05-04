import styled from 'styled-components'

export const FormContainer = styled.form`
    max-width: 400px;
    height: 430px;
    background: var(--gray);
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin: 10% auto;
    border-radius: 10px;
    box-sizing: border-box;
    color: var(--white);

    span {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        border: 1px solid var(--vanilla);
        border-radius: 10px;
        width: 360px;
        height: 280px;
        padding: 10%;
    }

    h1 {
        font-size: 2rem;
        color: var(--pink);
        position: relative;
        left: -20%;
        top: -2%;
    }

    h3 {
        position: relative;
        top: 5%;
        left: -31%;
        background: var(--gray);
        padding: 5px;
        border: 1px solid var(--vanilla);
        border-radius: 10px;
        color: var(--pink);
    }

    input {
        height: 40px;
        border: 2px solid transparent;
        border-radius: 10px;
        padding-left: 16px;
    }
    input:focus{
        border-color: var(--pink);
    }

    p {
        margin: 0;
        color: var(--pink);
    }

    button {
        border: none;
        height: 40px;
        border-radius: 10px;
        background: var(--pink);
        color: var(--vanilla);
    }
    button:hover{
        filter: brightness(0.9);
    }

    @media(max-width: 450px){
        max-width: 280px;

        h1{
            font-size: 1.4rem;
        }

        h3 {
            top: 4%;
        }

        span {
            width: 260px;
        }
    }
`