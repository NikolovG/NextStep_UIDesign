import React from 'react'

import { Helmet } from 'react-helmet'

import './temp-rows.css'

const TempRows = (props) => {
  return (
    <div className="temp-rows-container">
      <Helmet>
        <title>TempRows - Miniature Remorseful Rabbit</title>
        <meta
          property="og:title"
          content="TempRows - Miniature Remorseful Rabbit"
        />
      </Helmet>
      <div className="temp-rows-container1">
        <div className="temp-rows-container2"></div>
        <div className="temp-rows-application-entry">
          <div className="temp-rows-postion">
            <span className="temp-rows-text">SDE 1</span>
          </div>
          <div className="temp-rows-postion1">
            <span className="temp-rows-text1">Google</span>
          </div>
          <div className="temp-rows-postion2">
            <span className="temp-rows-text2">10/02/2022</span>
          </div>
          <div className="temp-rows-status">
            <span className="temp-rows-text3">Offer Received</span>
          </div>
        </div>
        <div className="temp-rows-application-entry1">
          <div className="temp-rows-postion3">
            <input
              type="text"
              placeholder="Job Position"
              className="temp-rows-textinput input"
            />
          </div>
          <div className="temp-rows-postion4">
            <input
              type="text"
              placeholder="Company"
              className="temp-rows-textinput1 input"
            />
          </div>
          <div className="temp-rows-postion5">
            <input
              type="text"
              placeholder="Date Applied"
              className="temp-rows-textinput2 input"
            />
          </div>
          <div className="temp-rows-status1">
            <select>
              <option value="Op1">Applied</option>
              <option value="Op2">Offer Received</option>
              <option value="Op3">Rejected</option>
            </select>
            <button className="temp-rows-button button">Add Application</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TempRows
