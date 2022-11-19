import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './help.css'

const Help = (props) => {
  return (
    <div className="help-container">
      <Helmet>
        <title>Help - Miniature Remorseful Rabbit</title>
        <meta
          property="og:title"
          content="Help - Miniature Remorseful Rabbit"
        />
      </Helmet>
      <div className="help-sidebar">
        <div className="help-container01">
          <img
            alt="image"
            src="/playground_assets/92081%20%5B1%5D-200h.png"
            className="help-image"
          />
          <span className="help-text">NextStep</span>
        </div>
        <nav className="help-nav">
          <Link to="/home" className="help-navlink">
            <div className="help-home">
              <svg viewBox="0 0 1024 1024" className="help-icon">
                <path d="M949.845 446.635c-144.64-121.771-407.296-348.629-409.899-350.933l-27.947-24.021-27.819 24.021c-2.645 2.261-265.429 229.035-412.16 351.915-18.688 16.811-29.355 40.32-29.355 64.384 0 47.104 38.229 85.333 85.333 85.333h42.667v256c0 47.104 38.229 85.333 85.333 85.333h128 384c47.104 0 85.333-38.229 85.333-85.333v-256h42.667c47.104 0 85.333-38.229 85.333-85.333 0-25.515-11.733-49.536-31.488-65.365zM597.333 853.333h-170.667v-213.333h170.667v213.333zM768 512l0.085 341.333c-0.085 0-128.085 0-128.085 0v-256h-256v256h-128v-341.333h-128.043c117.973-98.645 312.107-265.685 384.043-327.68 71.936 61.995 265.984 228.992 384 327.723 0-0-128-0-128-0.043z"></path>
              </svg>
              <span className="help-text01">Home</span>
            </div>
          </Link>
          <Link to="/profile" className="help-navlink1">
            <div className="help-profile">
              <svg viewBox="0 0 1024 1024" className="help-icon02">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
              <span className="help-text02">Profile</span>
            </div>
          </Link>
          <Link to="/help" className="help-navlink2">
            <div className="help-help">
              <svg viewBox="0 0 1024 1024" className="help-icon04">
                <path d="M642 438q40-40 40-96 0-70-50-121t-120-51-120 51-50 121h84q0-34 26-60t60-26 60 26 26 60-26 60l-52 54q-50 54-50 120v22h84q0-68 50-122zM554 768v-86h-84v86h84zM810 86q34 0 60 25t26 59v598q0 34-26 60t-60 26h-170l-128 128-128-128h-170q-36 0-61-25t-25-61v-598q0-36 25-60t61-24h596z"></path>
              </svg>
              <span className="help-text03">Help</span>
            </div>
          </Link>
        </nav>
        <div className="help-profile1">
          <Link to="/profile" className="help-navlink3">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxtYW4lMjBwb3J0dHJhaXR8ZW58MHx8fHwxNjI3MjkzNTM1&amp;ixlib=rb-1.2.1&amp;w=200"
              className="help-image1"
            />
          </Link>
          <div className="help-container02">
            <Link to="/profile" className="help-navlink4">
              John Doe
            </Link>
            <Link to="/profile" className="help-navlink5">
              View Profile
            </Link>
          </div>
        </div>
      </div>
      <div className="help-main">
        <div className="help-container03">
          <svg viewBox="0 0 1024 1024" className="help-icon06">
            <path d="M642 438q40-40 40-96 0-70-50-121t-120-51-120 51-50 121h84q0-34 26-60t60-26 60 26 26 60-26 60l-52 54q-50 54-50 120v22h84q0-68 50-122zM554 768v-86h-84v86h84zM810 86q34 0 60 25t26 59v598q0 34-26 60t-60 26h-170l-128 128-128-128h-170q-36 0-61-25t-25-61v-598q0-36 25-60t61-24h596z"></path>
          </svg>
          <h1 className="help-text04">Help </h1>
        </div>
        <div className="help-container04">
          <div className="help-container05">
            <h1 className="help-text05">Hello, how can we help?</h1>
          </div>
          <div className="help-container06">
            <input
              type="text"
              placeholder="Ask a question..."
              className="help-textinput input"
            />
            <span>         </span>
            <button className="help-button button">Search</button>
          </div>
          <div className="help-container07">
            <h1 className="help-text07">Check out our tutorial videos -&gt;</h1>
            <span>       </span>
            <button className="help-button1 button">YouTube</button>
          </div>
          <div className="help-steps">
            <h1 className="help-text09">Discover Our Process</h1>
            <div className="help-container08">
              <div className="help-step">
                <div className="help-container09">
                  <div className="help-line"></div>
                  <div className="help-container10">
                    <svg viewBox="0 0 1024 1024" className="help-icon08">
                      <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                    </svg>
                  </div>
                  <div className="help-line1"></div>
                </div>
                <div className="help-container11">
                  <h1 className="help-text10">Apply</h1>
                  <span className="help-text11">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="help-step1">
                <div className="help-container12">
                  <div className="help-line2"></div>
                  <div className="help-container13">
                    <svg viewBox="0 0 1024 1024" className="help-icon10">
                      <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                    </svg>
                  </div>
                  <div className="help-line3"></div>
                </div>
                <div className="help-container14">
                  <h1 className="help-text14">Review</h1>
                  <span className="help-text15">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="help-step2">
                <div className="help-container15">
                  <div className="help-line4"></div>
                  <div className="help-container16">
                    <svg viewBox="0 0 1024 1024" className="help-icon12">
                      <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                      <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                    </svg>
                  </div>
                  <div className="help-line5"></div>
                </div>
                <div className="help-container17">
                  <h1 className="help-text18">Negotiate</h1>
                  <span className="help-text19">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="help-step3">
                <div className="help-container18">
                  <div className="help-line6"></div>
                  <div className="help-container19">
                    <svg viewBox="0 0 1024 1024" className="help-icon15">
                      <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                    </svg>
                  </div>
                  <div className="help-line7"></div>
                </div>
                <div className="help-container20">
                  <h1 className="help-text22">Accept</h1>
                  <span className="help-text23">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="help-container21"></div>
        </div>
      </div>
    </div>
  )
}

export default Help
