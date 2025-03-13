import { createAuthClient } from "better-auth/react";
import { genericOAuthClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  basePath: "/basePath/api/auth",
  plugins: [genericOAuthClient()],
});

export const { useSession, signIn, signOut } = authClient;
