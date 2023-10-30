"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckIcon, PlusIcon } from "@radix-ui/react-icons";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/Icons";
import { Course } from "@/types";
import { cn } from "@/lib/utils";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Omit<Course, "icon"> & { price: number };
  variant?: "default" | "switchable";
  isAddedToCart?: boolean;
}

export function ProductCard({
  product,
  variant = "default",
  isAddedToCart = false,
  className,
  ...props
}: ProductCardProps) {
  return (
    <Card className={cn("h-full overflow-hidden", className)} {...props}>
      <Link aria-label={product.title} href={`/product/`}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {product?.image ? (
              <Image
                src={product.image}
                alt={product.image[0] ?? product.title}
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
                loading="lazy"
              />
            ) : (
              <div
                aria-label="Placeholder"
                role="img"
                aria-roledescription="placeholder"
                className="flex h-full w-full items-center justify-center bg-secondary"
              >
                <Icons.placeholder
                  className="h-9 w-9 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            )}
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{product.title}</span>
      </Link>
      <Link href={`/product/`} tabIndex={-1}>
        <CardContent className="grid gap-2.5 p-4">
          <CardTitle className="line-clamp-1">{product.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {product.price}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="p-4">
        {variant === "default" ? (
          <Button
            aria-label="Add to cart"
            size="sm"
            className="h-8 w-full rounded-sm"
          >
            Enroll
          </Button>
        ) : (
          <Button
            aria-label={isAddedToCart ? "Remove from cart" : "Add to cart"}
            size="sm"
            className="h-8 w-full rounded-sm"
          >
            <PlusIcon className="mr-2 h-4 w-4" aria-hidden="true" />)
            {isAddedToCart ? "Added" : "Add to cart"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
