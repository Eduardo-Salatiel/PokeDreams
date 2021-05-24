import PokemonCharacteristics from './PokemonCharacteristics';
import './style.scss';

const Details = ({pokemonDetails}) => {
    return ( 
        <div className="details">
            <p className="details-description">{pokemonDetails.description}</p>
            <PokemonCharacteristics characterisctic={pokemonDetails} />
        </div>
     );
}
 
export default Details;