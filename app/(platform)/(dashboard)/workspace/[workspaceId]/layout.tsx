import { OrgControl } from "./_components/workspace-control";

const WorkspaceIdLayout = (
    {children}:{children:React.ReactNode}) => {
        return(
            <>
                {children}
                <OrgControl/>
            </>
        );
    };


export default WorkspaceIdLayout;