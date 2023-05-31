import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import { useAppSelector } from '../../hooks/hooks';
import { selectPostById } from '../../store/post/selectors';
import user from '../../../public/images/user.png';
import Comments from '../Comments/Comments';

const Post = ({ postId }: { postId: number | string }) => {
  const post = useAppSelector((state) => selectPostById(state, { postId }));
  const [open, setOpen] = useState(false);

  return (
    <Col className='my-1 p-0 rounded border' sm={12}>
      <Card className='border-0 m-0'>
        <Card.Body>
          <div className='px-3'>
            <Link to={`/user/${post?.userId}`}>
              <img className='my-2' src={user} alt='user' width='50px' />
            </Link>
            <Card.Title>{post?.title}</Card.Title>
            <Card.Text>{post?.body}</Card.Text>
            <Button variant='primary' onClick={() => setOpen(!open)} aria-expanded={open}>
              Comments
            </Button>
          </div>
          <Collapse in={open}>
            <ListGroup variant='flush'>
              <Comments postId={post?.id} />
            </ListGroup>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Post;
