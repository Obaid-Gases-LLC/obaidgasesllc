import * as React from "react"
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@components/ui/dropdown-menu";

export function AboutToggle() {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <div>About</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[1000]">
                <DropdownMenuLabel> About Us </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={'/about/obaidgasesllc'}>About Obaid Gases LLC</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={'/about/managingdirector'}>About Managing Director</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}