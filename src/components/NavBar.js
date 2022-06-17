import Wrapper from "../assets/wrappers/Navbar"
import Announcer from "./Annoucer"
import Logo from './Logo'
import SearchBar from "./SearchBar"
import {useState, useEffect} from 'react'
import UpperNavMenu from "./UpperNavMenu"
import Product from "./Product"
import CartButtons from '../components/CartButtons'


//search stuffs prozatim
const posts = [
  { id: '1', name: 'This first post is about React' },
  { id: '2', name: 'This next post is about Preact' },
  { id: '3', name: 'We have yet another React post!' },
  { id: '4', name: 'This is the fourth and final post' },
  ];
  
  const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
  };

const Navbar = () => {

  ///search prozatim
        const { search } = window.location;
        const query = new URLSearchParams(search).get('s');
        const [searchQuery, setSearchQuery] = useState(query || '');
        const filteredPosts = filterPosts(posts, searchQuery);


  return (
    

      <Wrapper>
        
        <div>
          <Logo />
          <h3 className='logo-text'>Shopenze</h3>
        </div>
        <div className="right-box">
          <div className="right-top-box">
            <UpperNavMenu/>
          </div>




          <div className="right-bottom-box">

            <div className="search-box">
              <Announcer
                    message={`${filteredPosts.length} posts`}
                    />
              <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                />
              
            </div>
            <div className="kosik-box">
              <CartButtons />
            </div>
          <div>

        </div>
        </div>

      </div>


       
      </Wrapper>
    
    )
  }
  
  export default Navbar