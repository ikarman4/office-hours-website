
import SpotifyPlayer from 'react-spotify-player';
 
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

<SpotifyPlayer
  uri="spotify:album:2ol1AWwdPIVeEHj9kb5reV" 
  size={size}
  view={view}
  theme={theme}
/>
