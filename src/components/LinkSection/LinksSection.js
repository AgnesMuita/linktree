import React from 'react';
import'./LinkSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links() {
  return (
    <div className='link-section'>
      <div className='links'>
        <a href='https://twitter.com/Aggie_Asf' type="" target="_blank" id="twitter-link">
          <div className="frame5">
            <p className="text-twitter">
              Twitter Link
            </p>
          </div>
        </a>
      </div>
      <div className='links'>
        <a href='https://training.zuri.team/' type="" target="_blank" id="btn_zuri">
          <div className="frame5">
            <p className="text-zuri">
              Zuri Team
            </p>
          </div>
        </a>
      </div>
      <div className='links'>
        <a href='http://books.zuri.team' type="button" target="_blank" id="books">
          <div className="frame5">
            <p className="text-books">
              Zuri Books
            </p>
          </div>
        </a>
      </div>
      <div className='links'>
        <a href='https://books.zuri.team/python-for-beginners?agnesmuita' type="button" target="_blank" id="book__python" title='Get to learn python from the best authors and at your own time'>
          <div className="frame5">
            <p className="text-books">
              Python Books
            </p>
          </div>
        </a>
      </div>
      <div className='links'>
        <a href='https://background.zuri.team' type="button"target="_blank" id="pitch">
          <div className="frame5">
            <p className="text-backgroundcheck">
              Background Check for Code
            </p>
          </div>
        </a>
      </div>
      <div className='links'>
        <a href='https://books.zuri.team/design-rules' type="button" target="_blank" id="book_design">
          <div className="frame5">
            <p className="text-design">
              Design Books
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Links;