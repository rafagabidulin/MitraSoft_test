import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchPosts } from '../../store/post';
import { selectPostIds } from '../../store/post/selectors';
import Post from '../../components/Post/Post';

const PostsPage = () => {
  const posts = useAppSelector((state) => selectPostIds(state));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container className='px-5 py-4'>
      <h1>Posts</h1>
      <Row className='px-0 my-4 mx-0'>
        {posts.map((id) => (
          <Post key={id} postId={id} />
        ))}
      </Row>
    </Container>
  );
};
export default PostsPage;
