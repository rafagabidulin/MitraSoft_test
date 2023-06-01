import React from 'react';

import Form from 'react-bootstrap/Form';

const Sort = ({ onChange }) => (
  <Form.Group className='mb-3'>
    <Form.Select id='sort' onChange={onChange}>
      <option value=''>Without sorting</option>
      <option value='title_asc'>Ascending</option>
      <option value='title_desc'>Descending</option>
    </Form.Select>
  </Form.Group>
);

export default Sort;
