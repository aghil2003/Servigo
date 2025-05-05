// "use client";

// import { useState,useEffect } from "react";
// import {
//   flexRender,
//   getCoreRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   SortingState,
//   useReactTable,
//   ColumnDef,
// } from "@tanstack/react-table";
// import { ArrowUpDown, ChevronDown } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import AxiosInstance from "@/axios/axiosInstance";

// // Define the order type
// interface Order {
//   id: string;
//   status: "completed" | "pending" | "cancelled" | "in-progress";
//   amount: number;
//   customer: string;
//   date: string;
//   service: string;
// }



// export function OrdersTable() {
//   const [order,setOrder]=useState([]);
//   const [sorting, setSorting] = useState<SortingState>([]);


//   const getOrder = async () => {
//       try {
//         const response = await AxiosInstance.get("/order");
//         console.log("API response:", response.data.review);
//         setOrder(response.data.review);
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//         setOrder([]); 
//       }
//     };
  
//     useEffect(() => {
//       getOrder();
//     }, []);
  

//   // Define columns for the table
//   const columns: ColumnDef<Order>[] = [
//     {
//       accessorKey: "id",
//       header: "Order ID",
//       cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
//     },
//     {
//       accessorKey: "status",
//       header: "Status",
//       cell: ({ row }) => {
//         const status = row.getValue("status") as string;
//         return (
//           <div>
//             <Badge
//               variant="outline"
//               className={`${
//                 status === "completed"
//                   ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
//                   : status === "pending"
//                   ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
//                   : status === "in-progress"
//                   ? "border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
//                   : "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
//               }`}
//             >
//               {status.charAt(0).toUpperCase() + status.slice(1)}
//             </Badge>
//           </div>
//         );
//       },
//     },
//     {
//       accessorKey: "service",
//       header: "Service",
//       cell: ({ row }) => <div>{row.getValue("service")}</div>,
//     },
//     {
//       accessorKey: "amount",
//       header: ({ column }) => {
//         return (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           >
//             Amount
//             <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         );
//       },
//       cell: ({ row }) => {
//         const amount = parseFloat(row.getValue("amount"));
//         const formatted = new Intl.NumberFormat("en-US", {
//           style: "currency",
//           currency: "USD",
//         }).format(amount);
//         return <div className="text-right font-medium">{formatted}</div>;
//       },
//     },
//     {
//       accessorKey: "customer",
//       header: "Customer",
//       cell: ({ row }) => <div>{row.getValue("customer")}</div>,
//     },
//     {
//       accessorKey: "date",
//       header: ({ column }) => {
//         return (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           >
//             Date
//             <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         );
//       },
//       cell: ({ row }) => {
//         const date = new Date(row.getValue("date"));
//         const formatted = new Intl.DateTimeFormat("en-US", {
//           day: "numeric",
//           month: "short",
//           year: "numeric",
//         }).format(date);
//         return <div>{formatted}</div>;
//       },
//     },
//     {
//       id: "actions",
//       cell: () => (
//         <div className="text-right">
//           <Button variant="ghost" size="sm">
//             View
//           </Button>
//         </div>
//       ),
//     },
//   ];

//   const table = useReactTable({
//     data: order,
//     columns,
//     onSortingChange: setSorting,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     state: {
//       sorting,
//     },
//   });

//   return (
//     <Card>
//       <CardHeader className="flex flex-row items-center justify-between">
//         <CardTitle>Recent Orders</CardTitle>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" size="sm" className="ml-auto">
//               Columns <ChevronDown className="ml-2 h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table
//               .getAllColumns()
//               .filter((column) => column.getCanHide())
//               .map((column) => {
//                 return (
//                   <DropdownMenuCheckboxItem
//                     key={column.id}
//                     className="capitalize"
//                     checked={column.getIsVisible()}
//                     onCheckedChange={(value) => column.toggleVisibility(!!value)}
//                   >
//                     {column.id}
//                   </DropdownMenuCheckboxItem>
//                 );
//               })}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </CardHeader>
//       <CardContent>
//         <div className="rounded-md border">
//           <Table>
//             <TableHeader>
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <TableRow key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableHeader>
//             <TableBody>
//               {table.getRowModel().rows.length ? (
//                 table.getRowModel().rows.map((row) => (
//                   <TableRow key={row.id}>
//                     {row.getVisibleCells().map((cell) => (
//                       <TableCell key={cell.id}>
//                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={columns.length} className="h-24 text-center">
//                     No orders found.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//         <div className="flex items-center justify-end space-x-2 py-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
















// // Sample data for the orders table
// const orders: Order[] = [
//   {
//     id: "ORD-001",
//     status: "completed",
//     amount: 149.99,
//     customer: "John Smith",
//     date: "2024-05-10",
//     service: "Plumbing Repair",
//   },
//   {
//     id: "ORD-002",
//     status: "pending",
//     amount: 299.99,
//     customer: "Emily Johnson",
//     date: "2024-05-12",
//     service: "AC Installation",
//   },
//   {
//     id: "ORD-003",
//     status: "in-progress",
//     amount: 89.99,
//     customer: "Michael Brown",
//     date: "2024-05-09",
//     service: "Electrical Wiring",
//   },
//   {
//     id: "ORD-004",
//     status: "completed",
//     amount: 199.99,
//     customer: "Sarah Davis",
//     date: "2024-05-08",
//     service: "Roof Repair",
//   },
//   {
//     id: "ORD-005",
//     status: "cancelled",
//     amount: 129.99,
//     customer: "Robert Wilson",
//     date: "2024-05-11",
//     service: "Painting Service",
//   },
//   {
//     id: "ORD-006",
//     status: "completed",
//     amount: 349.99,
//     customer: "Jennifer Lee",
//     date: "2024-05-07",
//     service: "Kitchen Renovation",
//   },
//   {
//     id: "ORD-007",
//     status: "pending",
//     amount: 79.99,
//     customer: "David Miller",
//     date: "2024-05-14",
//     service: "Lawn Maintenance",
//   },
//   {
//     id: "ORD-008",
//     status: "in-progress",
//     amount: 249.99,
//     customer: "Lisa Anderson",
//     date: "2024-05-13",
//     service: "Bathroom Remodel",
//   },
// ];




"use client";

import { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import AxiosInstance from "@/axios/axiosInstance";

// Define the order type
interface Order {
  id: string;
  status: "completed" | "pending" | "cancelled" | "in-progress";
  amount: number;
  customer: string;
  date: string;
  service: string;
}

export function OrdersTable() {
  const [order, setOrder] = useState<Order[]>([]); // Ensure order is initialized as an empty array
  const [sorting, setSorting] = useState<SortingState>([]);

  const getOrder = async () => {
    try {
      const response = await AxiosInstance.get("/order");
      console.log("API response:", response.data.review);
      setOrder(response.data.review || []); // Fallback to empty array if response.data.review is undefined
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setOrder([]); // Ensure order is an empty array in case of error
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  // Define columns for the table
  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: "id",
      header: "Order ID",
      cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <div>
            <Badge
              variant="outline"
              className={`${
                status === "completed"
                  ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  : status === "pending"
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                  : status === "in-progress"
                  ? "border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                  : "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
        );
      },
    },
    {
      accessorKey: "service",
      header: "Service",
      cell: ({ row }) => <div>{row.getValue("service")}</div>,
    },
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);
        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "customer",
      header: "Customer",
      cell: ({ row }) => <div>{row.getValue("customer")}</div>,
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const date = new Date(row.getValue("date"));
        const formatted = new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(date);
        return <div>{formatted}</div>;
      },
    },
    {
      id: "actions",
      cell: () => (
        <div className="text-right">
          <Button variant="ghost" size="sm">
            View
          </Button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: order, // Ensure that order is always an array here
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {order.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No orders found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
