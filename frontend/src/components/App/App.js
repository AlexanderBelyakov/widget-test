import "./App.css";

import Clock from "../Clock/Clock";
import ClassContainer from "../ClassContainer/ClassContainer";

import api from "../../utils/api";
import getDate from "../../utils/getDate";
import getDayOfTheWeek from "../../utils/getDayOfTheWeek";

import { useEffect, useState } from "react";

function App() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    api
      .getClasses()
      .then((res) => setClasses(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="app">
      <section className="date">
        <Clock />
        <div className="date__info">
          <p className="date__line">{getDate()}</p>
          <p className="date__line">{getDayOfTheWeek()}</p>
          <p className="date__line">В зале...........105 атлетов</p>
          <p className="date__line">Загруженность..........3/5</p>
        </div>
      </section>
      <ClassContainer classes={classes} />
      <p className="app__quote">Хорошей тренировки, друзья!</p>
      <p className="app__info">
        Расписание всех занятий и запись через приложение
      </p>
    </main>
  );
}

export default App;
