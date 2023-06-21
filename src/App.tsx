import React from 'react';
import styles from './app.module.scss';
import src from './assets/img/avatar/avatar.jpg';
import Avatar from './components/UI/avatars/avatar/Avatar';

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Avatar src={src} />
      </div>
    </main>
  );
}

export default App;
