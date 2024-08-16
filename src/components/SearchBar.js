import '../styles/SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ search, setSearch }){

    return(

        <div className='searchbar'>

            <SearchIcon className='search-icon'/>

            <input placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search}>
            </input>
            
        </div>

    );

}

export default SearchBar;