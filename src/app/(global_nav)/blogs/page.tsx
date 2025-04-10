import BlogCard from "@/app/components/Blog_card";
import getBlogMetadata from "../../../lib/getBlogMetadata";
import BlogEditor from "../../components/Blog_editor";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Blogs() {
  const postMetadata = getBlogMetadata();

  return (
    <>
      <h1>All Blogs</h1>
      <Collapsible>
        <CollapsibleTrigger>
          <h1 className="text-3xl font-bold mb-6 text-green-600 hover:text-sky-700">
            Blog Editor
          </h1>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <BlogEditor />
        </CollapsibleContent>
      </Collapsible>
      <div>
        {postMetadata?.map((post, postIndex) => {
          return <BlogCard key={postIndex} post={post} />;
        })}
      </div>
    </>
  );
}
