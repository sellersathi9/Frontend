"use client";
import {
  ChevronsUpDown,
  HeartPulse,
  LayoutDashboard,
  Monitor,
  Package,
  Settings,
  Sheet,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function AppSidebar() {
  const { open } = useSidebar();
  return (
    <>
      <Sidebar variant="floating" collapsible="icon" className="relative">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    {open ? (
                      <div className="w-7 h-7 bg-black rounded-sm" />
                    ) : (
                      <div className="w-7 h-7 bg-black rounded-sm absolute top-0 left-1/2 -translate-x-1/2 "></div>
                    )}
                    {!open || <span className="font-bold">Seller Sathi9</span>}
                    {!open || <ChevronsUpDown className="ml-auto" />}
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full min-w-xs">
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Acme Corp.</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>HOME</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item, i) => {
                  if (open) {
                    return (
                      <SidebarMenuItem key={i}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon color="grey" />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  } else {
                    return (
                      <SidebarMenuItem key={i}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <SidebarMenuButton asChild>
                                <a href={item.url}>
                                  <item.icon color="grey" />
                                  <span>{item.title}</span>
                                </a>
                              </SidebarMenuButton>
                            </TooltipTrigger>

                            <TooltipContent side="right">
                              <p>{item.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </SidebarMenuItem>
                    );
                  }
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter />
      </Sidebar>
    </>
  );
}

export default AppSidebar;

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inventory",
    url: "/dashboard/inventory",
    icon: Package,
  },
  {
    title: "Catalog Health",
    url: "/dashboard/cataloghealth",
    icon: HeartPulse,
  },
  {
    title: "Ads & campaigns",
    url: "/dashboard/adscampaigns",
    icon: Monitor,
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: Sheet,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];
