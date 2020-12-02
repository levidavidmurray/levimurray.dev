import {ProjectCard} from '@/lib/ProjectCard';

export const dummyProjects: ProjectCard[] = [
  {
    id: 'typetris-1',
    image: require('@/assets/images/typetris.png'),
    title: 'Typetris',
    subtitle: 'The tetris typing game!',
    description: 'Typetris was the result of me looking into how to use CSS grid. It started as more of a throwaway lesson for myself—rather than an intentional project. I quickly made the tetris connection as soon as I saw how easy it was to manipulate DOM element position using CSS grid. The typing aspect was my attempt to put a unique and personalized spin on the classic game as I’ve always enjoyed sites like typeracer.com for improving one’s typing ability. In the same vein, the style went through a few iterations—ultimately settling on the retro-monitor theme inspired by Fallout’s Pip-Boy.\n' +
        '\n' +
        'I felt something was missing after I had “completed” a working version of the game. I decided that a leaderboard system would be interesting to implement, and decided on Node.JS as my weapon of choice. Understanding the pitfalls, I ultimately decided to follow the path of least resistance—opting for an unauthenticated scoring endpoint in which the client is responsible for deciding the value. I definitely wasn’t motivated enough to attempt any sort of backend game logic/state management. I did ponder the “security through obscurity” possibilities—perhaps ensuring the score matched up with the game time, piece types seen, etc. or possibly updating a specific game entity with intermittent state requests, in which the backend would verify that the score made sense with the past requests for that game. Obviously not secure by any means, but it would at least deter a small percentage of would-be “cheaters”. My time was taken up elsewhere and Typetris was deemed good enough.',
    summary: 'A typing game I made while learning about CSS grid. DOM manipulation in full force.',
    links: {
      source: 'https://www.github.com/levidavidmurray/typetris',
      project: 'https://www.typetris.com',
    },
    images: [2, 3, 4, 5],
  },
  {
    id: 'airands-1',
    image: require('@/assets/images/airands.png'),
    title: 'Airands',
    subtitle: 'Local delivery app for iOS & android',
    description: 'Airands was going to be an app that one could use to have anything (commercial or private) delivered locally. There are numerous delivery apps that exist for food, but what about general items? I can get a bowl of Pad Thai delivered for a cost, but what about a toilet plunger from Wal-Mart or a digital multimeter from Home Depot? Unless you own a car, or are okay with spending the time and money on public transit or taxis, your only real option is Amazon. That may be fine for most people, but if you’re anything like me—the majority of your online shopping is for things you can’t find locally or couldn’t find at a reasonable price. Personally, I’ll pay quite the premium and will sometimes settle for less than ideal choices just for the gratification of continuing with whatever rabbit hole I’m down and not being held back by someone else’s schedule. I also have ADD though, so your mileage may vary.\n' +
        '\n' +
        'I started working on Airands in the Summer of 2020 due to COVID-19. With everyone stuck at home, I thought this would be a service that would come in handy now more than ever. I had a fairly good technical spec and roadmap laid out. The past year and half I had been working on and had released two healthcare apps to the App Store and Google Play for my employer, so I was quite confident on the technical side of things. What I didn’t have experience in was the business side of things: incorporating a business, business accounts, naming directors and executives, issuing shares, and much more. This was the fuel that kept my interest in Airands going. Once the priority had to shift to the technical grunt work to get the app to a releasable state, I quickly lost interest. Focusing on grunt work when you’re being paid is easy enough, but when it’s only you keeping yourself accountable, things can quickly fall apart. It just wasn’t sustainable for me to spend hours of my evening, after 8 hours of work, doing the exact same sort of development work. It was a quick path to burn-out.\n' +
        '\n' +
        'Regardless, it was a very exciting and ambitious project—I hope I can come back around to it someday.\n',
    summary: 'A delivery app I started working on in Summer 2020 due to COVID-19. Focusing on local commercial & private deliveries.',
    links: {
      source: '',
      project: '',
    },
    images: [2, 3, 4, 5],
  },
  {
    id: 'onlyeve-1',
    image: require('@/assets/images/onlyeve.jpg'),
    title: 'OnlyEve',
    subtitle: 'Host your lewd newds here!',
    description: 'OnlyEve is a full-stack project that I worked on to better understand some of the intricacies surrounding file uploads, persistence, and serving.',
    summary: 'An image hosting project for better understanding intricacies surrounding file uploads, persistence, and serving.',
    links: {
      source: '',
      project: '',
    },
    images: [2, 3, 4, 5],
  },
  {
    id: 'schedule-1',
    image: require('@/assets/images/schedule.png'),
    title: 'Schedule Demo',
    subtitle: 'Schedule UI design implementation',
    description: 'This was a small UI implementation challenge that I had given myself to improve upon my existing front-end skills, and get a better grasp of the Vue framework. This schedule explorer is based off of a design I had found on dribbble.',
    summary: 'Vue UI implementation of a schedule explorer design found on dribbble; meant to practice my front-end abilities.',
    links: {
      source: '',
      project: '',
    },
    images: [2, 3, 4, 5],
  },
  {
    id: 'phn-1',
    image: require('@/assets/images/phn.png'),
    title: 'PHN Generator',
    subtitle: 'Generate valid BC & Ontario PHNs',
    description: 'During the development of MyHealthAccess and CloudMD it became increasingly annoying to find valid Canadian health numbers to use for validation purposes. Rather than implement some kind of development mode that bypasses HIN validation, I created this helper tool that follows provincial specifications to generate valid BC and Ontario Personal Health Numbers.',
    summary: 'Helper tool that generates personal health numbers following the BC & Ontario specification.',
    links: {
      source: '',
      project: '',
    },
    images: [2, 3, 4, 5],
  },
]
