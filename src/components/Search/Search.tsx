import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

const Search = ({ value }: { value: any }) => {
  const [valueSearch, setValueSearch] = useState('');

  useEffect(() => {
    value(valueSearch);
  }, [valueSearch]);

  return (
    <div>
      <Form.Group className='mb-3' controlId='search'>
        <Form.Control
          type='search'
          placeholder='Please enter a post title'
          onChange={(e) => setValueSearch(e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default Search;
