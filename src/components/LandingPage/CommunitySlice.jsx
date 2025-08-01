import TitleWrapper from '../Global/TitleWrapper';
import TitleHeading from '../Global/TitleHeading';
import TitleSubtile from '../Global/TitleSubtile';
import DiscordProfilePicture from './DiscordProfilePicture';
import Poz from './Poz';
import { Icon } from '@iconify/react';
import Button from '../Global/Button';
import { useAnimateIn } from './helper';
import communityBg from '../../assets/community-bg.webp';
import greenImage from '../../assets/green.webp';
import joyImage from '../../assets/joy.svg';
import chan1Image from '../../assets/chan_1.webp';
import chanCatImage from '../../assets/chan_cat.webp';
import chanCat2Image from '../../assets/chan_cat_2.webp';
import anonImage from '../../assets/_anon.webp';

// Mock profiles data from profiles.json
const profiles = [
  {
    image: "https://cdn.discordapp.com/avatars/372809091208445953/a_33fd25e26c0ba17c05566bc3179c6476.gif",
    class: "outline-red-500",
    coordinates: [187, 296],
    size: 172
  },
  {
    image: "https://cdn.discordapp.com/avatars/444952344308744203/9ee39cd422568dad9e70319df27b2560.webp",
    class: "outline-yellow-500",
    coordinates: [735, 441],
    size: 164
  },
  {
    image: "https://cdn.discordapp.com/avatars/419880181101232129/d5ec2616075dc0fddb3de528c9113628.webp",
    class: "outline-orange-500",
    coordinates: [391, 615],
    size: 149
  },
  {
    image: "https://cdn.discordapp.com/avatars/378704069726044170/415dcb2ef8d1ef635e35e1d04d523cba.webp",
    class: "outline-amber-500",
    coordinates: [568, 594],
    size: 120
  },
  {
    image: "https://cdn.discordapp.com/avatars/862314649307054080/bce0b10ae900daa2da139f9e089c8e56.webp",
    class: "outline-cyan-400",
    coordinates: [648, 709],
    size: 128
  },
  {
    image: "https://cdn.discordapp.com/avatars/163678036401586177/0930f3f6f0839b4f9c59846e185aa8ad.webp",
    class: "outline-yellow-500",
    coordinates: [24, 341],
    size: 49
  },
  {
    image: "https://cdn.discordapp.com/avatars/223160360461402122/c6552a1c768613bffb83bf88e4ce2632.webp",
    class: "outline-red-500",
    coordinates: [47, 86],
    size: 48
  },
  {
    image: "https://cdn.discordapp.com/avatars/979473046404476998/3d12629a52071fabff4493c1362d59fa.webp",
    class: "outline-amber-500",
    coordinates: [1038, 446],
    size: 52
  },
  {
    image: "https://cdn.discordapp.com/avatars/486802226577276929/2a6355319a116ba3e2aff9acf4163e95.webp",
    class: "outline-cyan-500",
    coordinates: [273, 760],
    size: 52,
    quote: "\"meds\""
  },
  {
    image: "https://cdn.discordapp.com/avatars/837425748435796060/248cd938377647404e3d8d1c53b639cf.webp",
    class: "outline-orange-500",
    coordinates: [648, 364],
    size: 105
  },
  {
    image: "https://cdn.discordapp.com/avatars/480024733535174668/5453c57e69ff16f495d8dcbd597070e9.webp",
    class: "outline-purple-500",
    coordinates: [187, 764],
    size: 62
  },
  {
    image: "https://cdn.discordapp.com/avatars/544368824842190861/1fbf29ea7ca9c2109b97af2ede3806fa.webp",
    class: "outline-lime-500",
    coordinates: [736, 277],
    size: 105
  },
  {
    image: "https://cdn.discordapp.com/avatars/344854021166727180/ace83ad13015f29bc33a3f858e15b4d7.webp",
    class: "outline-yellow-500",
    coordinates: [898, 364],
    size: 68
  },
  {
    image: "https://cdn.discordapp.com/avatars/579120037034721281/c7b4341806d515f5d92bb53e322a4728.webp",
    class: "outline-rose-500",
    coordinates: [887, 159],
    size: 39
  },
  {
    image: "https://cdn.discordapp.com/avatars/246125351464337418/10c8bb5456d1ca1cebf2edff62b7001f.webp",
    class: "outline-amber-500",
    coordinates: [1023, 552],
    size: 48
  },
  {
    image: "https://cdn.discordapp.com/avatars/143031299152674816/4a143f00b0e014e9c3da37cd8599b106.webp",
    class: "outline-pink-500",
    coordinates: [147, 553],
    size: 87
  },
  {
    image: "https://cdn.discordapp.com/avatars/194157962498015232/ab11cc35bd9d057769254d1d3e29e468.webp",
    class: "outline-amber-500",
    coordinates: [65, 643],
    size: 74
  },
  {
    image: "https://cdn.discordapp.com/avatars/482139697796349953/0a588671aaff04b64788b86bfa8e15f9.webp",
    class: "outline-stone-500",
    coordinates: [263, 653],
    size: 65
  },
  {
    image: "https://cdn.discordapp.com/avatars/231040215085481984/7f378337240110b76e6e9baa31f83670.webp",
    class: "outline-amber-500",
    coordinates: [354, 798],
    size: 80
  },
  {
    image: "https://cdn.discordapp.com/avatars/784153590595321876/27df3e463a7111b75805baecaff4cdc9.webp",
    class: "outline-white",
    coordinates: [583, 824],
    size: 69,
    quote: "Perfect being"
  },
  {
    image: "https://cdn.discordapp.com/avatars/408513270916579338/bac966d3bae8ad01546ee32584917be9.webp",
    class: "outline-rose-300",
    coordinates: [275, 844],
    size: 40
  },
  {
    image: "https://cdn.discordapp.com/avatars/860670651026767942/7122b752fa6097472f8c76cc4458e33b.webp",
    class: "outline-orange-500",
    coordinates: [939, 552],
    size: 48
  },
  {
    image: "https://cdn.discordapp.com/avatars/520860407720837131/81abed4e03a9a7fc9d973b969c9d2ddd.webp",
    class: "outline-orange-500",
    coordinates: [458, 913],
    size: 35
  },
  {
    image: "https://cdn.discordapp.com/avatars/390226958241366016/aca819f6f27ff5b33f1d327b4d2f7049.webp",
    class: "outline-blue-500",
    coordinates: [858, 707],
    size: 45
  },
  {
    image: "https://cdn.discordapp.com/avatars/594256188422488069/1e532709dbd756c172c54add8536e558.webp",
    class: "outline-blue-500 bg-black",
    coordinates: [8, 477],
    size: 54
  },
  {
    image: "https://cdn.discordapp.com/avatars/335725027377020929/2ead48f16d6119d01a01d1c17e2e97e5.webp",
    class: "outline-pink-500",
    coordinates: [69, 561],
    size: 54
  },
  {
    image: "https://cdn.discordapp.com/avatars/561863734264594452/1b3bb5e0c68b0a53d05898f8456fa5d5.webp",
    class: "outline-orange-500 bg-black",
    coordinates: [908, 463],
    size: 54
  },
  {
    image: "https://cdn.discordapp.com/avatars/426690378830184448/09181b1b476f221b7850702158778c1a.webp",
    class: "outline-blue-500 bg-black",
    coordinates: [823, 184],
    size: 44
  },
  {
    image: "https://cdn.discordapp.com/avatars/219573494713810945/5202607a6cf5e34ed705308459d0115c.webp",
    class: "outline-stone-900 bg-black",
    coordinates: [133, 493],
    size: 49
  },
  {
    image: "https://cdn.discordapp.com/avatars/317785409763541002/38ba01511d57eb11c96dc74a9c4c149d.webp",
    class: "outline-blue-500 bg-black",
    coordinates: [119, 202],
    size: 49
  },
  {
    image: "https://cdn.discordapp.com/avatars/465960044094160908/db149a0d49fd80cf7caf7cc2a637e084.webp",
    class: "outline-yellow-500 bg-black",
    coordinates: [179, 671],
    size: 69
  },
  {
    image: "https://cdn.discordapp.com/avatars/706672850907430942/0cbb7c41b54155cee739542461755e65.webp",
    class: "outline-yellow-500 bg-black",
    coordinates: [771, 818],
    size: 49
  },
  {
    image: "https://cdn.discordapp.com/avatars/708440359587414067/2bcdf703f69ee35c4cf39b2a89c429e8.webp",
    class: "outline-lime-500 bg-black",
    coordinates: [1018, 123],
    size: 28
  },
  {
    image: "https://cdn.discordapp.com/avatars/142688838127583232/cd8a2857cfd1b4090e3cd2934d0bcd4e.webp",
    class: "outline-red-500 bg-black",
    coordinates: [57, 313],
    size: 57
  },
  {
    image: "https://cdn.discordapp.com/avatars/389202953862512641/1ec9240abbae61b1f1f8f4a154859890.webp",
    class: "outline-stone-500 bg-black",
    coordinates: [819, 738],
    size: 48
  },
  {
    image: "https://cdn.discordapp.com/avatars/1249703149057343549/4e5ddf63c78dab083a5cc3b8800b99f9.webp",
    class: "outline-stone-500 bg-black",
    coordinates: [474, 850],
    size: 63
  },
  {
    image: "https://cdn.discordapp.com/avatars/419571665832378369/0c5806bb19fa2d06b25045a91369e950.webp",
    class: "outline-orange-500",
    coordinates: [945, 697],
    size: 42
  },
  {
    image: "https://cdn.discordapp.com/avatars/993044302957662228/6ee715b893be571ca2ff5760e7292f59.webp",
    class: "outline-purple-500",
    coordinates: [113, 736],
    size: 40
  },
  {
    image: "https://cdn.discordapp.com/avatars/284239193813680129/e81d7a3f73dd0a9d71f383ef813a50c8.webp",
    class: "outline-red-500",
    coordinates: [143, 274],
    size: 44
  },
  {
    image: "https://cdn.discordapp.com/avatars/194584980922433536/9040f8f62191553a3ab4a212ab989d41.webp",
    class: "outline-red-500",
    coordinates: [53, 399],
    size: 75
  },
  {
    image: "https://cdn.discordapp.com/avatars/1016936898670903336/c376d8fb319f8aa57c98142ad2ec101c.webp",
    class: "outline-blue-500",
    coordinates: [50, 250],
    size: 40
  },
  {
    image: "https://cdn.discordapp.com/avatars/773595387150860328/2828efc505a0cc83544a9437d089e54e.webp",
    class: "outline-cyan-500",
    coordinates: [211, 846],
    size: 44
  },
  {
    image: "https://cdn.discordapp.com/avatars/531392146767347712/0b5e5671e7e8eb0e4f6ec547c686667b.webp",
    class: "outline-orange-500 bg-stone-800",
    coordinates: [525, 764],
    size: 80
  },
  {
    image: "https://cdn.discordapp.com/avatars/623781003382751243/6a950611b395b0fbf2e8835ba9af1e84.webp",
    class: "outline-orange-500",
    coordinates: [950, 277],
    size: 47
  },
  {
    image: "https://cdn.discordapp.com/avatars/633313654283960330/edbd0bc89f1d17a90870c25958816671.webp",
    class: "outline-orange-500",
    coordinates: [868, 606],
    size: 85
  },
  {
    image: "https://cdn.discordapp.com/avatars/321614457623019520/abd926b4f0c2ba37d6ee9359ad0599d2.webp",
    class: "outline-orange-500",
    coordinates: [962, 626],
    size: 45
  }
];

// Extra profiles from Svelte code
const extraProfiles = [
  {
    image: joyImage,
    coordinates: [284, 533],
    size: 90,
    class: 'outline-cyan-500 bg-blue-300'
  },
  {
    image: greenImage,
    coordinates: [873, 224],
    size: 79,
    class: 'outline-green-500'
  },
  {
    image: chan1Image,
    coordinates: [91, 799],
    size: 55,
    class: 'outline-sky-500'
  },
  {
    image: chanCatImage,
    coordinates: [-10, 844],
    size: 32,
    class: 'outline-blue-800'
  },
  {
    image: chanCat2Image,
    coordinates: [1000, 744],
    size: 32,
    class: 'outline-cyan-500'
  },
  {
    image: anonImage,
    coordinates: [-85, 566],
    size: 40,
    class: 'outline-sky-500'
  }
];

const validSizes = [16, 20, 24, 32, 40, 48, 64, 80, 96, 100, 128, 160, 240, 320, 640];

const allProfiles = [...profiles, ...extraProfiles]
  .map(({ image, size, ...profile }) => ({
    ...profile,
    size,
    image: typeof image === 'string' ? `${image}?size=${validSizes.find((_, index) => size <= validSizes[index])}` : image
  }))
  .sort((a, b) => b.size - a.size);

function CommunitySlice() {
  const ref = useAnimateIn({ slide: 24, fade: 0 });

  return (
    <section ref={ref} className="relative -mb-[200px] flex h-[1100px] min-h-max w-screen flex-col items-center">
      <TitleWrapper>
        <TitleHeading>
          Join a great<br />community
        </TitleHeading>
        <TitleSubtile className="max-w-[40ch]">
          Get help from Distro Hoppers, Haiku writers,<br />Hydrohomies, and human_(probably)
        </TitleSubtile>
      </TitleWrapper>

      <div className="group mt-16 flex flex-col items-center">
        <a href="#" className="discord p-4" aria-label="Join us on Discord">
          <Icon icon="prime:discord" className="h-full w-full" />
        </a>
        <a href="#">
          <Button type="fancyOutline">Join us on Discord</Button>
        </a>
      </div>

      <div className="absolute w-[1024px] select-none">
        <div className="flex h-full origin-bottom-right select-none flex-wrap gap-4">
          {allProfiles.map((props, index) => (
            <DiscordProfilePicture key={index} {...props} />
          ))}
          <Poz />
        </div>
      </div>

      <img
        src={communityBg}
        className="absolute top-0 -z-10 min-w-[1400px] select-none"
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  );
}

export default CommunitySlice;