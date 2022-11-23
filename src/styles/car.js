import styled from "styled-components";

export const StyledDivVazio = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 5px;

    h4{
        width: 100%;
        border-radius: 4px 4px 0px 0px;
        background-color: var(--color-primary);
        text-align: center;
        padding: 15px;
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 0.875rem;
    }

    p{
        background-color: var(--color-grey-20);
        height: 200px;
        border-radius: 0px 0px 4px 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.375rem;
    }
    
    @media(min-width: 700px){
        width: 400px;
    }
`

export const StyledDivContent = styled.div`
    width: 450px;
    margin: 0 auto;
    padding: 5px;

    & .carContent{
        width: 100%;
        margin: 0 auto;
        padding: 5px;
    }

    .carContent h4{
        width: 100%;
        border-radius: 4px 4px 0px 0px;
        background-color: var(--color-primary);
        text-align: center;
        padding: 15px;
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 0.875rem;
    }

    .carContent ul{
        background-color: var(--color-grey-20);
        height: 200px;
        overflow-y: auto;
        border-bottom: 2px solid var(--color-blue);
    }

    & .value{
        width: 100%;
        margin: 0 auto;
        padding: 5px;
        display: flex;
        flex-direction: column;
    }

    .value div{
        display: flex;
        justify-content: space-between;
        padding: 5px;
    }

    .value span{
        font-weight: 700;
        color: var(--color-green);
    }

    .value button{
        height: 44px;
        border: 1px solid var(--color-grey-20);
        background-color: var(--color-grey-20);
        border-radius: 4px;
        color: var(--color-grey-50);
        font-weight: 700;
    }

    @media(min-width: 700px){
        & .carContent ul{
            height: 300px;
        }
    }
`