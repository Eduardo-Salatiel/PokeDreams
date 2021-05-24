import { usePokedex } from "../../../../hooks/usePokedex";
import "./style.scss";

const FilterTextSearch = () => {
  const { handleChange, handleSearchClick, pokemonToSearch } = usePokedex();

  return (
    <form className="filter-text-search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchPokemon">Name or number</label>
      <div className="campo">
        <input
          className="input-search"
          autoComplete="off"
          type="text"
          name="search-pokemon"
          onChange={handleChange}
          value={pokemonToSearch}
        />
        <button className="input-search-submit" type="button" onClick={handleSearchClick}>
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
};

export default FilterTextSearch;
