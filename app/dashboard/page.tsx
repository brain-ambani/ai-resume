import { UserButton } from "@clerk/nextjs";

export default function Dashboard(){
    return(
        
        <main className="flex flex-col mt-4 px-4">
            <div className="flex gap-4">
                <div><UserButton/></div>
            </div>
            <p>This is the dashboard page which is a protected route.</p>
            </main>
    )
}