import React, { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Spinner from "./components/spinner/spinner.component";
import NewCardInput from "./components/new-card-input/new-card-input.component";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from './redux/card/card.actions';
import { setInputVisible } from './redux/input/input.actions'

import "./App.css";

const App = () => {  
  const dispatch = useDispatch();
  const cards = useSelector(state => state.card.cards);
  const visible = useSelector(state => state.input.isVisible);

  const isLoading = useSelector(state => state.card.isLoading)
  const [searchField, setSearchField] = useState("");

  const handleClick = () => {
    dispatch(setInputVisible(true))
  }

  const handleScroll = async () => {    
    let { innerHeight, scrollY, document: { body: { offsetHeight }}} = window;
    if (innerHeight + scrollY >= offsetHeight + 48 && !isLoading && cards.length !== 0) {
      dispatch(fetchCards(5));
    }
  };

  useEffect(() => {  
    if (cards.length === 0) {
      dispatch(fetchCards(5));      
    }
    window.addEventListener("scroll", handleScroll);

    return ()=> {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [cards]); 

  const filteredCards = cards.filter((card) => (card.first_name.toLowerCase() + card.last_name.toLowerCase()).includes(searchField.toLowerCase()));

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="App">      
      <nav>
        <h1>Cat Contacts</h1>
        <div className='search-container'>
          <SearchBox onSearchChange={onSearchChange} />
          <button className='add-cat' onClick={handleClick}>+</button>   
        </div>      
        <NewCardInput visible={visible}/>
      </nav>
      <CardList cards={filteredCards} />
      <Spinner isFetching={isLoading} />
    </div>
  );
};

export default App;
