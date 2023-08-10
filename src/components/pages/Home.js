import React from 'react';
import styles from './Home.module.css';
import NovoLane from '../../img/NovoLane.png';
import LinkButton from '../layout/LinkButton';


function Home() {
  return (
    <section className={`${styles.container} ${styles.projetoBox}`}>
      <h1>
        Bem-Vindo ao <span className={styles.projectBox}>Project-Box</span>
      </h1>
      <h2>Comece a gerenciar os projetos da sua empresa agora mesmo!</h2>
      <br />
      <LinkButton to="/NewProject" text="Criar Projeto" />
      <br />
      <img src={NovoLane} alt="NovoLane" className={styles.cellImage} />
      <img
        src="https://cdn-icons-png.flaticon.com/512/3010/3010731.png"
        alt="Money"
        className={styles.moneyImage}
      />
      
      
    </section>
  );
}

export default Home;



