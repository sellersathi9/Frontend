import AppSidebar from "@/app/components/app-sidebar";
import MainHeader from "@/app/components/header";
import { SidebarProvider } from "@/app/components/ui/sidebar";
import { cookies } from "next/headers";

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  return (
    <>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />

        <main className="w-full h-screen overflow-x-hidden">
          <MainHeader />

          <div className="p-4 pt-20 max-h-screen h-full overflow-scroll overflow-x-hidden ">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}

export default RootLayout;
