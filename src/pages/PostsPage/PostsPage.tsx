import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchPosts } from '../../store/post';
import { selectPostEntities } from '../../store/post/selectors';
import Post from '../../components/Post/Post';
import Search from '../../components/Search/Search';

const PostsPage = () => {
  const [value, setValue] = useState('');

  const posts = useAppSelector((state) => selectPostEntities(state));
  const dispatch = useAppDispatch();

  const handleSearch = (value: string) => setValue(value);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = Object.values(posts)?.filter(({ title }) =>
    title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <Container className='px-5 py-4'>
      <h1>Posts</h1>
      <Search value={handleSearch} />
      <Row className='px-0 my-4 mx-0'>
        {Object.values(filteredPosts).map(({ id }) => (
          <Post key={id} postId={id} />
        ))}
      </Row>
    </Container>
  );
};

export default PostsPage;
