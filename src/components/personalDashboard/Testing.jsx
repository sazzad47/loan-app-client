import React from "react";
import { HiconOutlineDown } from "./components/HiconOutlineDown";
import { LinearEssentional } from "./components/LinearEssentional";
import { LinearMessages } from "./components/LinearMessages";
import { HiconOutlineDocumentAlignRight11 } from "./icons/HiconOutlineDocumentAlignRight11";
import { HiconOutlineDown21 } from "./icons/HiconOutlineDown21";
import { HiconOutlineLeft2 } from "./icons/HiconOutlineLeft2";
import { HiconOutlineRight2 } from "./icons/HiconOutlineRight2";
import { LinearArrowsRestart } from "./icons/LinearArrowsRestart";
import { LinearSearchMinimalisticMagnifer } from "./icons/LinearSearchMinimalisticMagnifer";
import { LinearTimeCalendarMinimalistic } from "./icons/LinearTimeCalendarMinimalistic";
import { LinearTimeHistory3 } from "./icons/LinearTimeHistory3";
import { Mastercard } from "./icons/Mastercard";
import "./style.css";

const PersonalDashboard = () => {
  return (
    <div className="personal-dashboard">
      <div className="div">

        {/* right profile image */}
        {/* <div className="profile-image">
          <div className="overlap-group">
            <div className="ellipse" />
            <img
              className="img"
              alt="Ellipse"
              src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/ellipse-7.svg"
            />
          </div>
        </div> */}

        <div className="search">
          <div className="overlap">
            <div className="rectangle" />
            <div className="search-box">
              <div className="overlap-group-2">
                <img
                  className="search-2"
                  alt="Search"
                  src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/search-2@2x.png"
                />
                <div className="text-wrapper">Search everything....</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-2">Welcome to your dashboard</div>
          {/* <div className="rectangle-2" /> */}
          <div className="whole-illustration">
            <div className="overlap-3">
              <div className="custom-illustration">
                <div className="ellipse-2" />
                <div className="ellipse-3" />
              </div>
              <div className="progress-stars">
                <div className="stars-rating">
                  <div className="star" />
                  <div className="star-2" />
                  <div className="star-3" />
                </div>
                <div className="little-progress-bar">
                  <div className="rectangle-3" />
                </div>
              </div>
              <div className="little-doc-right">
                <div className="overlap-group-3">
                  <div className="rectangle-4" />
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                </div>
                <img
                  className="line"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-99.svg"
                />
              </div>
            </div>
          </div>
          <div className="welcome-back">Welcome Back</div>
          <div className="fred-jonathan">Fred Jonathan !</div>
          <div className="group">
            <div className="update-profile-wrapper">
              <div className="update-profile">Update Profile</div>
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="rectangle-7" />
          <div className="percentage-showing">
            <div className="div-wrapper">
              <div className="text-wrapper-3">25%</div>
            </div>
          </div>
          <div className="dispute-progress">
            <div className="disputes-graph">
              <div className="overlap-5">
                <div className="heading-dispute">
                  <p className="element-dispute-in-this">
                    <span className="span">30 dispute </span>
                    <span className="text-wrapper-4">in this month </span>
                  </p>
                  <div className="dispute-progress-2">
                    <div className="dispute-progress-3">Dispute Progress</div>
                    <div className="cricle-icons">
                      <div className="ellipse-4" />
                      <div className="ellipse-5" />
                      <div className="ellipse-6" />
                    </div>
                  </div>
                </div>
                <img
                  className="dispute-graph"
                  alt="Dispute graph"
                  src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/dispute-graph@2x.png"
                />
                <div className="point">
                  <div className="ellipse-7" />
                </div>
              </div>
              <div className="generated-account">
                <p className="element-accounts">
                  <span className="span">200 </span>
                  <span className="text-wrapper-5">accounts</span>
                </p>
                <div className="genrated-icon">
                  <div className="icon-for-accounts">
                    <div className="genrerated-account-wrapper">
                      <div className="genrerated-account">
                        <div className="overlap-group-4">
                          <div className="ellipse-8" />
                          <img
                            className="line-2"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-103.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="generated">Generated</div>
              </div>
              <div className="removed-account">
                <p className="p">
                  <span className="span">12 </span>
                  <span className="text-wrapper-5">accounts</span>
                </p>
                <div className="icon-for-accounts-wrapper">
                  <div className="icon-for-accounts-2">
                    <div className="trash-icon">
                      <div className="overlap-group-5">
                        <div className="rectangle-8" />
                        <img
                          className="line-3"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-104.svg"
                        />
                        <img
                          className="line-4"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-105.svg"
                        />
                        <img
                          className="line-5"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-106.svg"
                        />
                      </div>
                      <div className="overlap-6">
                        <img
                          className="line-6"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-108.svg"
                        />
                        <img
                          className="line-7"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-107.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="removed">Removed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="calendar-and">
          <div className="calendar">CALENDAR</div>
          <div className="frame-2">
            <div className="today">Today</div>
            <HiconOutlineDown className="hicon-outline-down-2" />
          </div>
          <div className="div-2">
            <div className="rectangle-9" />
            <div className="whole-calendar-data">
              <div className="calender-month-arrow">
                <div className="calender-month">
                  <div className="august">August</div>
                  <div className="arrow">
                    <HiconOutlineLeft2 className="icon-instance-node" />
                    <HiconOutlineRight2 className="icon-instance-node" />
                  </div>
                </div>
                <img
                  className="line-8"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-56.svg"
                />
              </div>
              <div className="calendar-week-name">
                <div className="calender-week-name">
                  <div className="mon">Mon</div>
                  <div className="tue">Tue</div>
                  <div className="wed">Wed</div>
                  <div className="thu">Thu</div>
                  <div className="fri">Fri</div>
                  <div className="sat">Sat</div>
                  <div className="sun">Sun</div>
                </div>
                <img
                  className="line-8"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-57.svg"
                />
              </div>
              <div className="calendar-numbers">
                <div className="overlap-group-6">
                  <div className="rectangle-10" />
                  <div className="ellipse-9" />
                  <div className="ellipse-10" />
                  <div className="rectangle-11" />
                  <div className="ellipse-11" />
                  <div className="ellipse-12" />
                  <div className="ellipse-13" />
                  <div className="ellipse-14" />
                  <div className="numbers">
                    <div className="text-wrapper-6">1</div>
                    <div className="text-wrapper-7">8</div>
                    <div className="text-wrapper-8">15</div>
                    <div className="text-wrapper-9">22</div>
                    <div className="text-wrapper-10">29</div>
                  </div>
                  <div className="numbers-2">
                    <div className="text-wrapper-6">2</div>
                    <div className="text-wrapper-11">9</div>
                    <div className="text-wrapper-8">16</div>
                    <div className="text-wrapper-10">23</div>
                    <div className="text-wrapper-10">30</div>
                  </div>
                  <div className="nu-bers">
                    <div className="text-wrapper-6">3</div>
                    <div className="text-wrapper-12">10</div>
                    <div className="text-wrapper-8">17</div>
                    <div className="text-wrapper-13">24</div>
                    <div className="text-wrapper-14">31</div>
                  </div>
                  <div className="numbers-3">
                    <div className="text-wrapper-6">4</div>
                    <div className="text-wrapper-8">11</div>
                    <div className="text-wrapper-8">18</div>
                    <div className="text-wrapper-10">25</div>
                    <div className="text-wrapper-15">1</div>
                  </div>
                  <div className="numbers-4">
                    <div className="text-wrapper-6">5</div>
                    <div className="text-wrapper-8">12</div>
                    <div className="text-wrapper-8">19</div>
                    <div className="text-wrapper-13">26</div>
                    <div className="text-wrapper-16">2</div>
                  </div>
                </div>
                <div className="frame-numbers">
                  <div className="text-wrapper-17">30</div>
                  <div className="text-wrapper-11">6</div>
                  <div className="text-wrapper-8">13</div>
                  <div className="text-wrapper-18">20</div>
                  <div className="text-wrapper-10">27</div>
                </div>
                <div className="number">
                  <div className="text-wrapper-19">31</div>
                  <div className="text-wrapper-11">7</div>
                  <div className="text-wrapper-8">14</div>
                  <div className="text-wrapper-20">21</div>
                  <div className="text-wrapper-10">28</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming-meeting">
          <div className="upcoming-meeting-2">
            <div className="upcoming-task">UPCOMING TASK</div>
            <div className="frame-3">
              <div className="today">Today</div>
              <HiconOutlineDown21 className="hicon-outline-down-2-1" />
            </div>
          </div>
          <div className="upcoming-meeting-3">
            <div className="schedule-time">
              <div className="text-wrapper-21">8 : 00</div>
              <div className="rectangle-12" />
            </div>
            <div className="schedule-time-2">
              <div className="text-wrapper-21">8 : 30</div>
              <div className="rectangle-12" />
            </div>
            <div className="schedule-time-3">
              <div className="text-wrapper-21">9 : 00</div>
              <div className="rectangle-12" />
            </div>
            <div className="schedule-time-4">
              <div className="text-wrapper-21">9 : 30</div>
              <div className="rectangle-12" />
            </div>
            <div className="schedule-time-5">
              <div className="text-wrapper-22">10 : 00</div>
              <div className="rectangle-12" />
            </div>
            <div className="schedule-time-6">
              <div className="text-wrapper-22">10 : 30</div>
              <div className="rectangle-12" />
            </div>
            <div className="meeting-shcedule">
              <div className="div-2">
                <div className="rectangle-13" />
                <div className="rectangle-14" />
              </div>
              <div className="meeting-schedule">
                <div className="schedule-meeting">
                  <div className="ellipse-15" />
                  <HiconOutlineDocumentAlignRight11 className="hicon-outline" />
                </div>
                <div className="schedule-meeting-2">
                  <div className="schedule-meeting-3">Schedule Meeting</div>
                  <p className="element-am-am">8:00 AM - 8:30 AM</p>
                </div>
              </div>
            </div>
            <div className="meeting-shcedule-2">
              <div className="meeting-task-baox">
                <div className="rectangle-15" />
                <div className="rectangle-16" />
              </div>
              <div className="meeting-schedule-2">
                <div className="schedule-meeting">
                  <div className="ellipse-15" />
                  <div className="hicon-outline-2" />
                </div>
                <div className="schedule-meeting-2">
                  <div className="upload-credit-report">Upload Credit Report</div>
                  <div className="element-am">9:30AM - 10:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="meassage">
          <div className="overlap-7">
            <div className="meassage-icon">
              <img
                className="message"
                alt="Message"
                src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/message-1@2x.png"
              />
            </div>
            <div className="message-tag-number">
              <div className="overlap-group-7">
                <div className="text-wrapper-23">2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-dashboard">My Dashboard</div>
        <div className="mark">
          <img
            className="rectangle-17"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/rectangle-263.svg"
          />
          <div className="ellipse-16" />
        </div>
        <div className="your-card-section">
          <div className="overlap-8">
            <div className="text-wrapper-24">Monday, 07 September 2023</div>
            <div className="credit-card">
              <div className="overlap-group-8">
                <img
                  className="mask-group"
                  alt="Mask group"
                  src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/mask-group-1@2x.png"
                />
                <div className="current-balance">
                  <div className="group-2">
                    <div className="text-wrapper-25">$ 1,224.50</div>
                    <div className="current-balance-2">Current Balance</div>
                  </div>
                </div>
                <Mastercard className="master-card" />
                <div className="element">5287&nbsp;&nbsp;3456&nbsp;&nbsp;789- 1289</div>
                <div className="text-wrapper-26">09/25</div>
                <div className="ellipse-17" />
                <div className="ellipse-18" />
              </div>
            </div>
            <div className="text-wrapper-27">$ 1,224.50</div>
            <div className="your-card">Your Card</div>
            <div className="today-2">Today</div>
            <img
              className="polygon"
              alt="Polygon"
              src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/polygon-10.svg"
            />
            <div className="last-payment-details">Last Payment Details</div>
            <div className="group-3">
              <div className="amount-paid">
                <div className="amount-paid-2">Amount Paid</div>
                <div className="text-wrapper-28">$ 320.50</div>
              </div>
              <div className="amount-paid-3">
                <div className="date">Date</div>
                <div className="element-sep">17 Sep 2023</div>
              </div>
            </div>
            <img
              className="line-9"
              alt="Line"
              src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-100.svg"
            />
            <img
              className="line-10"
              alt="Line"
              src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-101.svg"
            />
            <div className="overlap-9">
              <div className="invoice">Invoice</div>
              <button className="download-button">
                <div className="download-wrapper">
                  <div className="download">Download</div>
                </div>
              </button>
              <div className="text-wrapper-29">27/08/2023</div>
              <div className="text-wrapper-30">01/09/2023</div>
              <div className="to">TO</div>
            </div>
          </div>
        </div>
        <div className="overlap-10">
          <div className="report-graph-and">
            <div className="overlap-11">
              <div className="this-week">
                <div className="rectangle-18" />
                <div className="this-week-text-and">
                  <div className="this-week-2">This Week</div>
                  <div className="this-week-arrow">
                    <img
                      className="filter"
                      alt="Filter"
                      src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/filter-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="overlap-12">
                <div className="overlap-13">
                  <img
                    className="line-11"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-58.svg"
                  />
                  <img
                    className="line-12"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-67.png"
                  />
                </div>
                <div className="overlap-14">
                  <img
                    className="line-13"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-63.svg"
                  />
                  <img
                    className="line-14"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-63.svg"
                  />
                  <img
                    className="line-15"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-65.svg"
                  />
                  <img
                    className="line-16"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-65.svg"
                  />
                  <img
                    className="line-17"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-60.svg"
                  />
                  <img
                    className="line-18"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-61.svg"
                  />
                  <img
                    className="line-19"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-62.svg"
                  />
                  <div className="point-g-for-graph">
                    <div className="ellipse-wrapper">
                      <div className="ellipse-19" />
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-15">
                      <div className="ellipse-20" />
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-16">
                      <div className="ellipse-21" />
                    </div>
                  </div>
                  <div className="tool-tip">
                    <div className="tooltip-date-wrapper">
                      <div className="tooltip-date">
                        <div className="overlap-group-9">
                          <div className="rectangle-19" />
                          <div className="rectangle-20" />
                          <div className="element-aug">20 Aug 2023</div>
                          <div className="text-wrapper-31">839/-1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tool-tip-2">
                    <div className="overlap-17">
                      <div className="tooltip-date">
                        <div className="overlap-group-9">
                          <div className="rectangle-19" />
                          <div className="rectangle-20" />
                          <div className="element-aug">20 Aug 2023</div>
                          <div className="text-wrapper-32">600/-1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tool-tip-3">
                    <div className="overlap-18">
                      <div className="tooltip-date">
                        <div className="overlap-group-9">
                          <div className="rectangle-19" />
                          <div className="rectangle-20" />
                          <div className="element-aug">20 Aug 2023</div>
                          <div className="text-wrapper-33">600/-1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounds">
                <div className="round">
                  <div className="div-2">
                    <div className="rectangle-21" />
                    <img
                      className="line-20"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-59.svg"
                    />
                  </div>
                  <div className="transunion">Transunion</div>
                </div>
                <div className="round-2">
                  <div className="div-2">
                    <div className="rectangle-22" />
                    <img
                      className="line-20"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-59-1.svg"
                    />
                  </div>
                  <div className="experian">Experian</div>
                </div>
                <div className="round-3">
                  <div className="div-2">
                    <div className="rectangle-23" />
                    <img
                      className="line-20"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-59-2.svg"
                    />
                  </div>
                  <div className="equifax">Equifax</div>
                </div>
              </div>
              <div className="jan">Jan</div>
              <div className="feb">Feb</div>
              <div className="mar">Mar</div>
              <div className="apr">Apr</div>
              <div className="may">May</div>
              <div className="jun">Jun</div>
              <div className="jul">Jul</div>
              <div className="aug">Aug</div>
              <div className="sep">Sep</div>
              <div className="oct">Oct</div>
              <div className="nov">Nov</div>
              <div className="dec">Dec</div>
              <div className="my-score">My Score</div>
              <div className="text-wrapper-34">850</div>
              <div className="text-wrapper-35">840</div>
              <div className="text-wrapper-36">830</div>
              <div className="text-wrapper-37">820</div>
            </div>
          </div>
          <div className="results">
            <div className="overlap-19">
              <p className="result-work-in">
                <span className="text-wrapper-38">result</span>
                <span className="text-wrapper-39">&nbsp;</span>
              </p>
              <div className="overlap-20">
                <div className="sent-progress">
                  <div className="experian-2">Experian</div>
                  <div className="bureau-warning">Bureau Warning</div>
                  <div className="sent-tag">
                    <div className="sent">Sent</div>
                    <div className="ellipse-22" />
                  </div>
                  <div className="text-wrapper-41">12/27/23</div>
                </div>
                <div className="sent-progress-2">
                  <div className="experian-3">Experian</div>
                  <div className="bureau-warning-2">Bureau Warning</div>
                  <div className="sent-tag-2">
                    <div className="processing">Processing</div>
                    <div className="ellipse-23" />
                  </div>
                  <div className="text-wrapper-42">12/27/23</div>
                </div>
                <div className="sent-progress-3">
                  <div className="experian-2">Experian</div>
                  <div className="bureau-warning">Bureau Warning</div>
                  <div className="sent-tag-3">
                    <div className="due">Due</div>
                    <div className="ellipse-24" />
                  </div>
                  <div className="text-wrapper-41">12/27/23</div>
                </div>
                <div className="sent-progress-4">
                  <div className="experian-3">Experian</div>
                  <div className="bureau-warning-2">Bureau Warning</div>
                  <div className="sent-tag-4">
                    <div className="pending">Pending</div>
                    <div className="ellipse-25" />
                  </div>
                  <div className="text-wrapper-42">12/27/23</div>
                </div>
                <div className="sent-progress-5">
                  <div className="experian-4">Experian</div>
                  <div className="bureau-warning-3">Bureau Warning</div>
                  <div className="sent-tag">
                    <div className="sent">Sent</div>
                    <div className="ellipse-22" />
                  </div>
                  <div className="text-wrapper-43">12/27/23</div>
                </div>
              </div>
              <div className="status-heading-bar">
                <div className="text-wrapper-44">Name</div>
                <div className="letter">Letter</div>
                <div className="status">Status</div>
                <div className="date-2">Date</div>
              </div>
              <div className="tag-filter-for">
                <div className="overlap-group-10">
                  <div className="last">Last 24h</div>
                  <img
                    className="down"
                    alt="Down"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/down-2@2x.png"
                  />
                </div>
              </div>
              <p className="showing-results">
                <span className="text-wrapper-45">Showing results </span>
                <span className="text-wrapper-46"> (1-6) out of 50</span>
              </p>
              <div className="bottom-footer">
                <div className="overlap-21">
                  <div className="page-numbers">
                    <div className="page-no">
                      <div className="overlap-group-11">
                        <div className="text-wrapper-47">1</div>
                      </div>
                    </div>
                    <div className="page-no-2">
                      <div className="overlap-22">
                        <div className="text-wrapper-48">2</div>
                      </div>
                    </div>
                    <div className="page-no-3">
                      <div className="overlap-22">
                        <div className="text-wrapper-48">3</div>
                      </div>
                    </div>
                  </div>
                  <div className="right-left-arrow">
                    <div className="left-arroe">
                      <div className="overlap-group-12">
                        <img
                          className="left"
                          alt="Left"
                          src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/left-2@2x.png"
                        />
                        <div className="ellipse-26" />
                      </div>
                    </div>
                    <div className="right-arrow">
                      <div className="overlap-23">
                        <img
                          className="left-2"
                          alt="Left"
                          src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/left-2-1@2x.png"
                        />
                        <div className="ellipse-26" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="export-ibutton">
                <div className="overlap-24">
                  <img
                    className="export-icon"
                    alt="Export icon"
                    src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/export-icon@2x.png"
                  />
                  <div className="text-wrapper-49">Export</div>
                </div>
              </button>
              <div className="cricle-icons-2">
                <div className="ellipse-27" />
                <div className="ellipse-28" />
                <div className="ellipse-29" />
              </div>
            </div>
          </div>
          <img
            className="menu-strawberry"
            alt="Menu strawberry"
            src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/menu-strawberry@2x.png"
          />
          <div className="sort">Sort</div>
          <input className="input" placeholder="Search" type="text" />
          <div className="rectangle-24" />
          <div className="filter-2">Filter</div>
          <img
            className="filter-3"
            alt="Filter"
            src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/filter-3@2x.png"
          />
          <LinearSearchMinimalisticMagnifer className="linear-search" />
          <div className="rectangle-25" />
          <div className="rectangle-26" />
          <div className="rectangle-27" />
          <div className="rectangle-28" />
          <div className="rectangle-29" />
          <div className="rectangle-30" />
          <div className="rectangle-31" />
          <LinearMessages className="linear-messages-conversation-plain" />
          <LinearArrowsRestart className="linear-arrows" />
          <div className="date-3">Date</div>
          <div className="sent-2">Sent</div>
          <div className="pending-2">Pending</div>
          <div className="processing-2">Processing</div>
          <div className="due-2">Due</div>
          <LinearEssentional className="linear-essentional-UI-danger-circle" />
          <LinearTimeHistory3 className="linear-time-history" />
          <div className="add-filter">Add Filter</div>
          <LinearTimeCalendarMinimalistic className="linear-time-calendar" />
        </div>
        <div className="response-upload">
          <div className="overlap-25">
            <div className="docment-created-rfor">
              <div className="overlap-group-13">
                <div className="ellipse-30" />
                <div className="document">
                  <div className="right-mark">
                    <img
                      className="line-21"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-109.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="upload-button"
              alt="Upload button"
              src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/upload-button@2x.png"
            />
            <div className="text-of-response">
              <div className="important">Important</div>
              <p className="upload-all">Upload All Correspondence Received From Creditors And The Credit Bureaus.</p>
            </div>
          </div>
        </div>
        <div className="response-upload-2">
          <div className="overlap-26">
            <div className="overlap-27">
              <div className="rectangle-32" />
              <div className="text-of-response-2">
                <div className="due-payments">Due Payments</div>
                <div className="text-wrapper-50">$240</div>
                <div className="new">New</div>
                <div className="text-wrapper-51">jonathan@gmail.com</div>
              </div>
            </div>
            <div className="docment-created-rfor-2">
              <div className="overlap-group-13">
                <div className="ellipse-31" />
                <div className="right-mark-wrapper">
                  <div className="right-mark">
                    <img
                      className="dollar-circle"
                      alt="Dollar circle"
                      src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/dollar-circle@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wallet-icon">
          <img
            className="wallet"
            alt="Wallet"
            src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/wallet@2x.png"
          />
        </div>
        <div className="wallet-icon-2">
          <div className="inbox-icon">
            <div className="overlap-group-14">
              <img
                className="vector-stroke"
                alt="Vector stroke"
                src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/vector--stroke-.svg"
              />
              <img
                className="page-no"
                alt="Vector stroke"
                src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/vector--stroke--1.svg"
              />
              <div className="rectangle-33" />
              <div className="rectangle-34" />
            </div>
          </div>
        </div>
        <div className="dispute-icon">
          <div className="dispute-icon-2">
            <div className="overlap-group-15">
              <img
                className="vector"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/vector-3.svg"
              />
              <div className="right-mark-icon">
                <img
                  className="line-22"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-112.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="wallet-icon-3" />
        <div className="wallet-icon-4" />
        <div className="wallet-icon-5" />
        <div className="positive-accounts">
          <div className="overlap-28">
            <div className="rectangle-35" />
            <div className="exixting-account">
              <div className="your-existing">Your Existing Account</div>
              <div className="complete-your">Complete Your Account</div>
            </div>
            <div className="view-all">View All</div>
            <div className="account-heading-and">
              <div className="profile-wrapper">
                <img
                  className="profile"
                  alt="Profile"
                  src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/profile-1@2x.png"
                />
              </div>
              <div className="heading-and-sub">
                <div className="text-wrapper-52">Accounts</div>
                <p className="text-wrapper-53">Complete Your Positive Accounts Information</p>
                <div className="text-wrapper-54">Manage Them All</div>
              </div>
            </div>
            <div className="proegess-bar-section">
              <div className="overlap-29">
                <div className="rectangle-36" />
                <div className="progress-bar-for">
                  <div className="overlap-group-16">
                    <div className="rectangle-37" />
                    <div className="text-wrapper-55">60%</div>
                  </div>
                </div>
                <div className="profile-completeness">Profile Completeness :</div>
              </div>
            </div>
            <div className="profile-manage">
              <div className="overlap-30">
                <div className="manage-account">
                  <div className="manage-accounts-wrapper">
                    <div className="manage-accounts">Manage Accounts</div>
                  </div>
                </div>
                <div className="rectangle-38" />
                <img
                  className="ellipse-32"
                  alt="Ellipse"
                  src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/ellipse-9.svg"
                />
                <div className="john-blake">John Blake</div>
                <div className="text-wrapper-56">missvannie1@gmail.com</div>
              </div>
            </div>
            <div className="profile-manage-2">
              <div className="overlap-30">
                <div className="manage-account">
                  <div className="overlap-group-17">
                    <div className="manage-accounts">Manage Accounts</div>
                  </div>
                </div>
                <div className="rectangle-38" />
                <img
                  className="ellipse-33"
                  alt="Ellipse"
                  src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/ellipse-9-1.svg"
                />
                <div className="john-blake-2">John Blake</div>
                <div className="text-wrapper-57">missvannie1@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="category-heading">
          <div className="text-wrapper-58">Categories</div>
          <div className="text-wrapper-59">Organize your finances</div>
          <div className="cricle-icons-3">
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
          </div>
        </div>
        <div className="overlap-31">
          <div className="rectangle-39" />
          <img
            className="element-reports"
            alt="Element reports"
            src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/3-reports.png"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;