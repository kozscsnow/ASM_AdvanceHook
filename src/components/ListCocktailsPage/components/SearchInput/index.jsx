import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../../../App.css';
import './SearchInput.css';

function SearchInput(props) {
  const [inputValue, setInputValue] = useState('');
  const inputValueStoreRedux = useSelector(
    (state) => state.GlobalReducer.inputValue
  );

  const { onInputValueChange } = props;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (!onInputValueChange) return;
    onInputValueChange(e.target.value);
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="searchInput">Find the Drink</label>
          <input
            type="text"
            className="form-control"
            name="searchInput"
            id="searchInput"
            value={inputValue}
            placeholder={inputValueStoreRedux ? inputValueStoreRedux : 'Margarita'}
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default React.memo(SearchInput);
