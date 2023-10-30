import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckIcon } from "@radix-ui/react-icons";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/PageHeader";
import { Shell } from "@/components/shells/Shell";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { VocabTable } from "@/components/vocabTable/VocabTable";
import { columns } from "@/components/vocabTable/VocabColumn";
import { AllVocabsTable } from "@/components/vocabTable/AllVocabsTable";
import { allVocabsColumns } from "@/components/vocabTable/AllVocabsColumn";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user?.id);

  const { data: vocabs } = await supabase.from("vocabs").select("*");

  return (
    <Shell className="max-w-6xl pt-0 md:pt-0 min-h-screen">
      <PageHeader className="mt-20">
        <PageHeaderHeading size="sm">Vocab</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Memorize all vocab from n5 to n1
        </PageHeaderDescription>
      </PageHeader>
      <section
        id="billing-info"
        aria-labelledby="billing-info-heading"
        className="space-y-5"
      >
        <h2 className="text-xl font-semibold sm:text-2xl">All Vocabs</h2>
      </section>
      <section className="space-y-5 pb-2.5">
        <AllVocabsTable data={vocabs as Vocab[]} columns={allVocabsColumns} />
      </section>
    </Shell>
  );
}
