'use client'

import ReactMarkdown, { Components } from 'react-markdown'
import rehypeSlug from 'rehype-slug'

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

function isBarePastedUrl(href: string, children: unknown): boolean {
  return String(children) === href
}

function isYouTubeUrl(text: string): string | null {
  const trimmed = text.trim()
  if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) return null
  return extractYouTubeId(trimmed)
}

function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="youtube-embed my-9 lg:my-[60px]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

const markdownComponents: Components = {
  a({ href, children }) {
    if (!href) return <a href={href}>{children}</a>

    const videoId = extractYouTubeId(href)
    if (videoId && isBarePastedUrl(href, children)) {
      return <YouTubeEmbed videoId={videoId} />
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  },

  p({ children, ...props }) {
    if (typeof children === 'string') {
      const videoId = isYouTubeUrl(children)
      if (videoId) return <YouTubeEmbed videoId={videoId} />
    }

    return <p {...props}>{children}</p>
  },
}

interface MarkdownRendererProps {
  content: string
  className?: string
}

const MarkdownRenderer = ({ content, className = '' }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown rehypePlugins={[[rehypeSlug]]} components={markdownComponents} className={className}>
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer
