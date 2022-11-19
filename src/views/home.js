import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Miniature Remorseful Rabbit</title>
        <meta
          property="og:title"
          content="Home - Miniature Remorseful Rabbit"
        />
      </Helmet>
      <div className="home-sidebar">
        <div className="home-container1">
          <img
            alt="image"
            src="/playground_assets/92081%20%5B1%5D-200h.png"
            className="home-image"
          />
          <span className="home-text">NextStep</span>
        </div>
        <nav className="home-nav">
          <Link to="/home" className="home-navlink">
            <div className="home-home">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M949.845 446.635c-144.64-121.771-407.296-348.629-409.899-350.933l-27.947-24.021-27.819 24.021c-2.645 2.261-265.429 229.035-412.16 351.915-18.688 16.811-29.355 40.32-29.355 64.384 0 47.104 38.229 85.333 85.333 85.333h42.667v256c0 47.104 38.229 85.333 85.333 85.333h128 384c47.104 0 85.333-38.229 85.333-85.333v-256h42.667c47.104 0 85.333-38.229 85.333-85.333 0-25.515-11.733-49.536-31.488-65.365zM597.333 853.333h-170.667v-213.333h170.667v213.333zM768 512l0.085 341.333c-0.085 0-128.085 0-128.085 0v-256h-256v256h-128v-341.333h-128.043c117.973-98.645 312.107-265.685 384.043-327.68 71.936 61.995 265.984 228.992 384 327.723 0-0-128-0-128-0.043z"></path>
              </svg>
              <span className="home-text01">Home</span>
            </div>
          </Link>
          <Link to="/profile" className="home-navlink1">
            <div className="home-profile">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
              <span className="home-text02">Profile</span>
            </div>
          </Link>
          <Link to="/help" className="home-navlink2">
            <div className="home-help">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon4">
                <path d="M512 786.286v-109.714c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v109.714c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286zM658.286 402.286c0-104.571-109.714-182.857-208-182.857-93.143 0-162.857 40-212 121.714-5.143 8-2.857 18.286 4.571 24l75.429 57.143c2.857 2.286 6.857 3.429 10.857 3.429 5.143 0 10.857-2.286 14.286-6.857 26.857-34.286 38.286-44.571 49.143-52.571 9.714-6.857 28.571-13.714 49.143-13.714 36.571 0 70.286 23.429 70.286 48.571 0 29.714-15.429 44.571-50.286 60.571-40.571 18.286-96 65.714-96 121.143v20.571c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286v0c0-13.143 16.571-41.143 43.429-56.571 43.429-24.571 102.857-57.714 102.857-144.571zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="home-text03">Help</span>
            </div>
          </Link>
        </nav>
        <div className="home-profile1">
          <Link to="/profile" className="home-navlink3">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxtYW4lMjBwb3J0dHJhaXR8ZW58MHx8fHwxNjI3MjkzNTM1&amp;ixlib=rb-1.2.1&amp;w=200"
              className="home-image1"
            />
          </Link>
          <div className="home-container2">
            <Link to="/profile" className="home-navlink4">
              John Doe
            </Link>
            <Link to="/profile" className="home-navlink5">
              View Profile
            </Link>
          </div>
        </div>
      </div>
      <div className="home-main">
        <div className="home-container3">
          <h1 className="home-text04">
            Welcome Mr. Doe
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
        </div>
        <div className="home-container4">
          <div className="home-heading">
            <div className="home-postion">
              <span className="home-text05">Position</span>
            </div>
            <div className="home-postion01">
              <span className="home-text06">Organization</span>
            </div>
            <div className="home-postion02">
              <span className="home-text07">Date Applied</span>
            </div>
            <div className="home-status">
              <span className="home-text08">Status</span>
            </div>
          </div>
          <div className="home-application-entry">
            <div className="home-postion03">
              <span className="home-text09">SDE 1</span>
            </div>
            <div className="home-postion04">
              <span className="home-text10">Google</span>
            </div>
            <div className="home-postion05">
              <span className="home-text11">10/02/2022</span>
            </div>
            <div className="home-status1">
              <span className="home-text12">Offer Received</span>
            </div>
          </div>
          <div className="home-application-entry1">
            <div className="home-postion06">
              <span className="home-text13">SDE 1</span>
            </div>
            <div className="home-postion07">
              <span className="home-text14">Netflix</span>
            </div>
            <div className="home-postion08">
              <span className="home-text15">10/02/2022</span>
            </div>
            <div className="home-status2">
              <span className="home-text16">Waiting for Response</span>
            </div>
          </div>
          <div className="home-application-entry2">
            <div className="home-postion09">
              <span className="home-text17">SDE 1</span>
            </div>
            <div className="home-postion10">
              <span className="home-text18">Twitter</span>
            </div>
            <div className="home-postion11">
              <span className="home-text19">10/02/2022</span>
            </div>
            <div className="home-status3">
              <span className="home-text20">Rejected</span>
            </div>
          </div>
          <div className="home-application-entry3">
            <div className="home-postion12">
              <span className="home-text21">SDE 1</span>
            </div>
            <div className="home-postion13">
              <span className="home-text22">Amazon</span>
            </div>
            <div className="home-postion14">
              <span className="home-text23">10/02/2022</span>
            </div>
            <div className="home-status4">
              <span className="home-text24">In-progress</span>
            </div>
          </div>
          <div className="home-application-entry4">
            <div className="home-application-entry5">
              <div className="home-postion15">
                <input
                  type="text"
                  placeholder="Position"
                  required
                  className="home-textinput input"
                />
              </div>
              <div className="home-postion16">
                <input
                  type="text"
                  placeholder="Organization"
                  required
                  className="home-textinput1 input"
                />
              </div>
              <div className="home-postion17">
                <input
                  type="date"
                  placeholder="Date Applied"
                  required
                  className="home-textinput2 input"
                />
              </div>
              <div className="home-status5">
                <select required className="home-select">
                  <option value="0" selected>
                    Select Status
                  </option>
                  <option value="1">Offer Received</option>
                  <option value="2">In-Progress</option>
                  <option value="3">Waiting for Response</option>
                  <option value="4">Rejected</option>
                </select>
              </div>
            </div>
            <button className="home-button button">Add Application</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
