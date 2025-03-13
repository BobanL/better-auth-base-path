"use client";
import { authClient } from "@/lib/auth-client";
import styles from "./page.module.css";

export default function Home() {
  const { data } = authClient.useSession();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          Hello {data?.user.name}
          <button
            onClick={async () => {
              await authClient.signIn.oauth2({
                providerId: "keycloak",
                callbackURL: "/basePath",
              });
            }}
          >
            Sign in
          </button>
          <button
            onClick={async () => {
              await authClient.signOut();
            }}
          >
            Sign out
          </button>
        </div>
      </main>
    </div>
  );
}
