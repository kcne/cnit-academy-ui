"use client";

import { useState } from "react";
import MarkdownEditor from "@/components/MarkdownEditor";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";

export default function BlogPage() {
  const { t } = useTranslation();
  const [content, setContent] = useState<string>(
    "# Start writing your blog post here\n\nThis is a simple markdown editor. You can:\n- Write in **bold**\n- Use *italics*\n- Create lists\n- And much more!"
  );
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="mb-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {isEditing ? t("blogEditor.preview") : t("blogEditor.edit")}
        </button>
      </div>

      <div className="border rounded-lg p-4 bg-white">
        {isEditing ? (
          <MarkdownEditor markdown={content} onChange={setContent} />
        ) : (
          <div className="prose max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
