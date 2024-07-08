import React, {useState} from 'react';

const SearchBar = ({getSearchValue}) => {
    const [input, setInput] = useState("")
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        getSearchValue(input)
    }

  return (
    <div>
        <input type="text" placeholder="Search..." onChange={handleChange}/>
        <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;