import Wrapper  from "../assets/wrappers/SideBar"
import {Link} from "react-router-dom"
import {useState} from "react"

//icons
import { BiHome } from 'react-icons/bi';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoAnalytics } from 'react-icons/io5';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';


const Sidebar = () => {
 
  const [show, setShow] = useState({
    showHome: false,
    showDashboard: false,
    showAnalytics: false,
    showCalendar: false,
    showProfile: false,
    showSettings: false,
  });

  const {
    showHome,
    showDashboard,
    showAnalytics,
    showCalendar,
    showProfile,
    showSettings,
  } = show;

  const styledIcon = {
    color: 'black',
    fontSize: '1.6rem',
  };

  const handleOnMouseEnter = (showLink) =>
    setShow({ ...show, [showLink]: true });

  const handleOnMouseLeave = (showLink) =>
    setShow({
      showHome: false,
      showDashboard: false,
      showAnalytics: false,
      showCalendar: false,
      showProfile: false,
      showSettings: false,
    });

  return (
    <Wrapper>
      <div>

      <ul>
        <li>
          <Link
            to='/'
            onMouseEnter={() => handleOnMouseEnter('showHome')}
            onMouseLeave={() => handleOnMouseLeave('showHome')}
            >
            <BiHome style={styledIcon} />

            {showHome && <span>Home</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('showDashboard')}
            onMouseLeave={() => handleOnMouseLeave('showDashboard')}
            >
            <MdSpaceDashboard style={styledIcon} />

            {showDashboard && <span>Dashboard</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('showAnalytics')}
            onMouseLeave={() => handleOnMouseLeave('showAnalytics')}
            >
            <IoAnalytics style={styledIcon} />

            {showAnalytics && <span>Analytics</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('showCalendar')}
            onMouseLeave={() => handleOnMouseLeave('showCalendar')}
            >
            <BsFillCalendarCheckFill style={styledIcon} />

            {showCalendar && <span>Calendar</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('showProfile')}
            onMouseLeave={() => handleOnMouseLeave('showProfile')}
          >
            <CgProfile style={styledIcon} />

            {showProfile && <span>Profile</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('showSettings')}
            onMouseLeave={() => handleOnMouseLeave('showSettings')}
            >
            <FiSettings style={styledIcon} />

            {showSettings && <span>Settings</span>}
          </Link>
        </li>
      </ul>
            </div>
    </Wrapper>
  );
  }
  
  export default Sidebar