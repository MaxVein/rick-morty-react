import React, { useEffect, useState } from 'react';

import { getCharacters } from './CharactersService';
import { CharacterData, CharactersData, columns } from './CharactersModel';
import TableHandler from '../../common/ui/Table/table';
import { Typography } from '@material-ui/core';
import { People } from '@material-ui/icons';

// import styles from './Characters.module.css';
import sharedstyles from '../../common/styles/entityHeader.module.css';
import Loader from '../../common/ui/Loader/loader';

function Characters(): JSX.Element {
    const [loaded, setLoaded] = useState(false);
    const [dataSource, setDataSource] = useState([] as Array<CharacterData>);
    const [totalAmount, setTotalAmount] = useState(0);
    const [pageCounter, setPageCounter] = useState(0);
    const [nextPage, setNextPage] = useState('?page=1');

    useEffect(() => {
        let finished = false;
        if (!finished) {
            getCharacters(nextPage).then((res) => {
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
            getCharacters(nextPage).then((res: CharactersData) => {
                setDataSource((prevVal: Array<CharacterData>) => prevVal.concat([...res.results]));
                setNextPage(res.info.next);
            });
        }
    }, [pageCounter]);

    return (
        <>
            {loaded ? (
                <>
                    <Typography className={sharedstyles.header} variant='h4' component='h1'>
                        <People /> Characters
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

export default Characters;
