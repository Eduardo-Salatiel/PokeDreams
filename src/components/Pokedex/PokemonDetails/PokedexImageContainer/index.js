import './style.scss';

const PokedexImageContainer = ({imgUrl}) => {
    return ( 
        <div className="pokedex-image-container">
            <img src={imgUrl} alt="pokémon" />
        </div>
     );
}
 
export default PokedexImageContainer;