import Link from "next/link";
import { ModeToggle } from "./themeToggle";
import { Button } from "./ui/button";

export default function Navbar(){
    return(
        <nav className="mt-8">
            <div className="flex justify-between items-center">
                <div>
                <Link href='/' className="font-semibold text-primary text-2xl">Ai resume</Link>
                </div>
                <div className="flex gap-4 text-xl">
                    <Link href='features'>Features</Link>
                    <Link href='/pricing'>Pricing</Link>
                    <Link href='/'>Pricing</Link>
                </div>
                <div className="flex items-center gap-4">

                    <Link href='/sign-in'>
                    <Button  className="text-primary font-semibold border border-primary bg-transparent hover:text-white hover:transition-all ">Sign in</Button>
                    </Link>
    <ModeToggle/>

                </div>
            </div>
        </nav>
    )
}