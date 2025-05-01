import { JSX } from "react";


function TabLayout({children , title , buttons} : Readonly<{children : React.ReactNode , title : string , buttons? : JSX.Element[]}>) {

    return ( <>

    <div className="w-full flex flex-col gap-3">
        <div className="flex flex-row text-2xl font-bold justify-between items-center">
            <h1> {title}</h1> 

            <div className="flex flex-row gap-3 ">
                {buttons}
            </div>
        </div>

        {children}
    </div>
    </> );
}

export default TabLayout;
