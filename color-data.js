// Color data from Sanzo Wada's Dictionary of Color Combinations
const colorData = {
    colors: {
  "#ffb3f0": {
    "name": "Hermosa Pink",
    "cmyk": [
      0,
      30,
      6,
      0
    ],
    "rgb": [
      255,
      179,
      240
    ],
    "combinations": [
      176,
      227,
      273
    ]
  },
  "#ffa6d9": {
    "name": "Corinthian Pink",
    "cmyk": [
      0,
      35,
      15,
      0
    ],
    "rgb": [
      255,
      166,
      217
    ],
    "combinations": [
      27,
      43,
      87,
      97,
      128,
      169,
      174,
      206,
      246,
      254,
      264,
      342
    ]
  },
  "#e6adcf": {
    "name": "Cameo Pink",
    "cmyk": [
      10,
      32,
      19,
      0
    ],
    "rgb": [
      230,
      173,
      207
    ],
    "combinations": [
      18,
      125,
      308,
      101,
      105,
      116,
      120
    ]
  },
  "#d1b0b3": {
    "name": "Fawn",
    "cmyk": [
      18,
      31,
      30,
      0
    ],
    "rgb": [
      209,
      176,
      179
    ],
    "combinations": [
      18,
      125,
      308
    ]
  },
  "#b08699": {
    "name": "Light Brown Drab",
    "cmyk": [
      8,
      30,
      20,
      25
    ],
    "rgb": [
      176,
      134,
      153
    ],
    "combinations": [
      35,
      68,
      185,
      191,
      223,
      239,
      244,
      268,
      285,
      321
    ]
  },
  "#ff7399": {
    "name": "Coral Red",
    "cmyk": [
      0,
      55,
      40,
      0
    ],
    "rgb": [
      255,
      115,
      153
    ],
    "combinations": [
      92,
      123,
      320,
      332
    ]
  },
  "#ff788c": {
    "name": "Fresh Color",
    "cmyk": [
      0,
      53,
      45,
      0
    ],
    "rgb": [
      255,
      120,
      140
    ],
    "combinations": [
      240
    ]
  },
  "#ff616b": {
    "name": "Grenadine Pink",
    "cmyk": [
      0,
      62,
      58,
      0
    ],
    "rgb": [
      255,
      97,
      107
    ],
    "combinations": [
      6,
      21,
      112,
      166,
      193,
      201,
      230,
      300,
      315,
      341
    ]
  },
  "#ff5ec4": {
    "name": "Eosine Pink",
    "cmyk": [
      0,
      63,
      23,
      0
    ],
    "rgb": [
      255,
      94,
      196
    ],
    "combinations": [
      34,
      59,
      90,
      108,
      134,
      153,
      197,
      242,
      248,
      276,
      287,
      314,
      327,
      336
    ]
  },
  "#ff4dc9": {
    "name": "Spinel Red",
    "cmyk": [
      0,
      70,
      21,
      0
    ],
    "rgb": [
      255,
      77,
      201
    ],
    "combinations": [
      14,
      147,
      165,
      184,
      195,
      224,
      277
    ]
  },
  "#d94d99": {
    "name": "Old Rose",
    "cmyk": [
      15,
      70,
      40,
      0
    ],
    "rgb": [
      217,
      77,
      153
    ],
    "combinations": [
      55,
      162,
      260,
      265
    ]
  },
  "#ed3d66": {
    "name": "Eugenia Red | A",
    "cmyk": [
      7,
      76,
      60,
      0
    ],
    "rgb": [
      237,
      61,
      102
    ],
    "combinations": [
      284
    ]
  },
  "#e62e73": {
    "name": "Eugenia Red | B",
    "cmyk": [
      0,
      80,
      50,
      10
    ],
    "rgb": [
      230,
      46,
      115
    ],
    "combinations": [
      17,
      77,
      252,
      262,
      270,
      280,
      282,
      325
    ]
  },
  "#b85e00": {
    "name": "Raw Sienna",
    "cmyk": [
      18,
      58,
      100,
      12
    ],
    "rgb": [
      184,
      94,
      0
    ],
    "combinations": [
      3,
      13,
      33,
      70,
      86,
      130,
      131,
      182,
      243,
      247,
      252,
      255,
      268,
      269,
      279,
      293,
      298,
      319,
      327
    ]
  },
  "#c74300": {
    "name": "Vinaceous Tawny",
    "cmyk": [
      17,
      72,
      100,
      6
    ],
    "rgb": [
      199,
      67,
      0
    ],
    "combinations": [
      40,
      85,
      244
    ]
  },
  "#fa2b00": {
    "name": "Jasper Red",
    "cmyk": [
      2,
      83,
      100,
      0
    ],
    "rgb": [
      250,
      43,
      0
    ],
    "combinations": [
      155,
      194,
      216,
      219
    ]
  },
  "#f20000": {
    "name": "Spectrum Red",
    "cmyk": [
      5,
      100,
      100,
      0
    ],
    "rgb": [
      242,
      0,
      0
    ],
    "combinations": [
      257,
      266,
      301,
      322
    ]
  },
  "#e81900": {
    "name": "Red Orange",
    "cmyk": [
      9,
      90,
      100,
      0
    ],
    "rgb": [
      232,
      25,
      0
    ],
    "combinations": [
      31,
      164,
      179,
      241,
      264
    ]
  },
  "#c9303e": {
    "name": "Etruscan Red",
    "cmyk": [
      16,
      80,
      74,
      6
    ],
    "rgb": [
      201,
      48,
      62
    ],
    "combinations": [
      25,
      47,
      97,
      137,
      152,
      185,
      275
    ]
  },
  "#a93400": {
    "name": "Burnt Sienna",
    "cmyk": [
      22,
      76,
      100,
      15
    ],
    "rgb": [
      169,
      52,
      0
    ],
    "combinations": [
      198,
      242,
      263,
      285,
      286,
      297,
      312,
      333,
      343
    ]
  },
  "#a7374b": {
    "name": "Ochre Red",
    "cmyk": [
      18,
      73,
      63,
      20
    ],
    "rgb": [
      167,
      55,
      75
    ],
    "combinations": [
      199,
      283
    ]
  },
  "#d50c42": {
    "name": "Scarlet",
    "cmyk": [
      10,
      95,
      72,
      7
    ],
    "rgb": [
      213,
      12,
      66
    ],
    "combinations": [
      136,
      308,
      332
    ]
  },
  "#d60036": {
    "name": "Carmine",
    "cmyk": [
      0,
      100,
      75,
      16
    ],
    "rgb": [
      214,
      0,
      54
    ],
    "combinations": [
      39,
      117,
      122,
      154,
      225,
      232,
      307,
      313
    ]
  },
  "#cc1a97": {
    "name": "Indian Lake",
    "cmyk": [
      12,
      89,
      35,
      9
    ],
    "rgb": [
      204,
      26,
      151
    ],
    "combinations": [
      299,
      331
    ]
  },
  "#b319ab": {
    "name": "Rosolanc Purple",
    "cmyk": [
      30,
      90,
      33,
      0
    ],
    "rgb": [
      179,
      25,
      171
    ],
    "combinations": [
      48,
      144,
      170,
      204,
      277
    ]
  },
  "#b90078": {
    "name": "Pomegranite Purple",
    "cmyk": [
      23,
      100,
      50,
      6
    ],
    "rgb": [
      185,
      0,
      120
    ],
    "combinations": [
      220,
      271
    ]
  },
  "#9e194d": {
    "name": "Hydrangea Red",
    "cmyk": [
      38,
      90,
      70,
      0
    ],
    "rgb": [
      158,
      25,
      77
    ],
    "combinations": [
      142
    ]
  },
  "#a32100": {
    "name": "Brick Red",
    "cmyk": [
      22,
      84,
      100,
      18
    ],
    "rgb": [
      163,
      33,
      0
    ],
    "combinations": [
      37,
      108,
      246,
      322,
      328
    ]
  },
  "#a10b2b": {
    "name": "Carmine Red",
    "cmyk": [
      25,
      95,
      80,
      16
    ],
    "rgb": [
      161,
      11,
      43
    ],
    "combinations": [
      35,
      51,
      104,
      130,
      181,
      200,
      221,
      228,
      233,
      237,
      245
    ]
  },
  "#a90636": {
    "name": "Pompeian Red",
    "cmyk": [
      18,
      97,
      74,
      19
    ],
    "rgb": [
      169,
      6,
      54
    ],
    "combinations": [
      30,
      71,
      120,
      212,
      311,
      324
    ]
  },
  "#a10045": {
    "name": "Red",
    "cmyk": [
      30,
      100,
      70,
      10
    ],
    "rgb": [
      161,
      0,
      69
    ],
    "combinations": [
      251,
      261
    ]
  },
  "#6c2b11": {
    "name": "Brown",
    "cmyk": [
      35,
      74,
      90,
      35
    ],
    "rgb": [
      108,
      43,
      17
    ],
    "combinations": [
      110,
      121,
      145,
      161
    ]
  },
  "#681916": {
    "name": "Hay's Russet",
    "cmyk": [
      37,
      85,
      87,
      35
    ],
    "rgb": [
      104,
      25,
      22
    ],
    "combinations": [
      58,
      82,
      95,
      152,
      186,
      231,
      249,
      304,
      314,
      336,
      345
    ]
  },
  "#740909": {
    "name": "Vandyke Red",
    "cmyk": [
      32,
      95,
      95,
      33
    ],
    "rgb": [
      116,
      9,
      9
    ],
    "combinations": [
      16,
      133,
      147,
      316,
      335
    ]
  },
  "#6f0043": {
    "name": "Pansy Purple",
    "cmyk": [
      34,
      100,
      60,
      34
    ],
    "rgb": [
      111,
      0,
      67
    ],
    "combinations": [
      157,
      273
    ]
  },
  "#730f1f": {
    "name": "Pale Burnt Lake",
    "cmyk": [
      25,
      90,
      80,
      40
    ],
    "rgb": [
      115,
      15,
      31
    ],
    "combinations": [
      124,
      171,
      177,
      205,
      217,
      258,
      269,
      283
    ]
  },
  "#3d0079": {
    "name": "Violet Red",
    "cmyk": [
      75,
      100,
      50,
      5
    ],
    "rgb": [
      61,
      0,
      121
    ],
    "combinations": [
      9
    ]
  },
  "#5c2c45": {
    "name": "Vistoris Lake",
    "cmyk": [
      40,
      71,
      55,
      40
    ],
    "rgb": [
      92,
      44,
      69
    ],
    "combinations": [
      63,
      91,
      165,
      226,
      290,
      337
    ]
  },
  "#f5f5b8": {
    "name": "Sulpher Yellow",
    "cmyk": [
      4,
      4,
      28,
      0
    ],
    "rgb": [
      245,
      245,
      184
    ],
    "combinations": [
      52,
      72,
      80,
      104,
      132,
      135,
      151,
      208,
      246,
      254,
      270,
      294,
      296,
      310,
      315,
      320,
      321,
      326
    ]
  },
  "#fff59e": {
    "name": "Pale Lemon Yellow",
    "cmyk": [
      0,
      4,
      38,
      0
    ],
    "rgb": [
      255,
      245,
      158
    ],
    "combinations": [
      3,
      31,
      60,
      76,
      99,
      109,
      111,
      169,
      185,
      195,
      203,
      228,
      241,
      261,
      272,
      281,
      290,
      292,
      336
    ]
  },
  "#faed8f": {
    "name": "Naples Yellow",
    "cmyk": [
      2,
      7,
      44,
      0
    ],
    "rgb": [
      250,
      237,
      143
    ],
    "combinations": [
      14,
      115,
      166,
      193,
      303,
      325
    ]
  },
  "#ebd999": {
    "name": "Ivory Buff",
    "cmyk": [
      8,
      15,
      40,
      0
    ],
    "rgb": [
      235,
      217,
      153
    ],
    "combinations": [
      11,
      50,
      94,
      102,
      126,
      178,
      184,
      190,
      209,
      214,
      235,
      243,
      262,
      266,
      301,
      343
    ]
  },
  "#ffcfc4": {
    "name": "Seashell Pink",
    "cmyk": [
      0,
      19,
      23,
      0
    ],
    "rgb": [
      255,
      207,
      196
    ],
    "combinations": [
      45,
      84,
      88,
      113,
      150,
      176,
      194,
      276,
      334
    ]
  },
  "#ffbf99": {
    "name": "Light Pinkish Cinnamon",
    "cmyk": [
      0,
      25,
      40,
      0
    ],
    "rgb": [
      255,
      191,
      153
    ],
    "combinations": [
      317
    ]
  },
  "#f2ad78": {
    "name": "Pinkish Cinnamon",
    "cmyk": [
      5,
      32,
      53,
      0
    ],
    "rgb": [
      242,
      173,
      120
    ],
    "combinations": [
      78,
      175,
      232,
      258,
      263,
      292,
      305,
      310
    ]
  },
  "#ffbf6e": {
    "name": "Cinnamon Buff",
    "cmyk": [
      0,
      25,
      57,
      0
    ],
    "rgb": [
      255,
      191,
      110
    ],
    "combinations": [
      23,
      127,
      137,
      180,
      210,
      234,
      246,
      323,
      344
    ]
  },
  "#ffb852": {
    "name": "Cream Yellow",
    "cmyk": [
      0,
      28,
      68,
      0
    ],
    "rgb": [
      255,
      184,
      82
    ],
    "combinations": [
      122,
      192,
      215,
      226,
      267,
      278,
      294,
      295,
      300,
      302,
      304,
      311,
      329,
      342
    ]
  },
  "#fa9442": {
    "name": "Golden Yellow",
    "cmyk": [
      2,
      42,
      74,
      0
    ],
    "rgb": [
      250,
      148,
      66
    ],
    "combinations": [
      26,
      81,
      132,
      138,
      140,
      179
    ]
  },
  "#f59994": {
    "name": "Vinaceous Cinnamon",
    "cmyk": [
      4,
      40,
      42,
      0
    ],
    "rgb": [
      245,
      153,
      148
    ],
    "combinations": [
      203,
      205,
      213,
      256,
      260,
      279,
      299
    ]
  },
  "#d99e73": {
    "name": "Ochraceous Salmon",
    "cmyk": [
      15,
      38,
      55,
      0
    ],
    "rgb": [
      217,
      158,
      115
    ],
    "combinations": [
      32,
      71,
      121,
      186,
      217,
      220,
      223,
      238,
      296,
      339
    ]
  },
  "#c3a55c": {
    "name": "Isabella Color",
    "cmyk": [
      15,
      28,
      60,
      10
    ],
    "rgb": [
      195,
      165,
      92
    ],
    "combinations": [
      4,
      12,
      241,
      292
    ]
  },
  "#c2975a": {
    "name": "Maple",
    "cmyk": [
      5,
      26,
      56,
      20
    ],
    "rgb": [
      194,
      151,
      90
    ],
    "combinations": [
      282
    ]
  },
  "#bcd382": {
    "name": "Olive Buff",
    "cmyk": [
      16,
      6,
      42,
      12
    ],
    "rgb": [
      188,
      211,
      130
    ],
    "combinations": [
      83,
      175,
      200,
      330,
      348
    ]
  },
  "#c0b490": {
    "name": "Ecru",
    "cmyk": [
      20,
      25,
      40,
      6
    ],
    "rgb": [
      192,
      180,
      144
    ],
    "combinations": [
      167,
      249,
      275,
      279,
      292,
      302,
      317,
      327
    ]
  },
  "#ffff00": {
    "name": "Yellow",
    "cmyk": [
      0,
      0,
      100,
      0
    ],
    "rgb": [
      255,
      255,
      0
    ],
    "combinations": [
      22,
      62,
      68,
      154,
      240,
      251,
      295,
      313
    ]
  },
  "#f2ff26": {
    "name": "Lemon Yellow",
    "cmyk": [
      5,
      0,
      85,
      0
    ],
    "rgb": [
      242,
      255,
      38
    ],
    "combinations": [
      45,
      123,
      138,
      158,
      168,
      173,
      189,
      210,
      253,
      259,
      289,
      298,
      306,
      317,
      333
    ]
  },
  "#ffe600": {
    "name": "Apricot Yellow",
    "cmyk": [
      0,
      10,
      100,
      0
    ],
    "rgb": [
      255,
      230,
      0
    ],
    "combinations": [
      107,
      129,
      163,
      198,
      213,
      247,
      265,
      284,
      305,
      319
    ]
  },
  "#c4bf33": {
    "name": "Pyrite Yellow",
    "cmyk": [
      23,
      25,
      80,
      0
    ],
    "rgb": [
      196,
      191,
      51
    ],
    "combinations": [
      239,
      250,
      255,
      287
    ]
  },
  "#d1bd19": {
    "name": "Olive Ocher",
    "cmyk": [
      18,
      26,
      90,
      0
    ],
    "rgb": [
      209,
      189,
      25
    ],
    "combinations": [
      66,
      148,
      149,
      156,
      157,
      249,
      278
    ]
  },
  "#e0b81f": {
    "name": "Yellow Ocher",
    "cmyk": [
      12,
      28,
      88,
      0
    ],
    "rgb": [
      224,
      184,
      31
    ],
    "combinations": [
      42,
      96,
      118,
      124,
      126,
      191,
      222,
      325
    ]
  },
  "#ffab00": {
    "name": "Orange Yellow",
    "cmyk": [
      0,
      33,
      100,
      0
    ],
    "rgb": [
      255,
      171,
      0
    ],
    "combinations": [
      114,
      148,
      153,
      164,
      170,
      257,
      286,
      338
    ]
  },
  "#ff8c00": {
    "name": "Yellow Orange",
    "cmyk": [
      0,
      45,
      100,
      0
    ],
    "rgb": [
      255,
      140,
      0
    ],
    "combinations": [
      22,
      53,
      89,
      151,
      171,
      209,
      222,
      235,
      267,
      288,
      297,
      312,
      319,
      335,
      2
    ]
  },
  "#ff7340": {
    "name": "Apricot Orange",
    "cmyk": [
      0,
      55,
      75,
      0
    ],
    "rgb": [
      255,
      115,
      64
    ],
    "combinations": [
      211,
      253,
      309,
      328
    ]
  },
  "#ff5200": {
    "name": "Orange",
    "cmyk": [
      0,
      68,
      100,
      0
    ],
    "rgb": [
      255,
      82,
      0
    ],
    "combinations": [
      7,
      46,
      141,
      144,
      149,
      256,
      272
    ]
  },
  "#ff3319": {
    "name": "Peach Red",
    "cmyk": [
      0,
      80,
      90,
      0
    ],
    "rgb": [
      255,
      51,
      25
    ],
    "combinations": [
      115,
      250,
      274,
      285,
      298,
      303,
      326,
      340
    ]
  },
  "#de4500": {
    "name": "English Red",
    "cmyk": [
      13,
      73,
      100,
      0
    ],
    "rgb": [
      222,
      69,
      0
    ],
    "combinations": [
      1,
      131,
      190,
      308,
      339
    ]
  },
  "#c2612c": {
    "name": "Cinnamon Rufous",
    "cmyk": [
      20,
      60,
      82,
      5
    ],
    "rgb": [
      194,
      97,
      44
    ],
    "combinations": [
      8,
      10,
      103,
      158,
      172,
      204,
      206
    ]
  },
  "#c05200": {
    "name": "Orange Rufous",
    "cmyk": [
      18,
      65,
      100,
      8
    ],
    "rgb": [
      192,
      82,
      0
    ],
    "combinations": [
      91,
      102,
      222
    ]
  },
  "#baa600": {
    "name": "Sulphine Yellow",
    "cmyk": [
      24,
      32,
      100,
      4
    ],
    "rgb": [
      186,
      166,
      0
    ],
    "combinations": [
      36,
      65,
      142,
      160,
      252
    ]
  },
  "#b68400": {
    "name": "Khaki",
    "cmyk": [
      24,
      45,
      100,
      6
    ],
    "rgb": [
      182,
      132,
      0
    ],
    "combinations": [
      129,
      146,
      159,
      236,
      248
    ]
  },
  "#a6d40d": {
    "name": "Citron Yellow",
    "cmyk": [
      35,
      17,
      95,
      0
    ],
    "rgb": [
      166,
      212,
      13
    ],
    "combinations": [
      59,
      93,
      132,
      133,
      262,
      40,
      87
    ]
  },
  "#888d2a": {
    "name": "Buffy Citrine",
    "cmyk": [
      42,
      40,
      82,
      8
    ],
    "rgb": [
      136,
      141,
      42
    ],
    "combinations": [
      100,
      177,
      233
    ]
  },
  "#7e8743": {
    "name": "Dark Citrine",
    "cmyk": [
      38,
      34,
      67,
      20
    ],
    "rgb": [
      126,
      135,
      67
    ],
    "combinations": [
      10,
      41,
      274,
      304
    ]
  },
  "#76844e": {
    "name": "Light Grayish Olive",
    "cmyk": [
      43,
      36,
      62,
      19
    ],
    "rgb": [
      118,
      132,
      78
    ],
    "combinations": [
      107,
      184
    ]
  },
  "#759243": {
    "name": "Krongbergs Green",
    "cmyk": [
      48,
      35,
      70,
      12
    ],
    "rgb": [
      117,
      146,
      67
    ],
    "combinations": [
      29
    ]
  },
  "#718600": {
    "name": "Olive",
    "cmyk": [
      48,
      38,
      100,
      15
    ],
    "rgb": [
      113,
      134,
      0
    ],
    "combinations": [
      96,
      201,
      254,
      258,
      277,
      310,
      334
    ]
  },
  "#8c6510": {
    "name": "Orange Citrine",
    "cmyk": [
      28,
      48,
      92,
      24
    ],
    "rgb": [
      140,
      101,
      16
    ],
    "combinations": [
      212,
      342
    ]
  },
  "#9b5348": {
    "name": "Sudan Brown",
    "cmyk": [
      25,
      60,
      65,
      19
    ],
    "rgb": [
      155,
      83,
      72
    ],
    "combinations": [
      207,
      214,
      273
    ]
  },
  "#58771e": {
    "name": "Olive Green",
    "cmyk": [
      56,
      40,
      85,
      22
    ],
    "rgb": [
      88,
      119,
      30
    ],
    "combinations": [
      66,
      243,
      270,
      297
    ]
  },
  "#706934": {
    "name": "Light Brownish Olive",
    "cmyk": [
      42,
      46,
      73,
      24
    ],
    "rgb": [
      112,
      105,
      52
    ],
    "combinations": [
      199,
      318
    ]
  },
  "#505423": {
    "name": "Deep Grayish Olive",
    "cmyk": [
      50,
      48,
      78,
      37
    ],
    "rgb": [
      80,
      84,
      35
    ],
    "combinations": [
      146,
      343
    ]
  },
  "#5e4017": {
    "name": "Pale Raw Umber",
    "cmyk": [
      46,
      63,
      87,
      32
    ],
    "rgb": [
      94,
      64,
      23
    ],
    "combinations": [
      26,
      73,
      160,
      234,
      296
    ]
  },
  "#503d00": {
    "name": "Sepia",
    "cmyk": [
      48,
      60,
      100,
      40
    ],
    "rgb": [
      80,
      61,
      0
    ],
    "combinations": [
      24,
      288
    ]
  },
  "#651300": {
    "name": "Madder Brown",
    "cmyk": [
      36,
      88,
      100,
      38
    ],
    "rgb": [
      101,
      19,
      0
    ],
    "combinations": [
      28,
      79,
      98,
      173,
      237,
      275,
      323
    ]
  },
  "#522000": {
    "name": "Mars Brown / Tobacco",
    "cmyk": [
      39,
      76,
      100,
      47
    ],
    "rgb": [
      82,
      32,
      0
    ],
    "combinations": [
      19
    ]
  },
  "#362304": {
    "name": "Vandyke Brown",
    "cmyk": [
      56,
      71,
      97,
      52
    ],
    "rgb": [
      54,
      35,
      4
    ],
    "combinations": [
      110,
      113,
      118,
      182,
      192
    ]
  },
  "#b5ffc2": {
    "name": "Turquoise Green",
    "cmyk": [
      29,
      0,
      24,
      0
    ],
    "rgb": [
      181,
      255,
      194
    ],
    "combinations": [
      36,
      74,
      147,
      163,
      173,
      202,
      223,
      230,
      263,
      272,
      285,
      293,
      300,
      305,
      317,
      346
    ]
  },
  "#b3e8c2": {
    "name": "Glaucous Green",
    "cmyk": [
      30,
      9,
      24,
      0
    ],
    "rgb": [
      179,
      232,
      194
    ],
    "combinations": [
      7,
      150,
      171,
      207,
      239,
      260
    ]
  },
  "#b3d9a3": {
    "name": "Dark Greenish Glaucous",
    "cmyk": [
      30,
      15,
      36,
      0
    ],
    "rgb": [
      179,
      217,
      163
    ],
    "combinations": [
      264,
      311
    ]
  },
  "#a6ff47": {
    "name": "Yellow Green",
    "cmyk": [
      35,
      0,
      72,
      0
    ],
    "rgb": [
      166,
      255,
      71
    ],
    "combinations": [
      111,
      141,
      276,
      326,
      334
    ]
  },
  "#bdf226": {
    "name": "Light Green Yellow",
    "cmyk": [
      26,
      5,
      85,
      0
    ],
    "rgb": [
      189,
      242,
      38
    ],
    "combinations": [
      61,
      289,
      291,
      311,
      346
    ]
  },
  "#7aff00": {
    "name": "Night Green",
    "cmyk": [
      52,
      0,
      100,
      0
    ],
    "rgb": [
      122,
      255,
      0
    ],
    "combinations": [
      19,
      32,
      158,
      326
    ]
  },
  "#99b333": {
    "name": "Olive Yellow",
    "cmyk": [
      40,
      30,
      80,
      0
    ],
    "rgb": [
      153,
      179,
      51
    ],
    "combinations": [
      124,
      211,
      265,
      347
    ]
  },
  "#65a98f": {
    "name": "Artemesia Green",
    "cmyk": [
      57,
      28,
      39,
      8
    ],
    "rgb": [
      101,
      169,
      143
    ],
    "combinations": [
      293,
      312
    ]
  },
  "#5c8a73": {
    "name": "Andover Green",
    "cmyk": [
      60,
      40,
      50,
      10
    ],
    "rgb": [
      92,
      138,
      115
    ],
    "combinations": [
      244,
      346
    ]
  },
  "#85b857": {
    "name": "Rainette Green",
    "cmyk": [
      42,
      20,
      62,
      10
    ],
    "rgb": [
      133,
      184,
      87
    ],
    "combinations": [
      105,
      200,
      219,
      283,
      73
    ]
  },
  "#56aa69": {
    "name": "Pistachio Green",
    "cmyk": [
      64,
      29,
      56,
      6
    ],
    "rgb": [
      86,
      170,
      105
    ],
    "combinations": [
      127,
      237
    ]
  },
  "#33ff7d": {
    "name": "Sea Green",
    "cmyk": [
      80,
      0,
      51,
      0
    ],
    "rgb": [
      51,
      255,
      125
    ],
    "combinations": [
      17,
      21,
      58,
      86,
      133,
      250,
      260,
      284,
      291,
      340,
      347
    ]
  },
  "#00d973": {
    "name": "Benzol Green",
    "cmyk": [
      100,
      15,
      55,
      0
    ],
    "rgb": [
      0,
      217,
      115
    ],
    "combinations": [
      15,
      54,
      92,
      122,
      155,
      247,
      266,
      267,
      281,
      304,
      306
    ]
  },
  "#23c17c": {
    "name": "Light Porcelain Green",
    "cmyk": [
      86,
      22,
      50,
      3
    ],
    "rgb": [
      35,
      193,
      124
    ],
    "combinations": [
      44,
      193,
      328
    ]
  },
  "#40c945": {
    "name": "Green",
    "cmyk": [
      75,
      21,
      73,
      0
    ],
    "rgb": [
      64,
      201,
      69
    ],
    "combinations": [
      198,
      216,
      293
    ]
  },
  "#19cc33": {
    "name": "Dull Viridian Green",
    "cmyk": [
      90,
      20,
      80,
      0
    ],
    "rgb": [
      25,
      204,
      51
    ],
    "combinations": [
      136,
      256,
      306,
      316
    ]
  },
  "#6ea900": {
    "name": "Oil Green",
    "cmyk": [
      53,
      28,
      100,
      8
    ],
    "rgb": [
      110,
      169,
      0
    ],
    "combinations": [
      245,
      299,
      320
    ]
  },
  "#1b8e13": {
    "name": "Diamine Green",
    "cmyk": [
      87,
      32,
      91,
      18
    ],
    "rgb": [
      27,
      142,
      19
    ],
    "combinations": [
      38,
      146,
      217,
      242,
      251,
      313
    ]
  },
  "#328e13": {
    "name": "Cossack Green",
    "cmyk": [
      76,
      32,
      91,
      18
    ],
    "rgb": [
      50,
      142,
      19
    ],
    "combinations": [
      5,
      135,
      262,
      270,
      278,
      294,
      319,
      341,
      348
    ]
  },
  "#405416": {
    "name": "Lincoln Green",
    "cmyk": [
      60,
      48,
      86,
      37
    ],
    "rgb": [
      64,
      84,
      22
    ],
    "combinations": [
      70,
      121,
      203,
      210,
      280,
      290
    ]
  },
  "#324e2a": {
    "name": "Blackish Olive",
    "cmyk": [
      56,
      32,
      63,
      55
    ],
    "rgb": [
      50,
      78,
      42
    ],
    "combinations": [
      109,
      318,
      336
    ]
  },
  "#172713": {
    "name": "Deep Slate Olive",
    "cmyk": [
      76,
      60,
      80,
      62
    ],
    "rgb": [
      23,
      39,
      19
    ],
    "combinations": [
      189,
      229,
      268,
      303,
      310,
      321,
      332,
      341,
      342,
      348
    ]
  },
  "#bfffe6": {
    "name": "Nile Blue",
    "cmyk": [
      25,
      0,
      10,
      0
    ],
    "rgb": [
      191,
      255,
      230
    ],
    "combinations": [
      25,
      250,
      268,
      302,
      306,
      330,
      345
    ]
  },
  "#abf5ed": {
    "name": "Pale King's Blue",
    "cmyk": [
      33,
      4,
      7,
      0
    ],
    "rgb": [
      171,
      245,
      237
    ],
    "combinations": [
      16,
      49,
      72,
      75,
      167,
      196,
      213,
      234,
      287
    ]
  },
  "#a6e6db": {
    "name": "Light Glaucous Blue",
    "cmyk": [
      35,
      10,
      14,
      0
    ],
    "rgb": [
      166,
      230,
      219
    ],
    "combinations": [
      54,
      93,
      119,
      152,
      178,
      204,
      227,
      320,
      339,
      341
    ]
  },
  "#96bfe6": {
    "name": "Salvia Blue",
    "cmyk": [
      41,
      25,
      10,
      0
    ],
    "rgb": [
      150,
      191,
      230
    ],
    "combinations": [
      29,
      129,
      135,
      139,
      142,
      188,
      209,
      212,
      237,
      272,
      294,
      321,
      330
    ]
  },
  "#94ff94": {
    "name": "Cobalt Green",
    "cmyk": [
      42,
      0,
      42,
      0
    ],
    "rgb": [
      148,
      255,
      148
    ],
    "combinations": [
      156,
      188,
      201,
      202,
      230,
      271,
      281,
      282,
      290,
      291,
      308,
      333
    ]
  },
  "#80ffcc": {
    "name": "Calamine BLue",
    "cmyk": [
      50,
      0,
      20,
      0
    ],
    "rgb": [
      128,
      255,
      204
    ],
    "combinations": [
      20,
      41,
      65,
      159,
      176,
      255,
      261,
      287,
      291,
      300
    ]
  },
  "#6bffb3": {
    "name": "Venice Green",
    "cmyk": [
      58,
      0,
      30,
      0
    ],
    "rgb": [
      107,
      255,
      179
    ],
    "combinations": [
      78,
      128,
      138,
      189,
      283,
      345
    ]
  },
  "#29bdad": {
    "name": "Cerulian Blue",
    "cmyk": [
      84,
      26,
      32,
      0
    ],
    "rgb": [
      41,
      189,
      173
    ],
    "combinations": [
      1,
      63,
      99,
      125,
      148,
      227,
      240,
      264
    ]
  },
  "#00cf91": {
    "name": "Peacock Blue",
    "cmyk": [
      100,
      19,
      43,
      0
    ],
    "rgb": [
      0,
      207,
      145
    ],
    "combinations": [
      131,
      286
    ]
  },
  "#2dbc94": {
    "name": "Green Blue",
    "cmyk": [
      82,
      24,
      40,
      3
    ],
    "rgb": [
      45,
      188,
      148
    ],
    "combinations": [
      12,
      74,
      79,
      178,
      208,
      252,
      259,
      271,
      330
    ]
  },
  "#4f8fe6": {
    "name": "Olympic Blue",
    "cmyk": [
      69,
      44,
      10,
      0
    ],
    "rgb": [
      79,
      143,
      230
    ],
    "combinations": [
      44,
      67,
      157,
      194,
      231,
      274,
      324
    ]
  },
  "#0d75ff": {
    "name": "Blue",
    "cmyk": [
      95,
      54,
      0,
      0
    ],
    "rgb": [
      13,
      117,
      255
    ],
    "combinations": [
      49,
      51,
      88,
      143,
      154,
      186,
      191,
      215,
      257,
      267,
      295,
      333
    ]
  },
  "#008aa1": {
    "name": "Antwarp Blue",
    "cmyk": [
      100,
      40,
      30,
      10
    ],
    "rgb": [
      0,
      138,
      161
    ],
    "combinations": [
      85,
      106,
      114,
      140,
      163,
      172,
      208,
      244,
      258,
      281,
      299,
      302,
      334
    ]
  },
  "#0057ba": {
    "name": "Helvetia Blue",
    "cmyk": [
      100,
      62,
      19,
      10
    ],
    "rgb": [
      0,
      87,
      186
    ],
    "combinations": [
      39,
      48,
      161,
      187,
      218,
      259,
      312,
      347
    ]
  },
  "#417777": {
    "name": "Dark Medici Blue",
    "cmyk": [
      70,
      45,
      45,
      15
    ],
    "rgb": [
      65,
      119,
      119
    ],
    "combinations": [
      160,
      224,
      241,
      249
    ]
  },
  "#00592e": {
    "name": "Dusky Green",
    "cmyk": [
      100,
      30,
      64,
      50
    ],
    "rgb": [
      0,
      89,
      46
    ],
    "combinations": [
      94,
      219,
      225,
      278,
      284,
      318,
      332,
      338
    ]
  },
  "#0024cc": {
    "name": "Deep Lyons Blue",
    "cmyk": [
      100,
      85,
      15,
      6
    ],
    "rgb": [
      0,
      36,
      204
    ],
    "combinations": [
      22,
      38,
      101,
      126,
      179,
      199,
      236,
      247,
      314,
      344
    ]
  },
  "#202d85": {
    "name": "Violet Blue",
    "cmyk": [
      85,
      79,
      38,
      16
    ],
    "rgb": [
      32,
      45,
      133
    ],
    "combinations": [
      75,
      83,
      89,
      98,
      125,
      233,
      286,
      289,
      297,
      309,
      339
    ]
  },
  "#003e83": {
    "name": "Vandar Poel's Blue",
    "cmyk": [
      100,
      73,
      43,
      10
    ],
    "rgb": [
      0,
      62,
      131
    ],
    "combinations": [
      5
    ]
  },
  "#0d2b52": {
    "name": "Dark Tyrian Blue",
    "cmyk": [
      90,
      66,
      36,
      50
    ],
    "rgb": [
      13,
      43,
      82
    ],
    "combinations": [
      2,
      60,
      67,
      119,
      141,
      245,
      279
    ]
  },
  "#06004f": {
    "name": "Dull Violet Black",
    "cmyk": [
      95,
      106,
      38,
      50
    ],
    "rgb": [
      6,
      0,
      79
    ],
    "combinations": [
      95,
      106,
      145,
      265,
      277,
      289,
      295,
      331
    ]
  },
  "#000831": {
    "name": "Deep Indigo",
    "cmyk": [
      100,
      92,
      52,
      60
    ],
    "rgb": [
      0,
      8,
      49
    ],
    "combinations": [
      6,
      28,
      139,
      155,
      182,
      211,
      232
    ]
  },
  "#0f261f": {
    "name": "Deep Slate Green",
    "cmyk": [
      80,
      50,
      60,
      70
    ],
    "rgb": [
      15,
      38,
      31
    ],
    "combinations": [
      84,
      149,
      166,
      271,
      318,
      325
    ]
  },
  "#b8b8ff": {
    "name": "Grayish Lavender - A",
    "cmyk": [
      28,
      28,
      0,
      0
    ],
    "rgb": [
      184,
      184,
      255
    ],
    "combinations": [
      8,
      15,
      159,
      177,
      218,
      248,
      307
    ]
  },
  "#bfabcc": {
    "name": "Grayish Lavender - B",
    "cmyk": [
      25,
      33,
      20,
      0
    ],
    "rgb": [
      191,
      171,
      204
    ],
    "combinations": [
      47,
      56,
      174,
      187,
      235,
      327,
      329,
      338
    ]
  },
  "#cc85d1": {
    "name": "Laelia Pink",
    "cmyk": [
      20,
      48,
      18,
      0
    ],
    "rgb": [
      204,
      133,
      209
    ],
    "combinations": [
      20,
      254,
      280,
      337
    ]
  },
  "#b875eb": {
    "name": "Lilac",
    "cmyk": [
      28,
      54,
      8,
      0
    ],
    "rgb": [
      184,
      117,
      235
    ],
    "combinations": [
      143,
      162,
      282,
      347
    ]
  },
  "#bf36e0": {
    "name": "Eupatorium Purple",
    "cmyk": [
      25,
      79,
      12,
      0
    ],
    "rgb": [
      191,
      54,
      224
    ],
    "combinations": [
      23,
      80,
      128,
      134,
      180,
      274,
      331
    ]
  },
  "#9161f2": {
    "name": "Light Mauve",
    "cmyk": [
      43,
      62,
      5,
      0
    ],
    "rgb": [
      145,
      97,
      242
    ],
    "combinations": [
      23,
      80,
      128,
      134,
      180,
      274,
      331
    ]
  },
  "#9c52f2": {
    "name": "Aconite Violet",
    "cmyk": [
      39,
      68,
      5,
      0
    ],
    "rgb": [
      156,
      82,
      242
    ],
    "combinations": [
      43,
      64,
      90,
      187,
      220,
      257,
      269,
      301,
      307,
      324,
      344
    ]
  },
  "#6e66d4": {
    "name": "Dull Blue Violet",
    "cmyk": [
      57,
      60,
      17,
      0
    ],
    "rgb": [
      110,
      102,
      212
    ],
    "combinations": [
      9,
      100
    ]
  },
  "#4d52de": {
    "name": "Dark Soft Violet",
    "cmyk": [
      70,
      68,
      13,
      0
    ],
    "rgb": [
      77,
      82,
      222
    ],
    "combinations": [
      64,
      127,
      197
    ]
  },
  "#4733ff": {
    "name": "Blue Violet",
    "cmyk": [
      72,
      80,
      0,
      0
    ],
    "rgb": [
      71,
      51,
      255
    ],
    "combinations": [
      116,
      175,
      196,
      322,
      345
    ]
  },
  "#754260": {
    "name": "Purple Drab",
    "cmyk": [
      38,
      65,
      49,
      26
    ],
    "rgb": [
      117,
      66,
      96
    ],
    "combinations": [
      236
    ]
  },
  "#5c7287": {
    "name": "Deep Violet / Plumbeous",
    "cmyk": [
      61,
      52,
      43,
      7
    ],
    "rgb": [
      92,
      114,
      135
    ],
    "combinations": [
      183,
      192,
      218
    ]
  },
  "#7e3075": {
    "name": "Veronia Purple",
    "cmyk": [
      42,
      78,
      46,
      15
    ],
    "rgb": [
      126,
      48,
      117
    ],
    "combinations": [
      13,
      24,
      168,
      183
    ]
  },
  "#53225c": {
    "name": "Dark Slate Purple",
    "cmyk": [
      64,
      85,
      60,
      10
    ],
    "rgb": [
      83,
      34,
      92
    ],
    "combinations": [
      225,
      248
    ]
  },
  "#6b2e63": {
    "name": "Taupe Brown",
    "cmyk": [
      30,
      70,
      35,
      40
    ],
    "rgb": [
      107,
      46,
      99
    ],
    "combinations": [
      57,
      123,
      174,
      224,
      275,
      280,
      288
    ]
  },
  "#531745": {
    "name": "Violet Carmine",
    "cmyk": [
      64,
      90,
      70,
      10
    ],
    "rgb": [
      83,
      23,
      69
    ],
    "combinations": [
      337
    ]
  },
  "#2619d1": {
    "name": "Violet",
    "cmyk": [
      85,
      90,
      18,
      0
    ],
    "rgb": [
      38,
      25,
      209
    ],
    "combinations": [
      42,
      56,
      130,
      156,
      164,
      181,
      205,
      214,
      226,
      316,
      331,
      335
    ]
  },
  "#3400a3": {
    "name": "Red Violet",
    "cmyk": [
      76,
      100,
      25,
      15
    ],
    "rgb": [
      52,
      0,
      163
    ],
    "combinations": [
      4,
      37,
      134,
      136,
      170,
      172,
      183,
      316
    ]
  },
  "#340059": {
    "name": "Cotinga Purple",
    "cmyk": [
      66,
      100,
      42,
      40
    ],
    "rgb": [
      52,
      0,
      89
    ],
    "combinations": [
      61,
      181,
      238,
      253,
      307,
      329,
      348
    ]
  },
  "#2d0060": {
    "name": "Dusky Madder Violet",
    "cmyk": [
      75,
      100,
      46,
      30
    ],
    "rgb": [
      45,
      0,
      96
    ],
    "combinations": [
      18,
      50,
      53,
      82,
      103,
      314
    ]
  },
  "#ffffff": {
    "name": "White",
    "cmyk": [
      0,
      0,
      0,
      0
    ],
    "rgb": [
      255,
      255,
      255
    ],
    "combinations": [
      55
    ]
  },
  "#b5d1cc": {
    "name": "Neutral Gray",
    "cmyk": [
      29,
      18,
      20,
      0
    ],
    "rgb": [
      181,
      209,
      204
    ],
    "combinations": [
      34,
      139,
      180,
      195,
      197,
      221,
      228,
      229,
      273,
      303,
      324,
      340
    ]
  },
  "#9fc2b2": {
    "name": "Mineral Gray",
    "cmyk": [
      33,
      18,
      25,
      7
    ],
    "rgb": [
      159,
      194,
      178
    ],
    "combinations": [
      11,
      30
    ]
  },
  "#9cb29e": {
    "name": "Warm Gray",
    "cmyk": [
      37,
      28,
      36,
      3
    ],
    "rgb": [
      156,
      178,
      158
    ],
    "combinations": [
      69,
      76,
      81,
      143,
      169,
      238,
      259,
      261
    ]
  },
  "#1b3644": {
    "name": "Slate Color",
    "cmyk": [
      85,
      70,
      62,
      30
    ],
    "rgb": [
      27,
      54,
      68
    ],
    "combinations": [
      27,
      33,
      57,
      140,
      202,
      243,
      245,
      251,
      253,
      263,
      296,
      329,
      335
    ]
  },
  "#000000": {
    "name": "Black",
    "cmyk": [
      20,
      10,
      15,
      100
    ],
    "rgb": [
      0,
      0,
      0
    ],
    "combinations": [
      46,
      52,
      62,
      69,
      112,
      117,
      144,
      190,
      207,
      216,
      221,
      242,
      255,
      256,
      269,
      276,
      288,
      198,
      313,
      323,
      337,
      340,
      344
    ]
  }
},
    combinations: {
  "1": {
    "colors": [
      "#de4500",
      "#29bdad"
    ],
    "type": "combination"
  },
  "2": {
    "colors": [
      "#ff8c00",
      "#0d2b52"
    ],
    "type": "combination"
  },
  "3": {
    "colors": [
      "#b85e00",
      "#fff59e"
    ],
    "type": "combination"
  },
  "4": {
    "colors": [
      "#c3a55c",
      "#3400a3"
    ],
    "type": "combination"
  },
  "5": {
    "colors": [
      "#328e13",
      "#003e83"
    ],
    "type": "combination"
  },
  "6": {
    "colors": [
      "#ff616b",
      "#000831"
    ],
    "type": "combination"
  },
  "7": {
    "colors": [
      "#ff5200",
      "#b3e8c2"
    ],
    "type": "combination"
  },
  "8": {
    "colors": [
      "#c2612c",
      "#b8b8ff"
    ],
    "type": "combination"
  },
  "9": {
    "colors": [
      "#3d0079",
      "#6e66d4"
    ],
    "type": "combination"
  },
  "10": {
    "colors": [
      "#c2612c",
      "#7e8743"
    ],
    "type": "combination"
  },
  "11": {
    "colors": [
      "#ebd999",
      "#9fc2b2"
    ],
    "type": "combination"
  },
  "12": {
    "colors": [
      "#c3a55c",
      "#2dbc94"
    ],
    "type": "combination"
  },
  "13": {
    "colors": [
      "#b85e00",
      "#7e3075"
    ],
    "type": "combination"
  },
  "14": {
    "colors": [
      "#ff4dc9",
      "#faed8f"
    ],
    "type": "combination"
  },
  "15": {
    "colors": [
      "#00d973",
      "#b8b8ff"
    ],
    "type": "combination"
  },
  "16": {
    "colors": [
      "#740909",
      "#abf5ed"
    ],
    "type": "combination"
  },
  "17": {
    "colors": [
      "#e62e73",
      "#33ff7d"
    ],
    "type": "combination"
  },
  "18": {
    "colors": [
      "#e6adcf",
      "#d1b0b3",
      "#2d0060"
    ],
    "type": "combination"
  },
  "19": {
    "colors": [
      "#522000",
      "#7aff00"
    ],
    "type": "combination"
  },
  "20": {
    "colors": [
      "#80ffcc",
      "#cc85d1"
    ],
    "type": "combination"
  },
  "21": {
    "colors": [
      "#ff616b",
      "#33ff7d"
    ],
    "type": "combination"
  },
  "22": {
    "colors": [
      "#ffff00",
      "#ff8c00",
      "#0024cc"
    ],
    "type": "combination"
  },
  "23": {
    "colors": [
      "#ffbf6e",
      "#bf36e0",
      "#9161f2"
    ],
    "type": "combination"
  },
  "24": {
    "colors": [
      "#503d00",
      "#7e3075"
    ],
    "type": "combination"
  },
  "25": {
    "colors": [
      "#c9303e",
      "#bfffe6"
    ],
    "type": "combination"
  },
  "26": {
    "colors": [
      "#fa9442",
      "#5e4017"
    ],
    "type": "combination"
  },
  "27": {
    "colors": [
      "#ffa6d9",
      "#1b3644"
    ],
    "type": "combination"
  },
  "28": {
    "colors": [
      "#651300",
      "#000831"
    ],
    "type": "combination"
  },
  "29": {
    "colors": [
      "#759243",
      "#96bfe6"
    ],
    "type": "combination"
  },
  "30": {
    "colors": [
      "#a90636",
      "#9fc2b2"
    ],
    "type": "combination"
  },
  "31": {
    "colors": [
      "#e81900",
      "#fff59e"
    ],
    "type": "combination"
  },
  "32": {
    "colors": [
      "#d99e73",
      "#7aff00"
    ],
    "type": "combination"
  },
  "33": {
    "colors": [
      "#b85e00",
      "#1b3644"
    ],
    "type": "combination"
  },
  "34": {
    "colors": [
      "#ff5ec4",
      "#b5d1cc"
    ],
    "type": "combination"
  },
  "35": {
    "colors": [
      "#b08699",
      "#a10b2b"
    ],
    "type": "combination"
  },
  "36": {
    "colors": [
      "#baa600",
      "#b5ffc2"
    ],
    "type": "combination"
  },
  "37": {
    "colors": [
      "#a32100",
      "#3400a3"
    ],
    "type": "combination"
  },
  "38": {
    "colors": [
      "#1b8e13",
      "#0024cc"
    ],
    "type": "combination"
  },
  "39": {
    "colors": [
      "#d60036",
      "#0057ba"
    ],
    "type": "combination"
  },
  "40": {
    "colors": [
      "#c74300",
      "#a6d40d"
    ],
    "type": "combination"
  },
  "41": {
    "colors": [
      "#7e8743",
      "#80ffcc"
    ],
    "type": "combination"
  },
  "42": {
    "colors": [
      "#e0b81f",
      "#2619d1"
    ],
    "type": "combination"
  },
  "43": {
    "colors": [
      "#ffa6d9",
      "#9c52f2"
    ],
    "type": "combination"
  },
  "44": {
    "colors": [
      "#23c17c",
      "#4f8fe6"
    ],
    "type": "combination"
  },
  "45": {
    "colors": [
      "#ffcfc4",
      "#f2ff26"
    ],
    "type": "combination"
  },
  "46": {
    "colors": [
      "#ff5200",
      "#000000"
    ],
    "type": "combination"
  },
  "47": {
    "colors": [
      "#c9303e",
      "#bfabcc"
    ],
    "type": "combination"
  },
  "48": {
    "colors": [
      "#b319ab",
      "#0057ba"
    ],
    "type": "combination"
  },
  "49": {
    "colors": [
      "#abf5ed",
      "#0d75ff"
    ],
    "type": "combination"
  },
  "50": {
    "colors": [
      "#ebd999",
      "#2d0060"
    ],
    "type": "combination"
  },
  "51": {
    "colors": [
      "#a10b2b",
      "#0d75ff"
    ],
    "type": "combination"
  },
  "52": {
    "colors": [
      "#f5f5b8",
      "#000000"
    ],
    "type": "combination"
  },
  "53": {
    "colors": [
      "#ff8c00",
      "#2d0060"
    ],
    "type": "combination"
  },
  "54": {
    "colors": [
      "#00d973",
      "#a6e6db"
    ],
    "type": "combination"
  },
  "55": {
    "colors": [
      "#d94d99",
      "#ffffff"
    ],
    "type": "combination"
  },
  "56": {
    "colors": [
      "#bfabcc",
      "#2619d1"
    ],
    "type": "combination"
  },
  "57": {
    "colors": [
      "#6b2e63",
      "#1b3644"
    ],
    "type": "combination"
  },
  "58": {
    "colors": [
      "#681916",
      "#33ff7d"
    ],
    "type": "combination"
  },
  "59": {
    "colors": [
      "#ff5ec4",
      "#a6d40d"
    ],
    "type": "combination"
  },
  "60": {
    "colors": [
      "#fff59e",
      "#0d2b52"
    ],
    "type": "combination"
  },
  "61": {
    "colors": [
      "#bdf226",
      "#340059"
    ],
    "type": "combination"
  },
  "62": {
    "colors": [
      "#ffff00",
      "#000000"
    ],
    "type": "combination"
  },
  "63": {
    "colors": [
      "#5c2c45",
      "#29bdad"
    ],
    "type": "combination"
  },
  "64": {
    "colors": [
      "#9c52f2",
      "#4d52de"
    ],
    "type": "combination"
  },
  "65": {
    "colors": [
      "#baa600",
      "#80ffcc"
    ],
    "type": "combination"
  },
  "66": {
    "colors": [
      "#d1bd19",
      "#58771e"
    ],
    "type": "combination"
  },
  "67": {
    "colors": [
      "#4f8fe6",
      "#0d2b52"
    ],
    "type": "combination"
  },
  "68": {
    "colors": [
      "#b08699",
      "#ffff00"
    ],
    "type": "combination"
  },
  "69": {
    "colors": [
      "#9cb29e",
      "#000000"
    ],
    "type": "combination"
  },
  "70": {
    "colors": [
      "#b85e00",
      "#405416"
    ],
    "type": "combination"
  },
  "71": {
    "colors": [
      "#a90636",
      "#d99e73"
    ],
    "type": "combination"
  },
  "72": {
    "colors": [
      "#f5f5b8",
      "#abf5ed"
    ],
    "type": "combination"
  },
  "73": {
    "colors": [
      "#5e4017",
      "#85b857"
    ],
    "type": "combination"
  },
  "74": {
    "colors": [
      "#b5ffc2",
      "#2dbc94"
    ],
    "type": "combination"
  },
  "75": {
    "colors": [
      "#abf5ed",
      "#202d85"
    ],
    "type": "combination"
  },
  "76": {
    "colors": [
      "#fff59e",
      "#9cb29e"
    ],
    "type": "combination"
  },
  "77": {
    "colors": [
      "#e62e73"
    ],
    "type": "combination"
  },
  "78": {
    "colors": [
      "#f2ad78",
      "#6bffb3"
    ],
    "type": "combination"
  },
  "79": {
    "colors": [
      "#651300",
      "#2dbc94"
    ],
    "type": "combination"
  },
  "80": {
    "colors": [
      "#f5f5b8",
      "#bf36e0",
      "#9161f2"
    ],
    "type": "combination"
  },
  "81": {
    "colors": [
      "#fa9442",
      "#9cb29e"
    ],
    "type": "combination"
  },
  "82": {
    "colors": [
      "#681916",
      "#2d0060"
    ],
    "type": "combination"
  },
  "83": {
    "colors": [
      "#bcd382",
      "#202d85"
    ],
    "type": "combination"
  },
  "84": {
    "colors": [
      "#ffcfc4",
      "#0f261f"
    ],
    "type": "combination"
  },
  "85": {
    "colors": [
      "#c74300",
      "#008aa1"
    ],
    "type": "combination"
  },
  "86": {
    "colors": [
      "#b85e00",
      "#33ff7d"
    ],
    "type": "combination"
  },
  "87": {
    "colors": [
      "#ffa6d9",
      "#a6d40d"
    ],
    "type": "combination"
  },
  "88": {
    "colors": [
      "#ffcfc4",
      "#0d75ff"
    ],
    "type": "combination"
  },
  "89": {
    "colors": [
      "#ff8c00",
      "#202d85"
    ],
    "type": "combination"
  },
  "90": {
    "colors": [
      "#ff5ec4",
      "#9c52f2"
    ],
    "type": "combination"
  },
  "91": {
    "colors": [
      "#5c2c45",
      "#c05200"
    ],
    "type": "combination"
  },
  "92": {
    "colors": [
      "#ff7399",
      "#00d973"
    ],
    "type": "combination"
  },
  "93": {
    "colors": [
      "#a6d40d",
      "#a6e6db"
    ],
    "type": "combination"
  },
  "94": {
    "colors": [
      "#ebd999",
      "#00592e"
    ],
    "type": "combination"
  },
  "95": {
    "colors": [
      "#681916",
      "#06004f"
    ],
    "type": "combination"
  },
  "96": {
    "colors": [
      "#e0b81f",
      "#718600"
    ],
    "type": "combination"
  },
  "97": {
    "colors": [
      "#ffa6d9",
      "#c9303e"
    ],
    "type": "combination"
  },
  "98": {
    "colors": [
      "#651300",
      "#202d85"
    ],
    "type": "combination"
  },
  "99": {
    "colors": [
      "#fff59e",
      "#29bdad"
    ],
    "type": "combination"
  },
  "100": {
    "colors": [
      "#888d2a",
      "#6e66d4"
    ],
    "type": "combination"
  },
  "101": {
    "colors": [
      "#e6adcf",
      "#0024cc"
    ],
    "type": "combination"
  },
  "102": {
    "colors": [
      "#ebd999",
      "#c05200"
    ],
    "type": "combination"
  },
  "103": {
    "colors": [
      "#c2612c",
      "#2d0060"
    ],
    "type": "combination"
  },
  "104": {
    "colors": [
      "#a10b2b",
      "#f5f5b8"
    ],
    "type": "combination"
  },
  "105": {
    "colors": [
      "#e6adcf",
      "#85b857"
    ],
    "type": "combination"
  },
  "106": {
    "colors": [
      "#008aa1",
      "#06004f"
    ],
    "type": "combination"
  },
  "107": {
    "colors": [
      "#ffe600",
      "#76844e"
    ],
    "type": "combination"
  },
  "108": {
    "colors": [
      "#ff5ec4",
      "#a32100"
    ],
    "type": "combination"
  },
  "109": {
    "colors": [
      "#fff59e",
      "#324e2a"
    ],
    "type": "combination"
  },
  "110": {
    "colors": [
      "#6c2b11",
      "#362304"
    ],
    "type": "combination"
  },
  "111": {
    "colors": [
      "#fff59e",
      "#a6ff47"
    ],
    "type": "combination"
  },
  "112": {
    "colors": [
      "#ff616b",
      "#000000"
    ],
    "type": "combination"
  },
  "113": {
    "colors": [
      "#ffcfc4",
      "#362304"
    ],
    "type": "combination"
  },
  "114": {
    "colors": [
      "#ffab00",
      "#008aa1"
    ],
    "type": "combination"
  },
  "115": {
    "colors": [
      "#faed8f",
      "#ff3319"
    ],
    "type": "combination"
  },
  "116": {
    "colors": [
      "#e6adcf",
      "#4733ff"
    ],
    "type": "combination"
  },
  "117": {
    "colors": [
      "#d60036",
      "#000000"
    ],
    "type": "combination"
  },
  "118": {
    "colors": [
      "#e0b81f",
      "#362304"
    ],
    "type": "combination"
  },
  "119": {
    "colors": [
      "#a6e6db",
      "#0d2b52"
    ],
    "type": "combination"
  },
  "120": {
    "colors": [
      "#e6adcf",
      "#a90636"
    ],
    "type": "combination"
  },
  "121": {
    "colors": [
      "#6c2b11",
      "#d99e73",
      "#405416"
    ],
    "type": "combination"
  },
  "122": {
    "colors": [
      "#d60036",
      "#ffb852",
      "#00d973"
    ],
    "type": "combination"
  },
  "123": {
    "colors": [
      "#ff7399",
      "#f2ff26",
      "#6b2e63"
    ],
    "type": "combination"
  },
  "124": {
    "colors": [
      "#730f1f",
      "#e0b81f",
      "#99b333"
    ],
    "type": "combination"
  },
  "125": {
    "colors": [
      "#e6adcf",
      "#d1b0b3",
      "#29bdad",
      "#202d85"
    ],
    "type": "combination"
  },
  "126": {
    "colors": [
      "#ebd999",
      "#e0b81f",
      "#0024cc"
    ],
    "type": "combination"
  },
  "127": {
    "colors": [
      "#ffbf6e",
      "#56aa69",
      "#4d52de"
    ],
    "type": "combination"
  },
  "128": {
    "colors": [
      "#ffa6d9",
      "#6bffb3",
      "#bf36e0",
      "#9161f2"
    ],
    "type": "combination"
  },
  "129": {
    "colors": [
      "#ffe600",
      "#b68400",
      "#96bfe6"
    ],
    "type": "combination"
  },
  "130": {
    "colors": [
      "#b85e00",
      "#a10b2b",
      "#2619d1"
    ],
    "type": "combination"
  },
  "131": {
    "colors": [
      "#b85e00",
      "#de4500",
      "#00cf91"
    ],
    "type": "combination"
  },
  "132": {
    "colors": [
      "#f5f5b8",
      "#fa9442",
      "#a6d40d"
    ],
    "type": "combination"
  },
  "133": {
    "colors": [
      "#740909",
      "#a6d40d",
      "#33ff7d"
    ],
    "type": "combination"
  },
  "134": {
    "colors": [
      "#ff5ec4",
      "#bf36e0",
      "#9161f2",
      "#3400a3"
    ],
    "type": "combination"
  },
  "135": {
    "colors": [
      "#f5f5b8",
      "#328e13",
      "#96bfe6"
    ],
    "type": "combination"
  },
  "136": {
    "colors": [
      "#d50c42",
      "#19cc33",
      "#3400a3"
    ],
    "type": "combination"
  },
  "137": {
    "colors": [
      "#c9303e",
      "#ffbf6e"
    ],
    "type": "combination"
  },
  "138": {
    "colors": [
      "#fa9442",
      "#f2ff26",
      "#6bffb3"
    ],
    "type": "combination"
  },
  "139": {
    "colors": [
      "#96bfe6",
      "#000831",
      "#b5d1cc"
    ],
    "type": "combination"
  },
  "140": {
    "colors": [
      "#fa9442",
      "#008aa1",
      "#1b3644"
    ],
    "type": "combination"
  },
  "141": {
    "colors": [
      "#ff5200",
      "#a6ff47",
      "#0d2b52"
    ],
    "type": "combination"
  },
  "142": {
    "colors": [
      "#9e194d",
      "#baa600",
      "#96bfe6"
    ],
    "type": "combination"
  },
  "143": {
    "colors": [
      "#0d75ff",
      "#b875eb",
      "#9cb29e"
    ],
    "type": "combination"
  },
  "144": {
    "colors": [
      "#b319ab",
      "#ff5200",
      "#000000"
    ],
    "type": "combination"
  },
  "145": {
    "colors": [
      "#6c2b11",
      "#06004f"
    ],
    "type": "combination"
  },
  "146": {
    "colors": [
      "#b68400",
      "#505423",
      "#1b8e13"
    ],
    "type": "combination"
  },
  "147": {
    "colors": [
      "#ff4dc9",
      "#740909",
      "#b5ffc2"
    ],
    "type": "combination"
  },
  "148": {
    "colors": [
      "#d1bd19",
      "#ffab00",
      "#29bdad"
    ],
    "type": "combination"
  },
  "149": {
    "colors": [
      "#d1bd19",
      "#ff5200",
      "#0f261f"
    ],
    "type": "combination"
  },
  "150": {
    "colors": [
      "#ffcfc4",
      "#b3e8c2"
    ],
    "type": "combination"
  },
  "151": {
    "colors": [
      "#f5f5b8",
      "#ff8c00"
    ],
    "type": "combination"
  },
  "152": {
    "colors": [
      "#c9303e",
      "#681916",
      "#a6e6db"
    ],
    "type": "combination"
  },
  "153": {
    "colors": [
      "#ff5ec4",
      "#ffab00"
    ],
    "type": "combination"
  },
  "154": {
    "colors": [
      "#d60036",
      "#ffff00",
      "#0d75ff"
    ],
    "type": "combination"
  },
  "155": {
    "colors": [
      "#fa2b00",
      "#00d973",
      "#000831"
    ],
    "type": "combination"
  },
  "156": {
    "colors": [
      "#d1bd19",
      "#94ff94",
      "#2619d1"
    ],
    "type": "combination"
  },
  "157": {
    "colors": [
      "#6f0043",
      "#d1bd19",
      "#4f8fe6"
    ],
    "type": "combination"
  },
  "158": {
    "colors": [
      "#f2ff26",
      "#c2612c",
      "#7aff00"
    ],
    "type": "combination"
  },
  "159": {
    "colors": [
      "#b68400",
      "#80ffcc",
      "#b8b8ff"
    ],
    "type": "combination"
  },
  "160": {
    "colors": [
      "#baa600",
      "#5e4017",
      "#417777"
    ],
    "type": "combination"
  },
  "161": {
    "colors": [
      "#6c2b11",
      "#0057ba"
    ],
    "type": "combination"
  },
  "162": {
    "colors": [
      "#d94d99",
      "#b875eb"
    ],
    "type": "combination"
  },
  "163": {
    "colors": [
      "#ffe600",
      "#b5ffc2",
      "#008aa1"
    ],
    "type": "combination"
  },
  "164": {
    "colors": [
      "#e81900",
      "#ffab00",
      "#2619d1"
    ],
    "type": "combination"
  },
  "165": {
    "colors": [
      "#ff4dc9",
      "#5c2c45"
    ],
    "type": "combination"
  },
  "166": {
    "colors": [
      "#ff616b",
      "#faed8f",
      "#0f261f"
    ],
    "type": "combination"
  },
  "167": {
    "colors": [
      "#c0b490",
      "#abf5ed"
    ],
    "type": "combination"
  },
  "168": {
    "colors": [
      "#f2ff26",
      "#7e3075"
    ],
    "type": "combination"
  },
  "169": {
    "colors": [
      "#ffa6d9",
      "#fff59e",
      "#9cb29e"
    ],
    "type": "combination"
  },
  "170": {
    "colors": [
      "#b319ab",
      "#ffab00",
      "#3400a3"
    ],
    "type": "combination"
  },
  "171": {
    "colors": [
      "#730f1f",
      "#ff8c00",
      "#b3e8c2"
    ],
    "type": "combination"
  },
  "172": {
    "colors": [
      "#c2612c",
      "#008aa1",
      "#3400a3"
    ],
    "type": "combination"
  },
  "173": {
    "colors": [
      "#f2ff26",
      "#651300",
      "#b5ffc2"
    ],
    "type": "combination"
  },
  "174": {
    "colors": [
      "#ffa6d9",
      "#bfabcc",
      "#6b2e63"
    ],
    "type": "combination"
  },
  "175": {
    "colors": [
      "#f2ad78",
      "#bcd382",
      "#4733ff"
    ],
    "type": "combination"
  },
  "176": {
    "colors": [
      "#ffb3f0",
      "#ffcfc4",
      "#80ffcc"
    ],
    "type": "combination"
  },
  "177": {
    "colors": [
      "#730f1f",
      "#888d2a",
      "#b8b8ff"
    ],
    "type": "combination"
  },
  "178": {
    "colors": [
      "#ebd999",
      "#a6e6db",
      "#2dbc94"
    ],
    "type": "combination"
  },
  "179": {
    "colors": [
      "#e81900",
      "#fa9442",
      "#0024cc"
    ],
    "type": "combination"
  },
  "180": {
    "colors": [
      "#ffbf6e",
      "#bf36e0",
      "#9161f2",
      "#b5d1cc"
    ],
    "type": "combination"
  },
  "181": {
    "colors": [
      "#a10b2b",
      "#2619d1",
      "#340059"
    ],
    "type": "combination"
  },
  "182": {
    "colors": [
      "#b85e00",
      "#362304",
      "#000831"
    ],
    "type": "combination"
  },
  "183": {
    "colors": [
      "#5c7287",
      "#7e3075",
      "#3400a3"
    ],
    "type": "combination"
  },
  "184": {
    "colors": [
      "#ff4dc9",
      "#ebd999",
      "#76844e"
    ],
    "type": "combination"
  },
  "185": {
    "colors": [
      "#b08699",
      "#c9303e",
      "#fff59e"
    ],
    "type": "combination"
  },
  "186": {
    "colors": [
      "#681916",
      "#d99e73",
      "#0d75ff"
    ],
    "type": "combination"
  },
  "187": {
    "colors": [
      "#0057ba",
      "#bfabcc",
      "#9c52f2"
    ],
    "type": "combination"
  },
  "188": {
    "colors": [
      "#96bfe6",
      "#94ff94"
    ],
    "type": "combination"
  },
  "189": {
    "colors": [
      "#f2ff26",
      "#172713",
      "#6bffb3"
    ],
    "type": "combination"
  },
  "190": {
    "colors": [
      "#ebd999",
      "#de4500",
      "#000000"
    ],
    "type": "combination"
  },
  "191": {
    "colors": [
      "#b08699",
      "#e0b81f",
      "#0d75ff"
    ],
    "type": "combination"
  },
  "192": {
    "colors": [
      "#ffb852",
      "#362304",
      "#5c7287"
    ],
    "type": "combination"
  },
  "193": {
    "colors": [
      "#ff616b",
      "#faed8f",
      "#23c17c"
    ],
    "type": "combination"
  },
  "194": {
    "colors": [
      "#fa2b00",
      "#ffcfc4",
      "#4f8fe6"
    ],
    "type": "combination"
  },
  "195": {
    "colors": [
      "#ff4dc9",
      "#fff59e",
      "#b5d1cc"
    ],
    "type": "combination"
  },
  "196": {
    "colors": [
      "#abf5ed",
      "#4733ff"
    ],
    "type": "combination"
  },
  "197": {
    "colors": [
      "#ff5ec4",
      "#4d52de",
      "#b5d1cc"
    ],
    "type": "combination"
  },
  "198": {
    "colors": [
      "#a93400",
      "#ffe600",
      "#40c945",
      "#000000"
    ],
    "type": "combination"
  },
  "199": {
    "colors": [
      "#a7374b",
      "#706934",
      "#0024cc"
    ],
    "type": "combination"
  },
  "200": {
    "colors": [
      "#a10b2b",
      "#bcd382",
      "#85b857"
    ],
    "type": "combination"
  },
  "201": {
    "colors": [
      "#ff616b",
      "#718600",
      "#94ff94"
    ],
    "type": "combination"
  },
  "202": {
    "colors": [
      "#b5ffc2",
      "#94ff94",
      "#1b3644"
    ],
    "type": "combination"
  },
  "203": {
    "colors": [
      "#fff59e",
      "#f59994",
      "#405416"
    ],
    "type": "combination"
  },
  "204": {
    "colors": [
      "#b319ab",
      "#c2612c",
      "#a6e6db"
    ],
    "type": "combination"
  },
  "205": {
    "colors": [
      "#730f1f",
      "#f59994",
      "#2619d1"
    ],
    "type": "combination"
  },
  "206": {
    "colors": [
      "#ffa6d9",
      "#c2612c"
    ],
    "type": "combination"
  },
  "207": {
    "colors": [
      "#9b5348",
      "#b3e8c2",
      "#000000"
    ],
    "type": "combination"
  },
  "208": {
    "colors": [
      "#f5f5b8",
      "#2dbc94",
      "#008aa1"
    ],
    "type": "combination"
  },
  "209": {
    "colors": [
      "#ebd999",
      "#ff8c00",
      "#96bfe6"
    ],
    "type": "combination"
  },
  "210": {
    "colors": [
      "#ffbf6e",
      "#f2ff26",
      "#405416"
    ],
    "type": "combination"
  },
  "211": {
    "colors": [
      "#ff7340",
      "#99b333",
      "#000831"
    ],
    "type": "combination"
  },
  "212": {
    "colors": [
      "#a90636",
      "#8c6510",
      "#96bfe6"
    ],
    "type": "combination"
  },
  "213": {
    "colors": [
      "#f59994",
      "#ffe600",
      "#abf5ed"
    ],
    "type": "combination"
  },
  "214": {
    "colors": [
      "#ebd999",
      "#9b5348",
      "#2619d1"
    ],
    "type": "combination"
  },
  "215": {
    "colors": [
      "#ffb852",
      "#0d75ff"
    ],
    "type": "combination"
  },
  "216": {
    "colors": [
      "#fa2b00",
      "#40c945",
      "#000000"
    ],
    "type": "combination"
  },
  "217": {
    "colors": [
      "#730f1f",
      "#d99e73",
      "#1b8e13"
    ],
    "type": "combination"
  },
  "218": {
    "colors": [
      "#0057ba",
      "#b8b8ff",
      "#5c7287"
    ],
    "type": "combination"
  },
  "219": {
    "colors": [
      "#fa2b00",
      "#85b857",
      "#00592e"
    ],
    "type": "combination"
  },
  "220": {
    "colors": [
      "#b90078",
      "#d99e73",
      "#9c52f2"
    ],
    "type": "combination"
  },
  "221": {
    "colors": [
      "#a10b2b",
      "#b5d1cc",
      "#000000"
    ],
    "type": "combination"
  },
  "222": {
    "colors": [
      "#e0b81f",
      "#ff8c00",
      "#c05200"
    ],
    "type": "combination"
  },
  "223": {
    "colors": [
      "#b08699",
      "#d99e73",
      "#b5ffc2"
    ],
    "type": "combination"
  },
  "224": {
    "colors": [
      "#ff4dc9",
      "#417777",
      "#6b2e63"
    ],
    "type": "combination"
  },
  "225": {
    "colors": [
      "#d60036",
      "#00592e",
      "#53225c"
    ],
    "type": "combination"
  },
  "226": {
    "colors": [
      "#5c2c45",
      "#ffb852",
      "#2619d1"
    ],
    "type": "combination"
  },
  "227": {
    "colors": [
      "#ffb3f0",
      "#a6e6db",
      "#29bdad"
    ],
    "type": "combination"
  },
  "228": {
    "colors": [
      "#a10b2b",
      "#fff59e",
      "#b5d1cc"
    ],
    "type": "combination"
  },
  "229": {
    "colors": [
      "#172713",
      "#b5d1cc"
    ],
    "type": "combination"
  },
  "230": {
    "colors": [
      "#ff616b",
      "#b5ffc2",
      "#94ff94"
    ],
    "type": "combination"
  },
  "231": {
    "colors": [
      "#681916",
      "#4f8fe6"
    ],
    "type": "combination"
  },
  "232": {
    "colors": [
      "#d60036",
      "#f2ad78",
      "#000831"
    ],
    "type": "combination"
  },
  "233": {
    "colors": [
      "#a10b2b",
      "#888d2a",
      "#202d85"
    ],
    "type": "combination"
  },
  "234": {
    "colors": [
      "#ffbf6e",
      "#5e4017",
      "#abf5ed"
    ],
    "type": "combination"
  },
  "235": {
    "colors": [
      "#ebd999",
      "#ff8c00",
      "#bfabcc"
    ],
    "type": "combination"
  },
  "236": {
    "colors": [
      "#b68400",
      "#0024cc",
      "#754260"
    ],
    "type": "combination"
  },
  "237": {
    "colors": [
      "#a10b2b",
      "#651300",
      "#56aa69",
      "#96bfe6"
    ],
    "type": "combination"
  },
  "238": {
    "colors": [
      "#d99e73",
      "#340059",
      "#9cb29e"
    ],
    "type": "combination"
  },
  "239": {
    "colors": [
      "#b08699",
      "#c4bf33",
      "#b3e8c2"
    ],
    "type": "combination"
  },
  "240": {
    "colors": [
      "#ff788c",
      "#ffff00",
      "#29bdad"
    ],
    "type": "combination"
  },
  "241": {
    "colors": [
      "#e81900",
      "#fff59e",
      "#c3a55c",
      "#417777"
    ],
    "type": "combination"
  },
  "242": {
    "colors": [
      "#ff5ec4",
      "#a93400",
      "#1b8e13",
      "#000000"
    ],
    "type": "combination"
  },
  "243": {
    "colors": [
      "#b85e00",
      "#ebd999",
      "#58771e",
      "#1b3644"
    ],
    "type": "combination"
  },
  "244": {
    "colors": [
      "#b08699",
      "#c74300",
      "#5c8a73",
      "#008aa1"
    ],
    "type": "combination"
  },
  "245": {
    "colors": [
      "#a10b2b",
      "#6ea900",
      "#0d2b52",
      "#1b3644"
    ],
    "type": "combination"
  },
  "246": {
    "colors": [
      "#ffa6d9",
      "#a32100",
      "#f5f5b8",
      "#ffbf6e"
    ],
    "type": "combination"
  },
  "247": {
    "colors": [
      "#b85e00",
      "#ffe600",
      "#00d973",
      "#0024cc"
    ],
    "type": "combination"
  },
  "248": {
    "colors": [
      "#ff5ec4",
      "#b68400",
      "#b8b8ff",
      "#53225c"
    ],
    "type": "combination"
  },
  "249": {
    "colors": [
      "#681916",
      "#c0b490",
      "#d1bd19",
      "#417777"
    ],
    "type": "combination"
  },
  "250": {
    "colors": [
      "#c4bf33",
      "#ff3319",
      "#33ff7d",
      "#bfffe6"
    ],
    "type": "combination"
  },
  "251": {
    "colors": [
      "#a10045",
      "#ffff00",
      "#1b8e13",
      "#1b3644"
    ],
    "type": "combination"
  },
  "252": {
    "colors": [
      "#e62e73",
      "#b85e00",
      "#baa600",
      "#2dbc94"
    ],
    "type": "combination"
  },
  "253": {
    "colors": [
      "#f2ff26",
      "#ff7340",
      "#340059",
      "#1b3644"
    ],
    "type": "combination"
  },
  "254": {
    "colors": [
      "#ffa6d9",
      "#f5f5b8",
      "#718600",
      "#cc85d1"
    ],
    "type": "combination"
  },
  "255": {
    "colors": [
      "#b85e00",
      "#c4bf33",
      "#80ffcc",
      "#000000"
    ],
    "type": "combination"
  },
  "256": {
    "colors": [
      "#f59994",
      "#ff5200",
      "#19cc33",
      "#000000"
    ],
    "type": "combination"
  },
  "257": {
    "colors": [
      "#f20000",
      "#ffab00",
      "#0d75ff",
      "#9c52f2"
    ],
    "type": "combination"
  },
  "258": {
    "colors": [
      "#730f1f",
      "#f2ad78",
      "#718600",
      "#008aa1"
    ],
    "type": "combination"
  },
  "259": {
    "colors": [
      "#f2ff26",
      "#2dbc94",
      "#0057ba",
      "#9cb29e"
    ],
    "type": "combination"
  },
  "260": {
    "colors": [
      "#d94d99",
      "#f59994",
      "#b3e8c2",
      "#33ff7d"
    ],
    "type": "combination"
  },
  "261": {
    "colors": [
      "#a10045",
      "#fff59e",
      "#80ffcc",
      "#9cb29e"
    ],
    "type": "combination"
  },
  "262": {
    "colors": [
      "#e62e73",
      "#ebd999",
      "#a6d40d",
      "#328e13"
    ],
    "type": "combination"
  },
  "263": {
    "colors": [
      "#a93400",
      "#f2ad78",
      "#b5ffc2",
      "#1b3644"
    ],
    "type": "combination"
  },
  "264": {
    "colors": [
      "#ffa6d9",
      "#e81900",
      "#b3d9a3",
      "#29bdad"
    ],
    "type": "combination"
  },
  "265": {
    "colors": [
      "#d94d99",
      "#ffe600",
      "#99b333",
      "#06004f"
    ],
    "type": "combination"
  },
  "266": {
    "colors": [
      "#f20000",
      "#ebd999",
      "#00d973"
    ],
    "type": "combination"
  },
  "267": {
    "colors": [
      "#ffb852",
      "#ff8c00",
      "#00d973",
      "#0d75ff"
    ],
    "type": "combination"
  },
  "268": {
    "colors": [
      "#b08699",
      "#b85e00",
      "#172713",
      "#bfffe6"
    ],
    "type": "combination"
  },
  "269": {
    "colors": [
      "#b85e00",
      "#730f1f",
      "#9c52f2",
      "#000000"
    ],
    "type": "combination"
  },
  "270": {
    "colors": [
      "#e62e73",
      "#f5f5b8",
      "#58771e",
      "#328e13"
    ],
    "type": "combination"
  },
  "271": {
    "colors": [
      "#b90078",
      "#94ff94",
      "#2dbc94",
      "#0f261f"
    ],
    "type": "combination"
  },
  "272": {
    "colors": [
      "#fff59e",
      "#ff5200",
      "#b5ffc2",
      "#96bfe6"
    ],
    "type": "combination"
  },
  "273": {
    "colors": [
      "#ffb3f0",
      "#6f0043",
      "#9b5348",
      "#b5d1cc"
    ],
    "type": "combination"
  },
  "274": {
    "colors": [
      "#ff3319",
      "#7e8743",
      "#4f8fe6",
      "#bf36e0",
      "#9161f2"
    ],
    "type": "combination"
  },
  "275": {
    "colors": [
      "#c9303e",
      "#c0b490",
      "#651300",
      "#6b2e63"
    ],
    "type": "combination"
  },
  "276": {
    "colors": [
      "#ff5ec4",
      "#ffcfc4",
      "#a6ff47",
      "#000000"
    ],
    "type": "combination"
  },
  "277": {
    "colors": [
      "#ff4dc9",
      "#b319ab",
      "#718600",
      "#06004f"
    ],
    "type": "combination"
  },
  "278": {
    "colors": [
      "#ffb852",
      "#d1bd19",
      "#328e13",
      "#00592e"
    ],
    "type": "combination"
  },
  "279": {
    "colors": [
      "#b85e00",
      "#f59994",
      "#c0b490",
      "#0d2b52"
    ],
    "type": "combination"
  },
  "280": {
    "colors": [
      "#e62e73",
      "#405416",
      "#cc85d1",
      "#6b2e63"
    ],
    "type": "combination"
  },
  "281": {
    "colors": [
      "#fff59e",
      "#00d973",
      "#94ff94",
      "#008aa1"
    ],
    "type": "combination"
  },
  "282": {
    "colors": [
      "#e62e73",
      "#c2975a",
      "#94ff94",
      "#b875eb"
    ],
    "type": "combination"
  },
  "283": {
    "colors": [
      "#a7374b",
      "#730f1f",
      "#85b857",
      "#6bffb3"
    ],
    "type": "combination"
  },
  "284": {
    "colors": [
      "#ed3d66",
      "#ffe600",
      "#33ff7d",
      "#00592e"
    ],
    "type": "combination"
  },
  "285": {
    "colors": [
      "#b08699",
      "#a93400",
      "#ff3319",
      "#b5ffc2"
    ],
    "type": "combination"
  },
  "286": {
    "colors": [
      "#a93400",
      "#ffab00",
      "#00cf91",
      "#202d85"
    ],
    "type": "combination"
  },
  "287": {
    "colors": [
      "#ff5ec4",
      "#c4bf33",
      "#abf5ed",
      "#80ffcc"
    ],
    "type": "combination"
  },
  "288": {
    "colors": [
      "#ff8c00",
      "#503d00",
      "#6b2e63",
      "#000000"
    ],
    "type": "combination"
  },
  "289": {
    "colors": [
      "#f2ff26",
      "#bdf226",
      "#202d85",
      "#06004f"
    ],
    "type": "combination"
  },
  "290": {
    "colors": [
      "#5c2c45",
      "#fff59e",
      "#405416",
      "#94ff94"
    ],
    "type": "combination"
  },
  "291": {
    "colors": [
      "#bdf226",
      "#33ff7d",
      "#94ff94",
      "#80ffcc"
    ],
    "type": "combination"
  },
  "292": {
    "colors": [
      "#fff59e",
      "#f2ad78",
      "#c3a55c",
      "#c0b490"
    ],
    "type": "combination"
  },
  "293": {
    "colors": [
      "#b85e00",
      "#b5ffc2",
      "#65a98f",
      "#40c945"
    ],
    "type": "combination"
  },
  "294": {
    "colors": [
      "#f5f5b8",
      "#ffb852",
      "#328e13",
      "#96bfe6"
    ],
    "type": "combination"
  },
  "295": {
    "colors": [
      "#ffb852",
      "#ffff00",
      "#0d75ff",
      "#06004f"
    ],
    "type": "combination"
  },
  "296": {
    "colors": [
      "#f5f5b8",
      "#d99e73",
      "#5e4017",
      "#1b3644"
    ],
    "type": "combination"
  },
  "297": {
    "colors": [
      "#a93400",
      "#ff8c00",
      "#58771e",
      "#202d85"
    ],
    "type": "combination"
  },
  "298": {
    "colors": [
      "#b85e00",
      "#f2ff26",
      "#ff3319"
    ],
    "type": "combination"
  },
  "299": {
    "colors": [
      "#cc1a97",
      "#f59994",
      "#6ea900",
      "#008aa1"
    ],
    "type": "combination"
  },
  "300": {
    "colors": [
      "#ff616b",
      "#ffb852",
      "#b5ffc2",
      "#80ffcc"
    ],
    "type": "combination"
  },
  "301": {
    "colors": [
      "#f20000",
      "#ebd999",
      "#9c52f2"
    ],
    "type": "combination"
  },
  "302": {
    "colors": [
      "#ffb852",
      "#c0b490",
      "#bfffe6",
      "#008aa1"
    ],
    "type": "combination"
  },
  "303": {
    "colors": [
      "#faed8f",
      "#ff3319",
      "#172713",
      "#b5d1cc"
    ],
    "type": "combination"
  },
  "304": {
    "colors": [
      "#681916",
      "#ffb852",
      "#7e8743",
      "#00d973"
    ],
    "type": "combination"
  },
  "305": {
    "colors": [
      "#f2ad78",
      "#ffe600",
      "#b5ffc2"
    ],
    "type": "combination"
  },
  "306": {
    "colors": [
      "#f2ff26",
      "#00d973",
      "#19cc33",
      "#bfffe6"
    ],
    "type": "combination"
  },
  "307": {
    "colors": [
      "#d60036",
      "#b8b8ff",
      "#9c52f2",
      "#340059"
    ],
    "type": "combination"
  },
  "308": {
    "colors": [
      "#e6adcf",
      "#d1b0b3",
      "#d50c42",
      "#de4500",
      "#94ff94"
    ],
    "type": "combination"
  },
  "309": {
    "colors": [
      "#ff7340",
      "#202d85"
    ],
    "type": "combination"
  },
  "310": {
    "colors": [
      "#f5f5b8",
      "#f2ad78",
      "#718600",
      "#172713"
    ],
    "type": "combination"
  },
  "311": {
    "colors": [
      "#a90636",
      "#ffb852",
      "#b3d9a3",
      "#bdf226"
    ],
    "type": "combination"
  },
  "312": {
    "colors": [
      "#a93400",
      "#ff8c00",
      "#65a98f",
      "#0057ba"
    ],
    "type": "combination"
  },
  "313": {
    "colors": [
      "#d60036",
      "#ffff00",
      "#1b8e13",
      "#000000"
    ],
    "type": "combination"
  },
  "314": {
    "colors": [
      "#ff5ec4",
      "#681916",
      "#0024cc",
      "#2d0060"
    ],
    "type": "combination"
  },
  "315": {
    "colors": [
      "#ff616b",
      "#f5f5b8"
    ],
    "type": "combination"
  },
  "316": {
    "colors": [
      "#740909",
      "#19cc33",
      "#2619d1",
      "#3400a3"
    ],
    "type": "combination"
  },
  "317": {
    "colors": [
      "#ffbf99",
      "#c0b490",
      "#f2ff26",
      "#b5ffc2"
    ],
    "type": "combination"
  },
  "318": {
    "colors": [
      "#706934",
      "#324e2a",
      "#00592e",
      "#0f261f"
    ],
    "type": "combination"
  },
  "319": {
    "colors": [
      "#b85e00",
      "#ffe600",
      "#ff8c00",
      "#328e13"
    ],
    "type": "combination"
  },
  "320": {
    "colors": [
      "#ff7399",
      "#f5f5b8",
      "#6ea900",
      "#a6e6db"
    ],
    "type": "combination"
  },
  "321": {
    "colors": [
      "#b08699",
      "#f5f5b8",
      "#172713",
      "#96bfe6"
    ],
    "type": "combination"
  },
  "322": {
    "colors": [
      "#f20000",
      "#a32100",
      "#4733ff"
    ],
    "type": "combination"
  },
  "323": {
    "colors": [
      "#ffbf6e",
      "#651300",
      "#000000"
    ],
    "type": "combination"
  },
  "324": {
    "colors": [
      "#a90636",
      "#4f8fe6",
      "#9c52f2",
      "#b5d1cc"
    ],
    "type": "combination"
  },
  "325": {
    "colors": [
      "#e62e73",
      "#faed8f",
      "#e0b81f",
      "#0f261f"
    ],
    "type": "combination"
  },
  "326": {
    "colors": [
      "#f5f5b8",
      "#ff3319",
      "#a6ff47",
      "#7aff00"
    ],
    "type": "combination"
  },
  "327": {
    "colors": [
      "#ff5ec4",
      "#b85e00",
      "#c0b490",
      "#bfabcc"
    ],
    "type": "combination"
  },
  "328": {
    "colors": [
      "#a32100",
      "#ff7340",
      "#23c17c"
    ],
    "type": "combination"
  },
  "329": {
    "colors": [
      "#ffb852",
      "#bfabcc",
      "#340059",
      "#1b3644"
    ],
    "type": "combination"
  },
  "330": {
    "colors": [
      "#bcd382",
      "#bfffe6",
      "#96bfe6",
      "#2dbc94"
    ],
    "type": "combination"
  },
  "331": {
    "colors": [
      "#cc1a97",
      "#06004f",
      "#bf36e0",
      "#9161f2",
      "#2619d1"
    ],
    "type": "combination"
  },
  "332": {
    "colors": [
      "#ff7399",
      "#d50c42",
      "#172713",
      "#00592e"
    ],
    "type": "combination"
  },
  "333": {
    "colors": [
      "#a93400",
      "#f2ff26",
      "#94ff94",
      "#0d75ff"
    ],
    "type": "combination"
  },
  "334": {
    "colors": [
      "#ffcfc4",
      "#718600",
      "#a6ff47",
      "#008aa1"
    ],
    "type": "combination"
  },
  "335": {
    "colors": [
      "#740909",
      "#ff8c00",
      "#2619d1",
      "#1b3644"
    ],
    "type": "combination"
  },
  "336": {
    "colors": [
      "#ff5ec4",
      "#681916",
      "#fff59e",
      "#324e2a"
    ],
    "type": "combination"
  },
  "337": {
    "colors": [
      "#5c2c45",
      "#cc85d1",
      "#531745",
      "#000000"
    ],
    "type": "combination"
  },
  "338": {
    "colors": [
      "#ffab00",
      "#00592e",
      "#bfabcc"
    ],
    "type": "combination"
  },
  "339": {
    "colors": [
      "#d99e73",
      "#de4500",
      "#a6e6db",
      "#202d85"
    ],
    "type": "combination"
  },
  "340": {
    "colors": [
      "#ff3319",
      "#33ff7d",
      "#b5d1cc",
      "#000000"
    ],
    "type": "combination"
  },
  "341": {
    "colors": [
      "#ff616b",
      "#328e13",
      "#172713",
      "#a6e6db"
    ],
    "type": "combination"
  },
  "342": {
    "colors": [
      "#ffa6d9",
      "#ffb852",
      "#8c6510",
      "#172713"
    ],
    "type": "combination"
  },
  "343": {
    "colors": [
      "#a93400",
      "#ebd999",
      "#505423"
    ],
    "type": "combination"
  },
  "344": {
    "colors": [
      "#ffbf6e",
      "#0024cc",
      "#9c52f2",
      "#000000"
    ],
    "type": "combination"
  },
  "345": {
    "colors": [
      "#681916",
      "#bfffe6",
      "#6bffb3",
      "#4733ff"
    ],
    "type": "combination"
  },
  "346": {
    "colors": [
      "#b5ffc2",
      "#bdf226",
      "#5c8a73"
    ],
    "type": "combination"
  },
  "347": {
    "colors": [
      "#99b333",
      "#33ff7d",
      "#0057ba",
      "#b875eb"
    ],
    "type": "combination"
  },
  "348": {
    "colors": [
      "#bcd382",
      "#328e13",
      "#172713",
      "#340059"
    ],
    "type": "combination"
  }
}
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = colorData;
}