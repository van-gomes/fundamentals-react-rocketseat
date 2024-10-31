/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ comment }) {
  const { content } = comment;

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />
    
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

Comment.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['paragraph', 'link']).isRequired, // Especifica os valores possíveis
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};