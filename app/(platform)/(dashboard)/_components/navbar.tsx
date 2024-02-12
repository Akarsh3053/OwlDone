import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

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
                <Button variant="primary" size="sm" className="rounded-sm hidden md:block h-7 mt-10 py-1 px-2">
                    Create
                </Button>
                <Button variant="primary" size="sm" className="rounded-sm block md:hidden">
                    <Plus className="h-3 w-3"/>
                </Button>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/workspace/:id"
                    afterLeaveOrganizationUrl="/select-workspace"   
                    afterSelectOrganizationUrl="/workspace/:id"
                    appearance={{
                        elements : {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "baseline",
                            },
                        },
                    }}
                />
                <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: {
                                width: 30,
                                height: 30,
                            }
                        }
                    }}
                />
            </div>
        </nav>
    );
};
