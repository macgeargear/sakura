import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    // <div className="flex w-full items-center space-x-2">
    <form
      action="/auth/sign-out"
      method="post"
      className="flex w-full items-center space-x-2"
    >
      <Link
        href="/"
        aria-label="Go back to the previous page"
        className={cn(buttonVariants({ size: "sm" }), "w-full")}
      >
        Go back
      </Link>
      <Button variant="outline" size="sm">
        Logout
      </Button>
    </form>
  ) : (
    // </div>
    <Link
      href="/signin"
      className={cn(buttonVariants({ variant: "default", size: "sm" }))}
    >
      Login
    </Link>
  );
}
