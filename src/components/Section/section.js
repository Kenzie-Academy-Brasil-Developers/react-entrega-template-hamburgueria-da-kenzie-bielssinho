import styled from 'styled-components';

export const StyledSection = styled.section`
    & .divFilter{
        margin: 0 auto;
    }
    
    & .filter{
        display: flex;
         flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    .filter h3{
        font-weight: 700;
        font-size: 0.875rem;
    }

    .filter span{
        font-weight: 400;
        font-size: 0.875rem;
        color: var(--color-grey-50);
    }

    .filter button{
        height: 22px;
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
        
        display: flex;
        
        .filter{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        }

        .filter h3{
            font-weight: 700;
            font-size: 2rem;
        }

        .filter span{
            font-size: 1.5rem;
        }

        .filter button{
            height: 34px;
        }
    }
`