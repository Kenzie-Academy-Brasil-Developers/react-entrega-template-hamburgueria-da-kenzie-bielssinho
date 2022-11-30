import styled from 'styled-components';

export const StyledListCard = styled.ul`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 5px;
    padding: 10px;
    overflow-x: auto;

    li{
        min-width: 240px;
        border: 2px solid var(--color-grey-20);
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow: hidden;
    }

    img{
        width: 100%;
        height: 170px;
        background-color: var(--color-grey-20);
    }

    div{
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    h3{
        font-weight: 700;
        font-size: 1.125rem;
    }

    p{
        font-weight: 400;
        font-size: 1rem;
    }

    span{
        font-weight: 600;
        font-size: 1rem;
        color: var(--color-green);
    }

    button{
        height: 42px;
        width: 140px;
        border-radius: 8px;
        padding: 0px, 20px, 0px, 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        transition: .4s;
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--color-grey-0);
    }

    button:hover{
        filter: brightness(1.2);
        border: 1px solid var(--color-primary-50);
        background-color: var(--color-primary-50);
        color: var(--color-grey-0);
    }

    @media(min-width: 700px){
        width: 800px;
        flex-wrap: wrap;
    }
`