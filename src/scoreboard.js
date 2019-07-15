import React, {useState} from 'react';
import "/App.css";
import BottomRow from "./BottomRow";

const Scoreboard = () => {
    const [homeScore] = useState(0);
    const [awayScore]= useState(0);

    return (
        <section className="scoreboard">
            <div classname="topRow">
                <div className="home">
                    <h2 className="homeTeamName">Melas</h2>
                    <div className="home-score">{homeScore}</div>
                </div>
                <div className="timer">00:03</div>
                <div className="away">
                <h2 className="away-name">Bellas</h2>
                <div className="away-score">{awayScore}</div>
              </div>
            </div>
            <BottomRow/>
        </section>
    )
}
export default Scoreboard;