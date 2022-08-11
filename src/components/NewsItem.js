import React from "react";

const NewsItem = (props) => {
    let { date, author, source, title, description, imageUrl, newsUrl } = props;
    return (
      <>
        <div className="container">
          <div className="card my-4 shadow bg-body rounded" style={{ height: '533px' }}>
            <img
              src={
                !imageUrl
                  ? "https://static.thenounproject.com/png/145685-200.png"
                  : imageUrl
              }
              alt="..."
              className="card-img-top"
              style={{ height: '200px' }}
            />
            <div className="container mt-1">
              <div style={{ height: '22px' }}>Author: <b>{author}</b></div>
              {/* <div style={{ height: '22px' }}>Source: <b>{source}</b></div> */}
              <div style={{ height: '38px' }}>Published at: <b>{new Date(date).toGMTString()}</b></div>
            </div>
            <span className="position-absolute p-2 top-0 translate-middle badge rounded-pill text-bg-warning" style={{ left: '50%' }}>
              {source}
            </span>
            <hr className='mb-0' />
            <div className="card-body">
              <h5 className="card-title" style={{ height: '99px' }}>{title}</h5>
              <p className="card-text" style={{ height: '69px' }}>{description}</p>
              <a
                href={newsUrl}
                rel="noreferrer"
                target="_blank"
                className="btn btn-dark btn-sm d-flex justify-content-center"
              >
                Read Full News
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default NewsItem;