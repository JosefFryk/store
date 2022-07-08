import Wrapper from '../assets/wrappers/SearchBar'
import { useNavigate, useLocation } from 'react-router-dom'
import { useFilterContext } from '../context/filterContext';
import { Icon } from '@iconify/react';

const SearchBar = () => {
    const {
        filters: {
          text,
        },
        updateFilters,
      } = useFilterContext();
      const navigate = useNavigate();
      const handleSubmit = event => {
        event.preventDefault();
        navigate('/products');
      };

      const location = useLocation();
   

    return (
        <Wrapper>

    
        <div className='content'>
            <form onSubmit={handleSubmit}>
            {/* search input */}
            <div className='form-control'>
            <label for="search">Search for furniture</label>
                <input
                id='search'   
                type='text'
                name='text'
                placeholder='Search...'
                className='search-input'
                value={text}
                onChange={updateFilters}
                autofocus required
                />
              {location.pathname === "/products" ? 
              <div className='arrow-search-box'><Icon icon="akar-icons:arrow-down-thick" width="35" height="35" /></div> :
              <button type='submit'>Search</button> }

            </div>
            </form>
        </div>
        </Wrapper>
    )
}

export default SearchBar