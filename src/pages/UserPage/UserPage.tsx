import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUsers } from '../../store/user';
import { fetchPosts } from '../../store/post';
import { selectUserById } from '../../store/user/selectors';
import { selectPostsByUserId } from '../../store/post/selectors';
import Post from '../../components/Post/Post';

export const UserPage = () => {
  const params = useParams();
  const userId = params.id;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => selectUserById(state, { userId }));
  const posts = useAppSelector((state) => selectPostsByUserId(state, { userId }));

  useEffect(() => {
    dispatch(fetchUsers(userId));
  }, [userId]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container className='my-2'>
      <h2>User Info</h2>
      <Card className='px-2 my-4'>
        <Card.Title>Name: {user?.name}</Card.Title>
        <Card.Text>UserName: @{user?.username}</Card.Text>
        <Card.Text>Email: {user?.email}</Card.Text>
      </Card>
      <h2>User Posts</h2>
      <Row className='px-0 my-4 mx-0'>
        {Object.values(posts)?.map(({ id }) => (
          <Post key={id} postId={id} />
        ))}
      </Row>
    </Container>
  );
};
