import styled from 'styled-components';

export const StyledCarCard = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 5px;

    div{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    img{
        width: 85px;
    }

    button{
        border: none;
        height: 20px;
        padding: 2px;
        background-color: transparent;
        font-weight: 600;
        color: var(--color-grey-50);
    }

    button:hover{
        text-decoration: underline;
    }

    & .info{
        display: flex;
        flex-direction: column;
    }
`