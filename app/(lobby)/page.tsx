import DeployButton from "../../components/DeployButton";
import AuthButton from "../../components/form/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/layouts/SiteHeader";

export const dynamic = "force-dynamic";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  const supabase = createClient(cookieStore);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  // if (!session) redirect("/signin");
  console.log(session?.user);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      {/* <Navbar /> */}
      <SiteHeader user={user} />
      <MaxWidthWrapper>
        {/* <Link
          href="/signin"
          className={cn(
            "text-sm font-semibold text-gray-700",
            buttonVariants()
          )}
        ></Link> */}
        {/* <span>{user.data.user?.email}</span> */}
      </MaxWidthWrapper>
    </>
  );
}
