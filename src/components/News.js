import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=698e6e69b8a749e8be90e37d82f4c453&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(20)
    setLoading(true)
    props.setProgress(30)
    let data = await fetch(url);
    props.setProgress(50)
    let parsedData = await data.json()
    props.setProgress(77)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} Headlines - NewsAdda`;
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=698e6e69b8a749e8be90e37d82f4c453&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px' }}>NewsAdda - Top '{capitalizeFirstLetter(props.category)}' Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem
                  date={element.publishedAt ? element.publishedAt : new Date.now()}
                  author={element.author ? (element.author.length > 25 ? element.author.slice(0, 25) + "..." : element.author) : "Unknown"}
                  source={element.source.name ? (element.source.name.length > 25 ? element.source.name.slice(0, 25) + "..." : element.source.name) : "Unknown"}
                  title={
                    element.title
                      ? (element.title.length > 108 ? element.title.slice(0, 103) + "..." : element.title)
                      : "-Refer to full news for Headline-"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 95) + "..."
                      : "-Refer to full news-"
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 20,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
}

export default News;