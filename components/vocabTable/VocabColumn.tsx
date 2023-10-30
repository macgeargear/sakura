"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "../ui/checkbox";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { createClient } from "@/utils/supabase/client";
import { _UserVocabColumn } from "@/app/global";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<UserVocabColumn>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected()}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "expression",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expression" />
    ),
  },
  {
    accessorKey: "meaning",
    header: "meaning",
  },
  {
    accessorKey: "reading",
    header: "reading",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const rowData = row.original;
      const supabase = createClient();
      const router = useRouter();
      const deleteRow = async () => {
        console.log(rowData);
        await supabase.from("user_vocabs").delete().eq("id", rowData.id);
        toast.success(`${rowData.expression} is deleted`);
        router.refresh();
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(rowData.expression)}
            >
              Copy Vocab
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button
                variant="destructive"
                className="text-red-700"
                size="sm"
                onClick={deleteRow}
              >
                Delete from my list
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
