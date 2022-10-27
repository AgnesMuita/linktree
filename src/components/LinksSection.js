import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links() {
  return (
    <div className='link-section'>
      <a href='https://twitter.com/Aggie_Asf' type="" target="_blank" id="twitter-link">
        <div className="frame5">
          <h1 className="text-twitter">
            Twitter Link
          </h1>
          {/* <FontAwesomeIcon icon="fa-solid fa-share" /> */}
        </div>
      </a>
      <a href='https://training.zuri.team/' type="" target="_blank" id="btn_zuri">
        <div className="frame5">
          <h1 className="text-zuri">
            Zuri Team
          </h1>
          {/* <FontAwesomeIcon icon="fa-solid fa-share" /> */}
        </div>
      </a>
      <a href='http://books.zuri.team' type="button" target="_blank" id="books">
        <div className="frame5">
          <h1 className="text-books">
            Zuri Books
          </h1>
          {/* <p>Find books about Design and Coding</p> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-share" /> */}
        </div>
      </a>
      <a href='https://books.zuri.team/python-for-beginners?agnesmuita' type="button" target="_blank" id="book__python">
        <div className="frame5">
          <h1 className="text-books">
            Python Books
          </h1>
          {/* <FontAwesomeIcon icon="fa-solid fa-share" /> */}
        </div>
      </a>
      <a href='https://background.zuri.team' type="button"target="_blank" id="pitch">
        <div className="frame5">
          <h1 className="text-backgroundcheck">
            Background Check for Code
          </h1>
          {/* <FontAwesomeIcon icon="fa-solid fa-share" /> */}
        </div>
      </a>
      <a href='https://books.zuri.team/design-rules' type="button" target="_blank" id="book_design">
        <div className="frame5">
          <h1 className="text-design">
            Design Books
          </h1>
          {/* <FontAwesomeIcon icon="fa-solid fa-share" /> */}
        </div>
      </a>
    </div>
  )
}

export default Links;