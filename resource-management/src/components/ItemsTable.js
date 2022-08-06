import React from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    getSortedRowModel
} from '@tanstack/react-table'
import { toast } from 'react-toastify';
import { deleteAction, addAction } from '../redux/slicer'
import { useDispatch, useSelector } from 'react-redux';
import { AlignRightt, Button, ItemLink, PaginationButton, SearchBarInput, TableCell, TableFooter, TableFooterInner, TableHead, TableHeader, TableMain, TableMainDiv, TableTd, TableTh, TableTr } from './StyledComponents';

export default function ItemsTable({ subItems }) {
    const dispatch = useDispatch()
    const { checked, sortByType } = useSelector(({ adminReducer }) => adminReducer)
    const columnHelper = createColumnHelper(subItems)
    const columns = [
        columnHelper.accessor(row => row.id, {
            id: 'id',
            cell: info => <TableCell><SearchBarInput type="checkbox" id={info.getValue()} value={info.getValue()} checkbox onChange={checkToDelete}
                checked={checked.indexOf(info.getValue()) >= 0} /></TableCell>,
            header: () => <TableHeader></TableHeader>,
            // width: 100
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
            dispatch(deleteAction({ checked: [...checked, e.target.defaultValue], showSortBy: false }))
        } else {
            dispatch(deleteAction({ checked: checked.filter(each => each !== e.target.defaultValue), showSortBy: false }))
        }

    }

    const deleteItems = () => {
        dispatch(deleteAction({ subItems: subItems.filter((eachSub) => checked.indexOf(eachSub.id) === -1), checked: [], showSortBy: false }))
        toast.success(checked.length + " Item" + (checked.length <= 1 ? '' : 's') + " Deleted Successfully", {
            position: toast.POSITION.BOTTOM_CENTER
        })
    }
    const openAddItem = () => {
        dispatch(addAction({ showAdd: true, showSortBy: false }))
    }
    const table = useReactTable({
        data: subItems,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })
    console.log("🚀 ~ file: ItemsTable.js ~ line 69 ~ ItemsTable ~ table", table)

    React.useEffect(() => {
        table.setPageSize(6)
        // table.setColumnSizingInfo({ size: 12 })
        if (sortByType === 'asc') {
            table.setSorting([{ id: 'id', desc: false }])
        } else {
            table.setSorting([{ id: 'id', desc: true }])
        }
    }, [sortByType])
    // table.setPageSize(Number(6))
    return (
        <TableMainDiv className="p-2">
            <TableMain>
                <TableHead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableTr key={headerGroup.id} >
                            {
                                headerGroup.headers.map(header => {
                                    return (
                                        <TableTh key={header.id} >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableTh>
                                    )
                                })

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

                <TableFooter>
                    {/* <tr> */}
                    <Button add={checked.length === 0} onClick={openAddItem}>ADD ITEM</Button>
                    <Button disabled={checked.length === 0} delete={checked.length > 0}
                        onClick={deleteItems}>DELETE</Button>
                    <AlignRightt>
                        <TableFooterInner>

                            <PaginationButton
                                onClick={() => table.setPageIndex(0)}
                                disabled={!table.getCanPreviousPage()}
                            >
                                {'<<'}
                            </PaginationButton>
                            <PaginationButton
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                {'<'}
                            </PaginationButton>
                            <PaginationButton
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                {'>'}
                            </PaginationButton>
                            <PaginationButton
                                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                disabled={!table.getCanNextPage()}
                            >
                                {'>>'}
                            </PaginationButton>
                        </TableFooterInner>
                    </AlignRightt>
                    {/* </tr> */}
                </TableFooter>

            </TableMain>
        </TableMainDiv >

    )
}
