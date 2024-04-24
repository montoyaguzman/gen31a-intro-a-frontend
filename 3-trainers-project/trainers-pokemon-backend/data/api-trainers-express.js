const trainers = [
  {
    id: 1,
    name: 'Ash Ketchum',
    originalName: 'Satoshi',
    imgs: {
      card: 'https://img1.picmix.com/output/stamp/normal/3/7/3/5/1205373_c45d3.png',
      display: 'https://w7.pngwing.com/pngs/225/443/png-transparent-ash-ketchum-pokemon-x-and-y-pikachu-pokemon-go-pokemon-universe-pikachu-fictional-character-cartoon-arm.png'
    },
    rank: 50,
    region: {
      name: 'Kanto',
      description: 'lalalala'
    },
    winnedTournaments: [
      'liga naranja',
      'alola'
    ],
    team: [
      {
        pokemon: 'Pikachu',
        level: 50
      },
      {
        pokemon: 'Greninja',
        level: 40
      },
      {
        pokemon: 'Charizard',
        level: 42
      },
      {
        pokemon: 'Rowlett',
        level: 30
      },
      {
        pokemon: 'Bulbasaur',
        level: 39
      }
    ],
    history: 'Mide 1.65 m y pesa 54 kg. Es un entrenador Pokémon originario de Pueblo Paleta, de la región Kanto. Tiene un carácter perseverante, entusiasta y distraído, y su máxima ambición es llegar a ser el mejor Maestro Pokémon. Es uno de los personajes de anime más populares que existen y es con Pikachu la cara más reconocible de Pokémon.'
  },
  {
    id: 2,
    name: 'Misty',
    originalName: 'Kasumi',
    imgs: {
      card: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cc3b548b-5a7d-4cc1-bb9a-8055970d2965/dbudsw9-2b6a281b-f83f-4a59-b8c1-6a228df27bdc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjM2I1NDhiLTVhN2QtNGNjMS1iYjlhLTgwNTU5NzBkMjk2NVwvZGJ1ZHN3OS0yYjZhMjgxYi1mODNmLTRhNTktYjhjMS02YTIyOGRmMjdiZGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fskMkfRDe7icqSyPpFqhTPcIdJO8WlwG_rNpg0a9vGI',
      display: 'https://i.pinimg.com/originals/b9/70/49/b97049038091ab8daed73e57d83e7224.jpg'
    },
    rank: 35,
    region: {
      name: 'Kanto',
      description: 'lalalala'
    },
    winnedTournaments: [],
    team: [
      {
        pokemon: 'Staryu',
        level: 42
      },
      {
        pokemon: 'Gyarados',
        level: 50
      },
      {
        pokemon: 'Psyduck',
        level: 35
      },
      {
        pokemon: 'Politoed',
        level: 44
      },
    ],
    history: 'Es la líder de gimnasio de Ciudad Celeste en la región de Kanto. Es especialista en pokémon de tipo agua, además de ser sus favoritos. Es la menor de 4 hermanas. Una joven tierna, bonita y dulce (cuando quiere), pero es gruñona, se irrita con facilidad y consta de muy poca paciencia, asimismo es la voz de la razón del grupo. También quiere demostrar que cuenta con los requisitos básicos para convertirse en la mejor entrenadora de Pokémon de Agua y así superar a sus hermanas en su ciudad natal.'
  },
  {
    id: 3,
    name: 'Alain',
    imgs: {
      card: 'https://i.pinimg.com/originals/eb/fd/e0/ebfde006d9fe25835875356bf8922e03.jpg',
      display: 'https://i.pinimg.com/originals/c8/14/03/c81403e28f5a1245c5459ea04d864aae.png'
    },
    rank: 40,
    region: {
      name: 'Kalos',
      description: 'lalalala'
    },
    winnedTournaments: [
      'Kalos',
    ],
    team: [
      {
        pokemon: 'Charizard',
        level: 42
      },
      {
        pokemon: 'Tyranitar',
        level: 42
      },
      {
        pokemon: 'Bisharp',
        level: 41
      },
      {
        pokemon: 'Chesnaught',
        level: 40
      },
    ],
    history: 'Es el protagonista principal de Mega Evolution Special. Desde que terminaron los especiales, apareció en el anime principal, a partir del EP897 hasta el EP943. En el pasado, ayudó al profesor Sycamore/Ciprés en su investigación sobre la megaevolución.'
  },
  {
    id: 4,
    name: 'Cynthia',
    imgs: {
      card: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/07/Cosplay-de-Pokemon-presenta-a-Cynthia-la-campeona-de-la-region-Sinnoh.jpg',
      display: 'https://64.media.tumblr.com/683bb55ba9e17d836f460f6983996c95/f18c86c15d0cbfe2-67/s1280x1920/2671235828fd101e8c31b602d2ce408a3d7ac85e.jpg'
    },
    rank: 8,
    region: {
      name: 'Sinnoh',
      description: 'lalalala'
    },
    winnedTournaments: [
      'Sinnoh',
    ],
    team: [
      {
        pokemon: 'Machamp',
        level: 42
      },
      {
        pokemon: 'Garchomp',
        level: 49
      },
      {
        pokemon: 'Milotic',
        level: 41
      }
    ],
    history: ''
  },
  {
    id: 5,
    name: 'Iris',
    imgs: {
      card: 'https://pokuniverse.com/wp-content/uploads/2022/07/Iris-Pokemon-Guide.png',
      display: 'https://static.wikia.nocookie.net/victor-bjorgman/images/5/57/Iris_%28Viajes_Pok%C3%A9mon%29.png/revision/latest?cb=20220604194518&path-prefix=es'
    },
    rank: 7,
    region: {
      name: 'Unova',
      description: 'lalalala'
    },
    winnedTournaments: [
      'Unova'
    ],
    team: [
      {
        pokemon: 'Dragonite',
        level: 44
      },
      {
        pokemon: 'Garchomp',
        level: 46
      },
      {
        pokemon: 'Excadrill',
        level: 46
      },
      {
        pokemon: 'Emolga',
        level: 40
      },
      {
        pokemon: 'Haxorus',
        level: 47
      },
      {
        name: 'Deino',
        level: 30
      }
    ],
    history: 'Fue la protagonista femenina de la serie Negro y Blanco del anime, acompañando a Ash junto a Cilan/Millo en su viaje por Unova/Teselia y las Islas Decolora/Decoloras. Ha llegado a ser una de las participantes de la Serie Mundial de Coronación. Además de ser la campeona de la región de Unova/Teselia. Su mayor aspiración es convertirse en una maestra dragón. Posee la habilidad de percibir las emociones de los Pokémon tipo dragón. Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia. Se prohíbe su uso a PlagioDex (el wiki de FANDOOM), por copiar reiteradamente sin dar atribución.'
  },
  {
    id: 6,
    name: 'James',
    imgs: {
      card: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/watch-pokemon-tv/seasons/season24/season24_ep22_ss04.jpg',
      display: 'https://static.wikia.nocookie.net/doblaje/images/1/19/James_JN.png/revision/latest?cb=20221225160609&path-prefix=es'
    },
    rank: 7,
    region: {
      name: 'Kanto',
      description: 'lalalala'
    },
    winnedTournaments: [],
    team: [
      {
        pokemon: 'Koffing',
        level: 20
      },
      {
        pokemon: 'Growlithe',
        level: 25
      }
    ],
    history: 'James es un joven de 25 años, alto, de pelo corto y de color azul, le sobresale un mechón de pelo en la frente, tiene los ojos verdes, y usa el uniforme propio del Equipo/Team Rocket, de color blanco. Por ser parte del Equipo/Team Rocket tiene un traje de esta asociación (curiosamente el suyo y el de Jessie son diferentes al de muchos otros miembros, debiendo tener el negro como color principal en el traje en vez del blanco, aunque esto también puede denotar que tienen menor rango que los miembros comunes). Tiene una camisa con el logo del equipo: "R", una camiseta por debajo de color negro, un pantalón largo, botas y guantes negros y suele sujetar una rosa cuando recita el lema del Equipo/Team Rocket. Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia. Se prohíbe su uso a PlagioDex (el wiki de FANDOOM), por copiar reiteradamente sin dar atribución'
  },
  {
    id: 7,
    name: 'Harrison',
    imgs: {
      card: '',
      display: ''
    },
    rank: 17,
    region: {
      name: 'Johto',
      description: 'lalalala'
    },
    winnedTournaments: [
      'Johto',
    ],
    team: [
      {
        pokemon: 'Miltank',
        level: 32
      },
      {
        pokemon: 'Blaziken',
        level: 35
      },
      {
        pokemon: 'Hypno',
        level: 30
      },
      {
        pokemon: 'Steelix',
        level: 30
      },
    ],
    history: 'Ees un entrenador Pokémon que proviene de Pueblo Raíz Chica/Villa Raíz, en la región Hoenn. Aparece durante la quinta temporada y se hace amigo y rival de Ash.'
  },
  {
    id: 8,
    name: 'Lionel',
    imgs: {
      card: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe1eb1f2-bf92-4a88-80b1-f4cbe7e64536/de2x4r2-50c84472-dc33-48f0-8b8e-90b6c8d6ec68.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlMWViMWYyLWJmOTItNGE4OC04MGIxLWY0Y2JlN2U2NDUzNlwvZGUyeDRyMi01MGM4NDQ3Mi1kYzMzLTQ4ZjAtOGI4ZS05MGI2YzhkNmVjNjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UlpxmlewiDIbeh7Nkwgr-6ap9GNfKQRvD7DLiaYbQHw',
      display: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d5/latest/20220527172932/Lionel_%28Viajes_Pok%C3%A9mon%29_2.png/250px-Lionel_%28Viajes_Pok%C3%A9mon%29_2.png'
    },
    rank: 49,
    region: {
      name: 'Galar',
      description: 'lalalala'
    },
    winnedTournaments: [
      'Galar',
    ],
    team: [
      {
        pokemon: 'Dragapult',
        level: 47
      },
      {
        pokemon: 'Rillaboom',
        level: 48
      },
      {
        pokemon: 'Mr. Rime',
        level: 47
      },
      {
        pokemon: 'Charizard',
        level: 49
      },
    ],
    history: 'Lionel es el actual Campeón de Galar, y cabe decir que nunca ha sido derrotado en un combate Pokémon oficial. Esta habilidad sin par y su personalidad lo han convertido en un Entrenador muy popular, que hace honor a su título de mejor Entrenador de toda la región.'
  },
  {
    id: 9,
    name: 'Dawn',
    imgs: {
      card: 'https://www.powergamingnetwork.com/wp-content/uploads/2021/07/dawn2.jpg',
      display: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f73d6b30-6514-4a15-95c9-ce229f3c9b41/width=450/00392-3232671932.jpeg'
    },
    rank: 30,
    region: {
      name: 'Sinnoh',
      description: 'lalalala'
    },
    winnedTournaments: [],
    team: [
      {
        pokemon: 'Piplup',
        level: 32
      },
      {
        pokemon: 'Buneary',
        level: 30
      },
      {
        pokemon: 'Pachirisu',
        level: 28
      },
      {
        pokemon: 'Mamoswine',
        level: 36
      },
      {
        pokemon: 'Togekiss',
        level: 39
      },
    ],
    history: 'Ees un entrenador Pokémon que proviene de Pueblo Raíz Chica/Villa Raíz, en la región Hoenn. Aparece durante la quinta temporada y se hace amigo y rival de Ash.'
  },
  {
    id: 10,
    name: 'Steven',
    imgs: {
      card: 'https://i.imgur.com/3j2nlfa.png',
      display: 'https://images.wikidexcdn.net/mwuploads/wikidex/9/9b/latest/20220527143929/Steven_%28Viajes_Pok%C3%A9mon%29.png'
    },
    rank: 45,
    region: {
      name: 'Hoenn',
      description: 'lalalala'
    },
    winnedTournaments: [
      'Hoenn',
    ],
    team: [
      {
        pokemon: 'Metagross',
        level: 44
      },
      {
        pokemon: 'Scarmory',
        level: 35
      },
      {
        pokemon: 'Aggron',
        level: 30
      },
      {
        pokemon: 'Foxny',
        level: 10
      },
      {
        pokemon: 'Armaldo',
        level: 34
      },
      {
        pokemon: 'Claydol',
        level: 30
      },
    ],
    history: 'Steven, tiene una camiseta color blanco, y tiene otra color violeta por encima, sobre eso tiene una chaqueta color gris oscuro con mangas desde los hombros color violeta, franjas en zig zag color violeta y en sus mangas una decoración color plateado, pantalones grises, una corbata extraña color rojo y zapatos color violeta con una ranja plateada y en sus manos, tiene 4 anillos, color plateado.'
  },
  {
    id: 1,
    name: 'Ash Mostaza',
    originalName: '',
    imgs: {
      card: 'https://img1.picmix.com/output/stamp/normal/3/7/3/5/1205373_c45d3.png',
      display: 'https://w7.pngwing.com/pngs/225/443/png-transparent-ash-ketchum-pokemon-x-and-y-pikachu-pokemon-go-pokemon-universe-pikachu-fictional-character-cartoon-arm.png'
    },
    rank: 50,
    region: {
      name: 'Kanto',
      description: 'lalalala'
    },
    winnedTournaments: [],
    team: [
      {
        pokemon: 'Pikachu',
        level: 50
      }
    ],
    history: 'lalala',
    // address: {
    //   street: '',
    //   number: '',
    //   contact: {
    //     numbers: ['417181920', '5591695904']
    //   }
    // }
  },
];

module.exports = { trainers };