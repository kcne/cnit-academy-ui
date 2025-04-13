'use client';

import { 
  MDXEditor, 
  headingsPlugin, 
  listsPlugin, 
  quotePlugin, 
  thematicBreakPlugin,
  markdownShortcutPlugin,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  UndoRedo,
  BlockTypeSelect,
  CreateLink
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

interface MarkdownEditorProps {
  markdown: string;
  onChange: (markdown: string) => void;
}

export default function MarkdownEditor({ markdown, onChange }: MarkdownEditorProps) {
  return (
    <div className="w-full prose prose-sm max-w-none">
      <MDXEditor 
        markdown={markdown}
        onChange={onChange}
        contentEditableClassName="min-h-[200px] outline-none"
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <CreateLink />
              </>
            )
          }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin()
        ]}
      />
    </div>
  );
} 