"use client";

import React, { useState } from "react";
import { isEmpty } from "lodash"; // Optional for deep checking

// Define the type for the data rows and columns
type TableProps<T> = {
    data: T[]; // Data to be displayed in the table
    columns: {
        Header: string;
        accessor: keyof T; // Ensure accessor is a key of T (data rows)
        isDateColumn?: boolean; // Optional flag for date column filtering
    }[]; // Columns and their properties
};

const ReusableTable = <T extends object>({ data, columns }: TableProps<T>) => {
    // State for sorting
    const [sortBy, setSortBy] = useState<keyof T | null>(null);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    // State for filtering
    const [filter, setFilter] = useState<string>("");

    // Date range filter state
    const [dateFilter, setDateFilter] = useState<{ startDate: string | null; endDate: string | null }>({
        startDate: null,
        endDate: null,
    });

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const rowsPerPageOptions = [10, 50, 100, "All"];

    // Sorting function
    const sortData = (data: T[]) => {
        if (!sortBy) return data;

        return [...data].sort((a, b) => {
            const aValue = a[sortBy];
            const bValue = b[sortBy];

            if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
            if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
            return 0;
        });
    };

    // Filtering function (text-based and date-based)
    const filterData = (data: T[]) => {
        let filteredData = data;

        // Text filtering
        if (!isEmpty(filter)) {
            filteredData = filteredData.filter((row) =>
                Object.values(row).some((value) =>
                    String(value).toLowerCase().includes(filter.toLowerCase())
                )
            );
        }

        // Date filtering (only if a date column exists)
        if (dateFilter.startDate || dateFilter.endDate) {
            filteredData = filteredData.filter((row) => {
                const dateValue = row["date"] as unknown as string;

                if (!dateValue) return false; // If no date value, exclude it

                const rowDate = new Date(dateValue);

                let isValid = true;
                if (dateFilter.startDate) {
                    const startDate = new Date(dateFilter.startDate);
                    if (rowDate < startDate) isValid = false;
                }
                if (dateFilter.endDate) {
                    const endDate = new Date(dateFilter.endDate);
                    if (rowDate > endDate) isValid = false;
                }

                return isValid;
            });
        }

        return filteredData;
    };

    // Apply sorting and filtering
    const filteredData = filterData(data);
    const sortedData = sortData(filteredData);

    // Pagination logic
    const totalRows = sortedData.length;
    const totalPages = rowsPerPage === "All" ? 1 : Math.ceil(totalRows / rowsPerPage);

    const currentPageData = rowsPerPage === "All"
        ? sortedData
        : sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Handle rows per page change
    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setRowsPerPage(value === "All" ? "All" : Number(value));
        setCurrentPage(1); // Reset to first page when rows per page changes
    };

    return (
        <div className="overflow-hidden bg-white border rounded-lg">
            {/* Filter Inputs */}
            <div className="flex sm:flex-row flex-col gap-4 mb-4 p-4">
                <div className="w-full px-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="py-3 px-4 w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-200 hover:border-indigo-500"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                {/* Date Filter */}
                {columns.some((col) => col.isDateColumn) && (
                    <div className="flex gap-4">
                        <input
                            type="date"
                            className="py-3 px-4 rounded-xl border border-gray-300"
                            value={dateFilter.startDate ?? ""}
                            onChange={(e) =>
                                setDateFilter({ ...dateFilter, startDate: e.target.value })
                            }
                        />
                        <input
                            type="date"
                            className="py-3 px-4 rounded-xl border border-gray-300"
                            value={dateFilter.endDate ?? ""}
                            onChange={(e) =>
                                setDateFilter({ ...dateFilter, endDate: e.target.value })
                            }
                        />
                    </div>
                )}
            </div>

           

            {/* Table */}
            <table className="min-w-full table-auto bg-white rounded-lg ">
                <thead>
                    <tr className="bg-primary text-white">
                        {columns.map((column) => (
                            <th
                                key={column.Header}
                                className="text-lg font-bold py-3 px-4 cursor-pointer select-none transition-all duration-300"
                                onClick={() => {
                                    if (sortBy === column.accessor) {
                                        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                                    } else {
                                        setSortBy(column.accessor);
                                        setSortDirection("asc");
                                    }
                                }}
                            >
                                {column.Header}
                                {sortBy === column.accessor && (
                                    <span className="ml-2 text-white text-lg">
                                        {sortDirection === "asc" ? "↑" : "↓"}
                                    </span>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b text-center border-gray-200 hover:bg-lightprimary transition-all duration-200">
                            {columns.map((column) => (
                                <td key={String(column.accessor)} className="py-3 px-4 text-md text-gray-700 whitespace-nowrap">
                                    {column.isDateColumn
                                        ? new Date(row[column.accessor] as unknown as string).toLocaleDateString()
                                        : String(row[column.accessor])} {/* Explicit conversion to string */}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center my-4 px-4">
                <span>
                    Showing {currentPageData.length} of {totalRows} entries
                </span>

                <div className="flex gap-4">
                     {/* Rows per Page Dropdown */}
                    <div className="flex justify-end">
                        <select
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                            className="py-1 px-2 mx-2 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none text-gray"
                        >
                            {rowsPerPageOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option === "All" ? "Show All" : `Show ${option} Rows`}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        disabled={currentPage <= 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <button
                        disabled={currentPage >= totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReusableTable;
