import { Labels } from "../components/deepscatter/DeepScatterWrapper";
// type Level = 1 | 2 | 3;
type RawLabel = {
  label: string;
  level?: number;
  nearestLyric: string;
  coordinates: Array<number>;
  children?: Array<RawLabel>;
};

const RAW_LABELS_NOT_IN_GEOJSON_FORM: Array<RawLabel> = [
  {
    label: "🚂 Trains",
    nearestLyric: "Gone catch me a train",
    coordinates: [34.531471252441406, 44.52962875366211],
  },
  {
    label: "Gang & Crime",
    nearestLyric: "Let me show you what a thug got, born to die",
    coordinates: [40.17561340332031, 46.484615325927734],
  },
  {
    label: "'dip'",
    nearestLyric:
      "Dip, baby, dip (Just dip, baby), dip, baby, dip (Just dip, baby)",
    coordinates: [39.5433349609375, 49.53059387207031],
  },
  {
    label: "'whip'",
    nearestLyric: "Brand new whip got no keys",
    coordinates: [40.467369079589844, 50.193580627441406],
  },
  {
    label: "'chain'",
    nearestLyric: "I'm added to your chain, chain, chain",
    coordinates: [39.93423843383789, 51.98819351196289],
  },

  {
    label: "Rain 🌧️",
    nearestLyric: "Got rained on too",
    coordinates: [34.82866668701172, 51.63480758666992],
  },

  {
    label: "💎 Bling",
    nearestLyric: "And if that diamond ring won't shine",
    coordinates: [38.38007354736328, 51.97138214111328],
    children: [
      {
        label: "'diamonds'",
        nearestLyric:
          "Boy stop, brimming with diamonds but that don't mean shit",
        coordinates: [38.443058013916016, 51.701351165771484],
      },

      {
        label: "'wedding ring'",
        nearestLyric: "Thoughts of a wedding ring",
        coordinates: [38.31987380981445, 52.277164459228516],
      },
    ],
  },

  {
    label: "Haters",
    nearestLyric: "When your fans become your haters",
    coordinates: [51.74882125854492, 51.5303840637207],
  },
  {
    label: "'hold you'",
    nearestLyric: "If I could just hold you",
    coordinates: [52.28587341308594, 51.44916534423828],
  },

  {
    label: "'touch me/you'",
    nearestLyric: "Touch me, touch me, touch me (This is the night)",
    coordinates: [49.567752838134766, 54.59016799926758],
  },

  {
    label: "'you look' (nice)",
    nearestLyric: "You look so sweet",
    coordinates: [51.377723693847656, 54.931495666503906],
  },

  {
    label: "Strength & Weakness",
    nearestLyric: "Starting right now, I'll be strong (I'll be strong)",
    coordinates: [52.647274017333984, 55.87352752685547],
  },

  {
    label: "Fool",
    nearestLyric: "I'll be a fool for you",
    coordinates: [54.15382766723633, 56.61220169067383],
  },

  {
    label: "Freedom",
    nearestLyric: "Be free, live free",
    coordinates: [50.27372360229492, 58.32689666748047],
    children: [
      {
        label: "'set me free'",
        nearestLyric: "Set me free, uh",
        coordinates: [49.956085205078125, 58.333457946777344],
      },
      {
        label: "'freedom'",
        nearestLyric: "Oh oh freedom (Freedom)",
        coordinates: [49.23148727416992, 59.34634780883789],
      },
    ],
  },

  {
    label: "Anger & Upsetness",
    nearestLyric: "You're mad I'm back, big mad",
    coordinates: [53.1955451965332, 58.05927276611328],
  },

  {
    label: "'the power of love'",
    nearestLyric: "That's the power, that's the power of love",
    coordinates: [52.61435317993164, 59.055145263671875],
  },

  {
    label: "Peacefulness",
    nearestLyric: "Aw, leave me alone",
    coordinates: [50.63786315917969, 60.180599212646484],
  },

  {
    label: "Loneliness",
    nearestLyric: "It's too lonesome down here below",
    coordinates: [48.7203369140625, 61.89958953857422],
    children: [
      {
        label: "'leave me alone'",
        nearestLyric: "Aw, leave me alone",
        coordinates: [50.63786315917969, 60.180599212646484],
      },

      {
        label: "'on my/your own'",
        nearestLyric: "Always on my own",
        coordinates: [49.804752349853516, 60.914764404296875],
      },

      {
        label: "(don't want to be) 'lonely'",
        nearestLyric: "I don't wanna be lonely anymore",
        coordinates: [48.81162643432617, 62.35134506225586],
      },
      {
        label: "(don't like being alone)",
        nearestLyric: "Nobody wants to be alone",
        coordinates: [49.14287185668945, 61.73708724975586],
      },
    ],
  },

  {
    label: "Mothers & Fathers",
    nearestLyric: "Hey Mama, won't you come here to Papa?",
    coordinates: [47.43101119995117, 58.151588439941406],
    children: [
      {
        label: "I told Mamma",
        nearestLyric: "Mama, just killed a man",
        coordinates: [47.26866149902344, 57.5297737121582],
      },

      {
        label: "'Mamma told me'",
        nearestLyric: "Mama told me, told me, ooh, yeah, yeah",
        coordinates: [47.564022064208984, 57.675132751464844],
      },
      {
        label: "'dad/daddy'",
        nearestLyric: "My daddy was",
        coordinates: [48.24274826049805, 58.09272003173828],
      },

      {
        label: "Daddy disaproval",
        nearestLyric: "And your Daddy don't approve",
        coordinates: [47.78211212158203, 58.47633361816406],
      },
      {
        label: "Dad Influence",
        nearestLyric: "I let my father mold me",
        coordinates: [48.06008529663086, 58.36526107788086],
      },
    ],
  },

  {
    label: "Smile 😀",
    nearestLyric: "I could smile for a while",
    coordinates: [50.80093765258789, 57.388336181640625],
  },

  {
    label: "Money 💰",
    nearestLyric: "I got my money, let's spend it up (I feel-)",
    coordinates: [45.834529876708984, 52.75274658203125],
  },

  {
    label: "Hunger",
    nearestLyric: "Gettin' kinda hungry",
    coordinates: [45.68716049194336, 54.11912536621094],
  },

  {
    label: "Respect",
    nearestLyric: "A little respect",
    coordinates: [43.72726821899414, 53.55818557739258],
  },

  {
    label: "Fame",
    nearestLyric: "Fame (Fame)",
    coordinates: [44.3107795715332, 54.558231353759766],
  },

  {
    label: "Hot & Cold",
    nearestLyric: "Going hot, so hot, just like an oven",
    coordinates: [42.170555114746094, 55.69506072998047],
    children: [
      {
        label: "(you make me) hot",
        nearestLyric: "You make my temperature rise (ooh, baby)",
        coordinates: [42.490623474121094, 55.98553466796875],
      },
    ],
  },

  {
    label: "🌸Flowers & Candles",
    nearestLyric: "You don't bring me flowers",
    coordinates: [39.732078552246094, 53.48253631591797],
    children: [
      {
        label: "(red) roses",
        nearestLyric: "Sunlight, red red roses",
        coordinates: [39.34678649902344, 53.544437408447266],
      },
    ],
  },
  {
    label: "🔥 Fire",
    nearestLyric: "You can't fight fire with fire",
    coordinates: [40.368186950683594, 54.87909698486328],
    children: [
      {
        label: "'(let it) burn'",
        nearestLyric:
          "Let it burn (Let it burn, let it burn), let it burn, gotta let it burn",
        coordinates: [40.582340240478516, 54.508880615234375],
      },
    ],
  },

  {
    label: "Alcohol",
    nearestLyric: "Got a Hennessy in my hand",
    coordinates: [40.904476165771484, 49.80786895751953],
    children: [
      {
        label: "'jin and juice'",
        nearestLyric: "The boys say they want some gin and juice",
        coordinates: [41.03731918334961, 49.94264221191406],
      },
    ],
  },
  {
    label: "Drugs",
    nearestLyric: "'Cause the codeine had a young nigga swervin'",
    coordinates: [41.600608825683594, 50.34968185424805],
  },

  {
    label: "'shawty'",
    nearestLyric: "Shawty I was just playing",
    coordinates: [39.23554229736328, 47.01697540283203],
    children: [
      {
        label: "'shorty' alt. spelling",
        nearestLyric: "Shorty all on me 'cause it's hard to resist the kid",
        coordinates: [39.58342742919922, 47.9907112121582],
      },
    ],
  },
  {
    label: "👑Kings & Queens",
    nearestLyric: "You're the king, baby, I'm your queen",
    coordinates: [37.96351623535156, 47.98604965209961],
  },
  {
    label: "'ayy'",
    nearestLyric: "Woah, oh-oh (Ayy, ayy, ayy)",
    coordinates: [36.476505279541016, 47.99565505981445],
  },

  {
    label: "Rap-centric",
    nearestLyric: "Knowing he could rap",
    coordinates: [40.10482406616211, 44.57717514038086],
    children: [
      {
        label: "'flow'",
        nearestLyric: "Flow so smooth like it’s ‘93",
        coordinates: [39.98502731323242, 44.14582061767578],
      },
      {
        label: "'rapper'",
        nearestLyric: "Best rapper alive",
        coordinates: [39.744510650634766, 45.11393737792969],
      },
      {
        label: "'hip-hop'",
        nearestLyric: "Hip-Hop, I'm the heart of that",
        coordinates: [39.714839935302734, 44.490081787109375],
      },
      {
        label: "Rap Icons",
        nearestLyric: "Na-na-na-na-na-na, Kid Cudi",
        coordinates: [39.11989212036133, 45.52992248535156],
        children: [
          {
            label: "Slim Shady (Emminem)",
            nearestLyric: "In every single person there’s a Slim Shady lurking",
            coordinates: [36.71052169799805, 45.52849578857422],
          },
        ],
      },
    ],
  },

  {
    label: "n-word used as subject",
    nearestLyric: "Niggas can't take me, niggas can't guard me",
    coordinates: [42.0048828125, 47.121498107910156],
  },

  {
    label: "'shake it'",
    nearestLyric: "Tell 'em to shake it! (Shake it!) Shake it! (Shake it!)",
    coordinates: [40.65058898925781, 43.083248138427734],
    children: [
      {
        label: "'wiggle'",
        nearestLyric: "Wiggle, wiggle, wiggle (Wiggle, wiggle, wiggle)",
        coordinates: [41.912845611572266, 43.40365219116211],
      },
    ],
  },

  {
    label: "🚙 Cars",
    nearestLyric: "You say you wanna get in my Benz?",
    coordinates: [44.964298248291016, 43.43436050415039],
    children: [
      {
        label: "Cadillac",
        nearestLyric: "The Sheikh he drove his Cadillac",
        coordinates: [45.29256820678711, 43.485172271728516],
      },
      {
        label: "Lambo",
        nearestLyric: "The Sheikh he drove his Cadillac",
        coordinates: [45.29256820678711, 43.485172271728516],
      },
      {
        label: "Jag",
        nearestLyric: "And rolled down the window of his shiny new Jag",
        coordinates: [46.037925720214844, 44.16994094848633],
      },

      {
        label: "Benz",
        nearestLyric: "The new Mercedes with black G-Wagon",
        coordinates: [44.90475845336914, 43.760704040527344],
      },

      {
        label: "'the drive-in'",
        nearestLyric: "One night at the drive-in",
        coordinates: [47.442935943603516, 41.84071731567383],
      },

      {
        label: "'riding' & car metaphors",
        nearestLyric: "She's riding, ain't no stopping me now",
        coordinates: [46.60078048706055, 42.67316818237305],
      },
    ],
  },

  {
    label: "American South",
    nearestLyric: "Gettin' born in the state of Mississippi",
    coordinates: [40.71299743652344, 41.144065856933594],
  },

  {
    label: "La La Land",
    nearestLyric: "La da la da di da da, la da da da da",
    coordinates: [54.82959747314453, 22.986899316310883],
  },
  {
    label: "Dream Island",
    nearestLyric: "Everything That I've been dreaming of",
    coordinates: [55.99439740180969, 27.92370021343231],
  },
  {
    label: "Music",
    nearestLyric: "'Cause there's music in the air",
    coordinates: [42.318546295166016, 36.5294075012207],
    children: [
      {
        label: "Groove",
        nearestLyric: "You gotta get on the groove",
        coordinates: [36.529319763183594, 37.39140701293945],
      },
      {
        label: "'bass'",
        nearestLyric: "You gotta get on the groove",
        coordinates: [36.529319763183594, 37.39140701293945],
      },
      {
        label: "'poetry'",
        nearestLyric: "It's poetry in motion",
        coordinates: [39.18756866455078, 40.34760284423828],
      },

      {
        label: "'rhyme'",
        nearestLyric: "Shout out the rhymes",
        coordinates: [39.105674743652344, 40.88705062866211],
      },
      {
        label: "🪘 Drums & rhythm",
        nearestLyric: "Drums keep pounding a rhythm to the brain",
        coordinates: [39.69491958618164, 38.74080276489258],
      },
      {
        label: "'rock and roll'",
        nearestLyric: "Rock and roll and roll (And roll) and rock",
        coordinates: [41.24711990356445, 38.397682189941406],
      },
      {
        label: "'the beat'",
        nearestLyric: "Feel that beat",
        coordinates: [40.52006912231445, 39.52698516845703],
      },
      {
        label: "'rock'",
        nearestLyric: "I wanna, I wanna rock",
        coordinates: [41.49299621582031, 39.76905059814453],
      },
      {
        label: "🎤 'the mic'",
        nearestLyric: "My mic sounds nice",
        coordinates: [42.40559005737305, 39.769222259521484],
      },

      {
        label: "DJ",
        nearestLyric: "Hey Mr. DJ, put a record on",
        coordinates: [37.76091384887695, 36.0947265625],
        children: [
          {
            label: "'DJ, keep playing'",
            nearestLyric: "Hey D.J. keep playing that song",
            coordinates: [37.96235656738281, 36.226078033447266],
          },
        ],
      },

      {
        label: "🪩 Dance",
        nearestLyric: "So just dance, dance, dance",
        coordinates: [39.80129623413086, 34.674861907958984],
        children: [
          {
            label: "'[one] last dance'",
            nearestLyric: "Last chance for one last dance",
            coordinates: [40.152748107910156, 34.02052307128906],
          },
        ],
      },

      {
        label: "🎤 Singing",
        nearestLyric: "I'm singing, I'm singing",
        coordinates: [43.04058074951172, 34.66792678833008],
      },
      {
        label: "'radio'",
        nearestLyric: "Music on the radio",
        coordinates: [43.111629486083984, 37.0932502746582],
      },
    ],
  },

  {
    label: "Party!",
    nearestLyric: "It's party time (Party time)",
    coordinates: [45.2708854675293, 36.67374038696289],
  },

  {
    label: "'romance'",
    nearestLyric: "Reminding him of romance",
    coordinates: [46.34892654418945, 31.696130752563477],
  },

  {
    label: "🔔 Bell",
    nearestLyric: "Ring out the bells again",
    coordinates: [48.14754867553711, 31.715627670288086],
  },

  {
    label: "Heavenly Bodies",
    nearestLyric: "Let the sunshine (Let it shine)",
    coordinates: [48.36711883544922, 34.33625411987305],
    children: [
      {
        label: "⭐️ Stars",
        nearestLyric: "A thousand stars in the sky make me realize",
        coordinates: [47.30270004272461, 35.15462112426758],
      },

      {
        label: "🌙 Moon",
        nearestLyric: "Moon out tonight",
        coordinates: [47.507957458496094, 33.73540496826172],
      },

      {
        label: "Sunshine",
        nearestLyric: "Oh, my only sunshine (My only sunshine)",
        coordinates: [48.152587890625, 33.816402435302734],
      },

      {
        label: "Sunset",
        nearestLyric: "It's quite a sunset",
        coordinates: [48.862945556640625, 34.51715850830078],
      },
    ],
  },

  {
    label: "Dark & Light",
    nearestLyric: "And the darkness inside you",
    coordinates: [50.07377243041992, 35.090824127197266],
    children: [
      {
        label: "Shadows",
        nearestLyric: "Glimpse through the shadow, tear at the shadow",
        coordinates: [49.412208557128906, 33.30867004394531],
      },

      {
        label: "Night",
        nearestLyric: "This is the night",
        coordinates: [51.59398651123047, 33.99238204956055],
      },

      {
        label: "'the light'",
        nearestLyric: "When they both turn out the lights",
        coordinates: [49.96065902709961, 35.80232238769531],
        children: [
          {
            label: "'you're my light'",
            nearestLyric: "You're my guiding light",
            coordinates: [50.0830192565918, 36.13233947753906],
          },

          {
            label: "Street & city lights",
            nearestLyric: "Streetlights, people",
            coordinates: [49.556697845458984, 36.71057891845703],
          },
        ],
      },
    ],
  },

  {
    label: "'twist'",
    nearestLyric: "They'll twist and I'll twist",
    coordinates: [44.62394332885742, 28.47542381286621],
  },

  {
    label: "👻 Supernatural beings",
    nearestLyric: "But if he's a ghost, then I can be a phantom",
    coordinates: [47.45479965209961, 29.303726196289062],
    children: [
      {
        label: "'demons'",
        nearestLyric: "You gotta know your demons",
        coordinates: [46.85967254638672, 29.641435623168945],
      },

      {
        label: "'angel'",
        nearestLyric: "You're an angel, baby",
        coordinates: [42.44424819946289, 28.456645965576172],
        children: [
          {
            label: "'you're my angel'",
            nearestLyric:
              "Shorty, you're my angel, you're my darling angel (Ah)",
            coordinates: [42.37223815917969, 28.210494995117188],
          },
        ],
      },
    ],
  },

  {
    label: "🙉 Monkey",
    nearestLyric: "Well, they gotta pet monkey",
    coordinates: [42.96371078491211, 31.08963394165039],
  },

  {
    label: "Wildness",
    nearestLyric: "Then you love a little wild one",
    coordinates: [49.255706787109375, 29.91173553466797],
    children: [
      {
        label: "'can't be tamed'",
        nearestLyric: "I can't be tamed, I can't be tamed (I can't be tamed)",
        coordinates: [49.1621208190918, 29.483266830444336],
      },
    ],
  },

  {
    label: "Glory",
    nearestLyric: "A little of the glory, yeah",
    coordinates: [52.50564193725586, 30.439315795898438],
  },

  {
    label: "📅Dates",
    nearestLyric:
      "And on Thursday and Friday and Saturday, we chilled on Sunday",
    coordinates: [53.264652252197266, 32.03626251220703],
  },

  {
    label: "'witness'",
    nearestLyric: "Can I get a witness? Yeah, yes",
    coordinates: [52.97869110107422, 27.036386489868164],
  },

  {
    label: "Breathe (or lack of)",
    nearestLyric: "Breathing hard when I'm squeezin' your lungs",
    coordinates: [50.798648834228516, 30.244338989257812],
  },

  {
    label: "Losing control",
    nearestLyric: "Got to make you lose control",
    coordinates: [52.29414367675781, 28.684234619140625],
  },

  {
    label: "Crazy",
    nearestLyric: "Sure he's crazy",
    coordinates: [55.688453674316406, 32.10649490356445],
    children: [
      {
        label: "'delirious'",
        nearestLyric: "To all your friends, you're delirious",
        coordinates: [56.09120559692383, 31.38946533203125],
      },

      {
        label: "crazy for/about you",
        nearestLyric: "'Cause I'm crazy about you",
        coordinates: [55.705047607421875, 31.791662216186523],
      },

      {
        label: "'drive me crazy'",
        nearestLyric: "Girl, you drive me crazy",
        coordinates: [55.47303009033203, 32.477928161621094],
      },
    ],
  },

  {
    label: "'are you ready?'",
    nearestLyric: "Oh, are you ready for it?",
    coordinates: [59.471534729003906, 30.934249877929688],
  },
  {
    label: "👩‍⚕️'doctor'",
    nearestLyric: "Doctor, doctor, where ya at? Give me something",
    coordinates: [58.280757904052734, 31.50971031188965],
  },

  {
    label: "'make a move'",
    nearestLyric: "Make a move, but be calm",
    coordinates: [57.894386291503906, 32.50066375732422],
  },

  {
    label: "'every day'",
    nearestLyric: "Every day (Every day)",
    coordinates: [56.38615798950195, 34.54317855834961],
  },

  {
    label: "'can't you see?'",
    nearestLyric: "Can't you see",
    coordinates: [56.94762420654297, 36.899349212646484],
  },

  {
    label: "'check (it)",
    nearestLyric: "(Check it)",
    coordinates: [57.439849853515625, 36.68452453613281],
  },

  {
    label: "Mirror",
    nearestLyric:
      "I'm starting with the man in the mirror (Man in the mirror, oh yeah)",
    coordinates: [55.2398681640625, 36.121246337890625],
  },

  {
    label: "Voices",
    nearestLyric: "My voice is gone, my throat is sore",
    coordinates: [58.69257736206055, 34.87816619873047],
    children: [
      {
        label: "'whisper in my/your ear'",
        nearestLyric: "Whisper in my ear, baby",
        coordinates: [58.244415283203125, 35.029170989990234],
      },
      {
        label: "'your voice'",
        nearestLyric: "I still hear your voice in the traffic, we're laughing",
        coordinates: [58.87189865112305, 35.004058837890625],
      },
    ],
  },

  {
    label: "Silence",
    nearestLyric: "Silence like a cancer grows",
    coordinates: [58.72107696533203, 36.748966217041016],
  },

  {
    label: "🕰️ Time",
    nearestLyric: "Making the time",
    coordinates: [62.830928802490234, 38.715213775634766],
    children: [
      {
        label: "'wasting time'",
        nearestLyric: "Now, don't go wasting my precious time",
        coordinates: [63.09548568725586, 37.32266616821289],
      },
      {
        label: "'no matter how long it takes'",
        nearestLyric: "No matter how long it takes",
        coordinates: [62.77116775512695, 37.76485824584961],
      },
      {
        label: "lack of time",
        nearestLyric: "And I haven't got time to do no studies",
        coordinates: [62.73259353637695, 38.379600524902344],
      },
      {
        label: "'time flies/slows'",
        nearestLyric: "Time just seems to fly",
        coordinates: [63.01313400268555, 38.832298278808594],
      },
      {
        label: "'time of my life'",
        nearestLyric: "I-I-I-I've had the time of my li-i-ife",
        coordinates: [62.94290542602539, 38.85007858276367],
      },
      {
        label: "'wait a minute'",
        nearestLyric: "You better wait a minute, wait a minute",
        coordinates: [62.520870208740234, 39.10578918457031],
      },

      {
        label: "'matter of time'",
        nearestLyric: "They say it's just a matter of time",
        coordinates: [63.24565887451172, 39.92314147949219],
      },
      {
        label: "'right now'",
        nearestLyric: "Right now",
        coordinates: [62.86798858642578, 40.56957244873047],
      },
      {
        label: "Time Past",
        nearestLyric: "From a long time ago",
        coordinates: [62.19633865356445, 41.38031768798828],
        children: [
          {
            label: "'long ago'",
            nearestLyric: "A long, long time ago",
            coordinates: [62.289520263671875, 41.425384521484375],
          },
        ],
      },
      {
        label: "'all this time'",
        nearestLyric: "All this time",
        coordinates: [62.74906921386719, 42.06657791137695],
      },

      {
        label: "'it's over'",
        nearestLyric: "It's over",
        coordinates: [63.2464714050293, 42.276126861572266],
      },
      {
        label: "'too late'",
        nearestLyric: "You say it's too late to make it",
        coordinates: [60.93968963623047, 37.52754211425781],
      },
      {
        label: "'future'",
        nearestLyric: "My future held in store",
        coordinates: [61.20341491699219, 39.236167907714844],
      },

      {
        label: "today/tomorrow/day",
        nearestLyric: "Who knows what tomorrow brings",
        coordinates: [60.359954833984375, 39.775997161865234],
      },
    ],
  },

  {
    label: "'do it again'",
    nearestLyric: "Do it again (Do it)",
    coordinates: [64.67884063720703, 40.27757263183594],
  },

  {
    label: "📱 Calling",
    nearestLyric: "Though you don't call anymore",
    coordinates: [59.972808837890625, 34.012420654296875],
    children: [
      {
        label: "Phone numbers",
        nearestLyric:
          "If you jot down ya number, you'll get mine in exchange, hey",
        coordinates: [60.548133850097656, 33.00746536254883],
      },
      {
        label: "'call me'",
        nearestLyric: "Call me on the telephone",
        coordinates: [60.01302719116211, 33.78444290161133],
      },
      {
        label: "'phone'",
        nearestLyric: "That expression when the phone rings",
        coordinates: [59.05304718017578, 34.08769226074219],
      },
      {
        label: "'hang/pick up",
        nearestLyric: "Don't hang up",
        coordinates: [59.80107879638672, 33.468448638916016],
      },
      {
        label: "'call my/your name'",
        nearestLyric: "Just call my name",
        coordinates: [60.8769416809082, 34.583892822265625],
      },

      {
        label: "'what's your name?'",
        nearestLyric: "What's your name?",
        coordinates: [61.41692352294922, 34.73121643066406],
      },
    ],
  },

  {
    label: "Hope",
    nearestLyric: "You fill me with hope",
    coordinates: [64.26398468017578, 34.30587387084961],
    children: [
      {
        label: "'hope is gone'",
        nearestLyric: "When all hope is gone (ooh)",
        coordinates: [64.09319305419922, 34.58198928833008],
      },

      {
        label: "'count on [me]'",
        nearestLyric: "Ooh, baby, can always count on me",
        coordinates: [62.59121322631836, 34.85354232788086],
      },
    ],
  },

  {
    label: "1️⃣ Numbers",
    nearestLyric: "(One, two, three)",
    coordinates: [62.76431655883789, 32.867942810058594],
  },

  {
    label: "🙏 Pray",
    nearestLyric: "I pray, pray, pray, everyday",
    coordinates: [64.59369659423828, 32.316505432128906],
  },

  {
    label: "Thanks & Praise",
    nearestLyric: "Thank you baby thank you baby",
    coordinates: [66.654052734375, 32.47395324707031],
    children: [
      {
        label: "'thank you'",
        nearestLyric: "Thank you, thank you",
        coordinates: [66.64142608642578, 32.162994384765625],
      },

      {
        label: "'Hallelujah'",
        nearestLyric: "Glory Hallelujah (Hallelujah) right here, right now",
        coordinates: [66.73858642578125, 32.595829010009766],
      },

      {
        label: "Gratitude & Luck 🍀",
        nearestLyric: "I'd thank my lucky stars to be living here today",
        coordinates: [65.85155487060547, 34.30009078979492],
      },
    ],
  },

  {
    label: "'Lord' and 'God'",
    nearestLyric: "Lord, Lord",
    coordinates: [67.51588439941406, 33.06519317626953],
  },

  {
    label: "Trust",
    nearestLyric: "There's boys you can trust",
    coordinates: [66.78952026367188, 29.88368034362793],
  },

  {
    label: "'jerk'",
    nearestLyric: "Do the Jerk (Come on girl)",
    coordinates: [68.6462631225586, 30.665224075317383],
  },

  {
    label: "🤫 Secrets",
    nearestLyric: "Secrets, secrets19",
    coordinates: [67.89022827148438, 34.29466247558594],
    children: [
      {
        label: "'keep a secret'",
        nearestLyric: "I'm hoping you can keep a secret",
        coordinates: [67.73946380615234, 34.40315628051758],
      },

      {
        label: "'keep it to yourself",
        nearestLyric: "I keep them to myself",
        coordinates: [67.40423583984375, 35.04907989501953],
      },

      {
        label: "'want to know a secret?'",
        nearestLyric: "Do you want to know a secret?",
        coordinates: [67.8891372680664, 34.21208190917969],
      },
    ],
  },

  {
    label: "Non-words: 'oh', 'yeah' etc",
    nearestLyric: "Oh, oh-oh-oh-oh",
    coordinates: [74.3814697265625, 34.246009826660156],
    children: [
      {
        label: "'hey'",
        nearestLyric: "Hey, hey, hey, hey",
        coordinates: [70.57931518554688, 32.79389190673828],
        children: [
          {
            label: "'hey, baby'",
            nearestLyric: "Hey, baby",
            coordinates: [69.45189666748047, 34.66490173339844],
          },
        ],
      },
      {
        label: "'yo'",
        nearestLyric: "Yo, yo",
        coordinates: [71.41029357910156, 34.6879768371582],
      },
      {
        label: "'ha ha'",
        nearestLyric: "Ha, ha, ha, ha, ha",
        coordinates: [76.06089782714844, 36.956199645996094],
      },

      {
        label: "'oh, yeah'",
        nearestLyric: "Oh, oh, yeah",
        coordinates: [73.84672546386719, 36.39401626586914],
      },

      {
        label: "'wooo'",
        nearestLyric: "Woooooo",
        coordinates: [72.78620147705078, 36.007850646972656],
      },

      {
        label: "'mmm, yeah'",
        nearestLyric: "Mmm, yeah",
        coordinates: [75.3963623046875, 38.41709899902344],
      },

      {
        label: "'na na na'",
        nearestLyric: "Na na na na",
        coordinates: [76.4487075805664, 28.0050048828125],
      },
    ],
  },

  {
    label: "Endearments",
    nearestLyric: "Yeah, baby baby baby baby baby, sweet sweet baby",
    coordinates: [69.55249786376953, 38.19377136230469],
    children: [
      {
        label: "'(sweet) baby'",
        nearestLyric: "Sweet baby, sweet, baby sweet",
        coordinates: [69.52962493896484, 38.289878845214844],
      },

      {
        label: "'Baby, baby, baby'",
        nearestLyric: "Baby, baby, baby",
        coordinates: [70.110595703125, 38.24790573120117],
      },

      {
        label: "'Oh baby baby'",
        nearestLyric: "(Oh baby baby)",
        coordinates: [70.14073944091797, 37.78351593017578],
      },

      {
        label: "'darling'",
        nearestLyric: "My darling",
        coordinates: [69.02749633789062, 38.316261291503906],
      },
    ],
  },

  {
    label: "'no' (repeating)",
    nearestLyric: "No-no, no, no-no, no-no-no-no",
    coordinates: [75.40251922607422, 41.357086181640625],
  },

  {
    label: "Say and Tell",
    nearestLyric: "Just one thing to say",
    coordinates: [69.08057403564453, 41.838905334472656],
    children: [
      {
        label: "Conversation",
        nearestLyric: "But conversation couldn't make it through",
        coordinates: [66.99437713623047, 39.814971923828125],
        children: [
          {
            label: "'listen'",
            nearestLyric: "Listen baby",
            coordinates: [66.36129760742188, 38.42033386230469],
          },

          {
            label: "'talk to me'",
            nearestLyric: "Talk to me",
            coordinates: [67.65168762207031, 38.83012390136719],
          },
        ],
      },

      {
        label: "'nothing to say'",
        nearestLyric: "And I ain't got nothing to say",
        coordinates: [68.20171356201172, 42.13831329345703],
      },

      {
        label: "'alright'",
        nearestLyric: "Alright (Alright)",
        coordinates: [73.85930633544922, 42.94505310058594],
      },

      {
        label: "'what?'",
        nearestLyric: "(What?)",
        coordinates: [72.37736511230469, 40.73339080810547],
      },

      {
        label: "'tell me'",
        nearestLyric: "Tell me",
        coordinates: [71.33364868164062, 41.742061614990234],
      },

      {
        label: "'say no'",
        nearestLyric: "And don't say no, honey",
        coordinates: [72.18724822998047, 41.9770393371582],
      },

      {
        label: "'words'",
        nearestLyric: "To say these words to you",
        coordinates: [68.03060150146484, 41.103187561035156],
        children: [
          {
            label: "'word' metaphors & descriptions",
            nearestLyric: "After all your words of steel",
            coordinates: [67.89266967773438, 41.21478271484375],
          },
        ],
      },
    ],
  },

  {
    label: "Chance & Risk",
    nearestLyric: "I'll take my share of chances",
    coordinates: [65.48275756835938, 37.49410629272461],
    children: [
      {
        label: "'risk'",
        nearestLyric: "The risk that I'm takin'",
        coordinates: [65.2879638671875, 37.3307991027832],
      },

      {
        label: "'take a chance'",
        nearestLyric: "(Take a chance, take a chance, take a chance on me)",
        coordinates: [65.6971435546875, 37.244544982910156],
      },

      {
        label: "'one more chance'",
        nearestLyric: "Won't you just give me one chance?",
        coordinates: [65.77791595458984, 37.15735626220703],
      },
      {
        label: "'second chance'",
        nearestLyric: "There ain't no second chance",
        coordinates: [65.94288635253906, 36.92943572998047],
      },
    ],
  },

  {
    label: "'You and I/me'",
    nearestLyric: "Just you and I",
    coordinates: [71.42050266265869, 54.23489809036255],
  },

  {
    label: "Don't care",
    nearestLyric: "But you don't care",
    coordinates: [69.3930983543396, 57.17419981956482],
  },

  {
    label: "'no limmit'",
    nearestLyric: "Told ya'll there wasn't no limit",
    coordinates: [76.40230560302734, 47.48091125488281],
  },

  {
    label: "Understanding",
    nearestLyric: "Can you understand me",
    coordinates: [73.05299377441406, 46.08429718017578],
    children: [
      {
        label: "'learn'",
        nearestLyric: "But I'm ready [ready] to learn (to learn)",
        coordinates: [68.038818359375, 46.574951171875],
      },

      {
        label: "'you'll never know'",
        nearestLyric: "If you cut it down, then you'll never know",
        coordinates: [69.40914916992188, 45.43326950073242],
      },

      {
        label: "'you should know'",
        nearestLyric: "You should know yeah",
        coordinates: [69.8878402709961, 45.330413818359375],
      },

      {
        label: "questions & answers",
        nearestLyric: "All the answers to my questions, I have to find",
        coordinates: [71.3383560180664, 45.04317092895508],
      },

      {
        label: "'don't know'",
        nearestLyric: "I just don't know, I don't know, I don't know-oh",
        coordinates: [72.0332260131836, 44.49148941040039],
      },

      {
        label: "'I don't understand'",
        nearestLyric: "I don't understand",
        coordinates: [72.89093017578125, 45.73036575317383],
      },

      {
        label: "'confused'",
        nearestLyric: "Has got me so confused",
        coordinates: [72.62840270996094, 47.04587173461914],
      },

      {
        label: "'mystery'",
        nearestLyric: "I've been so into your mystery",
        coordinates: [73.9606704711914, 46.31266403198242],
      },
    ],
  },

  {
    label: "'no regrets'",
    nearestLyric: "No regrets, just love",
    coordinates: [73.31172180175781, 44.63481903076172],
  },

  {
    label: "🤔 Reasoning Right from Wrong",
    nearestLyric: "I'm telling you baby, I made my mistakes",
    coordinates: [72.38224029541016, 51.08867263793945],
    children: [
      {
        label: "'reason' & 'why'",
        nearestLyric: "There's always some reason",
        coordinates: [74.4483642578125, 48.711910247802734],
        children: [
          {
            label: "'reasons why'",
            nearestLyric: "Don't give me no reasons why",
            coordinates: [74.37449645996094, 48.60906219482422],
          },

          {
            label: "'tell me why'",
            nearestLyric: "Tell me why",
            coordinates: [74.07942962646484, 48.44374465942383],
          },

          {
            label: "'don't know why'",
            nearestLyric: "And I don't know why",
            coordinates: [74.03987884521484, 47.847999572753906],
          },
        ],
      },

      {
        label: "'made a mistake'",
        nearestLyric: "We only humans, girl, we make mistakes",
        coordinates: [73.2662582397461, 51.6363410949707],
      },

      {
        label: "'compromise'",
        nearestLyric: "Tryna compromise, but I can’t win",
        coordinates: [73.04209899902344, 52.568572998046875],
      },

      {
        label: "'intentions'",
        nearestLyric: "Yeah, these are my only intentions",
        coordinates: [72.36034393310547, 52.01563262939453],
      },

      {
        label: "'(dis)agree",
        nearestLyric: "I'm sure all would agree",
        coordinates: [72.73835754394531, 50.65395736694336],
      },
      {
        label: "'don't mean nothing'",
        nearestLyric: "(Don't mean nothing)",
        coordinates: [70.58865356445312, 51.80863952636719],
      },

      {
        label: "'right' and 'wrong'",
        nearestLyric: "If you're wrong or if you're right",
        coordinates: [71.50531005859375, 49.78706359863281],
        children: [
          {
            label: "'right or wrong'",
            nearestLyric: "Right or wrong (All day, every day, hey)",
            coordinates: [71.41566467285156, 49.974796295166016],
          },

          {
            label: "'I was wrong'",
            nearestLyric: "Too proud to tell you I was wrong",
            coordinates: [71.68643951416016, 49.739707946777344],
          },

          {
            label: "'Am I wrong?'",
            nearestLyric: "Am I wrong?",
            coordinates: [71.86373138427734, 49.813262939453125],
          },

          {
            label: "something/nothing wrong",
            nearestLyric: "'Cause there's nothing wrong with me",
            coordinates: [70.31385803222656, 49.78252410888672],
          },
        ],
      },

      {
        label: "'prove it'",
        nearestLyric: "Prove it",
        coordinates: [71.6731185913086, 50.276771545410156],
      },
    ],
  },

  {
    label: "📝 Letter writing",
    nearestLyric: "You wrote me in a letter",
    coordinates: [76.3427734375, 51.66593933105469],
    children: [
      {
        label: "'love letter'",
        nearestLyric: "Pages brown from old love letter",
        coordinates: [76.04402923583984, 51.90477752685547],
      },

      {
        label: "📫 'postman'",
        nearestLyric: "Please Mr. Postman, look and see (Postman, postman)",
        coordinates: [77.80908203125, 51.983158111572266],
      },
    ],
  },

  {
    label: "Apology Archipelago",
    nearestLyric: "But what I need to hear now, your sincere apology",
    coordinates: [75.58950185775757, 54.82659935951233],
    children: [
      {
        label: "Sin",
        nearestLyric: "It's not even a fuckin' sin",
        coordinates: [73.85240197181702, 54.69610095024109],
        children: [
          {
            label: "sinners & saints",
            nearestLyric: "I'm a sinner, I'm a saint",
            coordinates: [73.52529764175415, 55.14400005340576],
          },
          {
            label: "Religion and sin",
            nearestLyric: "He washed my sins away lord, Oh, happy day",
            coordinates: [74.11649823188782, 55.26859760284424],
          },
        ],
      },

      {
        label: "Excuse me",
        nearestLyric: "Excuse me",
        coordinates: [75.04990100860596, 54.71460223197937],
      },

      {
        label: "Too late to apologize?",
        nearestLyric:
          "It's too late to apologize, yeah (Too late) (Ayy, ayy, ayy)",
        coordinates: [75.62479972839355, 54.578697681427],
      },

      {
        label: "'I'm sorry'",
        nearestLyric: "And I forgive you (I forgive you)",
        coordinates: [75.1882016658783, 55.53529858589172],
      },

      {
        label: "Forgive",
        nearestLyric: "And I forgive you (I forgive you)",
        coordinates: [75.1882016658783, 55.53529858589172],
      },
    ],
  },

  {
    label: "'with you'",
    nearestLyric: "With you (With you)",
    coordinates: [72.6830005645752, 55.32400012016296],
  },

  {
    label: "'the only one'",
    nearestLyric: "I know you are the only one",
    coordinates: [71.66510224342346, 56.27779960632324],
  },

  {
    label: "Need",
    nearestLyric: "Lady, you know just what I need",
    coordinates: [66.44870042800903, 57.10960030555725],
    children: [
      {
        label: "I need you",
        nearestLyric: "Oh, I need you so",
        coordinates: [67.29580163955688, 57.9239010810852],
      },

      {
        label: "all I need",
        nearestLyric: "Is all I need",
        coordinates: [66.88259840011597, 56.19670152664185],
      },

      {
        label: "what you need",
        nearestLyric: "I got what you need (Oh)",
        coordinates: [67.2851026058197, 55.92520236968994],
      },
    ],
  },

  {
    label: "Waiting",
    nearestLyric: "Baby just waiting for you",
    coordinates: [65.67860245704651, 59.01219844818115],
  },

  {
    label: "Love Lagoon",
    nearestLyric: "Would you be my love, my love?",
    coordinates: [64.2894983291626, 61.79190278053284],
    children: [
      {
        label: "need/want love",
        nearestLyric: "I need your love",
        coordinates: [64.72730040550232, 60.56450009346008],
      },
      {
        label: "The way you love",
        nearestLyric: "The way you love me",
        coordinates: [66.25329852104187, 61.25869750976562],
      },
      {
        label: "Loving a man",
        nearestLyric: "I love him so",
        coordinates: [60.64509749412537, 60.03710031509399],
      },

      {
        label: "Loving a woman",
        nearestLyric: "I'll ask my girl I know she only loves me",
        coordinates: [60.30139923095703, 59.59939956665039],
      },

      {
        label: "Falling in love",
        nearestLyric: "Oh, I'm in love, baby",
        coordinates: [62.21920251846313, 63.69680166244507],
      },
      {
        label: "Lasting love",
        nearestLyric: "Of everlasting love",
        coordinates: [61.27020120620728, 63.08280229568481],
      },

      {
        label: "'our love'",
        nearestLyric: "We discovered a love that had never been found",
        coordinates: [61.45449876785278, 62.24859952926636],
      },

      {
        label: "True love?",
        nearestLyric: "True love, oh baby, true love, oh baby",
        coordinates: [61.48620247840881, 64.45779800415039],
      },

      {
        label: "Where is love?",
        nearestLyric: "Where did our love go?",
        coordinates: [60.00570058822632, 64.86859917640686],
      },

      {
        label: "Love is blind",
        nearestLyric: "They tell me that love is blind",
        coordinates: [60.95979809761047, 65.40510058403015],
      },

      {
        label: "'I love you'",
        nearestLyric: "You should let me love you",
        coordinates: [65.53199887275696, 62.97420263290405],
        children: [
          {
            label: "I *still** love you",
            nearestLyric: "I still love you",
            coordinates: [67.26459860801697, 63.02980184555054],
          },
          {
            label: "Who do you love?",
            nearestLyric: "Who do you love? Can I lounge with you?",
            coordinates: [64.89189863204956, 64.89409804344177],
          },
          {
            label: "'in love with you'",
            nearestLyric: "I, I'm so in love with you",
            coordinates: [64.95739817619324, 64.22880291938782],
          },

          {
            label: "Love me",
            nearestLyric: "Love me baby, (love me baby)",
            coordinates: [64.997398853302, 63.25839757919312],
          },
        ],
      },
    ],
  },

  {
    label: "Pain/Hurt",
    nearestLyric: "And I don't wanna hurt him anymore",
    coordinates: [56.61603546142578, 62.79591751098633],
    children: [
      {
        label: "'all the pain'",
        nearestLyric: "In spite of all the pain",
        coordinates: [55.78335952758789, 63.31875991821289],
      },

      {
        label: "I won't hurt you/betrayal",
        nearestLyric: "(I'll never hurt you)",
        coordinates: [57.41193771362305, 62.78031539916992],
      },
    ],
  },

  {
    label: "'nothing matters'",
    nearestLyric: "Nothing seems to matter",
    coordinates: [70.17344665527344, 55.687557220458984],
  },

  {
    label: "'enough'",
    nearestLyric: "Is enough!",
    coordinates: [68.76097869873047, 55.62284469604492],
    children: [
      {
        label: "'too much'",
        nearestLyric: "Too much of something is bad enough (bad enough)",
        coordinates: [68.61290740966797, 55.784603118896484],
      },
    ],
  },

  {
    label: "👩🏿'independent woman' island",
    nearestLyric: "All the women who independent (Hey)",
    coordinates: [72.072998046875, 60.41924285888672],
  },

  {
    label: "'the blues'",
    nearestLyric: "Feelin' the blues about it (Yeah)",
    coordinates: [74.31782531738281, 63.118492126464844],
  },

  {
    label: "🌉'bridge'",
    nearestLyric: "Underneath the bridge",
    coordinates: [78.03937530517578, 63.07924270629883],
  },

  {
    label: "Promises",
    nearestLyric: "And all your promises",
    coordinates: [71.64732360839844, 58.54658508300781],
    children: [
      {
        label: "'I swear'",
        nearestLyric: "I swear that it was somethin'",
        coordinates: [71.04540252685547, 57.411354064941406],
      },

      {
        label: "'be true'",
        nearestLyric: "Promise, girl, that I'll be true",
        coordinates: [70.91548156738281, 59.17201614379883],
      },
    ],
  },

  {
    label: "😭 Crying",
    nearestLyric: "Crying over you",
    coordinates: [49.363499879837036, 65.27100205421448],
  },

  {
    label: "💓 Heart",
    nearestLyric: "My heart is in your hands",
    coordinates: [53.51279973983765, 65.30879735946655],
    children: [
      {
        label: "Broken heart",
        nearestLyric: "Heartbreak time (my heart is breaking)",
        coordinates: [53.45320105552673, 64.71570134162903],
      },
      {
        label: "Soul",
        nearestLyric: "Somewhere I can rest my soul (rest my soul)",
        coordinates: [52.06210017204285, 63.61569762229919],
        children: [
          {
            label: "Soul possession",
            nearestLyric: "As if someone else controls your very soul",
            coordinates: [52.17909812927246, 63.68600130081177],
          },
        ],
      },
    ],
  },

  {
    label: "'without you'",
    nearestLyric: "Couldn't see me without you, babe",
    coordinates: [69.77459788322449, 61.05719804763794],
    children: [
      {
        label: "'can't live without you'",
        nearestLyric: "I couldn't live without you",
        coordinates: [69.51349973678589, 60.95970273017883],
      },

      {
        label: "'without your love'",
        nearestLyric: "Without your love, baby, I would die",
        coordinates: [69.21169757843018, 61.63489818572998],
      },

      {
        label: "'living/dieing without you",
        nearestLyric: "Than to go on living without you",
        coordinates: [69.90150213241577, 61.26959919929504],
      },
    ],
  },
];

const getFlatListFromList = (
  notFlatListOfLabels: Array<RawLabel> | undefined,
  level = 1
): Array<RawLabel> =>
  // @ts-ignore
  (notFlatListOfLabels || []).reduce(
    //@ts-ignore
    (accumulator, { children, ...rest }) => [
      ...accumulator,
      { ...rest, level },
      ...getFlatListFromList(children, level + 1),
    ],
    []
  );

const MAX_FONT_SIZE = 16;
const FONT_SIZES_BY_LEVEL = ["nothing", 16, 10, 8, 6, 5];
const LYRIC_VIZ_REGION_LABELS: Object = {
  type: "FeatureCollection",
  name: "lyric_viz_region_labels",
  features: getFlatListFromList(RAW_LABELS_NOT_IN_GEOJSON_FORM).map(
    ({ label, nearestLyric, level, coordinates }) => ({
      type: "Feature",
      properties: {
        label,
        level,
        nearestLyric,
        size: FONT_SIZES_BY_LEVEL[level || 1] || MAX_FONT_SIZE, // lower levels are smaller
      },
      geometry: {
        type: "Point",
        // TODO: actually fix the hard-coded numbers, don't just do this, since it'll break going forward
        coordinates: coordinates.map((c) => c),
      },
    })
  ),
};

const labels: Labels = {
  features: LYRIC_VIZ_REGION_LABELS,
  name: "lyric_viz_region_labels",
  labelKey: "label",
  sizeKey: "size",
};

export default labels;
