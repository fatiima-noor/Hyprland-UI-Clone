import TitleWrapper from '../Global/TitleWrapper';
import TitleHeading from '../Global/TitleHeading';
import TitleSubtile from '../Global/TitleSubtile';
import DistroOption from './DistroOption';
import CommandButton from '../Global/CommandButton';
import Button from '../Global/Button';
import { useAnimateIn } from './helper';
// Import images
import archLogo from '../../assets/arch.svg';
import nixosLogo from '../../assets/nixos.svg';
import freebsdLogo from '../../assets/freebsd.svg';
import opensuseLogo from '../../assets/opensuse.svg';
import amongusImage from '../../assets/green.webp';

function InstallSlice() {
  const ref = useAnimateIn({ slide: 24, fade: 0 });

  return (
    <section className="pb-6">
      <TitleWrapper>
        <TitleHeading>Install now</TitleHeading>
        <TitleSubtile>For your favourite distro</TitleSubtile>
      </TitleWrapper>

      <div ref={ref} className="flex flex-col items-center gap-12 md:gap-6">
        <div className="flex flex-col gap-12 px-4 md:gap-6 md:rounded-3xl md:bg-gradient-to-tr md:from-blue-500/40 md:to-transparent md:p-8 md:shadow-xl md:outline md:outline-1 md:outline-blue-500">
          <DistroOption name="Arch" image={archLogo}>
            <CommandButton command="pacman -S hyprland">
              <div className="text-center">
                AUR git version:{' '}
                <a
                  className="font-medium hover:text-white hover:underline"
                  target="_blank"
                  href="https://aur.archlinux.org/packages/hyprland-git/"
                  rel="noopener noreferrer"
                >
                  hyprland-git
                </a>
              </div>
            </CommandButton>
          </DistroOption>

          <DistroOption name="NixOS" image={nixosLogo}>
            <CommandButton command="programs.hyprland.enable">
              <div className="text-center">
                <a
                  className="font-medium hover:text-white hover:underline"
                  href="https://wiki.hypr.land/Nix/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See more details and git version ↗
                </a>
              </div>
            </CommandButton>
          </DistroOption>

          <DistroOption name="FreeBSD" image={freebsdLogo}>
            <CommandButton command="pkg install hyprland" />
          </DistroOption>

          <DistroOption
            name="openSUSE"
            image={opensuseLogo}
            imageExtra={
              <img
                className="absolute inset-0 -z-10 translate-y-1 rotate-0 scale-90 opacity-0 transition-all duration-700 [transition-delay:2s] group-hover:-translate-x-3 group-hover:-translate-y-0 group-hover:-rotate-12 group-hover:scale-100 group-hover:opacity-90"
                src={amongusImage}
                alt=""
              />
            }
          >
            <CommandButton command="zypper in hyprland">
              <div className="text-center">
                or install "hyprland" via YaST2 Software.
              </div>
            </CommandButton>
          </DistroOption>
        </div>

        <a
          target="_blank"
          href="https://wiki.hypr.land/Getting-Started/Installation/#packages"
          className="mt-10"
          rel="noopener noreferrer"
        >
          <Button size="lg" type="fancyOutline">
            Other options
          </Button>
        </a>
      </div>
    </section>
  );
}

export default InstallSlice;