"use client";

import { Pen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/blog/${id}/edit`} className="mr-5 ml-2">
      <Button>
        <Pen />
      </Button>
    </Link>
  );
};

export default EditButton;
