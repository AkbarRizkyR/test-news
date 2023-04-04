import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'antd'
import moment from 'moment'

const { Meta } = Card

interface Article {
  title: string
  urlToImage: string
  publishedAt: string
  content: string
}

const ArticlePage = () => {
  const router = useRouter()
  const { title } = router.query

  const [article, setArticle] = useState<Article>()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`https://newsapi.org/v2/everything?q=${title}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
      setArticle(data.articles[0])
    }

    if (title) {
      fetchData()
    }
  }, [title])

  if (!article) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Card
        cover={<img alt={article.title} src={article.urlToImage} />}
      >
        <Meta
          title={article.title}
          description={moment(article.publishedAt).format('MMM D, YYYY')}
        />
        <p>{article.content}</p>
      </Card>
    </div>
  )
}

export default ArticlePage
