import React from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel
} from '@tanstack/react-table'
import { deleteAction } from '../redux/slicer'
import { useDispatch, useSelector } from 'react-redux';
import { Button, ItemLink, SearchBarInput, TableCell, TableFooter, TableHead, TableHeader, TableMain, TableMainDiv, TableTd, TableTh, TableTr } from './StyledComponents';

export default function ItemsTable() {
    // const table = useReactTable(options)
    const dispatch = useDispatch()
    const { subItems, checked } = useSelector(({ adminReducer }) => adminReducer)
    const columnHelper = createColumnHelper(subItems)
    const columns = [
        columnHelper.accessor(row => row.id, {
            id: 'id',
            cell: info => <SearchBarInput type="checkbox" id={info.getValue()} value={info.getValue()} checkbox onChange={checkToDelete}
                checked={checked.indexOf(info.getValue()) >= 0} />,
            header: () => <TableHeader></TableHeader>,
        }),
        columnHelper.accessor(row => row.title, {
            id: 'title',
            cell: info => <TableCell>{info.getValue()}</TableCell>,
            header: () => <TableHeader>TITLE</TableHeader>,
        }),
        columnHelper.accessor(row => row.description, {
            id: 'description',
            cell: info => <TableCell>{info.getValue()}</TableCell>,
            header: () => <TableHeader resize>DESCRIPTION</TableHeader>,
        }),
        columnHelper.accessor(row => row.link, {
            id: 'link',
            cell: info => <ItemLink href={info.getValue()} target='_blank'>{info.getValue()}</ItemLink>,
            header: () => <TableHeader>LINK</TableHeader>,
        }),

    ]
    const checkToDelete = (e) => {
        if (e.target.checked) {
            dispatch(deleteAction({ checked: [...checked, e.target.defaultValue] }))
        } else {
            dispatch(deleteAction({ checked: checked.filter(each => each !== e.target.defaultValue) }))
        }

    }

    const deleteItems = () => {
        dispatch(deleteAction({ subItems: subItems.filter((eachSub) => checked.indexOf(eachSub.id) == -1), checked: [] }))
    }

    const table = useReactTable({
        data: subItems,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })



    return (
        <TableMainDiv className="p-2">
            <TableMain>
                <TableHead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableTr key={headerGroup.id} >
                            {
                                headerGroup.headers.map(header => (
                                    <TableTh key={header.id} descRes={header.index === 2} checkRes={header.index == 0}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableTh>
                                ))
                            }
                        </TableTr>
                    ))}
                </TableHead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <TableTr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <TableTd key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableTd>
                            ))}
                        </TableTr>
                    ))}
                </tbody>
                <tfoot>
                    <TableFooter>
                        <Button add={checked.length === 0}>ADD ITEM</Button>
                        <Button disabled={checked.length === 0} delete={checked.length > 0}
                            onClick={deleteItems}>DELETE</Button>
                    </TableFooter>
                </tfoot>
            </TableMain>
        </TableMainDiv >

    )
}
