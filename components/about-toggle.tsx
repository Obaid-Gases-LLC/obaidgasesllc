import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function AboutToggle() {
    const router = useRouter();
    const handleRedirect = (url: string) => {
        router.push(url);
    };

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">About</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[1000]">
                <DropdownMenuLabel> About Us </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleRedirect('/about/obaidgasesllc')}> About Obaid Gases LLC </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRedirect('/about/managingdirector')}> About Managing Director </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}