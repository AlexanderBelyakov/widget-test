import "./Clock.css";

import convertTime from "../../utils/convertTime";
import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div className="clock">{convertTime(time)}</div>;
};

export default Clock;
