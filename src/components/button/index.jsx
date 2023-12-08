import React from 'react';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';

const ButtonComponent = ({onClick, children}) => {
  return(
    <div className={styles.btnWrap}>
      <Button
        variant="contained"
        size="large"
        className={styles.btn}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  )
}

export default ButtonComponent;