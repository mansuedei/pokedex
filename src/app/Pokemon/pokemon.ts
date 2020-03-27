type PokemonType = {
  name: string;
  id: number;
  caught?: boolean;
  damage?: number;
};

function addPokemonInfo(arrayOfPokemons: PokemonType[]): PokemonType[] {
  arrayOfPokemons.forEach(element => {
    const randomizedNumber = Math.floor(Math.random() * 100);
    element.damage = randomizedNumber;
    element.caught = false;
  });
  return arrayOfPokemons;
}

const arrayOfPokemons: PokemonType[] = [
  {
    name: "bulbasaur",
    id: 1
  },
  {
    name: "ivysaur",
    id: 2
  },
  {
    name: "venusaur",
    id: 3
  },
  {
    name: "charmander",
    id: 4
  },
  {
    name: "charmeleon",
    id: 5
  },
  {
    name: "charizard",
    id: 6
  },
  {
    name: "squirtle",
    id: 7
  },
  {
    name: "wartortle",
    id: 8
  },
  {
    name: "blastoise",
    id: 9
  },
  {
    name: "caterpie",
    id: 10
  },
  {
    name: "metapod",
    id: 11
  },
  {
    name: "butterfree",
    id: 12
  },
  {
    name: "weedle",
    id: 13
  },
  {
    name: "kakuna",
    id: 14
  },
  {
    name: "beedrill",
    id: 15
  },
  {
    name: "pidgey",
    id: 16
  },
  {
    name: "pidgeotto",
    id: 17
  },
  {
    name: "pidgeot",
    id: 18
  },
  {
    name: "rattata",
    id: 19
  },
  {
    name: "raticate",
    id: 20
  },
  {
    name: "spearow",
    id: 21
  },
  {
    name: "fearow",
    id: 22
  },
  {
    name: "ekans",
    id: 23
  },
  {
    name: "arbok",
    id: 24
  },
  {
    name: "pikachu",
    id: 25
  },
  {
    name: "raichu",
    id: 26
  },
  {
    name: "sandshrew",
    id: 27
  },
  {
    name: "sandslash",
    id: 28
  },
  {
    name: "nidoran-f",
    id: 29
  },
  {
    name: "nidorina",
    id: 30
  },
  {
    name: "nidoqueen",
    id: 31
  },
  {
    name: "nidoran-m",
    id: 32
  },
  {
    name: "nidorino",
    id: 33
  },
  {
    name: "nidoking",
    id: 34
  },
  {
    name: "clefairy",
    id: 35
  },
  {
    name: "clefable",
    id: 36
  },
  {
    name: "vulpix",
    id: 37
  },
  {
    name: "ninetales",
    id: 38
  },
  {
    name: "jigglypuff",
    id: 39
  },
  {
    name: "wigglytuff",
    id: 40
  },
  {
    name: "zubat",
    id: 41
  },
  {
    name: "golbat",
    id: 42
  },
  {
    name: "oddish",
    id: 43
  },
  {
    name: "gloom",
    id: 44
  },
  {
    name: "vileplume",
    id: 45
  },
  {
    name: "paras",
    id: 46
  },
  {
    name: "parasect",
    id: 47
  },
  {
    name: "venonat",
    id: 48
  },
  {
    name: "venomoth",
    id: 49
  },
  {
    name: "diglett",
    id: 50
  },
  {
    name: "dugtrio",
    id: 51
  },
  {
    name: "meowth",
    id: 52
  },
  {
    name: "persian",
    id: 53
  },
  {
    name: "psyduck",
    id: 54
  },
  {
    name: "golduck",
    id: 55
  },
  {
    name: "mankey",
    id: 56
  },
  {
    name: "primeape",
    id: 57
  },
  {
    name: "growlithe",
    id: 58
  },
  {
    name: "arcanine",
    id: 59
  },
  {
    name: "poliwag",
    id: 60
  },
  {
    name: "poliwhirl",
    id: 61
  },
  {
    name: "poliwrath",
    id: 62
  },
  {
    name: "abra",
    id: 63
  },
  {
    name: "kadabra",
    id: 64
  },
  {
    name: "alakazam",
    id: 65
  },
  {
    name: "machop",
    id: 66
  },
  {
    name: "machoke",
    id: 67
  },
  {
    name: "machamp",
    id: 68
  },
  {
    name: "bellsprout",
    id: 69
  },
  {
    name: "weepinbell",
    id: 70
  },
  {
    name: "victreebel",
    id: 71
  },
  {
    name: "tentacool",
    id: 72
  },
  {
    name: "tentacruel",
    id: 73
  },
  {
    name: "geodude",
    id: 74
  },
  {
    name: "graveler",
    id: 75
  },
  {
    name: "golem",
    id: 76
  },
  {
    name: "ponyta",
    id: 77
  },
  {
    name: "rapidash",
    id: 78
  },
  {
    name: "slowpoke",
    id: 79
  },
  {
    name: "slowbro",
    id: 80
  },
  {
    name: "magnemite",
    id: 81
  },
  {
    name: "magneton",
    id: 82
  },
  {
    name: "farfetchd",
    id: 83
  },
  {
    name: "doduo",
    id: 84
  },
  {
    name: "dodrio",
    id: 85
  },
  {
    name: "seel",
    id: 86
  },
  {
    name: "dewgong",
    id: 87
  },
  {
    name: "grimer",
    id: 88
  },
  {
    name: "muk",
    id: 89
  },
  {
    name: "shellder",
    id: 90
  },
  {
    name: "cloyster",
    id: 91
  },
  {
    name: "gastly",
    id: 92
  },
  {
    name: "haunter",
    id: 93
  },
  {
    name: "gengar",
    id: 94
  },
  {
    name: "onix",
    id: 95
  },
  {
    name: "drowzee",
    id: 96
  },
  {
    name: "hypno",
    id: 97
  },
  {
    name: "krabby",
    id: 98
  },
  {
    name: "kingler",
    id: 99
  },
  {
    name: "voltorb",
    id: 100
  },
  {
    name: "electrode",
    id: 101
  },
  {
    name: "exeggcute",
    id: 102
  },
  {
    name: "exeggutor",
    id: 103
  },
  {
    name: "cubone",
    id: 104
  },
  {
    name: "marowak",
    id: 105
  },
  {
    name: "hitmonlee",
    id: 106
  },
  {
    name: "hitmonchan",
    id: 107
  },
  {
    name: "lickitung",
    id: 108
  },
  {
    name: "koffing",
    id: 109
  },
  {
    name: "weezing",
    id: 110
  },
  {
    name: "rhyhorn",
    id: 111
  },
  {
    name: "rhydon",
    id: 112
  },
  {
    name: "chansey",
    id: 113
  },
  {
    name: "tangela",
    id: 114
  },
  {
    name: "kangaskhan",
    id: 115
  },
  {
    name: "horsea",
    id: 116
  },
  {
    name: "seadra",
    id: 117
  },
  {
    name: "goldeen",
    id: 118
  },
  {
    name: "seaking",
    id: 119
  },
  {
    name: "staryu",
    id: 120
  },
  {
    name: "starmie",
    id: 121
  },
  {
    name: "mr-mime",
    id: 122
  },
  {
    name: "scyther",
    id: 123
  },
  {
    name: "jynx",
    id: 124
  },
  {
    name: "electabuzz",
    id: 125
  },
  {
    name: "magmar",
    id: 126
  },
  {
    name: "pinsir",
    id: 127
  },
  {
    name: "tauros",
    id: 128
  },
  {
    name: "magikarp",
    id: 129
  },
  {
    name: "gyarados",
    id: 130
  },
  {
    name: "lapras",
    id: 131
  },
  {
    name: "ditto",
    id: 132
  },
  {
    name: "eevee",
    id: 133
  },
  {
    name: "vaporeon",
    id: 134
  },
  {
    name: "jolteon",
    id: 135
  },
  {
    name: "flareon",
    id: 136
  },
  {
    name: "porygon",
    id: 137
  },
  {
    name: "omanyte",
    id: 138
  },
  {
    name: "omastar",
    id: 139
  },
  {
    name: "kabuto",
    id: 140
  },
  {
    name: "kabutops",
    id: 141
  },
  {
    name: "aerodactyl",
    id: 142
  },
  {
    name: "snorlax",
    id: 143
  },
  {
    name: "articuno",
    id: 144
  },
  {
    name: "zapdos",
    id: 145
  },
  {
    name: "moltres",
    id: 146
  },
  {
    name: "dratini",
    id: 147
  },
  {
    name: "dragonair",
    id: 148
  },
  {
    name: "dragonite",
    id: 149
  },
  {
    name: "mewtwo",
    id: 150
  },
  {
    name: "mew",
    id: 151
  },
  {
    name: "chikorita",
    id: 152
  },
  {
    name: "bayleef",
    id: 153
  },
  {
    name: "meganium",
    id: 154
  },
  {
    name: "cyndaquil",
    id: 155
  },
  {
    name: "quilava",
    id: 156
  },
  {
    name: "typhlosion",
    id: 157
  },
  {
    name: "totodile",
    id: 158
  },
  {
    name: "croconaw",
    id: 159
  },
  {
    name: "feraligatr",
    id: 160
  },
  {
    name: "sentret",
    id: 161
  },
  {
    name: "furret",
    id: 162
  },
  {
    name: "hoothoot",
    id: 163
  },
  {
    name: "noctowl",
    id: 164
  },
  {
    name: "ledyba",
    id: 165
  },
  {
    name: "ledian",
    id: 166
  },
  {
    name: "spinarak",
    id: 167
  },
  {
    name: "ariados",
    id: 168
  },
  {
    name: "crobat",
    id: 169
  },
  {
    name: "chinchou",
    id: 170
  },
  {
    name: "lanturn",
    id: 171
  },
  {
    name: "pichu",
    id: 172
  },
  {
    name: "cleffa",
    id: 173
  },
  {
    name: "igglybuff",
    id: 174
  },
  {
    name: "togepi",
    id: 175
  },
  {
    name: "togetic",
    id: 176
  },
  {
    name: "natu",
    id: 177
  },
  {
    name: "xatu",
    id: 178
  },
  {
    name: "mareep",
    id: 179
  },
  {
    name: "flaaffy",
    id: 180
  },
  {
    name: "ampharos",
    id: 181
  },
  {
    name: "bellossom",
    id: 182
  },
  {
    name: "marill",
    id: 183
  },
  {
    name: "azumarill",
    id: 184
  },
  {
    name: "sudowoodo",
    id: 185
  },
  {
    name: "politoed",
    id: 186
  },
  {
    name: "hoppip",
    id: 187
  },
  {
    name: "skiploom",
    id: 188
  },
  {
    name: "jumpluff",
    id: 189
  },
  {
    name: "aipom",
    id: 190
  },
  {
    name: "sunkern",
    id: 191
  },
  {
    name: "sunflora",
    id: 192
  },
  {
    name: "yanma",
    id: 193
  },
  {
    name: "wooper",
    id: 194
  },
  {
    name: "quagsire",
    id: 195
  },
  {
    name: "espeon",
    id: 196
  },
  {
    name: "umbreon",
    id: 197
  },
  {
    name: "murkrow",
    id: 198
  },
  {
    name: "slowking",
    id: 199
  },
  {
    name: "misdreavus",
    id: 200
  },
  {
    name: "unown",
    id: 201
  },
  {
    name: "wobbuffet",
    id: 202
  },
  {
    name: "girafarig",
    id: 203
  },
  {
    name: "pineco",
    id: 204
  },
  {
    name: "forretress",
    id: 205
  },
  {
    name: "dunsparce",
    id: 206
  },
  {
    name: "gligar",
    id: 207
  },
  {
    name: "steelix",
    id: 208
  },
  {
    name: "snubbull",
    id: 209
  },
  {
    name: "granbull",
    id: 210
  },
  {
    name: "qwilfish",
    id: 211
  },
  {
    name: "scizor",
    id: 212
  },
  {
    name: "shuckle",
    id: 213
  },
  {
    name: "heracross",
    id: 214
  },
  {
    name: "sneasel",
    id: 215
  },
  {
    name: "teddiursa",
    id: 216
  },
  {
    name: "ursaring",
    id: 217
  },
  {
    name: "slugma",
    id: 218
  },
  {
    name: "magcargo",
    id: 219
  },
  {
    name: "swinub",
    id: 220
  },
  {
    name: "piloswine",
    id: 221
  },
  {
    name: "corsola",
    id: 222
  },
  {
    name: "remoraid",
    id: 223
  },
  {
    name: "octillery",
    id: 224
  },
  {
    name: "delibird",
    id: 225
  },
  {
    name: "mantine",
    id: 226
  },
  {
    name: "skarmory",
    id: 227
  },
  {
    name: "houndour",
    id: 228
  },
  {
    name: "houndoom",
    id: 229
  },
  {
    name: "kingdra",
    id: 230
  },
  {
    name: "phanpy",
    id: 231
  },
  {
    name: "donphan",
    id: 232
  },
  {
    name: "porygon2",
    id: 233
  },
  {
    name: "stantler",
    id: 234
  },
  {
    name: "smeargle",
    id: 235
  },
  {
    name: "tyrogue",
    id: 236
  },
  {
    name: "hitmontop",
    id: 237
  },
  {
    name: "smoochum",
    id: 238
  },
  {
    name: "elekid",
    id: 239
  },
  {
    name: "magby",
    id: 240
  },
  {
    name: "miltank",
    id: 241
  },
  {
    name: "blissey",
    id: 242
  },
  {
    name: "raikou",
    id: 243
  },
  {
    name: "entei",
    id: 244
  },
  {
    name: "suicune",
    id: 245
  },
  {
    name: "larvitar",
    id: 246
  },
  {
    name: "pupitar",
    id: 247
  },
  {
    name: "tyranitar",
    id: 248
  },
  {
    name: "lugia",
    id: 249
  },
  {
    name: "ho-oh",
    id: 250
  },
  {
    name: "celebi",
    id: 251
  },
  {
    name: "treecko",
    id: 252
  },
  {
    name: "grovyle",
    id: 253
  },
  {
    name: "sceptile",
    id: 254
  },
  {
    name: "torchic",
    id: 255
  },
  {
    name: "combusken",
    id: 256
  },
  {
    name: "blaziken",
    id: 257
  },
  {
    name: "mudkip",
    id: 258
  },
  {
    name: "marshtomp",
    id: 259
  },
  {
    name: "swampert",
    id: 260
  },
  {
    name: "poochyena",
    id: 261
  },
  {
    name: "mightyena",
    id: 262
  },
  {
    name: "zigzagoon",
    id: 263
  },
  {
    name: "linoone",
    id: 264
  },
  {
    name: "wurmple",
    id: 265
  },
  {
    name: "silcoon",
    id: 266
  },
  {
    name: "beautifly",
    id: 267
  },
  {
    name: "cascoon",
    id: 268
  },
  {
    name: "dustox",
    id: 269
  },
  {
    name: "lotad",
    id: 270
  },
  {
    name: "lombre",
    id: 271
  },
  {
    name: "ludicolo",
    id: 272
  },
  {
    name: "seedot",
    id: 273
  },
  {
    name: "nuzleaf",
    id: 274
  },
  {
    name: "shiftry",
    id: 275
  },
  {
    name: "taillow",
    id: 276
  },
  {
    name: "swellow",
    id: 277
  },
  {
    name: "wingull",
    id: 278
  },
  {
    name: "pelipper",
    id: 279
  },
  {
    name: "ralts",
    id: 280
  },
  {
    name: "kirlia",
    id: 281
  },
  {
    name: "gardevoir",
    id: 282
  },
  {
    name: "surskit",
    id: 283
  },
  {
    name: "masquerain",
    id: 284
  },
  {
    name: "shroomish",
    id: 285
  },
  {
    name: "breloom",
    id: 286
  },
  {
    name: "slakoth",
    id: 287
  },
  {
    name: "vigoroth",
    id: 288
  },
  {
    name: "slaking",
    id: 289
  },
  {
    name: "nincada",
    id: 290
  },
  {
    name: "ninjask",
    id: 291
  },
  {
    name: "shedinja",
    id: 292
  },
  {
    name: "whismur",
    id: 293
  },
  {
    name: "loudred",
    id: 294
  },
  {
    name: "exploud",
    id: 295
  },
  {
    name: "makuhita",
    id: 296
  },
  {
    name: "hariyama",
    id: 297
  },
  {
    name: "azurill",
    id: 298
  },
  {
    name: "nosepass",
    id: 299
  },
  {
    name: "skitty",
    id: 300
  },
  {
    name: "delcatty",
    id: 301
  },
  {
    name: "sableye",
    id: 302
  },
  {
    name: "mawile",
    id: 303
  },
  {
    name: "aron",
    id: 304
  },
  {
    name: "lairon",
    id: 305
  },
  {
    name: "aggron",
    id: 306
  },
  {
    name: "meditite",
    id: 307
  },
  {
    name: "medicham",
    id: 308
  },
  {
    name: "electrike",
    id: 309
  },
  {
    name: "manectric",
    id: 310
  },
  {
    name: "plusle",
    id: 311
  },
  {
    name: "minun",
    id: 312
  },
  {
    name: "volbeat",
    id: 313
  },
  {
    name: "illumise",
    id: 314
  },
  {
    name: "roselia",
    id: 315
  },
  {
    name: "gulpin",
    id: 316
  },
  {
    name: "swalot",
    id: 317
  },
  {
    name: "carvanha",
    id: 318
  },
  {
    name: "sharpedo",
    id: 319
  },
  {
    name: "wailmer",
    id: 320
  },
  {
    name: "wailord",
    id: 321
  },
  {
    name: "numel",
    id: 322
  },
  {
    name: "camerupt",
    id: 323
  },
  {
    name: "torkoal",
    id: 324
  },
  {
    name: "spoink",
    id: 325
  },
  {
    name: "grumpig",
    id: 326
  },
  {
    name: "spinda",
    id: 327
  },
  {
    name: "trapinch",
    id: 328
  },
  {
    name: "vibrava",
    id: 329
  },
  {
    name: "flygon",
    id: 330
  },
  {
    name: "cacnea",
    id: 331
  },
  {
    name: "cacturne",
    id: 332
  },
  {
    name: "swablu",
    id: 333
  },
  {
    name: "altaria",
    id: 334
  },
  {
    name: "zangoose",
    id: 335
  },
  {
    name: "seviper",
    id: 336
  },
  {
    name: "lunatone",
    id: 337
  },
  {
    name: "solrock",
    id: 338
  },
  {
    name: "barboach",
    id: 339
  },
  {
    name: "whiscash",
    id: 340
  },
  {
    name: "corphish",
    id: 341
  },
  {
    name: "crawdaunt",
    id: 342
  },
  {
    name: "baltoy",
    id: 343
  },
  {
    name: "claydol",
    id: 344
  },
  {
    name: "lileep",
    id: 345
  },
  {
    name: "cradily",
    id: 346
  },
  {
    name: "anorith",
    id: 347
  },
  {
    name: "armaldo",
    id: 348
  },
  {
    name: "feebas",
    id: 349
  },
  {
    name: "milotic",
    id: 350
  },
  {
    name: "castform",
    id: 351
  },
  {
    name: "kecleon",
    id: 352
  },
  {
    name: "shuppet",
    id: 353
  },
  {
    name: "banette",
    id: 354
  },
  {
    name: "duskull",
    id: 355
  },
  {
    name: "dusclops",
    id: 356
  },
  {
    name: "tropius",
    id: 357
  },
  {
    name: "chimecho",
    id: 358
  },
  {
    name: "absol",
    id: 359
  },
  {
    name: "wynaut",
    id: 360
  },
  {
    name: "snorunt",
    id: 361
  },
  {
    name: "glalie",
    id: 362
  },
  {
    name: "spheal",
    id: 363
  },
  {
    name: "sealeo",
    id: 364
  },
  {
    name: "walrein",
    id: 365
  },
  {
    name: "clamperl",
    id: 366
  },
  {
    name: "huntail",
    id: 367
  },
  {
    name: "gorebyss",
    id: 368
  },
  {
    name: "relicanth",
    id: 369
  },
  {
    name: "luvdisc",
    id: 370
  },
  {
    name: "bagon",
    id: 371
  },
  {
    name: "shelgon",
    id: 372
  },
  {
    name: "salamence",
    id: 373
  },
  {
    name: "beldum",
    id: 374
  },
  {
    name: "metang",
    id: 375
  },
  {
    name: "metagross",
    id: 376
  },
  {
    name: "regirock",
    id: 377
  },
  {
    name: "regice",
    id: 378
  },
  {
    name: "registeel",
    id: 379
  },
  {
    name: "latias",
    id: 380
  },
  {
    name: "latios",
    id: 381
  },
  {
    name: "kyogre",
    id: 382
  },
  {
    name: "groudon",
    id: 383
  },
  {
    name: "rayquaza",
    id: 384
  },
  {
    name: "jirachi",
    id: 385
  },
  {
    name: "deoxys-normal",
    id: 386
  },
  {
    name: "turtwig",
    id: 387
  },
  {
    name: "grotle",
    id: 388
  },
  {
    name: "torterra",
    id: 389
  },
  {
    name: "chimchar",
    id: 390
  },
  {
    name: "monferno",
    id: 391
  },
  {
    name: "infernape",
    id: 392
  },
  {
    name: "piplup",
    id: 393
  },
  {
    name: "prinplup",
    id: 394
  },
  {
    name: "empoleon",
    id: 395
  },
  {
    name: "starly",
    id: 396
  },
  {
    name: "staravia",
    id: 397
  },
  {
    name: "staraptor",
    id: 398
  },
  {
    name: "bidoof",
    id: 399
  },
  {
    name: "bibarel",
    id: 400
  },
  {
    name: "kricketot",
    id: 401
  },
  {
    name: "kricketune",
    id: 402
  },
  {
    name: "shinx",
    id: 403
  },
  {
    name: "luxio",
    id: 404
  },
  {
    name: "luxray",
    id: 405
  },
  {
    name: "budew",
    id: 406
  },
  {
    name: "roserade",
    id: 407
  },
  {
    name: "cranidos",
    id: 408
  },
  {
    name: "rampardos",
    id: 409
  },
  {
    name: "shieldon",
    id: 410
  },
  {
    name: "bastiodon",
    id: 411
  },
  {
    name: "burmy",
    id: 412
  },
  {
    name: "wormadam-plant",
    id: 413
  },
  {
    name: "mothim",
    id: 414
  },
  {
    name: "combee",
    id: 415
  },
  {
    name: "vespiquen",
    id: 416
  },
  {
    name: "pachirisu",
    id: 417
  },
  {
    name: "buizel",
    id: 418
  },
  {
    name: "floatzel",
    id: 419
  },
  {
    name: "cherubi",
    id: 420
  },
  {
    name: "cherrim",
    id: 421
  },
  {
    name: "shellos",
    id: 422
  },
  {
    name: "gastrodon",
    id: 423
  },
  {
    name: "ambipom",
    id: 424
  },
  {
    name: "drifloon",
    id: 425
  },
  {
    name: "drifblim",
    id: 426
  },
  {
    name: "buneary",
    id: 427
  },
  {
    name: "lopunny",
    id: 428
  },
  {
    name: "mismagius",
    id: 429
  },
  {
    name: "honchkrow",
    id: 430
  },
  {
    name: "glameow",
    id: 431
  },
  {
    name: "purugly",
    id: 432
  },
  {
    name: "chingling",
    id: 433
  },
  {
    name: "stunky",
    id: 434
  },
  {
    name: "skuntank",
    id: 435
  },
  {
    name: "bronzor",
    id: 436
  },
  {
    name: "bronzong",
    id: 437
  },
  {
    name: "bonsly",
    id: 438
  },
  {
    name: "mime-jr",
    id: 439
  },
  {
    name: "happiny",
    id: 440
  },
  {
    name: "chatot",
    id: 441
  },
  {
    name: "spiritomb",
    id: 442
  },
  {
    name: "gible",
    id: 443
  },
  {
    name: "gabite",
    id: 444
  },
  {
    name: "garchomp",
    id: 445
  },
  {
    name: "munchlax",
    id: 446
  },
  {
    name: "riolu",
    id: 447
  },
  {
    name: "lucario",
    id: 448
  },
  {
    name: "hippopotas",
    id: 449
  },
  {
    name: "hippowdon",
    id: 450
  },
  {
    name: "skorupi",
    id: 451
  },
  {
    name: "drapion",
    id: 452
  },
  {
    name: "croagunk",
    id: 453
  },
  {
    name: "toxicroak",
    id: 454
  },
  {
    name: "carnivine",
    id: 455
  },
  {
    name: "finneon",
    id: 456
  },
  {
    name: "lumineon",
    id: 457
  },
  {
    name: "mantyke",
    id: 458
  },
  {
    name: "snover",
    id: 459
  },
  {
    name: "abomasnow",
    id: 460
  },
  {
    name: "weavile",
    id: 461
  },
  {
    name: "magnezone",
    id: 462
  },
  {
    name: "lickilicky",
    id: 463
  },
  {
    name: "rhyperior",
    id: 464
  },
  {
    name: "tangrowth",
    id: 465
  },
  {
    name: "electivire",
    id: 466
  },
  {
    name: "magmortar",
    id: 467
  },
  {
    name: "togekiss",
    id: 468
  },
  {
    name: "yanmega",
    id: 469
  },
  {
    name: "leafeon",
    id: 470
  },
  {
    name: "glaceon",
    id: 471
  },
  {
    name: "gliscor",
    id: 472
  },
  {
    name: "mamoswine",
    id: 473
  },
  {
    name: "porygon-z",
    id: 474
  },
  {
    name: "gallade",
    id: 475
  },
  {
    name: "probopass",
    id: 476
  },
  {
    name: "dusknoir",
    id: 477
  },
  {
    name: "froslass",
    id: 478
  },
  {
    name: "rotom",
    id: 479
  },
  {
    name: "uxie",
    id: 480
  },
  {
    name: "mesprit",
    id: 481
  },
  {
    name: "azelf",
    id: 482
  },
  {
    name: "dialga",
    id: 483
  },
  {
    name: "palkia",
    id: 484
  },
  {
    name: "heatran",
    id: 485
  },
  {
    name: "regigigas",
    id: 486
  },
  {
    name: "giratina-altered",
    id: 487
  },
  {
    name: "cresselia",
    id: 488
  },
  {
    name: "phione",
    id: 489
  },
  {
    name: "manaphy",
    id: 490
  },
  {
    name: "darkrai",
    id: 491
  },
  {
    name: "shaymin-land",
    id: 492
  },
  {
    name: "arceus",
    id: 493
  },
  {
    name: "victini",
    id: 494
  },
  {
    name: "snivy",
    id: 495
  },
  {
    name: "servine",
    id: 496
  },
  {
    name: "serperior",
    id: 497
  },
  {
    name: "tepig",
    id: 498
  },
  {
    name: "pignite",
    id: 499
  },
  {
    name: "emboar",
    id: 500
  },
  {
    name: "oshawott",
    id: 501
  },
  {
    name: "dewott",
    id: 502
  },
  {
    name: "samurott",
    id: 503
  },
  {
    name: "patrat",
    id: 504
  },
  {
    name: "watchog",
    id: 505
  },
  {
    name: "lillipup",
    id: 506
  },
  {
    name: "herdier",
    id: 507
  },
  {
    name: "stoutland",
    id: 508
  },
  {
    name: "purrloin",
    id: 509
  },
  {
    name: "liepard",
    id: 510
  },
  {
    name: "pansage",
    id: 511
  },
  {
    name: "simisage",
    id: 512
  },
  {
    name: "pansear",
    id: 513
  },
  {
    name: "simisear",
    id: 514
  },
  {
    name: "panpour",
    id: 515
  },
  {
    name: "simipour",
    id: 516
  },
  {
    name: "munna",
    id: 517
  },
  {
    name: "musharna",
    id: 518
  },
  {
    name: "pidove",
    id: 519
  },
  {
    name: "tranquill",
    id: 520
  },
  {
    name: "unfezant",
    id: 521
  },
  {
    name: "blitzle",
    id: 522
  },
  {
    name: "zebstrika",
    id: 523
  },
  {
    name: "roggenrola",
    id: 524
  },
  {
    name: "boldore",
    id: 525
  },
  {
    name: "gigalith",
    id: 526
  },
  {
    name: "woobat",
    id: 527
  },
  {
    name: "swoobat",
    id: 528
  },
  {
    name: "drilbur",
    id: 529
  },
  {
    name: "excadrill",
    id: 530
  },
  {
    name: "audino",
    id: 531
  },
  {
    name: "timburr",
    id: 532
  },
  {
    name: "gurdurr",
    id: 533
  },
  {
    name: "conkeldurr",
    id: 534
  },
  {
    name: "tympole",
    id: 535
  },
  {
    name: "palpitoad",
    id: 536
  },
  {
    name: "seismitoad",
    id: 537
  },
  {
    name: "throh",
    id: 538
  },
  {
    name: "sawk",
    id: 539
  },
  {
    name: "sewaddle",
    id: 540
  },
  {
    name: "swadloon",
    id: 541
  },
  {
    name: "leavanny",
    id: 542
  },
  {
    name: "venipede",
    id: 543
  },
  {
    name: "whirlipede",
    id: 544
  },
  {
    name: "scolipede",
    id: 545
  },
  {
    name: "cottonee",
    id: 546
  },
  {
    name: "whimsicott",
    id: 547
  },
  {
    name: "petilil",
    id: 548
  },
  {
    name: "lilligant",
    id: 549
  },
  {
    name: "basculin-red-striped",
    id: 550
  },
  {
    name: "sandile",
    id: 551
  },
  {
    name: "krokorok",
    id: 552
  },
  {
    name: "krookodile",
    id: 553
  },
  {
    name: "darumaka",
    id: 554
  },
  {
    name: "darmanitan-standard",
    id: 555
  },
  {
    name: "maractus",
    id: 556
  },
  {
    name: "dwebble",
    id: 557
  },
  {
    name: "crustle",
    id: 558
  },
  {
    name: "scraggy",
    id: 559
  },
  {
    name: "scrafty",
    id: 560
  },
  {
    name: "sigilyph",
    id: 561
  },
  {
    name: "yamask",
    id: 562
  },
  {
    name: "cofagrigus",
    id: 563
  },
  {
    name: "tirtouga",
    id: 564
  },
  {
    name: "carracosta",
    id: 565
  },
  {
    name: "archen",
    id: 566
  },
  {
    name: "archeops",
    id: 567
  },
  {
    name: "trubbish",
    id: 568
  },
  {
    name: "garbodor",
    id: 569
  },
  {
    name: "zorua",
    id: 570
  },
  {
    name: "zoroark",
    id: 571
  },
  {
    name: "minccino",
    id: 572
  },
  {
    name: "cinccino",
    id: 573
  },
  {
    name: "gothita",
    id: 574
  },
  {
    name: "gothorita",
    id: 575
  },
  {
    name: "gothitelle",
    id: 576
  },
  {
    name: "solosis",
    id: 577
  },
  {
    name: "duosion",
    id: 578
  },
  {
    name: "reuniclus",
    id: 579
  },
  {
    name: "ducklett",
    id: 580
  },
  {
    name: "swanna",
    id: 581
  },
  {
    name: "vanillite",
    id: 582
  },
  {
    name: "vanillish",
    id: 583
  },
  {
    name: "vanilluxe",
    id: 584
  },
  {
    name: "deerling",
    id: 585
  },
  {
    name: "sawsbuck",
    id: 586
  },
  {
    name: "emolga",
    id: 587
  },
  {
    name: "karrablast",
    id: 588
  },
  {
    name: "escavalier",
    id: 589
  },
  {
    name: "foongus",
    id: 590
  },
  {
    name: "amoonguss",
    id: 591
  },
  {
    name: "frillish",
    id: 592
  },
  {
    name: "jellicent",
    id: 593
  },
  {
    name: "alomomola",
    id: 594
  },
  {
    name: "joltik",
    id: 595
  },
  {
    name: "galvantula",
    id: 596
  },
  {
    name: "ferroseed",
    id: 597
  },
  {
    name: "ferrothorn",
    id: 598
  },
  {
    name: "klink",
    id: 599
  },
  {
    name: "klang",
    id: 600
  },
  {
    name: "klinklang",
    id: 601
  },
  {
    name: "tynamo",
    id: 602
  },
  {
    name: "eelektrik",
    id: 603
  },
  {
    name: "eelektross",
    id: 604
  },
  {
    name: "elgyem",
    id: 605
  },
  {
    name: "beheeyem",
    id: 606
  },
  {
    name: "litwick",
    id: 607
  },
  {
    name: "lampent",
    id: 608
  },
  {
    name: "chandelure",
    id: 609
  },
  {
    name: "axew",
    id: 610
  },
  {
    name: "fraxure",
    id: 611
  },
  {
    name: "haxorus",
    id: 612
  },
  {
    name: "cubchoo",
    id: 613
  },
  {
    name: "beartic",
    id: 614
  },
  {
    name: "cryogonal",
    id: 615
  },
  {
    name: "shelmet",
    id: 616
  },
  {
    name: "accelgor",
    id: 617
  },
  {
    name: "stunfisk",
    id: 618
  },
  {
    name: "mienfoo",
    id: 619
  },
  {
    name: "mienshao",
    id: 620
  },
  {
    name: "druddigon",
    id: 621
  },
  {
    name: "golett",
    id: 622
  },
  {
    name: "golurk",
    id: 623
  },
  {
    name: "pawniard",
    id: 624
  },
  {
    name: "bisharp",
    id: 625
  },
  {
    name: "bouffalant",
    id: 626
  },
  {
    name: "rufflet",
    id: 627
  },
  {
    name: "braviary",
    id: 628
  },
  {
    name: "vullaby",
    id: 629
  },
  {
    name: "mandibuzz",
    id: 630
  },
  {
    name: "heatmor",
    id: 631
  },
  {
    name: "durant",
    id: 632
  },
  {
    name: "deino",
    id: 633
  },
  {
    name: "zweilous",
    id: 634
  },
  {
    name: "hydreigon",
    id: 635
  },
  {
    name: "larvesta",
    id: 636
  },
  {
    name: "volcarona",
    id: 637
  },
  {
    name: "cobalion",
    id: 638
  },
  {
    name: "terrakion",
    id: 639
  },
  {
    name: "virizion",
    id: 640
  },
  {
    name: "tornadus-incarnate",
    id: 641
  },
  {
    name: "thundurus-incarnate",
    id: 642
  },
  {
    name: "reshiram",
    id: 643
  },
  {
    name: "zekrom",
    id: 644
  },
  {
    name: "landorus-incarnate",
    id: 645
  },
  {
    name: "kyurem",
    id: 646
  },
  {
    name: "keldeo-ordinary",
    id: 647
  },
  {
    name: "meloetta-aria",
    id: 648
  },
  {
    name: "genesect",
    id: 649
  },
  {
    name: "chespin",
    id: 650
  },
  {
    name: "quilladin",
    id: 651
  },
  {
    name: "chesnaught",
    id: 652
  },
  {
    name: "fennekin",
    id: 653
  },
  {
    name: "braixen",
    id: 654
  },
  {
    name: "delphox",
    id: 655
  },
  {
    name: "froakie",
    id: 656
  },
  {
    name: "frogadier",
    id: 657
  },
  {
    name: "greninja",
    id: 658
  },
  {
    name: "bunnelby",
    id: 659
  },
  {
    name: "diggersby",
    id: 660
  },
  {
    name: "fletchling",
    id: 661
  },
  {
    name: "fletchinder",
    id: 662
  },
  {
    name: "talonflame",
    id: 663
  },
  {
    name: "scatterbug",
    id: 664
  },
  {
    name: "spewpa",
    id: 665
  },
  {
    name: "vivillon",
    id: 666
  },
  {
    name: "litleo",
    id: 667
  },
  {
    name: "pyroar",
    id: 668
  },
  {
    name: "flabebe",
    id: 669
  },
  {
    name: "floette",
    id: 670
  },
  {
    name: "florges",
    id: 671
  },
  {
    name: "skiddo",
    id: 672
  },
  {
    name: "gogoat",
    id: 673
  },
  {
    name: "pancham",
    id: 674
  },
  {
    name: "pangoro",
    id: 675
  },
  {
    name: "furfrou",
    id: 676
  },
  {
    name: "espurr",
    id: 677
  },
  {
    name: "meowstic-male",
    id: 678
  },
  {
    name: "honedge",
    id: 679
  },
  {
    name: "doublade",
    id: 680
  },
  {
    name: "aegislash-shield",
    id: 681
  },
  {
    name: "spritzee",
    id: 682
  },
  {
    name: "aromatisse",
    id: 683
  },
  {
    name: "swirlix",
    id: 684
  },
  {
    name: "slurpuff",
    id: 685
  },
  {
    name: "inkay",
    id: 686
  },
  {
    name: "malamar",
    id: 687
  },
  {
    name: "binacle",
    id: 688
  },
  {
    name: "barbaracle",
    id: 689
  },
  {
    name: "skrelp",
    id: 690
  },
  {
    name: "dragalge",
    id: 691
  },
  {
    name: "clauncher",
    id: 692
  },
  {
    name: "clawitzer",
    id: 693
  },
  {
    name: "helioptile",
    id: 694
  },
  {
    name: "heliolisk",
    id: 695
  },
  {
    name: "tyrunt",
    id: 696
  },
  {
    name: "tyrantrum",
    id: 697
  },
  {
    name: "amaura",
    id: 698
  },
  {
    name: "aurorus",
    id: 699
  },
  {
    name: "sylveon",
    id: 700
  },
  {
    name: "hawlucha",
    id: 701
  },
  {
    name: "dedenne",
    id: 702
  },
  {
    name: "carbink",
    id: 703
  },
  {
    name: "goomy",
    id: 704
  },
  {
    name: "sliggoo",
    id: 705
  },
  {
    name: "goodra",
    id: 706
  },
  {
    name: "klefki",
    id: 707
  },
  {
    name: "phantump",
    id: 708
  },
  {
    name: "trevenant",
    id: 709
  },
  {
    name: "pumpkaboo-average",
    id: 710
  },
  {
    name: "gourgeist-average",
    id: 711
  },
  {
    name: "bergmite",
    id: 712
  },
  {
    name: "avalugg",
    id: 713
  },
  {
    name: "noibat",
    id: 714
  },
  {
    name: "noivern",
    id: 715
  },
  {
    name: "xerneas",
    id: 716
  },
  {
    name: "yveltal",
    id: 717
  },
  {
    name: "zygarde",
    id: 718
  },
  {
    name: "diancie",
    id: 719
  },
  {
    name: "hoopa",
    id: 720
  },
  {
    name: "volcanion",
    id: 721
  },
  {
    name: "rowlet",
    id: 722
  },
  {
    name: "dartrix",
    id: 723
  },
  {
    name: "decidueye",
    id: 724
  },
  {
    name: "litten",
    id: 725
  },
  {
    name: "torracat",
    id: 726
  },
  {
    name: "incineroar",
    id: 727
  },
  {
    name: "popplio",
    id: 728
  },
  {
    name: "brionne",
    id: 729
  },
  {
    name: "primarina",
    id: 730
  },
  {
    name: "pikipek",
    id: 731
  },
  {
    name: "trumbeak",
    id: 732
  },
  {
    name: "toucannon",
    id: 733
  },
  {
    name: "yungoos",
    id: 734
  },
  {
    name: "gumshoos",
    id: 735
  },
  {
    name: "grubbin",
    id: 736
  },
  {
    name: "charjabug",
    id: 737
  },
  {
    name: "vikavolt",
    id: 738
  },
  {
    name: "crabrawler",
    id: 739
  },
  {
    name: "crabominable",
    id: 740
  },
  {
    name: "oricorio-baile",
    id: 741
  },
  {
    name: "cutiefly",
    id: 742
  },
  {
    name: "ribombee",
    id: 743
  },
  {
    name: "rockruff",
    id: 744
  },
  {
    name: "lycanroc-midday",
    id: 745
  },
  {
    name: "wishiwashi-solo",
    id: 746
  },
  {
    name: "mareanie",
    id: 747
  },
  {
    name: "toxapex",
    id: 748
  },
  {
    name: "mudbray",
    id: 749
  },
  {
    name: "mudsdale",
    id: 750
  },
  {
    name: "dewpider",
    id: 751
  },
  {
    name: "araquanid",
    id: 752
  },
  {
    name: "fomantis",
    id: 753
  },
  {
    name: "lurantis",
    id: 754
  },
  {
    name: "morelull",
    id: 755
  },
  {
    name: "shiinotic",
    id: 756
  },
  {
    name: "salandit",
    id: 757
  },
  {
    name: "salazzle",
    id: 758
  },
  {
    name: "stufful",
    id: 759
  },
  {
    name: "bewear",
    id: 760
  },
  {
    name: "bounsweet",
    id: 761
  },
  {
    name: "steenee",
    id: 762
  },
  {
    name: "tsareena",
    id: 763
  },
  {
    name: "comfey",
    id: 764
  },
  {
    name: "oranguru",
    id: 765
  },
  {
    name: "passimian",
    id: 766
  },
  {
    name: "wimpod",
    id: 767
  },
  {
    name: "golisopod",
    id: 768
  },
  {
    name: "sandygast",
    id: 769
  },
  {
    name: "palossand",
    id: 770
  },
  {
    name: "pyukumuku",
    id: 771
  },
  {
    name: "type-null",
    id: 772
  },
  {
    name: "silvally",
    id: 773
  },
  {
    name: "minior-red-meteor",
    id: 774
  },
  {
    name: "komala",
    id: 775
  },
  {
    name: "turtonator",
    id: 776
  },
  {
    name: "togedemaru",
    id: 777
  },
  {
    name: "mimikyu-disguised",
    id: 778
  },
  {
    name: "bruxish",
    id: 779
  },
  {
    name: "drampa",
    id: 780
  },
  {
    name: "dhelmise",
    id: 781
  },
  {
    name: "jangmo-o",
    id: 782
  },
  {
    name: "hakamo-o",
    id: 783
  },
  {
    name: "kommo-o",
    id: 784
  },
  {
    name: "tapu-koko",
    id: 785
  },
  {
    name: "tapu-lele",
    id: 786
  },
  {
    name: "tapu-bulu",
    id: 787
  },
  {
    name: "tapu-fini",
    id: 788
  },
  {
    name: "cosmog",
    id: 789
  },
  {
    name: "cosmoem",
    id: 790
  },
  {
    name: "solgaleo",
    id: 791
  },
  {
    name: "lunala",
    id: 792
  },
  {
    name: "nihilego",
    id: 793
  },
  {
    name: "buzzwole",
    id: 794
  },
  {
    name: "pheromosa",
    id: 795
  },
  {
    name: "xurkitree",
    id: 796
  },
  {
    name: "celesteela",
    id: 797
  },
  {
    name: "kartana",
    id: 798
  },
  {
    name: "guzzlord",
    id: 799
  },
  {
    name: "necrozma",
    id: 800
  },
  {
    name: "magearna",
    id: 801
  },
  {
    name: "marshadow",
    id: 802
  },
  {
    name: "deoxys-attack",
    id: 10001
  },
  {
    name: "deoxys-defense",
    id: 10002
  },
  {
    name: "deoxys-speed",
    id: 10003
  },
  {
    name: "wormadam-sandy",
    id: 10004
  },
  {
    name: "wormadam-trash",
    id: 10005
  },
  {
    name: "shaymin-sky",
    id: 10006
  },
  {
    name: "giratina-origin",
    id: 10007
  },
  {
    name: "rotom-heat",
    id: 10008
  },
  {
    name: "rotom-wash",
    id: 10009
  },
  {
    name: "rotom-frost",
    id: 10010
  },
  {
    name: "rotom-fan",
    id: 10011
  },
  {
    name: "rotom-mow",
    id: 10012
  },
  {
    name: "castform-sunny",
    id: 10013
  },
  {
    name: "castform-rainy",
    id: 10014
  },
  {
    name: "castform-snowy",
    id: 10015
  },
  {
    name: "basculin-blue-striped",
    id: 10016
  },
  {
    name: "darmanitan-zen",
    id: 10017
  },
  {
    name: "meloetta-pirouette",
    id: 10018
  },
  {
    name: "tornadus-therian",
    id: 10019
  },
  {
    name: "thundurus-therian",
    id: 10020
  },
  {
    name: "landorus-therian",
    id: 10021
  },
  {
    name: "kyurem-black",
    id: 10022
  },
  {
    name: "kyurem-white",
    id: 10023
  },
  {
    name: "keldeo-resolute",
    id: 10024
  },
  {
    name: "meowstic-female",
    id: 10025
  },
  {
    name: "aegislash-blade",
    id: 10026
  },
  {
    name: "pumpkaboo-small",
    id: 10027
  },
  {
    name: "pumpkaboo-large",
    id: 10028
  },
  {
    name: "pumpkaboo-super",
    id: 10029
  },
  {
    name: "gourgeist-small",
    id: 10030
  },
  {
    name: "gourgeist-large",
    id: 10031
  },
  {
    name: "gourgeist-super",
    id: 10032
  },
  {
    name: "venusaur-mega",
    id: 10033
  },
  {
    name: "charizard-mega-x",
    id: 10034
  },
  {
    name: "charizard-mega-y",
    id: 10035
  },
  {
    name: "blastoise-mega",
    id: 10036
  },
  {
    name: "alakazam-mega",
    id: 10037
  },
  {
    name: "gengar-mega",
    id: 10038
  },
  {
    name: "kangaskhan-mega",
    id: 10039
  },
  {
    name: "pinsir-mega",
    id: 10040
  },
  {
    name: "gyarados-mega",
    id: 10041
  },
  {
    name: "aerodactyl-mega",
    id: 10042
  },
  {
    name: "mewtwo-mega-x",
    id: 10043
  },
  {
    name: "mewtwo-mega-y",
    id: 10044
  },
  {
    name: "ampharos-mega",
    id: 10045
  },
  {
    name: "scizor-mega",
    id: 10046
  },
  {
    name: "heracross-mega",
    id: 10047
  },
  {
    name: "houndoom-mega",
    id: 10048
  },
  {
    name: "tyranitar-mega",
    id: 10049
  },
  {
    name: "blaziken-mega",
    id: 10050
  },
  {
    name: "gardevoir-mega",
    id: 10051
  },
  {
    name: "mawile-mega",
    id: 10052
  },
  {
    name: "aggron-mega",
    id: 10053
  },
  {
    name: "medicham-mega",
    id: 10054
  },
  {
    name: "manectric-mega",
    id: 10055
  },
  {
    name: "banette-mega",
    id: 10056
  },
  {
    name: "absol-mega",
    id: 10057
  },
  {
    name: "garchomp-mega",
    id: 10058
  },
  {
    name: "lucario-mega",
    id: 10059
  },
  {
    name: "abomasnow-mega",
    id: 10060
  },
  {
    name: "floette-eternal",
    id: 10061
  },
  {
    name: "latias-mega",
    id: 10062
  },
  {
    name: "latios-mega",
    id: 10063
  },
  {
    name: "swampert-mega",
    id: 10064
  },
  {
    name: "sceptile-mega",
    id: 10065
  },
  {
    name: "sableye-mega",
    id: 10066
  },
  {
    name: "altaria-mega",
    id: 10067
  },
  {
    name: "gallade-mega",
    id: 10068
  },
  {
    name: "audino-mega",
    id: 10069
  },
  {
    name: "sharpedo-mega",
    id: 10070
  },
  {
    name: "slowbro-mega",
    id: 10071
  },
  {
    name: "steelix-mega",
    id: 10072
  },
  {
    name: "pidgeot-mega",
    id: 10073
  },
  {
    name: "glalie-mega",
    id: 10074
  },
  {
    name: "diancie-mega",
    id: 10075
  },
  {
    name: "metagross-mega",
    id: 10076
  },
  {
    name: "kyogre-primal",
    id: 10077
  },
  {
    name: "groudon-primal",
    id: 10078
  },
  {
    name: "rayquaza-mega",
    id: 10079
  },
  {
    name: "pikachu-rock-star",
    id: 10080
  },
  {
    name: "pikachu-belle",
    id: 10081
  },
  {
    name: "pikachu-pop-star",
    id: 10082
  },
  {
    name: "pikachu-phd",
    id: 10083
  },
  {
    name: "pikachu-libre",
    id: 10084
  },
  {
    name: "pikachu-cosplay",
    id: 10085
  },
  {
    name: "hoopa-unbound",
    id: 10086
  },
  {
    name: "camerupt-mega",
    id: 10087
  },
  {
    name: "lopunny-mega",
    id: 10088
  },
  {
    name: "salamence-mega",
    id: 10089
  },
  {
    name: "beedrill-mega",
    id: 10090
  },
  {
    name: "rattata-alola",
    id: 10091
  },
  {
    name: "raticate-alola",
    id: 10092
  },
  {
    name: "raticate-totem-alola",
    id: 10093
  },
  {
    name: "pikachu-original-cap",
    id: 10094
  },
  {
    name: "pikachu-hoenn-cap",
    id: 10095
  },
  {
    name: "pikachu-sinnoh-cap",
    id: 10096
  },
  {
    name: "pikachu-unova-cap",
    id: 10097
  },
  {
    name: "pikachu-kalos-cap",
    id: 10098
  },
  {
    name: "pikachu-alola-cap",
    id: 10099
  },
  {
    name: "raichu-alola",
    id: 10100
  },
  {
    name: "sandshrew-alola",
    id: 10101
  },
  {
    name: "sandslash-alola",
    id: 10102
  },
  {
    name: "vulpix-alola",
    id: 10103
  },
  {
    name: "ninetales-alola",
    id: 10104
  },
  {
    name: "diglett-alola",
    id: 10105
  },
  {
    name: "dugtrio-alola",
    id: 10106
  },
  {
    name: "meowth-alola",
    id: 10107
  },
  {
    name: "persian-alola",
    id: 10108
  },
  {
    name: "geodude-alola",
    id: 10109
  },
  {
    name: "graveler-alola",
    id: 10110
  },
  {
    name: "golem-alola",
    id: 10111
  },
  {
    name: "grimer-alola",
    id: 10112
  },
  {
    name: "muk-alola",
    id: 10113
  },
  {
    name: "exeggutor-alola",
    id: 10114
  },
  {
    name: "marowak-alola",
    id: 10115
  },
  {
    name: "greninja-battle-bond",
    id: 10116
  },
  {
    name: "greninja-ash",
    id: 10117
  },
  {
    name: "zygarde-10",
    id: 10118
  },
  {
    name: "zygarde-50",
    id: 10119
  },
  {
    name: "zygarde-complete",
    id: 10120
  },
  {
    name: "gumshoos-totem",
    id: 10121
  },
  {
    name: "vikavolt-totem",
    id: 10122
  },
  {
    name: "oricorio-pom-pom",
    id: 10123
  },
  {
    name: "oricorio-pau",
    id: 10124
  },
  {
    name: "oricorio-sensu",
    id: 10125
  },
  {
    name: "lycanroc-midnight",
    id: 10126
  },
  {
    name: "wishiwashi-school",
    id: 10127
  },
  {
    name: "lurantis-totem",
    id: 10128
  },
  {
    name: "salazzle-totem",
    id: 10129
  },
  {
    name: "minior-orange-meteor",
    id: 10130
  },
  {
    name: "minior-yellow-meteor",
    id: 10131
  },
  {
    name: "minior-green-meteor",
    id: 10132
  },
  {
    name: "minior-blue-meteor",
    id: 10133
  },
  {
    name: "minior-indigo-meteor",
    id: 10134
  },
  {
    name: "minior-violet-meteor",
    id: 10135
  },
  {
    name: "minior-red",
    id: 10136
  },
  {
    name: "minior-orange",
    id: 10137
  },
  {
    name: "minior-yellow",
    id: 10138
  },
  {
    name: "minior-green",
    id: 10139
  },
  {
    name: "minior-blue",
    id: 10140
  },
  {
    name: "minior-indigo",
    id: 10141
  },
  {
    name: "minior-violet",
    id: 10142
  },
  {
    name: "mimikyu-busted",
    id: 10143
  },
  {
    name: "mimikyu-totem-disguised",
    id: 10144
  },
  {
    name: "mimikyu-totem-busted",
    id: 10145
  },
  {
    name: "kommo-o-totem",
    id: 10146
  },
  {
    name: "magearna-original",
    id: 10147
  }
];

export const Pokemons = addPokemonInfo(arrayOfPokemons.slice(0, 12));

export interface Pokemon {
  name: string;
  id: number;
  caught?: boolean;
  damage?: number;
}
