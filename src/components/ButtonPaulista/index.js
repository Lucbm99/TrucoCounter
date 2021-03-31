import React, { useState, useEffect } from 'react';
import './style.css';

function Button() {
    
    const [morePlayer1, setMorePlayer1] = useState(0);
    const [morePlayer2, setMorePlayer2] = useState(0);
    const [victoriesplayer1, setVictoriesPlayer1] = useState(0);
    const [victoriesplayer2, setVictoriesPlayer2] = useState(0);    

    function handleMorePlayer1() {
        setMorePlayer1(morePlayer1+1);
    }
    useEffect(() => {
        if(morePlayer1 >= 15) {
            alert("Você venceu!");
            setMorePlayer1(0);
            setMorePlayer2(0);
            setVictoriesPlayer1(victoriesplayer1+1);

        }
    }, [morePlayer1]);

    function handleMorePlayer2() {
        setMorePlayer2(morePlayer2+1);
    }
    useEffect(() => {
        if(morePlayer2 >= 15) {
            alert("Você venceu!");
            setMorePlayer1(0);
            setMorePlayer2(0);
            setVictoriesPlayer2(victoriesplayer2+1);
        }
    }, [morePlayer2]);

    function handleMinusPlayer1() {
        setMorePlayer1(morePlayer1-1);
        if(morePlayer1 <= 0) {
            setMorePlayer1(0);
        }
    }

    function handleMinusPlayer2() {
        setMorePlayer2(morePlayer2-1);
        if(morePlayer2 <= 0) {
            setMorePlayer2(0);
        }
    }

    function handleMoreThreePlayer1() {
        setMorePlayer1(morePlayer1+3);
    }

    function handleMoreSixPlayer1() {
        setMorePlayer1(morePlayer1+6);
    }

    function handleMoreNinePlayer1() {
        setMorePlayer1(morePlayer1+9);
    }

    function handleMoreThreePlayer2() {
        setMorePlayer2(morePlayer2+3);
    }

    function handleMoreSixPlayer2() {
        setMorePlayer2(morePlayer2+6);
    }

    function handleMoreNinePlayer2() {
        setMorePlayer2(morePlayer2+9);
    }


    return <div>
        <main>
            <div className="player-1">
                <h1>Jogador 1</h1>
                <h4>Pontuação: {morePlayer1}</h4>
                <div className="buttons-player-1">
                    <button onClick={handleMorePlayer1}>+</button>
                    <button onClick={handleMinusPlayer1}>-</button>
                    <button onClick={handleMoreThreePlayer1}>+3</button>
                    <button onClick={handleMoreSixPlayer1}>+6</button>
                    <button onClick={handleMoreNinePlayer1}>+9</button>
                </div>
            </div>
            <div className="player-2">
                <h1>Jogador 2</h1>
                <h4>Pontuação: {morePlayer2}</h4>
                <div className="buttons-player-2">
                    <button onClick={handleMorePlayer2}>+</button>
                    <button onClick={handleMinusPlayer2}>-</button>
                    <button onClick={handleMoreThreePlayer2}>+3</button>
                    <button onClick={handleMoreSixPlayer2}>+6</button>
                    <button onClick={handleMoreNinePlayer2}>+9</button>
                </div>
            </div>
        </main>
        <footer className="scoreboard">
            <p className="victories-player-1">Vitórias Jogador 1: {victoriesplayer1}</p>
            <p className="victories-player-2">Vitórias Jogador 2: {victoriesplayer2}</p>
        </footer>
    </div>
}


export default Button;