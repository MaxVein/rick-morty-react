import { Typography } from '@material-ui/core';
import { LocationCity } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Loader from '../../common/ui/Loader/loader';
import TableHandler from '../../common/ui/Table/table';
import { columns } from '../Locations/LocationsModel';
import { LocationData, LocationsData } from '../Locations/LocationsModel';
import { getLocations } from '../Locations/LocationsService';

import sharedstyles from '../../common/styles/entityHeader.module.css';

function Locations(): JSX.Element {
    const [loaded, setLoaded] = useState(false);
    const [dataSource, setDataSource] = useState([] as Array<LocationData>);
    const [totalAmount, setTotalAmount] = useState(0);
    const [pageCounter, setPageCounter] = useState(0);
    const [nextPage, setNextPage] = useState('?page=1');

    useEffect(() => {
        let finished = false;
        if (!finished) {
            getLocations(nextPage).then((res) => {
                setDataSource([...res.results]);
                setTotalAmount(res.info.count);
                setNextPage(res.info.next);
                setLoaded(true);
            });
        }
        return () => {
            finished = true;
        };
    }, []);
    useEffect(() => {
        if (pageCounter >= 1) {
            getLocations(nextPage).then((res: LocationsData) => {
                setDataSource((prevVal: Array<LocationData>) => prevVal.concat([...res.results]));
                setNextPage(res.info.next);
            });
        }
    }, [pageCounter]);

    return (
        <>
            {loaded ? (
                <>
                    <Typography className={sharedstyles.header} variant='h4' component='h1'>
                        <LocationCity /> Locations
                    </Typography>
                    <TableHandler
                        columns={columns}
                        data={dataSource}
                        amount={totalAmount}
                        pageCounter={pageCounter}
                        setPageCounter={setPageCounter}
                    />
                </>
            ) : (
                <Loader />
            )}
        </>
    );
}

export default Locations;
