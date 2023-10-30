import Link from "next/link";
import type { Course } from "@/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CourseCardProps {
  course: Course;
}

export async function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      aria-label={course.title}
      key={course.title}
      href={`/categories/${course.title}`}
    >
      <Card className="relative h-full w-full overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted">
        <div className="absolute inset-0 z-10 bg-background" />
        <CardHeader className="relative z-20">
          <course.icon className="h-8 w-8" aria-hidden="true" />
        </CardHeader>
        <CardContent className="relative z-20">
          <CardTitle className="text-xl capitalize text-zinc-900">
            {course.title}
          </CardTitle>
          <CardDescription>0 products</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
