import styles from './styles.module.css';

export const Button = (props: any) => {
  return (
    <div className={styles.container}>
      <button
        className={props.type ? styles[props.type] : styles.primary}
        {...props}
      >
        {props.text}
      </button>
    </div>
  );
};
