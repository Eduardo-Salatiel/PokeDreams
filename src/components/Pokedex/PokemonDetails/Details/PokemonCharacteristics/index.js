import Characterisctic from '../../../../commons/Characterisctic';
import './style.scss';

const PokemonCharacteristics = ({characterisctic}) => {
    return ( 
        <div className="pokemon-characteristics">
            <Characterisctic label={"Height"} contentText={`${characterisctic.height} m`}/>
            <Characterisctic cap label={"Type"} contentText={`${characterisctic.types}`}/>
            <Characterisctic label={"Weight"} contentText={`${characterisctic.weight} kg`}/>
            <Characterisctic cap label={"Ability"} contentText={`${characterisctic.ability}`}/>
            <Characterisctic cap label={"Generation"} contentText={`${characterisctic.generation}`}/>
            <Characterisctic cap label={"Shape"} contentText={`${characterisctic.shape}`}/>
        </div>
     );
}
 
export default PokemonCharacteristics;