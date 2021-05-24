import Banner from "./Banner";
import FilterTextSearch from "./FilterTextSearch";
import "./style.scss";

const SearchBarContainer = () => {

  return (
    <div className="search-bar-container">
      <FilterTextSearch />
      <Banner />
    </div>
  );
};

export default SearchBarContainer;
