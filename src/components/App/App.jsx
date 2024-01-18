import { useState } from 'react';
// import { Options } from '../Options/Options';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    netural: 0,
    bad: 0,
  });

////////////////////////////////
const handleFeedback = feedback => {
  setFeedback({ ...feedback, feedType: feedback.feedType + 1 });
};

const handleFeedButtons = (type) => {setFeedback(type)}

//////////////////////////////
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
const onGood = () => {
  setFeedback(good);
};

const onNeutral = () => {
  setFeedback(neutral);
};

const onBad = () => {
  setFeedback(bad);
};
////////////////////////////////


const Options = ({ onGood, onNeutral, onBad }) => {
  <div>
    <button onClick={onGood}>Good</button>
    <button onClick={onNeutral}>Neutral</button>
    <button onClick={onBad}>Bad</button>
  </div>;
};

return (<h1>Sip Happens Café</h1>
<p>Please leave your feedback about our service by selecting one of the options below.</p>
<p></p>
<p></p>
<p></p>);
};