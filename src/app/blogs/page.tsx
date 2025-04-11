import BlogCard from "@/app/components/Blog_card";
import getBlogMetadata from "../../lib/getBlogMetadata";
import BlogEditor from "../components/Blog_editor";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Blogs() {
  const postMetadata = getBlogMetadata();

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold ">All Blogs</h1>
        <Collapsible>
          <CollapsibleTrigger>
            <h1 className="text-2xl font-bold mb-6 text-white bg-green-500 rounded-xl p-1 hover:bg-green-400 w-44">
              Blog Editor
            </h1>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <BlogEditor />
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div>
        {postMetadata?.map((post, postIndex) => {
          return <BlogCard key={postIndex} post={post} />;
        })}
      </div>
    </>
  );
}
