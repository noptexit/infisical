import { createFileRoute, linkOptions } from "@tanstack/react-router";

import { IdentityDetailsByIDPage } from "./IdentityDetailsByIDPage";

export const Route = createFileRoute(
  "/_authenticate/_inject-org-details/_org-layout/ssh/$projectId/_ssh-layout/identities/$identityId"
)({
  component: IdentityDetailsByIDPage,
  beforeLoad: ({ context, params }) => {
    return {
      breadcrumbs: [
        ...context.breadcrumbs,
        {
          label: "Access Control",
          link: linkOptions({
            to: "/ssh/$projectId/access-management",
            params: {
              projectId: params.projectId
            }
          })
        },
        {
          label: "Identities"
        }
      ]
    };
  }
});
