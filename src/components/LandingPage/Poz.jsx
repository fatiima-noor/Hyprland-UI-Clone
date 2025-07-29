import DiscordProfilePicture from './DiscordProfilePicture';
import msedgePoz from '../../assets/msedgepoz.webp';

function Poz() {
  return (
    <div className="absolute z-20">
      <DiscordProfilePicture
        image={msedgePoz}
        coordinates={[710, 615]}
        size={90}
        className="bg-black outline-yellow-500"
        quote='"piss blob"'
        tag="poz"
      />
    </div>
  );
}

export default Poz;