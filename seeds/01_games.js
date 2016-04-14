
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('games').del(),

    // Inserts seed entries
    knex('games').insert({
      id: 1,
      title: 'Pokemon Go!',
      image: 'https://i.ytimg.com/vi/yesnzJ4XCqA/hqdefault.jpg',
      price: 0.00,
      rating: 5,
      category: 'Adventure',
      info: 'Pokémon GO is an upcoming augmented-reality game developed by Niantic for iOS and Android devices. The game will be released sometime in 2016, alongside the Pokémon Go Plus, a small wearable device developed by Nintendo, which uses a Bluetooth connection to notify users when a Pokémon is nearby with a LED and a light rumble. The game will allow players to capture, battle, train and trade virtual Pokémon who appear throughout the real world. The game will be free-to-play, although it will support in-app purchases'
    }),
    knex('games').insert({
      id: 2,
      title: 'Final Fantasy X',
      image: 'http://vignette2.wikia.nocookie.net/finalfantasy/images/d/d7/Ff10_logo.jpeg/revision/latest/scale-to-width-down/270?cb=20100721021039',
      price: 59.99,
      rating: 5,
      category: 'Adventure',
      info: 'Final Fantasy X (ファイナルファンタジーX Fainaru Fantajī Ten?) is a role-playing video game developed and published by Square Soft (now Square Enix) as the tenth entry in the Final Fantasy series. Originally released in 2001 for Sonys PlayStation 2, the game was re-released as a high-definition remaster for the PlayStation 3 and PlayStation Vita on March 18, 2014, under the name Final Fantasy X/X-2 HD Remaster. It was also re-released for the PlayStation 4 in May 2015. The game marks the Final Fantasy series transition from entirely pre-rendered backdrops to fully three-dimensional areas, and is also the first in the series to feature voice acting. Final Fantasy X replaces the Active Time Battle (ATB) system with the "Conditional Turn-Based Battle" (CTB) system, and uses a new leveling system called the "Sphere Grid".'
    }),
    knex('games').insert({
      id: 3,
      title: 'Final Fantasy VII',
      image: 'http://cdn.akamai.steamstatic.com/steam/apps/39140/header.jpg?t=1447357577',
      price: 59.99,
      rating: 5,
      category: 'Adventure',
      info: 'Final Fantasy VII (Japanese: ファイナルファンタジーVII Hepburn: Fainaru Fantajī Sebun?) is a role-playing video game developed and published by Square (now Square Enix) for the PlayStation platform. Released in 1997, it is the seventh installment in the Final Fantasy series and the first in the series to use 3D computer graphics, featuring fully rendered characters on pre-rendered backgrounds. It was also the first game in the main series to be released in Europe. The story follows Cloud Strife, a mercenary who joins the eco-terrorist rebel organization AVALANCHE to stop the world-controlling megacorporation Shinra from draining the life of the planet to use as an energy source. Cloud and his allies become involved in a larger world-threatening conflict and face off against Sephiroth, the main antagonist.'
    }),
    knex('games').insert({
      id: 4,
      title: 'Mario Party 3',
      image: 'https://i.ytimg.com/vi/LDRVRt_kzsI/hqdefault.jpg',
      price: 10.00,
      rating: 4,
      category: 'Action',
      info: 'Mario Party 3 is the third installment of the Mario Party series, the last one for the Nintendo 64. The game is centered around the Millennium Star, who replaces Toad as the host. The most notable change is that players can now hold up to three items instead of just one. The game also offers a special twist to the game unique in the Mario Party series: duel boards, on which two players fight each other using partners. The game won the Console Family Award from the Academy of the Interactive Arts and Sciences of 2002. It is the first Mario Party game to introduce Princess Daisy and Waluigi as playable characters.'
    }),
    knex('games').insert({
      id: 5,
      title: 'The Legend of Zelda: Ocarina of Time',
      image: 'http://images5.fanpop.com/image/photos/24900000/25th-anniversary-wallpapers-link-24925008-1024-768.jpg',
      price: 25.95,
      rating: 5,
      category: 'Adventure',
      info: 'The Legend of Zelda: Ocarina of Time (Japanese: ゼルダの伝説 時のオカリナ Hepburn: Zeruda no Densetsu: Toki no Okarina?) is a 1998 action-adventure video game developed and published by Nintendo for the Nintendo 64. It was released in Japan and North America in November 1998, and in Europe and Australia in December 1998. Originally developed for the 64DD peripheral,[11] the game was instead released on a 256-megabit (32-megabyte) cartridge, the largest-capacity cartridge Nintendo produced at that time. Ocarina of Time is the fifth game in the The Legend of Zelda series, and the first with 3D graphics. It was followed by a direct sequel, The Legend of Zelda: Majoras Mask, in 2000.'
    }),
    knex('games').insert({
      id: 6,
      title: 'Super Smash Brothers Brawl',
      image: 'http://img0.gm.gtsstatic.com/wallpapers/90f655c4d005b84e6a95a822e1a284a3_large.jpeg',
      price: 29.99,
      rating: 4,
      category: 'Action',
      info: 'Super Smash Bros. Brawl, known in Japan as Dairantō Smash Brothers X (大乱闘だいらんとうスマッシュブラザーズXエックス?, lit. "Great Melee Smash Brothers X"), is the third installment in the Super Smash Bros. series of crossover fighting games, developed by an ad hoc development team consisting of Sora, Game Arts, and staff from other developers, and published by Nintendo for the Wii video game console. Brawl was announced at a pre-E3 2005 press conference by Nintendo president and Chief Executive Officer Satoru Iwata. Masahiro Sakurai, director of the previous two games in the series, assumed the role of director for the third installment at the request of Iwata. Game development began in October 2005 with a creative team that included members from several Nintendo and third-party development teams. After delays due to development problems, the game was finally released on January 31, 2008, in Japan; March 9, 2008, in North America; June 26, 2008, in Australia; and June 27, 2008, in Europe. Twenty-seven months after its original Japanese release, the game was released in Korea, on April 29, 2010.'
    })
  );
};
