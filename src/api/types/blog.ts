export interface BlogPost {
  id: number
  title: string
  published: boolean
  content: string
  blogDescription: string
  slug: string
  userId: number
  createdAt: string
  updatedAt: string
}

export interface BlogResponse {
  data: BlogPost[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
} 
