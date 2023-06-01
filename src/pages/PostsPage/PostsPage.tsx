import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchPosts } from '../../store/post';
import { selectPostEntities } from '../../store/post/selectors';
import Post from '../../components/Post/Post';
import Search from '../../components/Search/Search';
import Sort from '../../components/Sort/Sort';

const PostsPage = () => {
  const [value, setValue] = useState('');
  const [sort, setSort] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const posts = useAppSelector((state) => selectPostEntities(state));
  const dispatch = useAppDispatch();

  const handleSearch = (value: string) => setValue(value);
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const [sortByField, sortOrderField] = value.split('_');
    setSort(sortByField);
    setSortOrder(sortOrderField === 'asc' ? 'asc' : 'desc');
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const sortedPosts = Object.values(posts)
    .slice()
    .sort((a, b) => {
      if (sort) {
        if (sortOrder === 'asc') {
          const titleFirst = a.title.toLowerCase();
          const titleNext = b.title.toLowerCase();
          if (titleFirst < titleNext) return -1;
          if (titleFirst > titleNext) return 1;
        }
        const titleFirst = a.title.toLowerCase();
        const titleNext = b.title.toLowerCase();
        if (titleFirst < titleNext) return 1;
        if (titleFirst > titleNext) return -1;
      }
      return 0;
    });

  const filteredPosts = Object.values(sortedPosts)?.filter(({ title }) =>
    title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <Container className='px-5 py-4'>
      <h1>Posts</h1>
      <Search value={handleSearch} />
      <Sort onChange={handleSort} />
      <Row className='px-0 my-4 mx-0'>
        {Object.values(filteredPosts).map(({ id }) => (
          <Post key={id} postId={id} />
        ))}
      </Row>
    </Container>
  );
};

export default PostsPage;
