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
import { Shell } from "@/components/shells/Shell";
import Balancer from "react-wrap-balancer";
import { Course } from "@/types";
import { Icons } from "@/components/Icons";
import { CourseCard } from "@/components/card/CourseCard";

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

  const courses: Course[] = [
    { title: "N2", icon: Icons.two, image: "" },
    { title: "N3", icon: Icons.three, image: "" },
    { title: "N4", icon: Icons.four, image: "" },
    { title: "N5", icon: Icons.five, image: "" },
  ];

  return (
    <Shell className="max-w-6xl pt-0 md:pt-0 min-h-screen">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 py-12 text-center md:pt-32"
      >
        <Balancer
          as="button"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full items-center text-center text-md font-semibold"
          )}
        >
          🌸 Sakura
        </Balancer>
        <Balancer
          as="h1"
          className=" font-heading font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          An e-learning japan course with everything you want
        </Balancer>
        <Balancer className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Empower your future through our e-learning course in Japan
        </Balancer>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/signin" className={cn(buttonVariants())}>
            Get start
            <span className="sr-only">Buy now</span>
          </Link>
          <Link
            href="/auth/signin"
            className={cn(
              buttonVariants({
                variant: "outline",
              })
            )}
          >
            our course
            <span className="sr-only">Sell now</span>
          </Link>
        </div>
      </section>
      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="space-y-6 py-8 md:pt-10 lg:pt-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Categories
          </h2>
          <Balancer className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Find the best skateboarding gears from stores around the world
          </Balancer>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </section>
    </Shell>
  );
}
