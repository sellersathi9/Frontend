import InventoryCard from "@/app/components/InventoryCard";
import { columns } from "@/app/components/Table/inventoryColumns";
import { DataTable } from "@/app/components/Table/dataTable";
import TabLayout from "@/app/components/TabLayout";
import { Button } from "@/app/components/ui/button";
import { PlusIcon } from "lucide-react";

function Inventory() {
  return (
    <>
      <TabLayout
        title={"Inventory"}
        buttons={[
          <Button key={1}>
            {" "}
            <PlusIcon /> Add SKU
          </Button>,
        ]}
      >
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <InventoryCard
              title={"Total Products"}
              change={"2.01%"}
              value={"232"}
            />
            <InventoryCard
              title={"Active Products"}
              change={"2.01%"}
              value={"154"}
            />
            <InventoryCard
              title={"Inactive Products"}
              change={"2.01%"}
              value={"76"}
            />
            <InventoryCard
              title={"Out Of Stock"}
              change={"2.01%"}
              value={"32"}
            />
          </div>

          <div>
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </TabLayout>
    </>
  );
}

export default Inventory;

const data = [
  {
    image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
    name: "String asdasdasda asdasdasd asdasd asdasd asd  ",
    stock: 12,
    daysOfSupply: 43,
    reOrderQty: 20,
    reOrderDate: "10 Aug 2025",
    status: "In Stock",
    price: 123,
  },

  {
    image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
    name: "String",
    stock: 12,
    daysOfSupply: 43,
    reOrderQty: 20,
    reOrderDate: "10 Aug 2025",
    status: "In Stock",
    price: 123,
  },
  {
    image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
    name: "String",
    stock: 12,
    daysOfSupply: 43,
    reOrderQty: 20,
    reOrderDate: "10 Aug 2025",
    status: "Out Of Stock",
    price: 123,
  },
  {
    image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
    name: "String",
    stock: 12,
    daysOfSupply: 43,
    reOrderQty: 20,
    reOrderDate: "10 Aug 2025",
    status: "In Stock",
    price: 123,
  },
  {
    image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
    name: "String",
    stock: 12,
    daysOfSupply: 43,
    reOrderQty: 20,
    reOrderDate: "10 Aug 2025",
    status: "Out Of Stock",
    price: 123,
  },
  {
    image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
    name: "String",
    stock: 12,
    daysOfSupply: 43,
    reOrderQty: 20,
    reOrderDate: "10 Aug 2025",
    status: "Out Of Stock",
    price: 123,
  },
  {
    image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
    name: "String",
    stock: 12,
    daysOfSupply: 43,
    reOrderQty: 20,
    reOrderDate: "10 Aug 2025",
    status: "Out Of Stock",
    price: 123,
  },
  {
    image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
    name: "String",
    stock: 12,
    daysOfSupply: 43,
    reOrderQty: 20,
    reOrderDate: "10 Aug 2025",
    status: "In Stock",
    price: 123,
  },
  {
    image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
    name: "String",
    stock: 12,
    daysOfSupply: 43,
    reOrderQty: 20,
    reOrderDate: "10 Aug 2025",
    status: "In Stock",
    price: 123,
  },
  {
    image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
    name: "String",
    stock: 12,
    daysOfSupply: 43,
    reOrderQty: 20,
    reOrderDate: "10 Aug 2025",
    status: "Out Of Stock",
    price: 123,
  },
];
