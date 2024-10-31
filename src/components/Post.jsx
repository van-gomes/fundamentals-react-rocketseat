/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ post }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);
  const [newCommentText, setNewCommentText] = useState('');
  const { author, content, publishedAt } = post;

  const publishedDate = publishedAt instanceof Date ? publishedAt : new Date(publishedAt);

  if (isNaN(publishedDate)) {
    console.error("Data inválida para publishedAt:", publishedAt);
    return null;
  }

  const publishedDateFormatted = format(publishedDate, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  const publishedDateRelativeToNow = formatDistanceToNow(publishedDate, {
    locale: ptBR,
    addSuffix: true
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={false} src={author.avatarUrl} />
    
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={index}><a href="#">{line.content}</a></p>;
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
            return <Comment />
            return <Comment content={comment} />
          })}
      </div>
    </article>
  )
}

// Definição do componente Post (apenas a parte do PropTypes adaptada)
Post.propTypes = {
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['paragraph', 'link']).isRequired, // Especifica os valores possíveis
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  id: PropTypes.number.isRequired, // Opcional, caso id seja usado dentro do componente
};