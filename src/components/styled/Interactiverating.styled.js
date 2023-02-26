import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Styledinterating = styled(Vstack)`
    width: 344px;
    height: 344px;
    padding: 33px;
    border-radius: 30px;
    background-color: var(--Quite-Dark-Blue);
    @media screen and (max-width:1025px) {
        margin: 20px auto;
    }
    @media screen and (max-width:600px) {
        width: auto;
        height: auto;
        padding: 23px;
        margin: 0 20px;
    }
`
//Styled for Interactive rating page:
export const Staricon = styled.img`
    width: 17px;
    height: 17px;
    padding:15px;
    border-radius:50%;
    background-color: var(--Dark-Blue);
    @media screen and (max-width:600px) {
        width: 15px;
        height:auto;
    }
`
export const Numbersection = styled.section`
    display: flex;
    justify-content: space-between;
    .default-button {
        width: 50px;
        height: 50px;
        font-size: 1.1em;
        border-style: none;
        border-radius: 50%;
        color:var(--Light-Grey);
        background-color: var(--Dark-Blue);
        cursor: pointer;
        transition: 0.5s ease-in-out;
        margin-bottom: 24px;
        @media screen and (max-width:600px) {
        width: 44px;
        height:44px;
        margin-bottom: 20px;
        }
    }
    .default-button:hover {
        font-weight: var(--bold);
        color:var(--White);
        background-color: var(--Orange);
    }
    .selected {
        font-weight: var(--bold);
        color:var(--White);
        background-color: var(--Light-Grey);
    }
`
export const Buttonsubmit = styled.button.attrs({
    type: 'submit'
})`
    width: 340px;
    height: 45px;
    border-radius: 30px;
    border-style: none;
    color:var(--White);
    background-color: var(--Orange);
    text-transform: uppercase;
    font-size: 1em;
    font-weight: var(--bold);
    letter-spacing: .1em;
    margin: 10px auto 0;
    &:hover{
        cursor: pointer;
        color:var(--Orange);
        background-color: var(--White);
    }
    &:active{
        font-weight: var(--bold);
        color:var(--White);
        background-color: var(--Light-Grey);
    }
    &:disabled{
        cursor:not-allowed
    }
    @media screen and (max-width:600px) {
        width: 100%;
        height: 40px;
        font-size: .95em;
        margin:5px auto;
    }
`
//Styled for Thank you page:
export const Thankyouimage = styled.img`
    width: 160px;
    height: 105px;
    margin: 10px 90px;
    @media screen and (max-width:600px) {
        width: 150px;
        height: 100px;
        margin: 10px auto;
    }
`
export const Textcentering = styled.div`
    text-align: center;
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 20px auto 10px;
    font-size: .9rem;
    text-align: center;
    cursor:none;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 20px 20px 5px;
    }
`
export const AttributionA = styled(Attribution)`
    h4{
        margin:0;
        color: hsl(228, 45%, 44%);
    }
`