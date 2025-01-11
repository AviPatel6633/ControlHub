"use client";

// import ReusableTable from "@/app/(adminpanel)/components/table/reusableTable";
import DateTable from "@/app/(adminpanel)/components/table/dateTable";
import FilterTable from "@/app/(adminpanel)/components/table/filterTable";
const sampleData = [
  { name: "Alice", age: 25, email: "alice@example.com", date: "2023-01-01" },
  { name: "Bob", age: 30, email: "bob@example.com", date: "2023-02-15" },
  { name: "Charlie", age: 35, email: "charlie@example.com", date: "2023-03-30" },
  { name: "David", age: 40, email: "david@example.com", date: "2023-04-10" },
  { name: "Eve", age: 28, email: "eve@example.com", date: "2023-05-20" },
  { name: "Frank", age: 32, email: "frank@example.com", date: "2023-06-25" },
  { name: "Grace", age: 22, email: "grace@example.com", date: "2023-07-05" },
  { name: "Hannah", age: 27, email: "hannah@example.com", date: "2023-08-12" },
  { name: "Ivy", age: 29, email: "ivy@example.com", date: "2023-09-18" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
  { name: "Jack", age: 33, email: "jack@example.com", date: "2023-10-01" },
];

const columns: {
  Header: string;
  accessor: keyof typeof sampleData[0]; // Ensures accessor is one of the keys in the sampleData
  isDateColumn?: boolean; // Optional flag for date columns
}[] = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
  { Header: "Email", accessor: "email" },
  { Header: "Date", accessor: "date", isDateColumn: true }, // Add date column
];

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <DateTable data={sampleData} columns={columns} />
      <FilterTable data={sampleData} columns={columns} />
    </div>
  );
};

export default HomePage;