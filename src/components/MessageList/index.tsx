import styles from './styles.module.scss';

import logoImage from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImage} alt="DoWhile2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            evento do ano.
          </p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/marcosvcorsi.png" alt="Marcos Vinicius Corsi" />
            </div>

            <span>Marcos Vinicius Corsi</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            evento do ano.
          </p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/marcosvcorsi.png" alt="Marcos Vinicius Corsi" />
            </div>

            <span>Marcos Vinicius Corsi</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            evento do ano.
          </p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/marcosvcorsi.png" alt="Marcos Vinicius Corsi" />
            </div>

            <span>Marcos Vinicius Corsi</span>
          </div>
        </li>
      </ul>
    </div>
  )
}