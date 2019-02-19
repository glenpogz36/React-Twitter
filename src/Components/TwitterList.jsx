import React from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";

function TwitterList(props) {
  console.log(props.twitts);
  return (
    <div>
      {props.twitts.map(twitt => (
        <div key={twitt.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" />
              <p className="card-text">{twitt.message}</p>
              <a href="#" className="btn btn-primary">
                <FaHeart size={10} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TwitterList;
