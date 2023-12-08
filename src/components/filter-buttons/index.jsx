import React from 'react';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

const FilterButtons = ({children}) => {
  return(
    <div className={styles.filterBtnWrap}>
      <List
        sx={{width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <Button
            variant="text"
            className={styles.filterBtn}
          >
            {children}
          </Button>
        </ListItemButton>
      </List>
    </div>
  )
}

export default FilterButtons;