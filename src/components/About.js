import React from 'react'

export default function About() {
  return (
    <>
      <div className="container">
        <div className="card text-center mt-5" style={{height: '500px'}}>
          <div className="card-header" style={{fontSize: '22px', fontWeight: '550'}}>
            About
          </div>
          <div className="card-body">
            <h5 className="card-title"  style={{fontSize: '27px'}}>NewsAdda</h5>
            <p className="card-text mt-3 container text-center" style={{fontSize: '23px', fontFamily: 'Quicksand'}}>
              NewsAdda is web app by which we can see latest news across 7 different categories in the Indian region. NewsAdda is a React.js project. In this I've used a News API to fetch real-time news across different categories. This project has been made as a part of learning React.js. It has been made initially in class based components and further transformed it to function based component. It has different features like InfinteScroll, Top loading bar, etc.</p>
          </div>
        </div>
        <p className='text-center my-2' style={{fontSize: '20px'}}>Made with <span style={{color: 'red'}}>❤</span></p>
      </div>
    </>
  )
}
