import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchComments } from '../../store/comment';
import { selectCommentByPostId } from '../../store/comment/selectors';

const Comments = ({ postId }: { postId: number | string }) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => selectCommentByPostId(state, { postId }));

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [postId]);

  return (
    <ListGroup.Item>
      {Object.values(comments)?.map(({ id, email, body }) => (
        <Card className='mb-2' key={id}>
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <p>{body}</p>
              <footer className='blockquote-footer'>
                <cite title='Source Title'>{email}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </ListGroup.Item>
  );
};

export default Comments;
