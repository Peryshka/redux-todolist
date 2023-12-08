import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';

const MainInput = ({onChange, value, onKeyDown}) => {
  return(
    <div className={styles.inputWrap}>
      <TextField
        id="outlined-basic"
        label="Enter Todo Task"
        variant="outlined"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}

export default MainInput;