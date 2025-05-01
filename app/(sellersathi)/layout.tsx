import type { Metadata } from "next";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "SellerSathi9",
  description: "All in one tool for E-commerce sellers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className=" flex flex-row p-5 justify-between border-2">
        <div>
          <p className=" text-2xl font-extrabold">SellerSathi9</p>
        </div>

        <SignedOut>
          <div className="flex flex-row gap-5">
            <SignInButton />
            <SignUpButton />
          </div>
        </SignedOut>
      </header>

      {children}
    </>
  );
}
