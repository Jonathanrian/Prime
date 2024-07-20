import {Link} from 'react-router-dom';
import './erro.css'

export function Erro(){
    return(
        <div className='not-found'>
            <h1>404</h1>
            <h2>Pagina não encontrada!</h2>

            <Link to="/">Filmes</Link>
        </div>
    )
}