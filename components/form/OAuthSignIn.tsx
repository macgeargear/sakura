"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "../Icons";
import { createClient } from "@/utils/supabase/client";
import { Provider } from "@supabase/supabase-js";
import { siteConfig } from "@/config/site";

const oauthProviders = [
  { name: "Google", icon: "google" },
  { name: "Facebook", icon: "facebook" },
  { name: "Discord", icon: "discord" },
] satisfies {
  name: string;
  icon: keyof typeof Icons;
}[];

// interface OAuthSignInClientProps { session: Session;
// }

export function OAuthSignIn() {
  const supabase = createClient();
  const signInWithOAuth = async (name: Provider) => {
    await supabase.auth.signInWithOAuth({
      provider: name,
      options: {
        redirectTo: `${siteConfig.url}/auth/callback`,
      },
    });
  };
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon];

        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.name}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={() => signInWithOAuth(provider.name as Provider)}
          >
            <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            {provider.name}
          </Button>
        );
      })}
    </div>
  );
}
