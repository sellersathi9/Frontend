"use client";

import {
  BellIcon,
  Command,
  LightbulbIcon,
  Search,
  SidebarIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSidebar } from "./ui/sidebar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { SignedIn, UserButton } from "@clerk/nextjs";

function MainHeader() {
  const { open, toggleSidebar, isMobile } = useSidebar();
  return (
    <>
      <div
        className={` z-10 flex flex-row justify-between items-center p-4  fixed top-0 ${
          open ? "w-[calc(100%_-_16rem)]" : "w-[calc(100%_-_4rem)]"
        } bg-white/10 backdrop-blur-xl border border-white/20 h-14 ${
          isMobile ? "w-full" : "w-[calc(100%-16rem)]"
        }`}
      >
        <div className="flex flex-row gap-3">
          <Button size={"icon"} variant={"outline"} onClick={toggleSidebar}>
            <SidebarIcon />
          </Button>

          <div className="relative w-3xl max-w-sm">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4 "
              color="black"
            />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 " // Add padding so text doesn't overlap the icon
            />

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1 text-sm text-muted-foreground border px-2 py-0.5 rounded-md bg-muted">
              <Command className="w-3 h-3" />
              <span>K</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <div className="relative">
            <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-600" />

            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <BellIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-fit" align="end">
                <div className="flex flex-row w-sm h-20 justify-center items-center text-gray-500">
                  No New Notifications
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <Button variant={"outline"} size={"icon"}>
            <LightbulbIcon />
          </Button>

          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="rounded-2xl"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
        </div>
      </div>
    </>
  );
}

export default MainHeader;
