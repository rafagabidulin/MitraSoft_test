import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    <Container className='px-5 py-2'>
      <Row xs={1} md={3} className='g-4 py-2 px-5'>
        {posts.map((id) => (
          <Col>
            <Post key={id} postId={id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default PostsPage;
