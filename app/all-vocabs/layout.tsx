import { SiteHeader } from "@/components/layouts/SiteHeader";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function AllVocabsLayout({
  children,
}: React.PropsWithChildren) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
