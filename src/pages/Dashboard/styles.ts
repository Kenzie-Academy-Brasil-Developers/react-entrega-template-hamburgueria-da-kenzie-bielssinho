import styled from "styled-components";

export const StyledDiv = styled.div`


    header{
        background-color: var(--color-grey-100);
        display: flex;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }

    header > div{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .styleSearch{
        font-size: 20px;
        cursor: pointer;
    }

    .styleCart{
        font-size: 15px;
        cursor: pointer;
    }

    .styleLogout{
        font-size: 20px;
        cursor: pointer;
    }
`