import { useState } from "react"
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@components/ui/dropdown-menu";

export function AboutToggle() {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!isOpen);
    };
    return (
        <DropdownMenu open={isOpen} >
            <DropdownMenuTrigger asChild>
                <div onClick={handleOpen} className="cursor-pointer">About</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[1000]">
                <DropdownMenuLabel> About Us </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleOpen}>
                    <Link href={'/about/obaidgasesllc'}>About Obaid Gases LLC</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleOpen}>
                    <Link href={'/about/managingdirector'}>About Managing Director</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}