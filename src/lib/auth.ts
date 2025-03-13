import { betterAuth, User } from "better-auth";
import { genericOAuth } from "better-auth/plugins";

export const auth = betterAuth({
  account: {
    accountLinking: {
      enabled: false,
      allowDifferentEmails: true,
    },
  },
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "keycloak",
          discoveryUrl:
            "http://localhost:8070/realms/master/.well-known/openid-configuration",
          clientId: "myapp",
          clientSecret: "P7e6LOwZXhJq1MCo0GSRAQFqBOYDuaBx",
          scopes: ["openid"],
          // Since admin does not include email address email_is_missing gets thrown
          // ideally this information would be retrieved from id token
          getUserInfo: async (tokens) => {
            return {
              id: "1234",
              email: "somethingStillNeedsToBeHere",
              emailVerified: false,
              name: "Demo User",
              image: null,
            } as User;
          },
        },
      ],
    }),
  ],
});
