import BlogCard from "@/app/components/Blog_card";
import getBlogMetadata from "../../lib/getBlogMetadata";
import BlogEditor from "../components/Blog_editor";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Blogs() {
  const postMetadata = getBlogMetadata();

  return (
    <>
      <div className="flex flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primary hover:underline">
          Blogs
        </h1>

        <Dialog>
          <DialogTrigger asChild>
            <button className="text-base font-semibold text-background bg-primary rounded-2xl px-4 py-2 hover:bg-primary/90 w-44">
              Blog Editor
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Start writing your blog post here</DialogTitle>
              <DialogDescription>
                <BlogEditor />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        {postMetadata?.map((post, postIndex) => {
          return <BlogCard key={postIndex} post={post} />;
        })}
      </div>
    </>
  );
}
