import { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Card, Typography, Row, Carousel, Divider, Spin } from 'antd';
import moment from 'moment';
import Link from 'next/link';

const { Meta } = Card;

interface Article {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

const { Title } = Typography;

const IndexPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Title level={2}>Latest News</Title>
      <Carousel autoplay style={{ width: '100%', maxWidth: 3000, margin: '0 auto' }}>
        {articles.map((item) => (
          <div key={item.title}>
            <Link href={`/articles/${encodeURIComponent(item.title)}`} passHref>
              <Card
                hoverable
                cover={<img alt={item.title} src={item.urlToImage} />}
              >
                <Meta title={item.title} description={moment(item.publishedAt).format('MMM D, YYYY')} />
              </Card>
            </Link>
          </div>
        ))}
      </Carousel>
      <Divider />
      <Title level={3}>More News</Title>
      {loading ? (
        <Spin />
      ) : (
        <Row gutter={[16, 16]}>
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
            dataSource={articles}
            renderItem={(item) => (
              <List.Item>
                <Link href={`/articles/${encodeURIComponent(item.title)}`} passHref>
                  <Card
                    hoverable
                    cover={<img alt={item.title} src={item.urlToImage} />}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '400px' }}
                  >
                    <Meta
                      title={
                        <div style={{ height: '1em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                          {item.title}
                        </div>
                      }
                      description={moment(item.publishedAt).format('MMM D, YYYY')}
                      style={{ height: '1em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    />

                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </Row>
      )}
    </div>
  );
};

export default IndexPage;