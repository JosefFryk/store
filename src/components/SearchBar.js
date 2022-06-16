
import Wrapper from '../assets/wrappers/SearchBar'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const navigate = useNavigate();
    const onSubmit = e => {
        navigate.push(`?s=${searchQuery}`)
        e.preventDefault()
    };
    return (
        <Wrapper>

        <form 
            action="/" 
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Co hledate ?"
            name="s" 
            />
        <button type="submit">Hledat</button>
    </form>
            </Wrapper>
    )
}

export default SearchBar