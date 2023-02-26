import React from 'react';
import { Container } from './styled/Container.styled';
import {
    Styledinterating,
    Staricon,
    Numbersection,
    Buttonsubmit,
    Attribution,
    AttributionA,
} from './styled/Interactiverating.styled';
import star from './images/icon-star.svg';
import { useState } from 'react';
import { Thankyou } from './Thankyou';

export const InteractiveRating = () => {

    const Numbers = [1,2,3,4,5];

    const [selection, setSelection] = useState("");
    const [submit, setSubmit] = useState(false);
    const selectionHandler = (selection) => {
        setSelection(selection);
    };
    const submitHandler = () => {
        setSubmit(true);
    };

return(
    <Container>
        {!submit ?
        (
            <Styledinterating>
                <Staricon src={star} alt='star' />
                <h1>
                    How did we do?
                </h1>
                <p>
                    Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
                <Numbersection>
                    {Numbers.map((number) => {
                    return (
                        <button
                            onClick={() => selectionHandler(number)}
                            key={number}
                            className={
                                selection === number
                                ? 'default-button selected'
                                : 'default-button'
                            }
                            >
                            {number}
                        </button>
                    );
                    })}
                </Numbersection>
                <Buttonsubmit onClick={submitHandler} disabled={!selection}>
                    Submit
                </Buttonsubmit>
            </Styledinterating>
        ) :
        (
            <Thankyou rating={selection} />
        )}
        <Attribution>
            <AttributionA>
                <h4>Challenge by<a href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Interactive Rating.</a></h4>
            </AttributionA>
            <AttributionA>
                <h4>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></h4>
            </AttributionA>
        </Attribution>
    </Container>
  )
}
