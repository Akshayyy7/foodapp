import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import veg from "./veg";
import web1 from "./web1";
import pfeed from "./pfeed";
import address from "./address";
import viewplate from "./viewplate";
import offers from "./offers";
import cafe from "./cafe";
import american from "./american";
import chinese from "./chinese";
import desserts from "./desserts";
import healthy from "./healthy";
import {Route,BrowserRouter,NavLink} from "react-router-dom";
const drawerWidth = 240;


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 2000,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class New3 extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (<BrowserRouter>
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >

             
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              FOOD DELIVERY APPLICATION
            </Typography>
            <NavLink to="/pfeed"><button className="kat" variant="title" color="inherit" noWrap>
              HOME 
            </button>
            </NavLink>
             <button variant="title" color="inherit" noWrap>
              SIGN UP 
            </button>
            
             <NavLink to="/address"><button variant="title" color="inherit" noWrap>
              ADDRESS
            </button>
            </NavLink>
              <NavLink to="/viewplate"><button variant="title" color="inherit" noWrap>
              VIEW PLATE 

            </button>
            </NavLink>
            <img className="xa" src={require('./4.jpg')}/>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
         </div>
          <Divider />
          <div>{mailFolderListItems}</div>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        <main className={classes.content}>pfeed
          <div className={classes.toolbar} />
          
<Route exact path ="/veg" component={veg} />
<Route exact path ="/offers" component={offers} />
<Route exact path ="/american" component={american} />
<Route exact path ="/cafe" component={cafe} />
<Route exact path ="/chinese" component={chinese} />
<Route exact path ="/desserts" component={desserts} />
<Route exact path ="/healthy" component={healthy} />
<Route exact path ="/New3" component={web1} />
<Route exact path ="/pfeed" component={pfeed} />
<Route exact path ="/address" component={address} />



<Route exact path ="/viewplate" component={viewplate} />



        </main>
        </div></BrowserRouter>
      
    );
  }
}

New3.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(New3);

