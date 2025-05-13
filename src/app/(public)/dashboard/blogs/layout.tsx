import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/dashboard/blog/new">
        <Button
          variant="outline"
          size="icon"
          className="fixed right-5 bottom-5"
        >
          <Plus />
        </Button>
      </Link>
      {children}
    </>
  );
}
