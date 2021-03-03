import React from 'react';
import { People, Camera, LocationCity } from '@material-ui/icons';

const menu = [
    {
        title: 'Characters',
        link: '/characters',
        icon: <People />,
    },
    {
        title: 'Episodes',
        link: '/episodes',
        icon: <Camera />,
    },
    {
        title: 'Locations',
        link: '/locations',
        icon: <LocationCity />,
    },
];
export default menu;
