import { Typography } from '@material-ui/core';
import { Camera } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Loader from '../../common/ui/Loader/loader';
import TableHandler from '../../common/ui/Table/table';
import { columns } from '../Episodes/EpisodesModel';
import { EpisodeData, EpisodesData } from './EpisodesModel';
import { getEpisodes } from './EpisodesService';

// import styles from './Episodes.module.css';
import sharedstyles from '../../common/styles/entityHeader.module.css';

function Episodes(): JSX.Element {
    const [loaded, setLoaded] = useState(false);
    const [dataSource, setDataSource] = useState([] as Array<EpisodeData>);
    const [totalAmount, setTotalAmount] = useState(0);
    const [pageCounter, setPageCounter] = useState(0);
    const [nextPage, setNextPage] = useState('?page=1');

    useEffect(() => {
        let finished = false;
        if (!finished) {
            getEpisodes(nextPage).then((res) => {
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
            getEpisodes(nextPage).then((res: EpisodesData) => {
                setDataSource((prevVal: Array<EpisodeData>) => prevVal.concat([...res.results]));
                setNextPage(res.info.next);
            });
        }
    }, [pageCounter]);

    return (
        <>
            {loaded ? (
                <>
                    <Typography className={sharedstyles.header} variant='h4' component='h1'>
                        <Camera /> Characters
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

export default Episodes;
