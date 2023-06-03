import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchPosts } from '../../store/post';
import { selectPostEntities, selectIsPostLoading } from '../../store/post/selectors';
import Post from '../../components/Post/Post';
import Search from '../../components/Search/Search';
import Sort from '../../components/Sort/Sort';
import PaginationComponent from '../../components/Pagination/Pagination';
import PostPlaceholder from '../../components/PostPlaceholder/PostPlaceholder';

const PostsPage = () => {
  const [value, setValue] = useState('');
  const [sort, setSort] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const isLoading = useAppSelector(selectIsPostLoading);

  const posts = useAppSelector((state) => selectPostEntities(state));
  const dispatch = useAppDispatch();

  const handleSearch = (value: string) => setValue(value);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const [sortByField, sortOrderField] = value.split('_');
    setSort(sortByField);
    setSortOrder(sortOrderField === 'asc' ? 'asc' : 'desc');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const getPosts = () =>
    isLoading
      ? new Array(5).fill(null).map((_, index) => <PostPlaceholder key={index} />)
      : Object.values(currentPosts).map(({ id }) => <Post key={id} postId={id} />);

  return (
    <Container className='px-5 py-4'>
      <h1 className='border-bottom'>Posts</h1>
      <div className='my-4'>
        <Search value={handleSearch} />
        <Sort onChange={handleSort} />
        <Row className='px-0 my-4 mx-0'>{getPosts()}</Row>
        <PaginationComponent
          postsPerPage={postsPerPage}
          numberOfPosts={filteredPosts.length}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
};

export default PostsPage;
