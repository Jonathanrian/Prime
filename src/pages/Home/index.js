import './home.css';

import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

export function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "c7a9d9e232dd75cfd0a3f862ca0b8e51",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 15));
            setLoading(false);
        }

        loadFilmes();

    }, [])


    if(loading){
        return(
            <div className='loadind'>
                <h2>Carregando os filmes...</h2>
            </div>
        )
    }
 
    return(
        <div className='conteiner'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}}`}  alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}