import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUsers } from '../../store/user';
import { fetchPosts } from '../../store/post';
import { selectUserById } from '../../store/user/selectors';
import { selectIsPostLoading, selectPostsByUserId } from '../../store/post/selectors';
import Post from '../../components/Post/Post';
import PostPlaceholder from '../../components/PostPlaceholder/PostPlaceholder';

export const UserPage = () => {
  const params = useParams();
  const userId = params.id;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => selectUserById(state, { userId }));
  const posts = useAppSelector((state) => selectPostsByUserId(state, { userId }));
  const isLoading = useAppSelector(selectIsPostLoading);

  useEffect(() => {
    dispatch(fetchUsers(userId));
  }, [userId]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const getPosts = () =>
    isLoading
      ? new Array(5).fill(null).map((_, index) => <PostPlaceholder key={index} />)
      : Object.values(posts).map(({ id }) => <Post key={id} postId={id} />);

  return (
    <Container className='px-5 py-4'>
      <div className='d-flex justify-content-between border-bottom'>
        <h1>User Info</h1>
        <NavLink to='/'>
          <Button className='my-2 w-100'>Back to main page</Button>
        </NavLink>
      </div>

      <Card className='px-2 my-4'>
        <Card.Title>Name: {user?.name}</Card.Title>
        <Card.Text>UserName: @{user?.username}</Card.Text>
        <Card.Text>Email: {user?.email}</Card.Text>
      </Card>
      <h2>User Posts</h2>
      <Row className='px-0 my-4 mx-0'>{getPosts()}</Row>
    </Container>
  );
};
