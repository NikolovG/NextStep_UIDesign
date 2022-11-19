import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Miniature Remorseful Rabbit</title>
        <meta
          property="og:title"
          content="Profile - Miniature Remorseful Rabbit"
        />
      </Helmet>
      <div className="profile-sidebar">
        <div className="profile-container01">
          <img
            alt="image"
            src="/playground_assets/92081%20%5B1%5D-200h.png"
            className="profile-image"
          />
          <span className="profile-text">NextStep</span>
        </div>
        <nav className="profile-nav">
          <Link to="/home" className="profile-navlink">
            <div className="profile-home">
              <svg viewBox="0 0 1024 1024" className="profile-icon">
                <path d="M949.845 446.635c-144.64-121.771-407.296-348.629-409.899-350.933l-27.947-24.021-27.819 24.021c-2.645 2.261-265.429 229.035-412.16 351.915-18.688 16.811-29.355 40.32-29.355 64.384 0 47.104 38.229 85.333 85.333 85.333h42.667v256c0 47.104 38.229 85.333 85.333 85.333h128 384c47.104 0 85.333-38.229 85.333-85.333v-256h42.667c47.104 0 85.333-38.229 85.333-85.333 0-25.515-11.733-49.536-31.488-65.365zM597.333 853.333h-170.667v-213.333h170.667v213.333zM768 512l0.085 341.333c-0.085 0-128.085 0-128.085 0v-256h-256v256h-128v-341.333h-128.043c117.973-98.645 312.107-265.685 384.043-327.68 71.936 61.995 265.984 228.992 384 327.723 0-0-128-0-128-0.043z"></path>
              </svg>
              <span className="profile-text01">Home</span>
            </div>
          </Link>
          <Link to="/profile" className="profile-navlink1">
            <div className="profile-profile">
              <svg viewBox="0 0 1024 1024" className="profile-icon2">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
              <span className="profile-text02">Profile</span>
            </div>
          </Link>
          <Link to="/help" className="profile-navlink2">
            <div className="profile-help">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="profile-icon4"
              >
                <path d="M512 786.286v-109.714c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v109.714c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286zM658.286 402.286c0-104.571-109.714-182.857-208-182.857-93.143 0-162.857 40-212 121.714-5.143 8-2.857 18.286 4.571 24l75.429 57.143c2.857 2.286 6.857 3.429 10.857 3.429 5.143 0 10.857-2.286 14.286-6.857 26.857-34.286 38.286-44.571 49.143-52.571 9.714-6.857 28.571-13.714 49.143-13.714 36.571 0 70.286 23.429 70.286 48.571 0 29.714-15.429 44.571-50.286 60.571-40.571 18.286-96 65.714-96 121.143v20.571c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286v0c0-13.143 16.571-41.143 43.429-56.571 43.429-24.571 102.857-57.714 102.857-144.571zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="profile-text03">Help</span>
            </div>
          </Link>
        </nav>
        <div className="profile-profile1">
          <Link to="/profile" className="profile-navlink3">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxtYW4lMjBwb3J0dHJhaXR8ZW58MHx8fHwxNjI3MjkzNTM1&amp;ixlib=rb-1.2.1&amp;w=200"
              className="profile-image1"
            />
          </Link>
          <div className="profile-container02">
            <Link to="/profile" className="profile-navlink4">
              John Doe
            </Link>
            <Link to="/profile" className="profile-navlink5">
              View Profile
            </Link>
          </div>
        </div>
      </div>
      <div className="profile-main">
        <div className="profile-container03">
          <h1 className="profile-text04">Profile </h1>
          <button className="profile-button button">Edit</button>
        </div>
        <div className="profile-container04">
          <div className="profile-container05">
            <div className="profile-container06">
              <span className="profile-text05">
                <span className="profile-text06">Name:</span>
                <span> John Doe</span>
              </span>
            </div>
            <div className="profile-container07">
              <span className="profile-text08">
                <span className="profile-text09">Email:</span>
                <span> johndoe@uic.edu</span>
              </span>
            </div>
            <div className="profile-container08">
              <span className="profile-text11">
                <span className="profile-text12">Address:</span>
                <span> 123 Maple Street. Anytown, PA 17101</span>
              </span>
            </div>
            <div className="profile-container09">
              <span className="profile-text14">
                <span className="profile-text15">Phone:</span>
                <span> +1 (312)-8906-123</span>
              </span>
            </div>
            <div className="profile-container10">
              <button className="profile-button1 button">Edit</button>
            </div>
          </div>
          <div className="profile-container11">
            <div className="profile-container12">
              <h1 className="profile-text17">Active Resume</h1>
            </div>
            <select multiple className="profile-select">
              <option value="Resume1">Software Engineer Resume</option>
              <option value="Resume2">Data Scientist Resume</option>
              <option value="Resume4">Engineering Intern Resume</option>
              <option value="Resume3">Researcher Resume</option>
              <option value="Resume5">Professor Resume</option>
              <option value="Resume6">Teaching Aid Resume</option>
            </select>
            <button className="profile-button2 button">
              Export Active Resume
            </button>
            <div className="profile-container13">
              <Link to="/home" className="profile-navlink6 button">
                Make Active
              </Link>
              <Link to="/home" className="profile-navlink7 button">
                Export
              </Link>
            </div>
            <div className="profile-container14">
              <div className="profile-container15">
                <svg viewBox="0 0 1024 1024" className="profile-icon6">
                  <path d="M342 556l170-172 170 172-60 60-68-68v178h-84v-178l-68 68zM854 768v-426h-684v426h684zM854 256q34 0 59 26t25 60v426q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h256l86 86h342z"></path>
                </svg>
              </div>
              <span className="profile-text18">Upload New Resume</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
