// Body text annotations — regex matched against escaped body text
export const GLOSSARY = [
  {
    pattern: /\bmaieutyki\b/gi,
    def: 'Metoda filozoficzna Sokratesa — sztuka zadawania pytań, dzięki której rozmówca sam dochodzi do prawdy, jak położna pomaga przy porodzie.'
  },
  {
    pattern: /\bhamartię\b|\bhamartia\b/gi,
    def: 'Błąd tragiczny — wada charakteru lub błędna decyzja bohatera, która nieuchronnie prowadzi go do upadku.'
  },
  {
    pattern: /\bhybris\b/gi,
    def: 'Pycha, nadmierna duma wobec bogów i prawa — najczęstsza przyczyna katastrofy w tragedii greckiej.'
  },
  {
    pattern: /\bkatharsis\b/gi,
    def: 'Oczyszczenie emocjonalne — cel tragedii wg Arystotelesa: widz przeżywa litość i trwogę, co przynosi ulgę duchową.'
  },
  {
    pattern: /\bfatum\b/gi,
    def: 'Nieodwracalny wyrok losu — siła wyższa rządząca życiem człowieka niezależnie od jego woli.'
  },
  {
    pattern: /\borchestra\b/gi,
    def: 'Okrągła przestrzeń taneczna przed skene, gdzie tańczył i śpiewał chór.'
  },
  {
    pattern: /\bskene\b/gi,
    def: 'Budynek za orchestrą — stanowił tło sceniczne i zaplecze, z którego wychodzili aktorzy.'
  },
  {
    pattern: /\btheatron\b/gi,
    def: 'Widownia wydrążona w naturalnym zboczu wzgórza — dosł. „miejsce patrzenia".'
  },
  {
    pattern: /\bstasima\b/gi,
    def: 'Pieśni chóru (stásimon) wykonywane między scenami — epeisodionami — tragedii greckiej.'
  },
  {
    pattern: /\bkoryfajos\b/gi,
    def: 'Lider chóru, który jako jedyny mógł prowadzić dialog z aktorami na scenie.'
  },
  {
    pattern: /\bprosopon\b/gi,
    def: 'Maska teatralna — dosł. „twarz"; umożliwiała jednemu aktorowi granie wielu ról i wzmacniała głos.'
  },
  {
    pattern: /\bcarpe diem\b/gi,
    def: 'Łac. „chwytaj dzień" — formuła Horacego nawołująca do pełnego przeżywania chwili wobec świadomości przemijania.'
  },
  {
    pattern: /\baurea mediocritas\b/gi,
    def: 'Łac. „złoty środek" — zasada Horacego: umiarkowanie jako droga do szczęśliwego i spokojnego życia.'
  },
  {
    pattern: /\bexegi monumentum\b/gi,
    def: 'Łac. „wzniosłem pomnik" — słynna oda Horacego o nieśmiertelności poetyckiej twórczości (Carmina III, 30).'
  },
  {
    pattern: /\balegori[ęa] jaskini\b/gi,
    def: 'Obraz z Platońskiego Państwa: ludzie przykuci w jaskini widzą tylko cienie rzeczywistości — symbol ograniczeń poznania zmysłowego.'
  },
  {
    pattern: /\bnostos\b/gi,
    def: 'Gr. „powrót" — motyw powrotu do ojczyzny, centralny temat Odysei i całego greckiego eposu homeryckiego.'
  },
  {
    pattern: /\bPoetyce\b|\bPoetyki\b|\bPoetyka\b/g,
    def: 'Traktat Arystotelesa (IV w. p.n.e.) — pierwsza systematyczna teoria literatury; definiuje tragedię, epos i komedię.'
  },
  {
    pattern: /\bepeisodionami\b|\bepeisodiony\b/gi,
    def: 'Sceny dialogowe tragedii greckiej rozgrywane między pieśniami chóru (stasimami).'
  },
  {
    pattern: /\bWielką Dionizją\b/gi,
    def: 'Coroczne ateńskie święto ku czci Dionizosa — podczas niego odbywały się zawody dramatyczne, na których wystawiano tragedie i komedie.'
  },
  {
    pattern: /\bNemezis\b/gi,
    def: 'Bogini odpłaty i sprawiedliwości — karała za pychę (hybris) i brak umiaru, przywracając równowagę świata.'
  },
  {
    pattern: /\bnon omnis moriar\b/gi,
    def: 'Łac. „nie wszystek umrę" — słynny wers Horacego (Carmina III, 30): część poety żyje w dziele dłużej niż ciało.'
  },
]

// Tag pill annotations — exact match (case-insensitive)
export const TAG_GLOSSARY = {
  'sofokles': 'Tragik grecki (496–406 p.n.e.) — autor Antygony, Króla Edypa i Elektrą. Wprowadził trzeciego aktora i dekoracje sceniczne.',
  'homer': 'Legendarny grecki aojd (ok. VIII w. p.n.e.) — przypisuje mu się autorstwo Iliady i Odysei, fundamentów literatury europejskiej.',
  'arystoteles': 'Grecki filozof (384–322 p.n.e.), uczeń Platona. Twórca logiki, retoryki i poetyki jako dyscyplin naukowych.',
  'platon': 'Grecki filozof (428–348 p.n.e.), uczeń Sokratesa. Twórca filozofii idealistycznej — świat zmysłowy jest tylko cieniem świata idei.',
  'sokrates': 'Grecki filozof (470–399 p.n.e.) — nie pisał; znamy go z dialogów Platona. Twórca etyki jako głównego zadania filozofii.',
  'ajschylos': 'Tragik grecki (525–456 p.n.e.) — ojciec tragedii europejskiej; wprowadził drugiego aktora. Autor trylogii Orestei.',
  'owidiusz': 'Poeta łaciński (43 p.n.e. – 18 n.e.) — autor Metamorfoz, największego zbioru mitów grecko-rzymskich w literaturze.',
  'horacy': 'Poeta łaciński (65–8 p.n.e.) — autor Carmina; twórca formuł carpe diem i aurea mediocritas.',
  'eurypides': 'Tragik grecki (480–406 p.n.e.) — „najsmutniejszy z poetów"; pokazywał ludzi takimi, jakimi są, nie jakimi powinni być.',
  'camus': 'Albert Camus (1913–1960) — francuski pisarz i filozof; w Micie Syzyfa uczynił mitologiczną postać symbolem absurdu egzystencji.',
  'fatum': 'Nieodwracalny wyrok losu — siła wyższa rządząca życiem człowieka niezależnie od jego woli.',
  'hamartia': 'Błąd tragiczny — wada charakteru lub błędna decyzja bohatera, która nieuchronnie prowadzi go do upadku.',
  'katharsis': 'Oczyszczenie emocjonalne — cel tragedii wg Arystotelesa: widz przeżywa litość i trwogę, co przynosi ulgę duchową.',
  'hybris': 'Pycha, nadmierna duma wobec bogów i prawa — najczęstsza przyczyna katastrofy w tragedii greckiej.',
  'nostos': 'Gr. „powrót" — motyw powrotu do ojczyzny, centralny temat Odysei.',
  'carpe diem': 'Łac. „chwytaj dzień" — formuła Horacego: pełne przeżywanie chwili wobec świadomości przemijania.',
  'exegi monumentum': 'Łac. „wzniosłem pomnik" — oda Horacego o nieśmiertelności poetyckiej twórczości (Carmina III, 30).',
  'orchestra': 'Okrągła przestrzeń taneczna przed skene, gdzie tańczył i śpiewał chór.',
  'skene': 'Budynek za orchestrą — stanowił tło sceniczne i zaplecze, z którego wychodzili aktorzy.',
  'stasima': 'Pieśni chóru wykonywane między scenami (epeisodionami) tragedii greckiej.',
  'koryfajos': 'Lider chóru, który jako jedyny mógł prowadzić dialog z aktorami na scenie.',
  'prosopon': 'Maska teatralna — dosł. „twarz"; umożliwiała granie wielu ról przez jednego aktora.',
  'poetyka': 'Traktat Arystotelesa (IV w. p.n.e.) — pierwsza systematyczna teoria literatury i teatru.',
  'dionizos': 'Bóg wina, ekstazy i teatru — kult dionizyjski był źródłem greckiego dramatu.',
  'tespis': 'Tespis z Attyki (VI w. p.n.e.) — pierwszy aktor w historii; oddzielił wykonawcę od chóru, tworząc dialog.',
  'tragizm': 'Sytuacja tragiczna: bohater staje przed wyborem między dwiema wartościami, których realizacja wzajemnie się wyklucza.',
  'absurd': 'Filozofia absurdu Camusa: życie pozbawione jest sensu, a człowiek skazany na zderzenie tej świadomości z pragnieniem sensu.',
  'narcyzm': 'Nadmierne skupienie na sobie i własnym wyglądzie — pojęcie pochodzi od mitu o Narcyzie.',
  'epos': 'Gatunek literacki: długi poemat narracyjny o czynach bohaterów — otwiera historię literatury europejskiej (Homer).',
  'logos · ethos · pathos': 'Trzy środki perswazji Arystotelesa: logos (argument logiczny), ethos (wiarygodność mówcy), pathos (oddziaływanie na emocje).',
  'alegoria jaskini': 'Obraz z Państwa Platona: ludzie przykuci w jaskini widzą tylko cienie rzeczywistości — symbol ograniczeń poznania zmysłowego.',
  'carmina': 'Zbiór 104 pieśni lirycznych Horacego — arcydzieło łacińskiej poezji; zawiera ody o miłości, przyjaźni, przemijaniu i sławie.',
  'prawo boskie': 'Niepisane prawo natury i bogów — u Sofoklesa stoi ponad prawem państwowym; Antygona wybiera je kosztem życia.',
  'herosi': 'Bohaterowie półboscy w mitologii greckiej — obdarzeni nadludzką siłą lub zdolnościami, śmiertelni, lecz pamiętani wiecznie.',
  'egzystencja': 'W filozofii egzystencjalnej (Camus, Sartre): pytanie o sens bycia człowiekiem wobec braku obiektywnych wartości.',
}
