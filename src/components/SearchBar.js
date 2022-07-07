
import Wrapper from '../assets/wrappers/SearchBar'
import { useNavigate } from 'react-router-dom'
import { useFilterContext } from '../context/filterContext';

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
   

    return (
        <Wrapper>

    
        <div className='content'>
            <form onSubmit={handleSubmit}>
            {/* search input */}
            <div className='form-control'>
                <input   
                type='text'
                name='text'
                placeholder='search'
                className='search-input'
                value={text}
                onChange={updateFilters}
                />
            <button type='submit'>Hledat</button>  
            </div>
            </form>
        </div>
        </Wrapper>
    )
}

export default SearchBar