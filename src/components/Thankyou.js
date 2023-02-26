import React from 'react';
import {
    Thankyouimage,
    Styledinterating,
    Textcentering,
} from './styled/Interactiverating.styled';
import thanksimg from './images/illustration-thank-you.svg';

export const Thankyou = ({rating}) => {
  return (
    <Styledinterating>
        <Thankyouimage src={thanksimg} alt='thanks' />
        <h3>
            You selected {rating} out of 5
        </h3>
        <h2>
            Thank you!
        </h2>
        <Textcentering>
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
        </Textcentering>
    </Styledinterating>
  )
}
