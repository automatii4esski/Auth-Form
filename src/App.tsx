import React from 'react';
import styles from './app.module.scss';
import src from './assets/img/avatar/avatar.jpg';
import Avatar from './components/UI/avatars/avatar/Avatar';
import SocialLink from './components/UI/links/socialLink/SocialLink';
import Input from './components/UI/inputs/input/Input';
import Button from './components/UI/buttons/button/Button';

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Button variant="hollow">test</Button>
      </div>
    </main>
  );
}

export default App;
