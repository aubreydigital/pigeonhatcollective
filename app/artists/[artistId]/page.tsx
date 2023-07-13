import Link from "next/link";
import Image from 'next/image';
import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaSpotify, FaSoundcloud } from "react-icons/fa";
import { TbBrandLinktree } from 'react-icons/tb';
import { GiWorld } from 'react-icons/gi'

const artists = [
  {
    id: 0,
    title: 'Tierney',
    query: 'tierney',
    email: 'hiswitterbeet@gmail.com',
    threads: '@tierannical',
    facebook: 'hiswitterbeet',
    twitter: 'tierannical',
    tiktok: '@switterbeet',
    instagram: 'hiswitterbeet',
    image: '/assets/images/artists/tierneyprofile.jpg',
    image2: '/assets/images/artists/tierneyprofile2.jpeg',
    image3: '/assets/images/artists/tierneyprofile3.jpeg',
    description: 'You may have already seen this bird hanging with the flock, but it’s finally time to meet her! Tierney is a Vegas-born musician, lyricist who also dabbles in booking & promoting, mostly by making crafts with Mari. She named her solo-project-turned-band Switterbeet due to her propensity to write sad lyrics with catchy beats. Outside of making music, Tierney likes to buy & slowly kill houseplants, hang with her horrible cat, & loiter at karaoke nights.'
  },
  {
    id: 1,
    title: 'Kurian',
    query: 'kurian',
    spotify: 'https://open.spotify.com/artist/6JwymLqWTtpomYsRdRkXNQ',
    instagram: 'kurian.1111',
    image: '/assets/images/artists/kurianprofile1.jpeg',
    image2: '/assets/images/artists/kurianprofile2.JPG',
    image3: '/assets/images/artists/kurianprofile3.jpeg',
    description: 'The energy of a thousand suns emanates from the mind, body, and soul of Kurian. Based in Las Vegas, Kurian is a spirited rapper whose art serves as a medium for their political outcries. With their affinity for hard-hitting 808s and lush sampling, they craft a soundscape that becomes the perfect vessel for the message they bring across. Originally from the south Indian state of Kerala, Kurian taps into their Marxist roots to deliver a blend of conscious bars with grooving instrumentals. Channeling artists such as JPEGMAFIA and Freddie Gibbs, Kurian takes their alternative edge and tempers it with the heat of the Mojave. The result is a fine blend of floaty beats and cutting lyrics intended to leave an impact on any listener.',
    desc2: 'Check out their music on all streaming platforms now, including their latest EP, a collab with Spaceboy',
    desc3: 'Spirit animal: gibbon 🐵'
  },
  {
    id: 2,
    title: 'Dennis Fija',
    query: 'dennis_fija',
    instagram: 'sticker_lv',
    image: '/assets/images/artists/dennisfijaprofile.jpeg',
    image2: '/assets/images/artists/dennisfijaprofile2.jpeg',
    description: 'Music project: Sticker (vocals, guitar) @sticker_lv\n\nInfluences: Nujabes, hip hop, r&b, The Beatles, Queen, Pixies, Nirvana, Asian Kung-Fu Generation, punk, grunge, jazz music forever, J-rock, random shit in the deep pits of SoundCloud\n\nI was born in Illinois but moved around from Vegas, Arizona, and California due to momma and poppa split.\nVegas is my hometown though forever!\n\nI got started in music just by being born lmao and uhhh idk my mom had a ton of CDs inside of this chest and I would listen to all of them while she was at work.\nMy ex-uncle always played guitar with his friends and I learned "Here I go" by Syd Barrett and fell in love pretty much lol.\n\nOther hobbies: VIDEO GAMESSSS, eating\n\nLegend of Zelda is my soul game..\n\nOh did I say eating? Lmao I love eating and trying new food... my favorite food of all time is Ramen!\n\nMain hobbies: writing, video making, drawing, painting, reading\n\nUltimate hobby: cuddling with my cat and playing a game after eating something and having a productive day.\n\nSoul Animal: Tiger\n\nMy duty is to help others through art and to slay selfish butthole demon jerks and to save animals.\n\nMy dream is to fly through space to other galaxies.\n\nI am an alien 👽'
  },
  {
    id: 3,
    title: 'Limn',
    query: 'limn',
    image: '/assets/images/artists/limnprofile.jpeg',
    instagram: 'regis.philbin.still.alive',
    soundcloud: 'shroudtime',
    description: 'LIMN [LIMN [LIMN [LIMN]]], aka LIMN, is an internet-based human organism of arcane gender currently stationed in Las Vegas. A lifelong lover of all volitional human activities, it is particularly passionate about producing meaning from noises, images, words and phrases. When not submitting to creative gestures, LIMN likes to spend its time in communication with other animals, especially humans, pets and worms. You can track its individual activities on Instagram or on Soundcloud.'
  },
  {
    id: 4,
    title: 'Sonia Barcelona',
    query: 'sonia_barcelona',
    facebook: 'artofsonia',
    linktree: 'artofsonia',
    soundcloud: 'soniabarcelona',
    official: 'artofsonia.com',
    twitter: 'artofsonia',
    spotify: 'https://open.spotify.com/artist/5BnpEcWQGaEu2leiUSsvjb',
    tiktok: '@artofsonia_',
    instagram: 'artofsonia',
    image: '/assets/images/artists/soniaprofile3.jpeg',
    image2: '/assets/images/artists/soniaprofile2.jpeg',
    image3: '/assets/images/artists/soniaprofile.jpeg',
    description: 'Sonia Barcelona is a Vegas musician and photographer. Filipino 🇵🇭 & Indian 🇮🇳 girl who loves rock n’ roll and smooth voices. Lover of great food and friendly people. Check out her latest album Bitter Melon on streaming services, book a shoot with her at the next Photos4thePeople session and catch her live ❤️\n\nchosen trash animal: squirrel 🐿'
  },
  {
    id: 5,
    title: 'Aubrey Digital',
    query: 'aubrey_digital',
    official: 'aubrey.digital',
    threads: 'aubreydigitallv',
    facebook: 'aubreydigital',
    twitter: 'aubreydigital',
    tiktok: '@aubreydigitallv',
    instagram: 'aubreydigitallv',
    image: '/assets/images/artists/aubreyprofile.jpeg',
    image2: '/assets/images/artists/aubreyprofile2.JPG',
    image3: '/assets/images/artists/aubreyprofile3.JPG',
    image4: '/assets/images/artists/aubreyprofile4.jpeg',
    description: 'Aubrey always knew she was different but learned quickly that existing in society when you aren\'t like everybody else can be trying, at times, to say the least. Thankfully there was never a shortage of things of do. Whether it was listening to and/or playing music, skateboarding, or designing graphics and coding web sites on her computer. Things hit a rough patch in her senior year of high school. After a near-death car accident her perspective shifted quite a bit.\n\nBy age 22 she was off to the city for good! She spent time living in Nebraska, Colorado, and Indiana, then finally made the 30 hour trek to move with all her belongings in her car to Las Vegas! Nearly five years later she still loves her surroundings and friends but as each day goes by she realizes more everyday that: this is it! It\'s now or never. Life is short. Believe in yourself before its too late.'
  },
  {
    id: 6,
    title: 'Matthew Boiles/ Chamberpunk',
    query: 'chamberpunk',
    instagram: 'chamberpunk',
    threads: '@chamberpunk',
    image: '/assets/images/artists/chamberpunkprofile.jpeg',
    image2: '/assets/images/artists/chamberpunkprofile2.jpeg',
    image3: '/assets/images/artists/chamberpunkprofile3.jpeg',
    description: 'Chosen Trash Animal: Melancholy Mutt 🐶\n\n@chamberpunk is a multi-instrumentalist and composer that specializes in Polyphonic tapping patterns and Tertian harmo'
  },
  {
    id: 7,
    title: 'Ronnie Wylder',
    query: 'ronnie_wylder',
    official: 'ronniewylder.com',
    facebook: 'ronniewylder01',
    tiktok: '@ronniewylder01',
    instagram: 'ronniewylder01',
    soundcloud: 'ronniewylder01',
    spotify: 'https://open.spotify.com/artist/3bjge59wU2RxdkNeL9kWWY?fbclid=IwAR1r1Ds8KPQY1QeKYjBI_jfKVqjWlWPRkQ2yVW0xEl9ce3KOPqygqg9q8kg_aem_Ac-P0RZJmzclnpPV9E2wZrp6Wee-aZZtt2MOECIzlJ5U9sCYFlsdRX-2_8f-Wu5KnYE',
    threads: '@ronniewylder01',
    image: '/assets/images/artists/wylderprofile.jpeg',
    image2: '/assets/images/artists/wylderprofile2.jpeg',
    image3: '/assets/images/artists/wylderprofile3.jpeg',
    description: 'Ronnie Wylder is a singer, songwriter, and performer, local in Las Vegas. Ronnie\’s style of music can be defined through her self-made genre “spunk pop,” combining funky beats, with a punk/rock attitude.\n\nRonnie started singing after her first out of four spinal surgeries. She has developed her musical style through her experiences, taking inspiration from everywhere, from weird sounds she has heard or the things people have said to her.\n\n“My sound has taken me a couple of years to develop and understand, it is constantly evolving. When coming up with my beat ideas, I focus on making something I would want to hear and sing along with.”\n\nOutside of her unique sounds, Ronnie takes pride in the craftiness and controversy of her lyrics. Taking shots at today\’s society and its standards, Ronnie is not afraid to make call outs, speaking blunt and honesty at all times.\n\n“People want to feel something more than what they are being given. At some point, mediocrity isn\’t going to be enough. We need something authentic and raw. I am sick of all the celebs, media, conspiracies, and DRAMA.”\n\n“I want to give people something drama free, that\’s grooving and fun.”\n\n“I am here to make people smile, dance, laugh, and hopefully, even if it\’s only for a three-minute song, to make their day a little brighter.”\n\nBest,\n\nRonnie Wylder'
  },
];

export const metadata: object = {
  'title': 'pigeon hat collective | artists',
  'description': 'pigeon hat collective musical artists bands singers players businesses'
}

export default function ArtistPage({ params }: { params: { artistId: string } }) {
const artist = artists.find((artist) => artist.query === String(params.artistId));
if (!artist) {
  // Handle case when artist item is not found
  return <div>Artist not found</div>;
}

const { title, image, image2, image3, image4, description, desc2, desc3, email, official, linktree, spotify, threads, facebook, tiktok, soundcloud, instagram, twitter } = artist
console.log(description.length)
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800 bg-opacity-50">
      <div className="max-w-3xl my-10 bg-white rounded-lg overflow-hidden overflow-y-auto shadow-lg">
        <div className="flex pt-10">
          <div className="w-1/2">
            <div className="relative pl-2 flex flex-col justify-center items-center mb-4">
              <Image src={image} placeholder="blur"
              blurDataURL={image} alt={title} width={300} height={300} />
              {image2 && <Image src={image2} placeholder="blur"
              blurDataURL={image2} alt={title} width={300} height={300} />}
              {image3 && description.length > 400 && <Image src={image3} placeholder="blur"
              blurDataURL={image3} alt={title} width={300} height={300} />}
              {image4 && description.length > 600 &&<Image src={image4} placeholder="blur"
              blurDataURL={image4} alt={title} width={300} height={300} />}
            </div>
          </div>
          <div className="w-1/2 p-2 lg:4">
          <div className="flex items-center pb-4">
          {official ? <Link href={`https://${official}`} target="_blank" className="hover:text-gray-300 ml-3 lg:ml-4">
          <GiWorld className="md:w-6 md:h-6" />
        </Link> : null}
          {spotify ? <Link href={`${spotify}`} target="_blank" className="hover:text-gray-300 ml-4">
          <FaSpotify className="md:w-5 md:h-5" />
        </Link> : null}
      {threads ? <Link href={`https://threads.net/${threads}`} target="_blank" className="hover:text-gray-300 ml-3 lg:ml-4">
          <span className="inline-flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 pb-1 text-xl rounded bg-black hover:bg-white text-white hover:text-black">
  @
</span>
        </Link> : null}
     {tiktok ? <Link href={`https://tiktok.com/${tiktok}`} target="_blank" className="hover:text-gray-300 ml-3 lg:ml-4">
          <FaTiktok className="md:w-5 md:h-5" />
        </Link> : null}
        {linktree ? <Link href={`https://linktr.ee/${linktree}`} target="_blank" className="hover:text-gray-300 ml-3 lg:ml-4">
         <TbBrandLinktree className="md:w-6 md:h-6" />
        </Link> : null}
        {instagram ? <Link href={`https://www.instagram.com/${instagram}`} target="_blank" className="hover:text-gray-300 ml-3 lg:ml-4">
          <FaInstagram className="md:w-6 md:h-6" />
        </Link> : null}
        {twitter ? <Link href={`https://twitter.com/${twitter}`} target="_blank" className="hover:text-gray-300 ml-3 lg:ml-4">
          <FaTwitter className="md:w-6 md:h-6" />
        </Link> : null}
        {soundcloud ? <Link href={`https://soundcloud.com/${soundcloud}`} target="_blank" className="hover:text-gray-300 ml-3 lg:ml-4">
          <FaSoundcloud className="md:w-6 md:h-6" />
        </Link> : null}
        {facebook ? <Link href={`https://www.facebook.com/${facebook}`} target="_blank" className="hover:text-gray-300 ml-3 lg:ml-4">
          <FaFacebook className="md:w-6 md:h-6" />
        </Link> : null}
      </div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-800 place-y-4 py-5 lg:px-10 text-xs lg:text-base leading-loose">
            {description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
            {desc2 ? <p className="text-gray-800 py-5 lg:px-10 text-xs lg:text-base leading-loose">{desc2}</p> : null}
            {desc3 ? <p className="text-gray-800 py-5 lg:px-10 text-xs lg:text-base leading-loose">{desc3}</p> : null}
          </div>
        </div>
      </div>
      <Link className="text-gray-400 hover:text-white mb-10" href="/artists">Back</Link>

    </div>
)
}