import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
    Divider,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Drawer,
    useTheme,
    Theme,
    createStyles,
    fade,
    CssBaseline,
} from '@material-ui/core';
import { Menu, Search, Mail, Inbox, ChevronLeft, ChevronRight, People } from '@material-ui/icons';
import clsx from 'clsx';

import Characters from './features/Characters';
import NotFoundError from './common/ui/NotFoundError';
import menu from './common/utils/navMenu';
import Episodes from './features/Episodes';
import Locations from './features/Locations';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
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
            marginRight: 36,
        },
        title: {
            display: 'flex',
            flexGrow: 1,
            alignItems: 'flex-start',
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            textAlign: 'left',
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        logoPlace: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        logoWrapper: {
            position: 'relative',
            width: '100%',
            padding: '0.5rem 0 0.5rem 0',
        },
        logo: {
            maxWidth: '100%',
            objectFit: 'contain',
        },
        link: {
            width: '100%',
            display: 'inline-flex',
            color: 'rgba(0, 0, 0, 1)',
            textDecoration: 'none',
            fontWeight: 'bold',
        },
        activeLink: {
            color: theme.palette.primary.dark,
            fontWeight: 'bold',
        },
        listItemText: {
            fontWeight: 600,
        },
    }),
);
function App(): JSX.Element {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = (open: boolean): void => {
        setOpen(open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        onClick={() => handleDrawer(true)}
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                        edge='start'
                        aria-label='menu'>
                        <Menu />
                    </IconButton>
                    <Typography className={classes.title} variant='h6' noWrap>
                        Rick & Morty
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder='Search…'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                <div className={clsx(classes.toolbar, classes.logoPlace)}>
                    <div className={classes.logoWrapper}>
                        <img src={logo} alt='logo' className={classes.logo} />
                    </div>
                    <IconButton onClick={() => handleDrawer(false)}>
                        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {menu.map((item) => (
                        <ListItem button key={item.title}>
                            <NavLink
                                to={item.link}
                                className={classes.link}
                                activeClassName={classes.activeLink}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText
                                    className={classes.listItemText}
                                    primary={item.title}
                                />
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path='/' component={Characters} exact />
                    <Route path='/characters' component={Characters} />
                    <Route path='/episodes' component={Episodes} />
                    <Route path='/locations' component={Locations} />
                    <Route path='*' component={NotFoundError} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
