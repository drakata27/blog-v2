// components/DeleteButton.tsx
"use client";

import { Trash2 } from "lucide-react";
import { deleteBlog } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface DeleteButtonProps {
  id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this post?")) {
      await deleteBlog(id);
      router.push("/");
    }
  };

  return (
    <Button className="bg-red-500" onClick={handleDelete}>
      <Trash2 />
    </Button>
  );
};

export default DeleteButton;
