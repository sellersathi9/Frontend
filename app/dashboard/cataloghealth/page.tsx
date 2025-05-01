import InventoryCard from "@/app/components/InventoryCard";
import TabLayout from "@/app/components/TabLayout";
import { CatalogHealthCOlumns } from "@/app/components/Table/catalogHealthColumns";
import { DataTable } from "@/app/components/Table/dataTable";

function CatalogHealth() {
    return ( <>

    <TabLayout title={"Catalog Health"}>

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

          <div className="">
                <DataTable columns={CatalogHealthCOlumns} data={data}/>
          </div>
        </div>    </TabLayout>
    </> );
}

export default CatalogHealth;

const data = [
    {
        image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
        name: "Product Name",
        bulletPoints: true,
        images: false,
        description: true,
        aPlus: false,
        another: true,
        status: "In Stock",
      },

      {
        image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
        name: "Product Name",
        bulletPoints: true,
        images: false,
        description: true,
        aPlus: false,
        another: true,
        status: "Out Of Stock",
      },

      {
        image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
        name: "Product Name",
        bulletPoints: true,
        images: false,
        description: true,
        aPlus: false,
        another: true,
        status: "Out Of Stock",
      },

      {
        image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
        name: "Product Name",
        bulletPoints: true,
        images: false,
        description: true,
        aPlus: false,
        another: true,
        status: "In Stock",
      },

      {
        image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
        name: "Product Name",
        bulletPoints: true,
        images: false,
        description: true,
        aPlus: false,
        another: true,
        status: "In Stock",
      },
]