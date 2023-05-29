import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAppSelector } from '../../hooks/hooks';
import { selectPostById } from '../../store/post/selectors';

const Post = ({ postId }: { postId: number | string }) => {
  const post = useAppSelector((state) => selectPostById(state, { postId }));
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>{post?.title}</Card.Title>
        <Card.Text>{post?.body}</Card.Text>
        <Button variant='primary'>Comments</Button>
      </Card.Body>
    </Card>
  );
};
export default Post;
