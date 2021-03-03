import React from 'react';
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    makeStyles,
} from '@material-ui/core';
import { TableProps } from './TableModel';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    container: {
        maxHeight: 600,
        overflowX: 'auto',
    },
});

function TableHandler({
    columns,
    data,
    amount,
    pageCounter,
    setPageCounter,
}: TableProps): JSX.Element {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);

    const handleChangePage = (event: unknown, newPage: number) => {
        if (newPage > page) {
            if (pageCounter === page) {
                setPageCounter((prevVal) => {
                    prevVal++;
                    return prevVal;
                });
            }
        }
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper elevation={5} className={classes.root}>
            <TableContainer className={classes.container}>
                <Table className={classes.root} stickyHeader>
                    <TableHead className={classes.root}>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody className={classes.root}>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((item) => {
                                return (
                                    <TableRow hover role='checkbox' tabIndex={-1} key={item.id}>
                                        {columns.map((column) => {
                                            const value = item[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[20, 50, 100]}
                component='div'
                count={amount}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default TableHandler;
