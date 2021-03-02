import React, { useEffect, useState } from 'react';

import { getCharacters } from './CharactersService';
import { columns } from './CharactersModel';
import TableHandler from '../../common/ui/Table/table';
import { Typography } from '@material-ui/core';

function Characters(): JSX.Element {
    const [dataSource, setDataSource] = useState([] as Array<any>);
    const [totalAmount, setTotalAmount] = useState(0);
    const [nextPage, setNextPage] = useState(null);
    useEffect(() => {
        getCharacters('?page=1').then((res) => {
            setDataSource([...res.results]);
            setTotalAmount(res.info.count);
            setNextPage(res.info.next);
        });
    }, []);
    return (
        <>
            <Typography variant='h4' component='h1'>
                Characters
            </Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laboriosam, eveniet
            optio assumenda deserunt maxime, minus animi libero esse iure, voluptate recusandae
            error! Optio omnis eveniet aspernatur rem tenetur! Earum atque totam quos culpa incidunt
            provident, quibusdam itaque dignissimos, temporibus commodi, distinctio velit autem.
            Dolorum molestias voluptates illo corporis, facilis minima nulla est obcaecati possimus
            facere accusantium vel doloremque, dolore eaque eius sapiente reiciendis. Fugit quisquam
            dolorum in quis itaque nemo quos totam architecto pariatur reiciendis nulla at, et harum
            incidunt, optio explicabo, dignissimos iste repellat quam odit adipisci suscipit. Sequi,
            enim rem vero necessitatibus ad illum sit quidem at!
            <TableHandler columns={columns} data={dataSource} amount={totalAmount} />
        </>
    );
}

export default Characters;
