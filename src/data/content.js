const ICONS = {
  filozofia: 'ph-thin ph-scales',
  mitologia: 'ph-thin ph-lightning',
  tragedia: 'ph-thin ph-mask-sad',
  teatr: 'ph-thin ph-columns',
  poezja: 'ph-thin ph-music-notes',
}

export const categories = [
  {
    id: 'filozofia',
    label: 'FILOZOFIA',
    icon: ICONS.filozofia,
    subtopics: [
      {
        id: 'obrona-sokratesa',
        title: 'Obrona Sokratesa',
        body: 'Platon opisuje ostatnią mowę Sokratesa przed ateńskim sądem, skazującym go na śmierć za bezbożność i demoralizację młodzieży. Sokrates nie prosi o litość — broni swojej metody filozoficznej: ironii i maieutyki, czyli sztuki rodzenia myśli w umyśle rozmówcy. Twierdzi, że życie bez refleksji nie jest warte życia. Jego spokój wobec wyroku śmierci stał się wzorcem filozoficznej postawy wobec losu.',
        quote: {
          text: 'Wiem, że nic nie wiem.',
          author: 'Sokrates'
        },
        tags: ['Platon', 'Sokrates', 'etyka']
      },
      {
        id: 'panstwo',
        title: 'Państwo',
        body: 'Najbardziej wpływowy dialog Platona, poświęcony pytaniu o sprawiedliwość i idealny ustrój. Platon dzieli społeczeństwo na trzy warstwy: filozofów-królów, strażników i rzemieślników — każda odpowiada innej części duszy: rozumowi, woli i pożądaniu. Kluczowa alegoria jaskini pokazuje, że większość ludzi żyje wśród cieni — złudnych obrazów prawdy. Tylko filozofia prowadzi ku światłu rzeczywistości.',
        quote: {
          text: 'Dopóki filozofowie nie zostaną królami, państwa nie będą wolne od zła.',
          author: 'Platon, Państwo'
        },
        tags: ['Platon', 'polityka', 'alegoria jaskini']
      },
      {
        id: 'retoryka',
        title: 'Retoryka',
        body: 'Systematyczny wykład Arystotelesa o sztuce przekonywania — pierwsza naukowa teoria komunikacji w historii. Arystoteles wyróżnił trzy środki perswazji: ethos (wiarygodność i charakter mówcy), pathos (oddziaływanie na emocje słuchaczy) oraz logos (argument logiczny i dowód). Retoryka nie jest sztuką kłamstwa — jest sztuką mówienia prawdy w sposób, który trafia do odbiorcy. Fundament europejskiej teorii mowy i komunikacji publicznej.',
        quote: null,
        tags: ['Arystoteles', 'perswazja', 'logos · ethos · pathos']
      }
    ]
  },
  {
    id: 'mitologia',
    label: 'MITOLOGIA',
    icon: ICONS.mitologia,
    subtopics: [
      {
        id: 'prometeusz',
        title: 'Prometeusz',
        body: 'Tytan, który ukradł bogom ogień i dał go śmiertelnym ludziom — wbrew woli Zeusa. Był twórcą cywilizacji: uczył rzemiosł, rolnictwa, pisma. Zeus ukarał go straszliwie: przykuty do skały na krańcu świata, każdego dnia orzeł wyżerał mu odrastającą wątrobę. Prometeusz nie prosił o przebaczenie. Mit o buncie wobec tyranii, poświęceniu dla innych i cenie, jaką płaci ten, kto wyprzedza swój czas.',
        quote: {
          text: 'Wolę być przykuty do skały niż służyć Zeusowi.',
          author: 'Ajschylos, Prometeusz w okowach'
        },
        tags: ['Ajschylos', 'bunt', 'heroizm']
      },
      {
        id: 'syzyf',
        title: 'Syzyf',
        body: 'Król Koryntu, który dwukrotnie oszukał śmierć. Skazany przez bogów na wieczne wtaczanie głazu na szczyt góry — głaz zawsze stacza się w dół tuż przed celem. Kara bez końca, praca bez sensu. Albert Camus uczynił z Syzyfa symbol absurdu egzystencji: człowiek, świadomy beznadziejności swojego losu, i tak kontynuuje. Mit o godności wobec absurdu, o buncie przez wytrwałość.',
        quote: {
          text: 'Trzeba wyobrażać sobie Syzyfa szczęśliwym.',
          author: 'Albert Camus, Mit Syzyfa'
        },
        tags: ['absurd', 'Camus', 'egzystencja']
      },
      {
        id: 'orfeusz',
        title: 'Orfeusz i Eurydyka',
        body: 'Orfeusz — najdoskonalszy muzyk świata — schodzi do krainy umarłych po ukochaną Eurydykę, zabitą przez węża. Jego śpiew wzrusza kamienie, zatrzymuje rzeki, łagodzi samego Hadesa. Bogowie podziemni zgadzają się: może zabrać Eurydykę, pod jednym warunkiem — nie oglądać się wstecz przed wyjściem na światło. Na ostatnich stopniach — ogląda się. Mit o miłości silniejszej niż śmierć i o ludzkiej słabości silniejszej niż miłość.',
        quote: null,
        tags: ['miłość', 'śmierć', 'muzyka']
      },
      {
        id: 'narcyz',
        title: 'Narcyz',
        body: 'Narcyz był tak piękny, że boginie i nimfy traciły dla niego rozum. Odrzucał wszystkich. Nemezis ukarała go: zakochał się we własnym odbiciu w tafli wody i nie mógł oderwać wzroku. Wzywał ukochanego — odbicie milczało. Zamarł z tęsknoty i zmienił się w kwiat. Źródło pojęcia narcyzmu w psychologii. Mit o samozagładzie przez próżność i niemożność miłości ku drugiemu.',
        quote: null,
        tags: ['Owidiusz', 'narcyzm', 'próżność']
      },
      {
        id: 'wojna-trojanska',
        title: 'Wojna trojańska',
        body: 'Parys, królewicz Troi, porywa Helenę — najpiękniejszą kobietę świata, żonę spartańskiego króla Menelaosa. Grecka koalicja pod wodzą Agamemnona wyrusza pod mury Troi. Dziesięć lat oblężenia. Achilles, Hektor, Odyseusz — herosi po obu stronach. Kończy się podstępem: drewniany koń, ukryci żołnierze, pożar Troi. Mit o honorze, zemście, fatum i cenie piękna.',
        quote: null,
        tags: ['Homer', 'Troja', 'herosi']
      }
    ]
  },
  {
    id: 'tragedia',
    label: 'TRAGEDIA',
    icon: ICONS.tragedia,
    subtopics: [
      {
        id: 'antygona',
        title: 'Antygona',
        body: 'Córka Edypa chowa wbrew królewskiemu rozkazowi Kreona swojego brata Polinejkesa, uznanego za zdrajcę. Wybiera prawo boskie — niepisane, wieczne — nad ludzkie prawo państwa. Ginie zamurowana w skalnej grocie. Kreon, triumfujący nad jej nieposłuszeństwem, traci syna, żonę, wszystko. Sofokles stworzył odwieczne pytanie: gdzie kończy się posłuszeństwo władzy, a zaczyna obowiązek sumienia?',
        quote: {
          text: 'Nie przyszłam dzielić nienawiści, lecz miłości.',
          author: 'Sofokles, Antygona'
        },
        tags: ['Sofokles', 'prawo boskie', 'tragizm']
      },
      {
        id: 'krol-edyp',
        title: 'Król Edyp',
        body: 'Najbardziej znana tragedia Sofoklesa. Edyp — błyskotliwy król Teb, który rozwiązał zagadkę Sfinksa — szuka zabójcy poprzedniego króla, by ocalić miasto od zarazy. Odkrywa, że to on sam jest mordercą. I więcej: nieświadomie zabił własnego ojca i poślubił własną matkę. Kiedy prawda wychodzi na jaw, Jokasta wiesza się, Edyp wydłubuje sobie oczy. Dramat o tym, że ucieczka przed losem może prowadzić wprost w jego ramiona.',
        quote: null,
        tags: ['Sofokles', 'fatum', 'hamartia']
      },
      {
        id: 'rod-labdakidow',
        title: 'Ród Labdakidów',
        body: 'Dynastia przeklęta przez bogów: Labdakos, jego syn Lajos, jego syn Edyp, jego córka Antygona. Wina i kara przechodzą z pokolenia na pokolenie, niezależnie od woli potomków. Lajos zgrzeszył przeciw prawu boskiemu — sprowadził na cały ród wieczne przekleństwo. Motyw dziedzicznego grzechu i zbiorowej odpowiedzialności to jeden z centralnych tematów tragedii greckiej — i teologii starożytnej.',
        quote: null,
        tags: ['Sofokles', 'przekleństwo', 'genealogia']
      },
      {
        id: 'cechy-tragedii',
        title: 'Cechy tragedii antycznej',
        body: 'Arystoteles w Poetyce zdefiniował tragedię jako naśladowanie poważnej i skończonej akcji, wywołujące katharsis — oczyszczenie przez współczucie i trwogę. Bohater traci wszystko przez hamartię — błąd tragiczny, często wynikający z hybris (pychy). Obowiązują trzy jedności: miejsca, czasu i akcji. Chór komentuje wydarzenia, reprezentując głos społeczności. Fatum — nieodwracalny wyrok losu — jest zawsze w tle.',
        quote: {
          text: 'Tragedia jest naśladowaniem akcji poważnej i skończonej, wywołującym litość i trwogę.',
          author: 'Arystoteles, Poetyka'
        },
        tags: ['Arystoteles', 'katharsis', 'Poetyka']
      },
      {
        id: 'iliada',
        title: 'Iliada',
        body: 'Epos Homera o ostatnich tygodniach oblężenia Troi — centralnym wydarzeniem jest gniew Achillesa i jego konsekwencje. Achilles wycofuje się z walki po kłótni z Agamemnonem. Ginie jego przyjaciel Patroklos. Achilles wraca, zabija Hektora, hańbi jego ciało. Stary Priam przybywa nocą prosić o zwłoki syna. Homer pokazuje wojnę bez gloryfikacji: krew, ból, żałoba po obu stronach. Pierwszy wielki poemat epicki literatury europejskiej.',
        quote: {
          text: 'Gniew sław, bogini, Achilla Peleidy...',
          author: 'Homer, Iliada (w. 1)'
        },
        tags: ['Homer', 'epos', 'Achilles']
      },
      {
        id: 'odyseja',
        title: 'Odyseja',
        body: 'Powrót Odyseusza z Troi do rodzinnej Itaki trwa dziesięć lat. Po drodze: Cyklop Polifem, czarodziejka Kirke, wejście do krainy umarłych, Syreny, Scylla i Charybda, nimfa Kalipso. Każda przeszkoda jest próbą: sprytu, wierności, tożsamości. W domu czeka Penelopa — tkająca i prująca całun Laertesa, by odwlec decyzję o wyborze nowego małżonka. Odyseja to mit o podróży jako poznaniu siebie.',
        quote: null,
        tags: ['Homer', 'nostos', 'Odyseusz']
      }
    ]
  },
  {
    id: 'teatr',
    label: 'TEATR',
    icon: ICONS.teatr,
    subtopics: [
      {
        id: 'poczatki-teatru',
        title: 'Początki teatru greckiego',
        body: 'Teatr grecki wywodzi się z dionizyjskich obrzędów kultowych — pieśni i tańców ku czci boga Dionizosa, odprawiane podczas świąt zwanych Wielką Dionizją. Tespis z Attyki (VI w. p.n.e.) jako pierwszy oddzielił jednego wykonawcę od chóru, tworząc dialog — stał się pierwszym aktorem w historii. Ajschylos wprowadził drugiego aktora, Sofokles — trzeciego. Słowo „teatr" pochodzi od greckiego theatron — miejsce patrzenia.',
        quote: null,
        tags: ['Dionizos', 'Tespis', 'obrzęd']
      },
      {
        id: 'budowa-teatru',
        title: 'Budowa teatru',
        body: 'Klasyczny teatr grecki składał się z trzech elementów. Orchestra — okrągła przestrzeń taneczna, gdzie wykonywał swoją pieśń chór. Skene — budynek będący dekoracją i zapleczem, z którego wychodzili aktorzy. Theatron — widownia wydrążona w naturalnym zboczu wzgórza, obejmująca kilkadziesiąt tysięcy widzów. Akustyka była zaprojektowana geometrycznie: każde słowo było słyszalne z każdego miejsca. Teatr w Epidauros mieścił 14 000 widzów.',
        quote: null,
        tags: ['orchestra', 'skene', 'akustyka']
      },
      {
        id: 'role-i-maski',
        title: 'Role i maski',
        body: 'Aktorzy nosili maski (prosopon) wykonane z drewna, skóry lub tkaniny lnianej. Maska pozwalała jednemu aktorowi grać kilka różnych ról w obrębie jednej tragedii — zmieniał maskę i kostium. Wzmacniała również głos, działając jak megafon w przestrzeni amfiteatru. Kobiety nie grały — role żeńskie grali wyłącznie mężczyźni. Dwie ikoniczne formy maski: tragiczna (usta skrzywione w dół) i komiczna (śmiejące się usta) — do dziś symbol teatru.',
        quote: null,
        tags: ['maska', 'aktor', 'prosopon']
      },
      {
        id: 'chor-w-tragedii',
        title: 'Chór w tragedii',
        body: 'Chór (12–15 choreuts) był elementem nieodłącznym tragedii greckiej. Tańczył i śpiewał w orchestrze, komentując akcję i reprezentując głos społeczności lub sumienia. Pieśni chóru — stasima — dzieliły sceny (epeisodiony). Liderem chóru był koryfajos, który mógł prowadzić dialog z aktorami. U Ajschylosa chór grał rolę aktywną; u Eurypidesa stawał się coraz bardziej ornamentalny. W późniejszej tragedii rola chóru stopniowo zanikała.',
        quote: null,
        tags: ['chór', 'stasima', 'koryfajos']
      }
    ]
  },
  {
    id: 'poezja',
    label: 'POEZJA',
    icon: ICONS.poezja,
    subtopics: [
      {
        id: 'horacy',
        title: 'Horacy — życie i twórczość',
        body: 'Quintus Horatius Flaccus (65–8 p.n.e.) — jeden z najwybitniejszych poetów łacińskich, syn wyzwolońca, który dzięki talentowi stał się bliskim przyjacielem cesarza Augusta. Autor Carmina (Pieśni), Satyr, Listów i Sztuki poetyckiej. Pisał o umiarkowanej radości życia, wiejskim spokoju i nieuchronności śmierci. Jego zasada aurea mediocritas — złoty środek — stała się dewizą całej epoki. Przekazany przez Horacego ideał wykształconego człowieka przetrwał wieki.',
        quote: {
          text: 'Odi profanum vulgus et arceo — Gardzę pospólstwem i trzymam się z dala.',
          author: 'Horacy, Carmina III, 1'
        },
        tags: ['Horacy', 'Rzym', 'Carmina']
      },
      {
        id: 'carpe-diem',
        title: 'Carpe Diem',
        body: 'Słynna formuła Horacego: carpe diem, quam minimum credula postero — „chwytaj dzień, jak najmniej ufając jutrzejszemu". Nie jest to wezwanie do hedonizmu, lecz do mądrego przeżywania chwili wobec świadomości przemijania. Dum loquimur, fugerit invida aetas — „gdy mówimy, ucieka zazdrosny czas". Motyw carpe diem przeniknął do poezji renesansowej, barokowej, romantycznej — i do kultury popularnej, gdzie żyje do dziś.',
        quote: {
          text: 'Chwytaj dzień, jak najmniej ufając jutrzejszemu.',
          author: 'Horacy, Carmina I, 11'
        },
        tags: ['carpe diem', 'przemijanie', 'chwila']
      },
      {
        id: 'exegi-monumentum',
        title: 'Exegi monumentum',
        body: 'Ostatnia pieśń trzeciej księgi Carmina — podsumowanie twórczości Horacego. „Wzniosłem pomnik trwalszy niż ze spiżu, wyższy niż królewskie piramidy" — mówi o poezji jako formie nieśmiertelności, trwalszej niż brąz i kamień. Dopóki kapłan będzie wstępował na Kapitol, dopóty będą czytać Horacego. Motyw exegi monumentum podjął Jan Kochanowski w Pieśni XXIV, a Aleksander Puszkin — w wierszu Pomnik. Fundament europejskiej refleksji o roli poety.',
        quote: {
          text: 'Non omnis moriar — Nie wszystek umrę.',
          author: 'Horacy, Carmina III, 30'
        },
        tags: ['exegi monumentum', 'nieśmiertelność', 'poezja']
      }
    ]
  }
]
