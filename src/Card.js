import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Card({ item }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {item.name}
          </h5>
          <h6 className="card-price text-center">
            {item.Currency}
            {item.Price}
            <span className="period">/{item.Period}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {item.Features.map((list) => {
              return (
                <li className={!list.isEnable ? `text-muted` : ""}>
                  <span className="fa-li">
                    {/* <i className="fas fa-check"></i> */}
                    {!list.isEnable ? (
                      <FontAwesomeIcon icon={faTimes} />
                    ) : (
                      <FontAwesomeIcon icon={faCheck} />
                    )}
                  </span>
                  <span>
                    {list.isBold ? <strong>{list.title}</strong> : list.title}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
