import React, { useState, useEffect } from "react";
import {RotatingLines} from 'react-loader-spinner';
import Card from '../card/Card';

function Data() {

    const [games, setGames] = useState([]);
    const [error, setError] = useState("");
    const [gamesView, setgamesView] = useState([]);


    function ListGames(games){
        return (
            games.map((game, index) => (
            <Card imagemLink={game.thumbnail} titulo={game.title} descricao={game.short_description}/>
          )))
    }

    function queryGames(e){
        const searchTerm = e.target.value.toLowerCase();
        setgamesView(games.filter((game) => game.title.toLowerCase().includes(searchTerm)));
    }

    useEffect( () => {
        const timeoutId = setTimeout(() => {
            setError("O servidor demorou para responder, tente novamente mais tarde.");
            console.log("ERROR")
            return;
        }, 5000);
      
          const fetchData = async () => {
            try {
                const response = await fetch('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/', {
                    method: "GET",
                    headers: {
                        "dev-email-address": "teste@gmail.com",
                    }
                })

                if(response.status === 200){
                    const data = await response.json();
                    setGames(data);  
                    setgamesView(data);
                    console.log(data)
                    clearTimeout(timeoutId);
                    setError(""); 
                    return;
                }
                else if(response.status === 500 || response.status === 502 || response.status === 503 || response.status === 504 ||
                response.status === 507 || response.status === 508 || response.status === 509){
                    setError("O servidor fahou em responder, tente recarregar a página");
                    clearTimeout(timeoutId);
                    return;
                }
                else{
                    setError("O servidor não conseguirá responder por agora, tente voltar novamente mais tarde")
                    return;
                }

            } catch (error) {
              console.log(error.message);
            }
          };
      
          fetchData();

    }, [])

  return (
    <div>
    <h1>{error}</h1>
    <input type="text" onChange={queryGames} placeholder="Buscar jogo"/>

    {error ? (<p>{error}</p>) :
        gamesView.length > 0 ?
        (ListGames(gamesView)) :
        (<RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            />)

    }
    
  </div>
  );
}

export default Data;