'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-invert prose-slate max-w-none
      prose-headings:text-white prose-headings:font-bold
      prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
      prose-p:text-slate-300 prose-p:leading-relaxed
      prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline
      prose-strong:text-white
      prose-code:text-violet-300 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-xl
      prose-blockquote:border-violet-500 prose-blockquote:text-slate-400
      prose-li:text-slate-300
      prose-hr:border-slate-700
      prose-table:text-slate-300 prose-th:text-white prose-th:border-slate-600 prose-td:border-slate-700
      prose-thead:bg-slate-900
      [&_table]:border-collapse [&_table]:w-full [&_table]:rounded-lg [&_table]:overflow-hidden
      [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:bg-slate-900 [&_th]:border [&_th]:border-slate-700
      [&_td]:px-4 [&_td]:py-3 [&_td]:text-sm [&_td]:border [&_td]:border-slate-700
      [&_tr:hover]:bg-slate-700/30
      prose-blockquote:bg-slate-900/50 prose-blockquote:rounded-lg prose-blockquote:px-4 prose-blockquote:py-1 prose-blockquote:not-italic">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeSlug]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
