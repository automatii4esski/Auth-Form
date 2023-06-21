import React from 'react';
import styles from './app.module.scss';
import src from './assets/img/avatar/avatar.jpg';
import Avatar from './components/UI/avatars/avatar/Avatar';
import SocialLink from './components/UI/links/socialLink/SocialLink';
import Input from './components/UI/inputs/input/Input';

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Input placeholder="test" />
      </div>
    </main>
  );
}

export default App;
