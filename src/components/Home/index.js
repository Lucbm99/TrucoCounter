import React, { useState } from 'react';
import './style.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import TrucoPaulista from '../../pages/TrucoPaulista';
import TrucoMineiro from '../../pages/TrucoMineiro';


function Home() {
    const [isPaulist, setIsPaulist] = useState(true);
    const [isMineiro, setIsMineiro] = useState(true);

    const handleTrucoPaulista = () => {
        setIsMineiro(false);
    }
    const handleTrucoMineiro = () => {
        setIsPaulist(false);
    }
    
    return (
        <div className="options">
            <BrowserRouter>
                {!isMineiro || !isPaulist ? 
                    <Link className="link-home" 
                        to="/"
                        onClick={() => {
                            setIsMineiro(true);
                            setIsPaulist(true);
                        }}
                    >
                        Voltar
                    </Link> : ''
                }
                {isMineiro && isPaulist ? 
                    <p className="title"> Escolha qual truco deseja jogar: </p>
                    : ''
                }
                {isPaulist &&
                    <Link to="/TrucoPaulista" className="links" onClick={() => handleTrucoPaulista()}>Truco paulista</Link>
                }
                {isMineiro &&
                    <Link to="/TrucoMineiro" className="links" onClick={() => handleTrucoMineiro()}>Truco mineiro</Link> 
                } 
                <Switch>
                <Route path="/TrucoMineiro">
                    <TrucoMineiro />
                </Route>
                <Route path="/TrucoPaulista">
                    <TrucoPaulista />
                </Route>
                </Switch>
            
            </BrowserRouter>
        </div>
    );
}

export default Home;