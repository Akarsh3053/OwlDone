import { Button } from "@/components/ui/button";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({src: "../../../public/fonts/font.woff2"});

export const Footer = () => {
    return(
        <div className="fixed bottom-0 w-full h-10 px-4 border-t bg-slate-100">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <p className={cn("text-lg text-neutral-700 mt-1", headingFont.className)}>OwlDone</p>
                <Button size="sm" variant="ghost" className= "mt-0.5 text-neutral-400 font-serif italic font-thin">
                    <a href="https://github.com/Akarsh3053">Made with 🩶 by Akarsh</a>
                </Button>
                {/* <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" variant="ghost">
                        Privacy Policy
                    </Button>
                    <Button size="sm" variant="ghost" className="mt-1">
                        Made with ❤️ by Akarsh
                    </Button>
                </div> */}
            </div>
        </div>
    );
}