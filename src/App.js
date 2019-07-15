//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";
// import Scoreboard from "./scoreboard";
// import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, setHomeScore] = useState(0);
const [awayScore, setAwayScore] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Melas</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">06:39</div>
          <div className="away">
            <h2 className="away__name">Bellas</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button className="homeButtons__touchdown">Home Touchdown</button>
          <button className="homeButtons__fieldGoal">Home Field Goal</button> */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>MELAS: Touchdown!</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>MELAS: Field Goal!</button>
        </div>
        <div className="awayButtons">
          {/* <button className="awayButtons__touchdown">Away Touchdown</button>
          <button className="awayButtons__fieldGoal">Away Field Goal</button> */}
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>BELLAS: Touchdown!</button>
            <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>BELLAS: Field Goal!</button>
        </div>
      </section>
      {/* <Scoreboard/>
      <Buttons/> */}
    </div>
  );
}

export default App;
