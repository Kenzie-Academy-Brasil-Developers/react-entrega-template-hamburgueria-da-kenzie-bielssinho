import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100vw;
    background-color: var(--color-grey-20);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;

    img{
        width: 200px;
    }

    & .form{
        width: 100%;
        max-width: 280px;
        position: relative;
        display: flex;
        gap: 5px;
    }

    .form input{
        width: 100%;
        height: 44px;
        border: 1px solid var(--color-grey);
        border-radius: 4px;
        padding: 5px;
    }

    input:focus{
        outline-color: var(--color-primary);
    }

    .form button{
        position: absolute;
        top: 5px;
        left: 190px;
        height: 32px;
        border: 1px solid var(--color-primary);
        border-radius: 4px;
        background-color: var(--color-primary);
        padding: 5px;
        color: var(--color-grey-0);
        font-weight: 600;
    }

    @media(min-width: 700px){
        flex-direction: row;
        gap: 500px;
        margin:  auto;

        .form{
            align-items: center;
        }

        .form button{
            position: static;
        }
    }
`