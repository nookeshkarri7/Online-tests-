import React from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { useDispatch, useSelector } from 'react-redux';
import { TableHead, TableHeader, TableMain, TableMainDiv, TableTd, TableTh, TableTr } from './StyledComponents';

export default function ItemsTable() {
    // const table = useReactTable(options)
    const { subItems } = useSelector(({ adminReducer }) => adminReducer)
    const columnHelper = createColumnHelper(subItems)
    const columns = [
        columnHelper.accessor(row => row.title, {
            id: 'title',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <TableHeader>TITLE</TableHeader>,
        }),
        columnHelper.accessor(row => row.description, {
            id: 'description',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <TableHeader>DESCRIPTION</TableHeader>,
            maxSize: "50px"
        }),
        columnHelper.accessor(row => row.link, {
            id: 'link',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <TableHeader>LINK</TableHeader>,
        }),

    ]
    const table = useReactTable({
        data: subItems,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <TableMainDiv className="p-2">
            <TableMain>
                <TableHead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableTr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableTh key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableTh>
                            ))}
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
                {/* <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.footer,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot> */}
            </TableMain>
        </TableMainDiv>

    )
}
