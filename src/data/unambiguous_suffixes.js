// word suffixes with a high pos signal, generated with wordnet
//by spencer kelly spencermountain@gmail.com  2014
var wordnet_suffixes = (function() {

  var data = {
  "NN": [
    "ceae",
    "inae",
    "idae",
    "leaf",
    "rgan",
    "eman",
    "sman",
    "star",
    "boat",
    "tube",
    "rica",
    "tica",
    "nica",
    "auce",
    "tics",
    "ency",
    "ancy",
    "poda",
    "tude",
    "xide",
    "body",
    "weed",
    "tree",
    "rrel",
    "stem",
    "cher",
    "icer",
    "erer",
    "ader",
    "ncer",
    "izer",
    "ayer",
    "nner",
    "ates",
    "ales",
    "ides",
    "rmes",
    "etes",
    "llet",
    "uage",
    "ings",
    "aphy",
    "chid",
    "tein",
    "vein",
    "hair",
    "tris",
    "unit",
    "cake",
    "nake",
    "illa",
    "ella",
    "icle",
    "ille",
    "etle",
    "scle",
    "cell",
    "bell",
    "bill",
    "palm",
    "toma",
    "game",
    "lamp",
    "bone",
    "mann",
    "ment",
    "wood",
    "book",
    "nson",
    "agon",
    "odon",
    "dron",
    "iron",
    "tion",
    "itor",
    "ator",
    "root",
    "cope",
    "tera",
    "hora",
    "lora",
    "bird",
    "worm",
    "fern",
    "horn",
    "wort",
    "ourt",
    "stry",
    "etry",
    "bush",
    "ness",
    "gist",
    "rata",
    "lata",
    "tata",
    "moth",
    "lity",
    "nity",
    "sity",
    "rity",
    "city",
    "dity",
    "vity",
    "drug",
    "dium",
    "llum",
    "trum",
    "inum",
    "lium",
    "tium",
    "atum",
    "rium",
    "icum",
    "anum",
    "nium",
    "orum",
    "icus",
    "opus",
    "chus",
    "ngus",
    "thus",
    "rius",
    "rpus"
  ],
  "JJ": [
    "liac",
    "siac",
    "clad",
    "deaf",
    "xial",
    "hial",
    "chal",
    "rpal",
    "asal",
    "rial",
    "teal",
    "oeal",
    "vial",
    "phal",
    "sial",
    "heal",
    "rbal",
    "neal",
    "geal",
    "dial",
    "eval",
    "bial",
    "ugal",
    "kian",
    "izan",
    "rtan",
    "odan",
    "llan",
    "zian",
    "eian",
    "eyan",
    "ndan",
    "eban",
    "near",
    "unar",
    "lear",
    "liar",
    "-day",
    "-way",
    "tech",
    "sick",
    "tuck",
    "inct",
    "unct",
    "wide",
    "endo",
    "uddy",
    "eedy",
    "uted",
    "aled",
    "rred",
    "oned",
    "rted",
    "obed",
    "oped",
    "ched",
    "dded",
    "cted",
    "tied",
    "eked",
    "ayed",
    "rked",
    "teed",
    "mmed",
    "tred",
    "awed",
    "rbed",
    "bbed",
    "axed",
    "bred",
    "pied",
    "cked",
    "rced",
    "ened",
    "fied",
    "lved",
    "mned",
    "kled",
    "hted",
    "lied",
    "eted",
    "rded",
    "lued",
    "rved",
    "azed",
    "oked",
    "ghed",
    "sked",
    "emed",
    "aded",
    "ived",
    "mbed",
    "pted",
    "zled",
    "ored",
    "pled",
    "wned",
    "afed",
    "nied",
    "aked",
    "gued",
    "oded",
    "oved",
    "oled",
    "ymed",
    "lled",
    "bled",
    "cled",
    "eded",
    "toed",
    "ited",
    "oyed",
    "eyed",
    "ured",
    "omed",
    "ixed",
    "pped",
    "ined",
    "lted",
    "iced",
    "exed",
    "nded",
    "amed",
    "owed",
    "dged",
    "nted",
    "eged",
    "nned",
    "used",
    "ibed",
    "nced",
    "umed",
    "dled",
    "died",
    "rged",
    "aped",
    "oted",
    "uled",
    "ided",
    "nked",
    "aved",
    "rled",
    "rned",
    "aned",
    "rmed",
    "lmed",
    "aged",
    "ized",
    "eved",
    "ofed",
    "thed",
    "ered",
    "ared",
    "ated",
    "eled",
    "sted",
    "ewed",
    "nsed",
    "nged",
    "lded",
    "gged",
    "osed",
    "fled",
    "shed",
    "aced",
    "ffed",
    "tted",
    "uced",
    "iled",
    "uded",
    "ired",
    "yzed",
    "-fed",
    "mped",
    "iked",
    "fted",
    "imed",
    "hree",
    "llel",
    "aten",
    "lden",
    "nken",
    "apen",
    "ozen",
    "ober",
    "-set",
    "nvex",
    "osey",
    "laid",
    "paid",
    "xvii",
    "xxii",
    "-air",
    "tair",
    "icit",
    "knit",
    "nlit",
    "xxiv",
    "-six",
    "-old",
    "held",
    "cile",
    "ible",
    "able",
    "gile",
    "full",
    "-ply",
    "bbly",
    "ggly",
    "zzly",
    "-one",
    "mane",
    "mune",
    "rung",
    "uing",
    "mant",
    "yant",
    "uant",
    "pant",
    "urnt",
    "awny",
    "eeny",
    "ainy",
    "orny",
    "siny",
    "tood",
    "shod",
    "-toe",
    "d-on",
    "-top",
    "-for",
    "odox",
    "wept",
    "eepy",
    "oopy",
    "hird",
    "dern",
    "worn",
    "mart",
    "ltry",
    "oury",
    "ngry",
    "arse",
    "bose",
    "cose",
    "mose",
    "iose",
    "gish",
    "kish",
    "pish",
    "wish",
    "vish",
    "yish",
    "owsy",
    "ensy",
    "easy",
    "ifth",
    "edth",
    "urth",
    "ixth",
    "00th",
    "ghth",
    "ilty",
    "orty",
    "ifty",
    "inty",
    "ghty",
    "kety",
    "afty",
    "irty",
    "roud",
    "true",
    "wful",
    "dful",
    "rful",
    "mful",
    "gful",
    "lful",
    "hful",
    "kful",
    "iful",
    "yful",
    "sful",
    "tive",
    "cave",
    "sive",
    "five",
    "cive",
    "xxvi",
    "urvy",
    "nown",
    "hewn",
    "lown",
    "-two",
    "lowy",
    "ctyl"
  ],
  "VB": [
    "wrap",
    "hear",
    "draw",
    "rlay",
    "away",
    "elay",
    "duce",
    "esce",
    "elch",
    "ooch",
    "pick",
    "huck",
    "back",
    "hack",
    "ruct",
    "lict",
    "nect",
    "vict",
    "eact",
    "tect",
    "vade",
    "lude",
    "vide",
    "rude",
    "cede",
    "ceed",
    "ivel",
    "hten",
    "rken",
    "shen",
    "open",
    "quer",
    "over",
    "efer",
    "eset",
    "uiet",
    "pret",
    "ulge",
    "lign",
    "pugn",
    "othe",
    "rbid",
    "raid",
    "veil",
    "vail",
    "roil",
    "join",
    "dain",
    "feit",
    "mmit",
    "erit",
    "voke",
    "make",
    "weld",
    "uild",
    "idle",
    "rgle",
    "otle",
    "rble",
    "self",
    "fill",
    "till",
    "eels",
    "sult",
    "pply",
    "sume",
    "dime",
    "lame",
    "lump",
    "rump",
    "vene",
    "cook",
    "look",
    "from",
    "elop",
    "grow",
    "adow",
    "ploy",
    "sorb",
    "pare",
    "uire",
    "jure",
    "lore",
    "surf",
    "narl",
    "earn",
    "ourn",
    "hirr",
    "tort",
    "-fry",
    "uise",
    "lyse",
    "sise",
    "hise",
    "tise",
    "nise",
    "lise",
    "rise",
    "anse",
    "gise",
    "owse",
    "oosh",
    "resh",
    "cuss",
    "uess",
    "sess",
    "vest",
    "inst",
    "gest",
    "fest",
    "xist",
    "into",
    "ccur",
    "ieve",
    "eive",
    "olve",
    "down",
    "-dye",
    "laze",
    "lyze",
    "raze",
    "ooze"
  ],
  "RB": [
    "that",
    "oubt",
    "much",
    "diem",
    "high",
    "atim",
    "sely",
    "nely",
    "ibly",
    "lely",
    "dely",
    "ally",
    "gely",
    "imly",
    "tely",
    "ully",
    "ably",
    "owly",
    "vely",
    "cely",
    "mely",
    "mply",
    "ngly",
    "exly",
    "ffly",
    "rmly",
    "rely",
    "uely",
    "time",
    "iori",
    "oors",
    "wise",
    "orst",
    "east",
    "ways"
  ]
}
    //convert it to an easier format
  var data = Object.keys(data).reduce(function(h, k) {
    data[k].forEach(function(w) {
      h[w] = k
    })
    return h
  }, {})

  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  }
  return data;
})();
