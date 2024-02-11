import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    return(
        <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
            {/* TODO: Mobile Sidebar */}
            <div className="flex item-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <Button size="sm" className="rounded-sm hidden md:block h-7 mt-10 py-1 px-2">
                    Create
                </Button>
            </div>
        </nav>
    );
};
