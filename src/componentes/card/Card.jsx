import React from "react";


function Card({imagemLink, titulo, descricao}){

    let styleCard = {
        width: '20rem',
        minHeight: '500px',
        maxHeight: '650px'
    }

    let styleImgCard = {
        maxHeight:'225px',
        marginTop: '1rem'
    }

    
    return (
        <>
            <div class="card" style={styleCard}>
                <img src={imagemLink} class="card-img-top" style={styleImgCard} alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <p class="card-text">{descricao}</p>
                </div>
            </div>


        </>
    )
}

export default Card;