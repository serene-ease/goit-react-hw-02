import { useState } from "react";

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    netural: 0,
    bad: 0,
  });
};

const changeFeedback = () => {
  setFeedback({ ...feedback, feedType[0]: feedType[1] + 1 });
};

