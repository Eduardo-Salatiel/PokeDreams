import './style.scss';

const PokemonCard = ({pokemonImage, pokemonName, pokemonType, pokemonAbility}) => {
    return ( 
        <div className="pokemon-card">
            <div className="pokemon-img">
                    <img src={pokemonImage} alt="pokemon" />
                <span className="name">{pokemonName}</span>
            </div>
            <div className="pokemon-content">
                <p className="type">Type: <span>{pokemonType}</span></p>
                <p className="ability">Ability: <span>{pokemonAbility}</span></p>
            </div>
        </div>
     );
}
 
export default PokemonCard;