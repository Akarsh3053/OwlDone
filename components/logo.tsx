import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({src: "../public/fonts/font.woff2"});

export const Logo = () => {
    return(
        <Link href="/">
            <div className="hover:opacity-75 transition items-center hidden md:flex overflow-hidden">
                <Image className="mb-2"
                    src="/logo.png"
                    alt="Logo"
                    height={40}
                    width={75}
                />
                <p className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}>
                    OwlDone
                </p>
            </div>
        </Link>
    );
};