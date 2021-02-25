import styles from '../styles/components/Profile.module.css';

export function Profile () {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/anameloni.png" alt="Ana Luiza Meloni Dias" />
      <div>
        <strong>Ana Luiza Meloni Dias</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 01
        </p>
      </div>
    </div>
  )
}