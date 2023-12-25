import { useEffect, useState } from 'react'
import { CardProfile } from './components/CardProfile'
import { PostContainer, SearchContainer } from './styles'
import { api } from '../../lib/axios'
import FormSearch from '../../components/FormSearch'
import { Post } from './components/Post'

export interface PostProps {
  number: number
  title: string
  body: string
  comments: number
  updated_at: string
  html_url: string
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])

  const postsQuantity = posts.length

  async function fetchPosts(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:aiemao/githubBlog`,
    )

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <CardProfile />

      <SearchContainer>
        <div>
          <p>Publicações</p>
          <span>{postsQuantity} publicações</span>
        </div>

        <FormSearch fechPosts={fetchPosts} />
      </SearchContainer>

      <PostContainer>
        {posts.map((post) => {
          return <Post key={post.number} post={post} />
        })}
      </PostContainer>
    </>
  )
}
