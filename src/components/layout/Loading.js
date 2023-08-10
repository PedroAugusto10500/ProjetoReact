import styles from './Loading.module.css'



function Loading() {
    return (
      <div className={styles.loader_container}>
        <img src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-22-68_512.gif" alt="Loading" />
      </div>
    );
  }

export default Loading