import Home from './home.svg'
import Logout from './logout.svg'
import Playlist from './playlist.svg'
import Profile from './profile.svg'
import Radio from './radio.svg'
import Videos from './videos.svg'

// const icons = [Home, Logout, Playlist, Profile, Radio, Videos];
// export const {Home, Logout, Playlist, Profile, Radio, Videos} = icons;

const menu = [
  {
    title: "Home",
    icon: Home
  },
  {
    title:'My collections',
    icon:Playlist
  },
  {
    title:'Radio',
    icon:Radio
  },
  {
    title:'Music videos',
    icon:Videos
  },
  {
    title:'Profile',
    icon:Profile
  },
  {
    title:'Log out',
    icon:Logout
  }
];

export default menu;