import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";

import { OrgControl } from "./_components/workspace-control";

export async function generateMetadata() {
    const { orgSlug } = auth();

    return{
        title: startCase(orgSlug || "workspace"),
    };
};


const WorkspaceIdLayout = (
    {children}:{children:React.ReactNode}) => {
        return(
            <>
                <OrgControl/>
                {children}
            </>
        );
    };


export default WorkspaceIdLayout;