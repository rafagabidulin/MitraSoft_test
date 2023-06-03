import React from 'react';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const PostPlaceholder = () => (
  <Card className='w-100 my-2'>
    <Card.Body>
      <Placeholder as={Card.Title} animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>
      <Placeholder as={Card.Text} animation='glow'>
        <Placeholder xs={12} size='sm' />
        <Placeholder xs={12} size='sm' />
      </Placeholder>
      <Placeholder.Button variant='primary' xs={1} />
    </Card.Body>
  </Card>
);

export default PostPlaceholder;
