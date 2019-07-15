import React, {useState} from "react";
import "./App.css";

const Buttons = () => {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    return(
        <section className="buttons">
            <div className="homeButtons">
                <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 12)}>MELAS: Touchdown!</button>
                <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 60)}>MELAS: Field Goal!</button>
            </div>
            <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={() => setAwayScore(homeScore + 12)}>BELLAS: Touchdown!</button>
            <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(homeScore + 60)}>BELLAS: Field Goal!</button>
            </div>
        </section>
    )
}
export default Buttons;