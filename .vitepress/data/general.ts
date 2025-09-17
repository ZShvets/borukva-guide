export const channelsList: IChannelItem[] = [
  {
    title: "Цебулевий Майнкрафт 1.21+ #УкрТг ✙",
    description:
      "Основний канал про сервер, головні технічні новини та оновлення.",
    image: "/images/get-started/channels/tsebuleviy_minecraft.avif",
    link: "https://t.me/borukva_minecraft",
    type: "channel",
  },
  {
    title: "Новин'яр Цебулевий",
    description:
        "Тут постяться РП новини держав сервера та анонси івентів. Один з найважливіших каналів Боруквию",
    image: "/images/get-started/channels/novyniar.avif",
    link: "https://t.me/borukva_minecraft_news",
    type: "channel",
  },
  {
    title: "Цебулева сральня [Майнкрафт меми]",
    description: "Приколи, шіпост, майкнрафт та серверні меми.",
    image: "/images/get-started/channels/spalna.avif",
    link: "https://t.me/borykva_minecraft",
    type: "channel",
  },
  {
    title: "Дрочільня Цебулі",
    description: "Приколи, шіпост, майкнрафт та серверні меми.",
    image: "/images/get-started/channels/drochilnya.avif",
    link: "https://t.me/orest_Jud",
    type: "channel",
  },
  {
    title: "Чат шостого сезону",
    description:
      "Основний чат борукви",
    image: "/images/get-started/channels/chat_5_season.avif",
    link: "https://t.me/+JDFV2AhGvbA4NGMy",
    type: "chat",
  },
  {
    title: "Цебулева Імперія (Діскорд)",
    description:
      "Діскорд сервер є місцем для спілкування в окремих голосових чатах, та для відкриття тікетів для адміністрації.",
    image: "/images/get-started/channels/tsebuleva_imperiya.webp",
    link: "https://discord.gg/5cBzDDHqDj",
    type: "chat",
  },
  {
    title: "Вікі Цебулеве",
    description:
      "На вікі є інформація про більшість країн, історій, географію та багато чого іншого. Вікі є проектом суспільним, тож не соромтесь додавати та редагувати інформацію.",
    image: "/images/get-started/channels/wiki_logo.webp",
    link: "https://tsebuleve.wiki.gg/uk/wiki/Вікі_Цебулеве",
    type: "chat",
  },
];




export const sectionList: ISectionGroup[] = [
  {
    title: 'Додано',
    items: [
      //{ name: 'Нові рейки', image: '/images/mechanics/general/turnout_rail.png', link: 'rails' },
      { name: 'Артефакти', image: '/images/mechanics/general/bonaqua_axe.png', link: 'artefacts' },
      //{ name: 'Радіо', image: '/images/mechanics/general/radio.png', link: 'radio', customClass: 'guide-img-fill' },
      { name: 'Полотно для малювання', image: '/images/mechanics/general/canvas.png', link: 'polydecorations/canvas' },
      { name: 'Декілька видів дерев', image: '/images/mechanics/general/lemon_sapling.png', link: 'new-plants' },
      { name: 'Меблі', image: '/images/mechanics/general/bench.png', link: 'polydecorations/furniture' },
      { name: 'Куховарство', image: '/images/mechanics/general/pickle_jar.png', link: 'food' },
    ]
  },
  {
    title: 'Змінено',
    items: [
      { name: 'Генерацію світу', image: '/images/mechanics/general/screenshot.png', link: 'world-gen', customClass: 'guide-img-cover'},
      { name: 'Фермерство', image: '/images/mechanics/general/harvest_sickle.png', link: 'farming' },
      { name: 'Вагонетки', image: '/images/mechanics/general/minecart.webp', link: 'rails' },
      //{ name: 'Торгівлю з жителями', image: '/images/mechanics/general/villager.webp', link: 'villagers' },
    ]
  }
]




/*
-------------------------------------------------------------

РИБОЛОВЛЯ

-------------------------------------------------------------
*/ 

export const rodList: IFishGroup[] = [
  {
    title: "Basic Rods",
    items: [
      {
        name: "Wooden Rod",
        image: "/images/guide/placeholder.webp",
        description: "A basic wooden fishing rod.",
        craft: "Crafting Table",
      },
    ],
  },
];

export const crateList: ICratesGroup[] = [
  {
    title: "Ocean Crates",
    items: [
      {
        name: "Basic Crate",
        image: "/images/guide/placeholder.webp",
        biome: "Ocean",
        loot: "Fish, Treasure",
      },
    ],
  },
];

export const fishList: IFishGroup[] = [
  {
    title: 'Рівнини і ліс',
    items: [
      { name: 'Дубориба', description: 'Дає 3 одиниці харчування та горить як вугілля', image: '/images/mechanics/fishing/fishList/oakfish.png', craft: '-'},
      { name: 'Морквяний короп', description: 'Дає 4 одиниці харчування та 0.25 насичення.', image: '/images/mechanics/fishing/fishList/carrot_carp.png', craft: '-'}
    ]
  },
  {
    title: 'Льодяні біоми',
    items: [
      
      { name: 'Кригориба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/icicle_fish.png', craft: '-'},
      { name: 'Снігориба', description: 'Дає 4 одиниці харчування та 0.25 насичення', image: '/images/mechanics/fishing/fishList/snowball_fish.png', craft: '-'}
    ]
  },
  {
    title: 'Болотяні біоми',
    items: [
      { name: 'Слизориба', description: 'Дає 4 одиниці харчування, 0.25 насичення та накладає ефект "Уповільнення"', image: '/images/mechanics/fishing/fishList/slimefish.png', craft: '-'},
      { name: 'Риба-лілія', description: 'Дає 2 одиниці харчування та 0.5 насичення', image: '/images/mechanics/fishing/fishList/lilyfish.png', craft: '-'}
    ]
  },
  {
    title: 'Океан',
    items: [ 
      { name: 'Водоростевий вугор', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/seaweed_eel.png', craft: '-'}
    ]
  },
  {
    title: 'Меса',
    items: [   
      { name: 'Керамічна риба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/terrafish.png', craft: '-'}
    ]
  },
  {
    title: 'Повний місяць',
    items: [      
      { name: 'Риба-місяць', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/lunarfish.png', craft: '-'},
      { name: 'Зоряний лосось', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/starry_salmon.png', craft: '-'},
      { name: 'Космічна морська зірка', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/galaxy_starfish.png', craft: '-'},
      { name: 'Галактична риба-меч', description: 'Дає 4 одиниці харчування та 0.25 насичення', image: '/images/mechanics/fishing/fishList/nebula_swordfish.png', craft: '-'}
    ]
  },
  {
    title: 'Погода',
    items: [
      { name: 'Дощовий окунь', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/rainy_bass.png', craft: '-'},
      { name: 'Грозовий окунь', description: 'Дає 4 одиниці харчування та 0.25 насичення', image: '/images/mechanics/fishing/fishList/thundering_bass.png', craft: '-'},
      { name: 'Хмарний краб', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/cloudy_crab.png', craft: '-'},
      { name: 'Хуртовинний окунь', description: 'Дає 4 одиниці харчування та 0.25 насичення', image: '/images/mechanics/fishing/fishList/blizzard_bass.png', craft: '-'}
    ]
  },
  {
    title: 'Пекло',
    items: [
      { name: 'Голкориба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/spikerfish.png', craft: '-'},
      { name: 'Копчений лосось', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/candied_smoked_salmon.png', craft: '-'},
      { name: 'Магмова тріска', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/magma_cod.png', craft: '-'},
      { name: 'Кістяна риба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/bonefish.png', craft: '-'},
      { name: 'Базальтовий окунь', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/basalt_bass.png', craft: '-'},
      { name: 'Обсидіанова камбала', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/obsidian_halibut.png', craft: '-'}
    ]
  },
  {
    title: 'Бізальтові дельти',
    items: [
      { name: 'Чорнокам’яна форель', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/blackstone_trout.png', craft: '-'},
      { name: 'Позолочений чорнокам’яний короп', description: 'Дає 4 одиниці харчування та 0.25 насичення', image: '/images/mechanics/fishing/fishList/gilded_blackstone_carp.png', craft: '-'}
    ]
  },
  {
    title: 'Долина піску душ',
    items: [
      
      { name: 'Лосось душ', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/soul_salmon.png', craft: '-'}
    ]
  },
  {
    title: 'Енд',
    items: [
      
      { name: 'Ендерриба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/endfish.png', craft: '-'},
      { name: 'Ендервугор', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/ender_eel.png', craft: '-'},
      { name: 'Матрицева риба', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/matrix_fish.png', craft: '-'},
      { name: 'Омега поплавець', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/omega_floater.png', craft: '-'},
      { name: 'Риба-дракон', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/dragonfish.png', craft: '-'},
      { name: 'Хорусова тріска', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/chorus_cod.png', craft: '-'},
      { name: 'Портальний скелезуб', description: 'Дає 2 одиниці харчування та завдає миттєвої шкоди', image: '/images/mechanics/fishing/fishList/portal_puffer.png', craft: '-'}
    ]
  }
]


/*
-------------------------------------------------------------

РОСЛИНИ

-------------------------------------------------------------
*/ 

export const plantsList: IPlantsGroup[] = [
  {
    title: 'Овочі',
    description: 'Найбільша категорія з доданих, включає в себе:',
    items: [
      {
        name: 'Помідор',
        image: '/images/mechanics/new-plants/tomato.png',
        seedimage: '/images/mechanics/new-plants/tomato_seeds.png',
        place: ['Археологія', 'Аванпост розбійників']
      },
      {
        name: 'Капуста',
        image: '/images/mechanics/new-plants/cabbage.png',
        seedimage: '/images/mechanics/new-plants/cabbage_seeds.png',
        place: ['Палац випробувань']
      },
      {
        name: 'Перець чилі',
        image: '/images/mechanics/new-plants/chilli_pepper.png',
        seedimage: '/images/mechanics/new-plants/chilli_pepper_seeds.png',
        place: ['Палац випробувань', 'Зруйнований портал']
      },
      {
        name: 'Кукурудза',
        image: '/images/mechanics/new-plants/corn.png',
        seedimage: '/images/mechanics/new-plants/corn_seeds.png',
        place: ['Нюхач']
      },
      {
        name: 'Огірок',
        image: '/images/mechanics/new-plants/cucumber.png',
        seedimage: '/images/mechanics/new-plants/cucumber_seeds.png',
        place: ['Археологія', 'Уламки корабля']
      },
      {
        name: 'Салат',
        image: '/images/mechanics/new-plants/lettuce.png',
        seedimage: '/images/mechanics/new-plants/lettuce_seeds.png',
        place: ['Археологія']
      },
      {
        name: 'Цибуля',
        image: '/images/mechanics/new-plants/onion.png',
        seedimage: '/images/mechanics/new-plants/onion_seeds.png',
        place: ['Скрарбниця зі спавнером', 'Нюхач']
      },
      {
        name: 'Рис',
        image: '/images/mechanics/new-plants/rice_panicle.png',
        seedimage: '/images/mechanics/new-plants/rice.png',
        place: ['Нюхач']
      },
      {
        name: 'Пекельна пшениця',
        image: '/images/mechanics/new-plants/nether_wheat.png',
        seedimage: '/images/mechanics/new-plants/nether_wheat_seeds.png',
        place: ['Бастіон']
      }
    ]
  },
  {
    title: 'Ягоди',
    description: 'Нові кущі з ягодами які можна знайти в лісі.',
    items: [
      {
        name: 'Смородина',
        image: '/images/mechanics/new-plants/blackcurrants.png',
        seedimage: '/images/mechanics/new-plants/blackcurrants_bush_stage3.png',
        place: ['Ліс', 'Квітковий ліс', 'Темний ліс']
      },
      {
        name: 'Аґрус',
        image: '/images/mechanics/new-plants/gooseberry.png',
        seedimage: '/images/mechanics/new-plants/gooseberry_bush_stage3.png',
        place: ['Ліс', 'Березовий ліс', 'Одвічний березовий ліс']
      }
    ]
  },
  {
    title: 'Дерева',
    description: 'Декілька нових плодових дерев, а саме:.',
    items: [
      {
        name: 'Авокадо',
        image: '/images/mechanics/new-plants/avocado.png',
        seedimage: '/images/mechanics/new-plants/avocado_sapling.png',
        place: ['Рідкі джунглі']
      },
      {
        name: 'Лимон',
        image: '/images/mechanics/new-plants/lemon.png',
        seedimage: '/images/mechanics/new-plants/lemon_sapling.png',
        place: ['Мандрівний селянин', 'Палац випробувань']
      }
    ]
  }
];

export const plantsListEng: IPlantsGroup[] = [
  {
    title: 'Vegetables',
    description: 'The largest added category, includes:',
    items: [
      {
        name: 'Tomato',
        image: '/images/mechanics/new-plants/tomato.png',
        seedimage: '/images/mechanics/new-plants/tomato_seeds.png',
        place: ['Archaeology', 'Pillager Outpost']
      },
      {
        name: 'Cabbage',
        image: '/images/mechanics/new-plants/cabbage.png',
        seedimage: '/images/mechanics/new-plants/cabbage_seeds.png',
        place: ['Trial Chambers']
      },
      {
        name: 'Chilli Pepper',
        image: '/images/mechanics/new-plants/chilli_pepper.png',
        seedimage: '/images/mechanics/new-plants/chilli_pepper_seeds.png',
        place: ['Trial Chambers', 'Ruined Portal']
      },
      {
        name: 'Corn',
        image: '/images/mechanics/new-plants/corn.png',
        seedimage: '/images/mechanics/new-plants/corn_seeds.png',
        place: ['Sniffer']
      },
      {
        name: 'Cucumber',
        image: '/images/mechanics/new-plants/cucumber.png',
        seedimage: '/images/mechanics/new-plants/cucumber_seeds.png',
        place: ['Archaeology', 'Shipwreck']
      },
      {
        name: 'Lettuce',
        image: '/images/mechanics/new-plants/lettuce.png',
        seedimage: '/images/mechanics/new-plants/lettuce_seeds.png',
        place: ['Archaeology']
      },
      {
        name: 'Onion',
        image: '/images/mechanics/new-plants/onion.png',
        seedimage: '/images/mechanics/new-plants/onion_seeds.png',
        place: ['Dungeon', 'Sniffer'] // "Скарбниця зі спавнером" often refers to a standard dungeon
      },
      {
        name: 'Rice',
        image: '/images/mechanics/new-plants/rice_panicle.png',
        seedimage: '/images/mechanics/new-plants/rice.png', // Note: seedimage here seems to be the harvested item, not the seed itself
        place: ['Sniffer']
      },
      {
        name: 'Nether Wheat',
        image: '/images/mechanics/new-plants/nether_wheat.png',
        seedimage: '/images/mechanics/new-plants/nether_wheat_seeds.png',
        place: ['Bastion Remnant'] // Or just 'Bastion'
      }
    ]
  },
  {
    title: 'Berries',
    description: 'New berry bushes that can be found in the forest.',
    items: [
      {
        name: 'Blackcurrant',
        image: '/images/mechanics/new-plants/blackcurrants.png',
        seedimage: '/images/mechanics/new-plants/blackcurrants_bush_stage3.png', // Note: seedimage here is the bush itself
        place: ['Forest', 'Flower Forest', 'Dark Forest']
      },
      {
        name: 'Gooseberry',
        image: '/images/mechanics/new-plants/gooseberry.png',
        seedimage: '/images/mechanics/new-plants/gooseberry_bush_stage3.png', // Note: seedimage here is the bush itself
        place: ['Forest', 'Birch Forest', 'Old Growth Birch Forest']
      }
    ]
  },
  {
    title: 'Trees',
    description: 'Several new fruit trees, namely:',
    items: [
      {
        name: 'Avocado',
        image: '/images/mechanics/new-plants/avocado.png',
        seedimage: '/images/mechanics/new-plants/avocado_sapling.png',
        place: ['Sparse Jungle']
      },
      {
        name: 'Lemon',
        image: '/images/mechanics/new-plants/lemon.png',
        seedimage: '/images/mechanics/new-plants/lemon_sapling.png',
        place: ['Wandering Trader', 'Trial Chambers']
      }
    ]
  }
];