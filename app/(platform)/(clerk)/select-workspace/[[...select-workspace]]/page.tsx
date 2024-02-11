import { OrganizationList } from "@clerk/nextjs";

export default function CreateWorkspacePage() {
    return(
        <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl="/workspace/:id"
            afterCreateOrganizationUrl="/workspace/:id"
        />
    );
};

