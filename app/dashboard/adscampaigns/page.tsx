import TabLayout from "@/app/components/TabLayout";
import { AddcampaignsColumn } from "@/app/components/Table/addCampaignsColumns";
import { DataTable } from "@/app/components/Table/dataTable";
import { Button } from "@/app/components/ui/button";
import addCampaignData from "@/app/Mock data/addCampaignData";
import { PlusIcon } from "lucide-react";

function AdsCampaigns() {
    return ( <>

    <TabLayout title={"Ads & Campaigns"} buttons={[ <Button key={1}>
            {" "}
            <PlusIcon /> New Campaign
          </Button>,]}>

        <div>
            <DataTable columns={AddcampaignsColumn} data={addCampaignData}/>
        </div>

    </TabLayout>
    </> );
}

export default AdsCampaigns;