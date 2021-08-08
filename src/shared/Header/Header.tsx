import React, { Dispatch } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { randomInteger } from '../../utils/randomInteger';
import { SetStateAction } from 'react';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface Props {
  setRandom: Dispatch<SetStateAction<number>>;
}

function Header({ setRandom }: Props) {
  const classes = useStyles();

  const location = useLocation();
  const currentPath = location.pathname === '/svg';

  function onClick(): void {
    setRandom(randomInteger(0, 2));
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Svg
          </Typography>
          {currentPath && (
            <Button onClick={onClick} color="inherit">
              Получить SVG
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
