import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links() {
  return (
    <div className='link-section'>
      <a className="Links" type="button">
        <frame className="frame5">
          <text className="links-text">
              Twitter Link
          </text>
          </frame>
      </a>
      <a href='https://training.zuri.team/' type="button" id="btn_zuri">
        <frame className="frame5">
          <text className="text-zuri">
            Zuri Team
          </text>
          <FontAwesomeIcon icon="fa-solid fa-share" />
        </frame>
      </a>
      <a href='http://books.zuri.team' type="button" id="books">
        <frame className="frame5">
          <text className="text-books">
            Zuri Books
          </text>
          <p>Find books about Design and Coding</p>
          <FontAwesomeIcon icon="fa-solid fa-share" />
        </frame>
      </a>
      <a href='https://books.zuri.team/python-for-beginners?agnesmuita' type="button" id="book__python">
        <frame className="frame5">
          <text className="text-books">
            Python Books
          </text>
          <FontAwesomeIcon icon="fa-solid fa-share" />
        </frame>
      </a>
      <a href='https://background.zuri.team' type="button" id="pitch">
        <frame className="frame5">
          <text className="text-backgroundcheck">
            Background Check for Code
          </text>
          <FontAwesomeIcon icon="fa-solid fa-share" />
        </frame>
      </a>
      <a href='https://books.zuri.team/design-rules' type="button" id="book_design">
        <frame className="frame5">
          <text className="text-design">
            Design Books
          </text>
          <FontAwesomeIcon icon="fa-solid fa-share" />
        </frame>
      </a>
    </div>
  )
}

export default Links;