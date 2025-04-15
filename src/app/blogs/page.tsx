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
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold text-blue-500 hover:underline">
          Blogs
        </h1>

        <Dialog>
          <DialogTrigger>
            {" "}
            <h1 className="text-2xl font-bold mb-6 text-white bg-green-500 rounded-xl p-1 hover:bg-green-400 w-44">
              Blog Editor
            </h1>
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
