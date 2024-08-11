import { UserButton } from "@clerk/nextjs";

export default function Dashboard(){
    return(
        
        <main>
            <div>
                <UserButton/>
            </div>
            This is the dashboard page which is a protected route</main>
    )
}