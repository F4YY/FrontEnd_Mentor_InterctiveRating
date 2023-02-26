import styled from "styled-components";

export const Container = styled.div`
    --Orange: hsl(25, 97%, 53%);
    --White: hsl(0, 0%, 100%);
    --Light-Grey: hsl(217, 12%, 63%);
    --Medium-Grey: hsl(216, 12%, 54%);
    --Dark-Blue: hsl(213, 19%, 18%);
    --Quite-Dark-Blue: hsl(213, 25%, 14%);
    --Very-Dark-Blue: hsl(216, 12%, 8%);
    font-size: 15px;
    font-family: Overpass;
    --reguler: 400;
    --bold: 700;
    display: flex;
    flex-direction: column;
    width: 100wh;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: var(--Very-Dark-Blue);
    margin: 0 auto;
    h1{
        font-size: 1.9em;
        font-weight: var(--bold);
        color: var(--White);
        margin: 30px auto 12px 2px;
        @media screen and (max-width:600px) {
            font-size: 1.6em;
            margin: 20px auto 10px 2px;
        }
    }
    h2{
        font-size: 1.85em;
        font-weight: var(--bold);
        color: var(--White);
        margin: 10px auto;
        @media screen and (max-width:600px) {
            font-size: 1.6em;
        }
    }
    h3{
        font-size: 1em;
        font-weight: 300;
        color: var(--Orange);
        padding:7px 20px;
        margin: 20px auto;
        background-color: var(--Dark-Blue);
        border-radius: 20px;
        @media screen and (max-width:600px) {
            margin: 10px auto;
        }
    }
    p{
        font-weight: var(--reguler);
        color: var(--Light-Grey);
        margin: 0 auto 22px 2px;
        line-height: 1.55em;
        @media screen and (max-width:600px) {
            font-size: .95em;
        }
    }
`