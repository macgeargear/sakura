import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

interface VocabTableProps {
  vocabs: Vocab[];
  isUserVocab?: boolean;
}

export function VocabTable({ vocabs, isUserVocab }: VocabTableProps) {
  return (
    <Table>
      <TableCaption>A list of your vocaburary</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">No. </TableHead>
          <TableHead className="w-[100px]">Expression</TableHead>
          <TableHead>Reading</TableHead>
          <TableHead>Meaning</TableHead>
          <TableHead className="text-right">Tags</TableHead>
          {isUserVocab ? (
            <TableHead className="text-right">Remembered</TableHead>
          ) : null}
        </TableRow>
      </TableHeader>
      <TableBody>
        {vocabs.map((vocab, i) => (
          <TableRow key={vocab.uuid}>
            <TableCell className="font-medium">{i + 1}</TableCell>
            <TableCell className="font-medium">{vocab.expression}</TableCell>
            <TableCell>{vocab.reading}</TableCell>
            <TableCell>{vocab.meaning}</TableCell>
            <TableCell className={cn({ "text-right": !isUserVocab })}>
              {vocab.tags}
            </TableCell>
            {isUserVocab ? (
              <TableCell className="text-right">
                <Checkbox className="mr-4" />
              </TableCell>
            ) : null}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
