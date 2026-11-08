/**
 * Speak2Kids — Beginner Kids English Course (7–10 anos, Pre-A1 → A1).
 * Currículo editável: cada unidade segue o documento pedagógico da fundadora.
 * Vocabulário no formato "word|emoji|tradução".
 */

export type KidsWord = { en: string; emoji: string; pt: string };
export type PracticeType = "match" | "count" | "sequence" | "sort" | "tpr";

export type KidsUnit = {
  n: number;
  title: string;
  topic: string;
  objective: string;
  goal: string;
  prerequisites: string;
  grammar: string;
  review: string;
  imageTheme: string;
  emoji: string;
  warmUp: string;
  context: string;
  vocab: KidsWord[];
  expressions: string[];
  grammarFocus: string;
  examples: string[];
  practice: { type: PracticeType; label: string; bins?: { label: string; words: string[] }[] };
  readingListening: { kind: "song" | "story"; title: string; lines: string[] };
  activities: string[];
  challenge: string;
  /** Frases-modelo para o Communication Challenge. */
  challengeFrames: string[];
  tpr?: string[];
};

const v = (list: string): KidsWord[] =>
  list.split(";").map((s) => {
    const [en = "", emoji = "", pt = ""] = s.split("|").map((x) => x.trim());
    return { en, emoji, pt };
  });

export const KIDS_UNITS: KidsUnit[] = [
  {
    n: 1, title: "Hello Friends!", topic: "Greetings and “My name is / I am”", emoji: "👋",
    objective: "Aprender greetings e “My name is... / I am...” para se apresentar.",
    goal: "Cumprimentar colegas e dizer seu nome em inglês.",
    prerequisites: "Nenhum — unidade inicial.", grammar: "Greetings + “My name is... / I am...”", review: "Não aplicável.",
    imageTheme: "Crianças felizes acenando e se cumprimentando em uma sala de aula colorida.",
    warmUp: "Cante a “Hello Song” com gestos e palmas! 👏", context: "Primeiro dia de aula: as crianças se conhecem e trocam nomes.",
    vocab: v("hello|👋|olá;hi|🙋|oi;goodbye|🫡|tchau (despedida);bye|✋|tchau;good morning|🌅|bom dia;good afternoon|🌤️|boa tarde;good night|🌙|boa noite;please|🙏|por favor;thank you|💛|obrigado(a);sorry|😔|desculpa"),
    expressions: ["Hello! My name is...", "Hi! What's your name?", "Nice to meet you!"],
    grammarFocus: "My name is... / I am...", examples: ["My name is Ana.", "I am Pedro."],
    practice: { type: "match", label: "Associe cada cumprimento à figura certa." },
    readingListening: { kind: "song", title: "Hello, Hello, What's Your Name?", lines: ["Hello, hello, what's your name?", "My name is Ana, my name is Ana!", "Hello, hello, nice to meet you!", "Nice to meet you too!"] },
    activities: ["Sing & Say", "Point & Say", "Circle Time Greeting", "Puppet Talk", "Name Game"],
    challenge: "Cumprimente 3 amigos (bonecos/avatares) e diga seu nome em inglês.",
    challengeFrames: ["Hello! My name is ___.", "Hi! I am ___.", "Nice to meet you!"],
  },
  {
    n: 2, title: "My Family", topic: "“This is my...” and possessive 's", emoji: "👨‍👩‍👧",
    objective: "Aprender a família e “This is my...” + possessive 's.",
    goal: "Apresentar membros da família usando “This is my...”.",
    prerequisites: "“My name is... / I am...”; Greetings.", grammar: "“This is my...” + possessive 's", review: "Greetings (Unit 1) — “Hello, this is my mom!”",
    imageTheme: "Família feliz e diversa reunida em casa, com balões de fala com o nome de cada um.",
    warmUp: "Olhe a foto da família: Who is this? 🖼️", context: "Uma criança mostra o álbum de fotos da família a um amigo.",
    vocab: v("mom|👩|mãe;dad|👨|pai;brother|👦|irmão;sister|👧|irmã;grandma|👵|avó;grandpa|👴|avô;baby|👶|bebê;family|👨‍👩‍👧‍👦|família;pet|🐶|bichinho de estimação;friend|🧒|amigo(a)"),
    expressions: ["This is my mom.", "This is my dog.", "I have one brother."],
    grammarFocus: "This is my... + possessive 's", examples: ["This is my sister.", "This is Tom's dog."],
    practice: { type: "match", label: "Ligue cada nome à pessoa certa da família." },
    readingListening: { kind: "story", title: "My Happy Family", lines: ["Hello! I am Lucas.", "This is my mom. This is my dad.", "This is my sister, Bia. She is a baby!", "This is Grandma's cat. This is my pet."] },
    activities: ["Draw & Describe", "Point & Say", "Family Tree Talk", "Puppet Interview", "Pair Talk"],
    challenge: "Desenhe sua família e apresente cada pessoa usando “This is my...”.",
    challengeFrames: ["This is my ___.", "This is my ___ and this is my ___.", "This is my pet."],
  },
  {
    n: 3, title: "Colors & Shapes", topic: "Articles a/an and “It is a...”", emoji: "🔺",
    objective: "Aprender cores, formas e “It is a...” (a/an).",
    goal: "Descrever a cor e a forma de objetos simples.",
    prerequisites: "“This is my...”; Family.", grammar: "Indefinite article a/an + “It is a...”", review: "“This is...” (Unit 2).",
    imageTheme: "Blocos de montar coloridos e formas geométricas em um tapete de brincar.",
    warmUp: "Brinque de “I Spy” com as cores ao seu redor! 👀", context: "Uma caixa de brinquedos organizada por forma e cor.",
    vocab: v("red|🔴|vermelho;blue|🔵|azul;yellow|🟡|amarelo;green|🟢|verde;circle|⚪|círculo;square|🟥|quadrado;triangle|🔺|triângulo;star|⭐|estrela;big|🐘|grande;small|🐭|pequeno"),
    expressions: ["It is a red circle.", "It is a big star.", "What color is it?"],
    grammarFocus: "a / an + It is a...", examples: ["It is a blue square.", "It is an orange star."],
    practice: { type: "match", label: "Combine cada cor e forma com a figura." },
    readingListening: { kind: "song", title: "Colors and Shapes Song", lines: ["Red, blue, yellow, green!", "A circle, a square, a triangle, a star!", "What color is it? It is red!", "What shape is it? It is a star!"] },
    activities: ["Color Hunt", "Point & Say", "Shape Bingo", "Draw & Describe", "Pair Talk"],
    challenge: "Descreva 3 objetos ao seu redor dizendo a cor e a forma.",
    challengeFrames: ["It is a ___ ___.", "It is big. / It is small.", "What color is it? It is ___."],
  },
  {
    n: 4, title: "Numbers 1–20", topic: "“How many...?” and plurals", emoji: "🔢",
    objective: "Aprender os números de 1 a 20 e “How many...?”.",
    goal: "Contar até 20 e responder “How many...?”.",
    prerequisites: "“It is a...”; Colors & Shapes.", grammar: "“How many...?” + plural nouns", review: "Cores e formas (Unit 3) — “How many red stars?”",
    imageTheme: "Festa infantil com balões numerados e crianças contando objetos coloridos.",
    warmUp: "Conte de 1 a 20 batendo palmas! 👏", context: "Contando balões em uma festa imaginária.",
    vocab: v("one|1️⃣|um;two|2️⃣|dois;three|3️⃣|três;four|4️⃣|quatro;five|5️⃣|cinco;ten|🔟|dez;fifteen|🎈|quinze;twenty|💯|vinte;count|🧮|contar;number|🔢|número"),
    expressions: ["How many balloons?", "I have five stars.", "Let's count!"],
    grammarFocus: "How many...? + plurals", examples: ["How many apples?", "There are ten apples."],
    practice: { type: "count", label: "Conte os objetos e escolha o número certo." },
    readingListening: { kind: "song", title: "Count with Me 1–20", lines: ["One, two, three, four, five!", "Six, seven, eight, nine, ten!", "Eleven, twelve... up to twenty!", "Let's count again!"] },
    activities: ["Number Hunt", "Count & Say", "Bingo Numbers", "Point & Say", "Pair Talk"],
    challenge: "Conte 10 objetos ao seu redor em inglês.",
    challengeFrames: ["One, two, three... ten!", "How many ___? There are ___.", "I have ___ ___s."],
  },
  {
    n: 5, title: "My Body", topic: "“I have... / He/She has...”", emoji: "🧍",
    objective: "Aprender as partes do corpo e “I have... / He/She has...”.",
    goal: "Nomear partes do corpo e descrever características simples.",
    prerequisites: "“How many...?”; Numbers 1–20.", grammar: "“I have... / He/She has...”", review: "Numbers (Unit 4) — “I have two eyes, ten fingers.”",
    imageTheme: "Personagem cartoon apontando partes do corpo com setas coloridas.",
    warmUp: "Cante “Head, Shoulders, Knees and Toes” se mexendo! 🎵", context: "O robô Speak2Co apresenta o seu corpo.",
    vocab: v("head|🙂|cabeça;eyes|👀|olhos;ears|👂|orelhas;nose|👃|nariz;mouth|👄|boca;hands|🙌|mãos;feet|🦶|pés;hair|💇|cabelo;arms|💪|braços;legs|🦵|pernas"),
    expressions: ["I have two eyes.", "She has curly hair.", "Touch your nose!"],
    grammarFocus: "I have... / He/She has...", examples: ["I have ten fingers.", "He has big ears."],
    practice: { type: "tpr", label: "Simon Says: faça cada ação e toque em Done!" },
    tpr: ["Touch your nose!", "Clap your hands!", "Shake your head!", "Stamp your feet!", "Wave your arms!"],
    readingListening: { kind: "story", title: "My Funny Body", lines: ["Hello! I am Robo.", "I have one big head and two blue eyes.", "I have two long arms and two short legs.", "I have a funny nose! Beep beep!"] },
    activities: ["Simon Says", "Point & Say", "Draw a Monster", "Body Song", "Pair Talk"],
    challenge: "Desenhe um monstrinho e descreva-o usando “It has...”.",
    challengeFrames: ["It has ___ eyes.", "It has a big ___.", "It has ___ legs."],
  },
  {
    n: 6, title: "My Toys", topic: "Plural nouns (regular -s)", emoji: "🧸",
    objective: "Aprender brinquedos e o plural regular (-s).",
    goal: "Falar sobre brinquedos favoritos no singular e no plural.",
    prerequisites: "“I have... / He/She has...”; Body parts.", grammar: "Plural nouns (regular -s)", review: "“I have...” (Unit 5).",
    imageTheme: "Quarto infantil colorido cheio de brinquedos: bolas, bonecas e ursinho.",
    warmUp: "Toy Box: adivinhe o brinquedo pela dica! 🎁", context: "Uma criança arruma a caixa de brinquedos antes de dormir.",
    vocab: v("ball|⚽|bola;doll|🪆|boneca;car|🚗|carrinho;kite|🪁|pipa;puzzle|🧩|quebra-cabeça;robot|🤖|robô;blocks|🧱|blocos;teddy bear|🧸|ursinho;bike|🚲|bicicleta;game|🎲|jogo"),
    expressions: ["I have two balls.", "I like my teddy bear.", "Is this your car?"],
    grammarFocus: "Plural regular: + s", examples: ["I have three dolls.", "She has two bikes."],
    practice: { type: "count", label: "Conte os brinquedos e escolha a frase certa (singular ou plural)." },
    readingListening: { kind: "song", title: "My Favorite Toys", lines: ["A ball, a doll, a car, a kite!", "Two balls, two dolls, they're all so bright!", "I like my teddy bear, I like my bike!", "My favorite toys, day and night!"] },
    activities: ["Toy Box Game", "Point & Say", "My Favorite Toy Talk", "Pair Talk", "Draw & Describe"],
    challenge: "Apresente 3 brinquedos favoritos usando singular e plural.",
    challengeFrames: ["I have a ___.", "I have two ___s.", "I like my ___."],
  },
  {
    n: 7, title: "Farm Animals", topic: "“can / can't” for animal actions", emoji: "🐄",
    objective: "Aprender animais da fazenda e “can” para ações.",
    goal: "Falar sobre animais da fazenda e o que eles podem fazer.",
    prerequisites: "Plural nouns; Toys.", grammar: "“can / can't” for animal actions", review: "Plural (Unit 6) — two cows, three hens.",
    imageTheme: "Fazenda colorida com vaca, porquinho, cavalo e galinha fofos em ação.",
    warmUp: "Imite os sons e movimentos dos animais! 🐮", context: "Uma visita à fazenda com animais fazendo ações.",
    vocab: v("cow|🐄|vaca;pig|🐖|porco;hen|🐔|galinha;horse|🐴|cavalo;sheep|🐑|ovelha;duck|🦆|pato;dog|🐕|cachorro;cat|🐈|gato;farm|🏡|fazenda;barn|🛖|celeiro"),
    expressions: ["The cow can walk.", "The duck can swim.", "Can it jump?"],
    grammarFocus: "can / can't", examples: ["The horse can run.", "The pig can't fly."],
    practice: { type: "sort", label: "Separe: o pato pode ou não pode?", bins: [{ label: "The duck can... ✅", words: ["swim", "fly", "walk"] }, { label: "The duck can't... ❌", words: ["read", "drive", "climb"] }] },
    readingListening: { kind: "song", title: "Old MacDonald Had a Farm (adaptada)", lines: ["Old MacDonald had a farm, E-I-E-I-O!", "And on that farm he had a cow — moo, moo!", "The cow can walk, the duck can swim!", "Old MacDonald had a farm, E-I-E-I-O!"] },
    activities: ["Animal Sounds Game", "Point & Say", "Farm Role-play", "Can/Can't Bingo", "Pair Talk"],
    challenge: "Escolha um animal da fazenda e diga 2 coisas que ele pode e não pode fazer.",
    challengeFrames: ["The ___ can ___.", "The ___ can't ___.", "Can it ___? Yes, it can! / No, it can't."],
  },
  {
    n: 8, title: "Wild Animals", topic: "Adjectives (big, small, fast, slow)", emoji: "🦁",
    objective: "Aprender animais selvagens e adjetivos para descrevê-los.",
    goal: "Descrever animais selvagens com adjetivos simples.",
    prerequisites: "“can / can't”; Farm animals.", grammar: "Basic adjectives + “It is...”", review: "“can” (Unit 7) — The lion can run fast.",
    imageTheme: "Safári amigável com leão, elefante, girafa e macaco em uma savana ensolarada.",
    warmUp: "Faça mímica de animais selvagens! 🐒", context: "Um passeio imaginário pelo zoológico/safári.",
    vocab: v("lion|🦁|leão;elephant|🐘|elefante;monkey|🐒|macaco;giraffe|🦒|girafa;tiger|🐅|tigre;zebra|🦓|zebra;snake|🐍|cobra;bear|🐻|urso;fast|💨|rápido;slow|🐢|devagar"),
    expressions: ["The elephant is big.", "The monkey is fast.", "Look at the giraffe!"],
    grammarFocus: "Adjectives + It is...", examples: ["The lion is strong.", "The turtle is slow."],
    practice: { type: "sort", label: "Arraste cada animal para o adjetivo certo.", bins: [{ label: "big 🐘", words: ["elephant", "giraffe", "bear"] }, { label: "fast 💨", words: ["monkey", "tiger", "zebra"] }] },
    readingListening: { kind: "story", title: "A Trip to the Zoo", lines: ["Today we are at the zoo!", "Look at the elephant. It is big!", "Look at the monkey. It is fast!", "The turtle is slow... but it is happy!"] },
    activities: ["Zoo Charades", "Point & Say", "Animal Description Game", "Draw & Describe", "Pair Talk"],
    challenge: "Descreva seu animal selvagem favorito com 2 adjetivos.",
    challengeFrames: ["It is a ___.", "It is ___ and ___.", "It can ___."],
  },
  {
    n: 9, title: "My House", topic: "“There is / There are”", emoji: "🏠",
    objective: "Aprender cômodos, móveis e “There is / There are”.",
    goal: "Descrever cômodos e móveis da casa.",
    prerequisites: "Adjectives + “It is...”; Wild animals.", grammar: "“There is / There are”", review: "Numbers (Unit 4) — There are two chairs.",
    imageTheme: "Corte de uma casa colorida mostrando cômodos, móveis e família.",
    warmUp: "Faça o “Tour da Casa” apontando os cômodos! 🗺️", context: "Uma criança mostra sua casa a um amigo virtual.",
    vocab: v("kitchen|🍳|cozinha;bedroom|🛏️|quarto;bathroom|🛁|banheiro;living room|🛋️|sala;table|🪑|mesa;chair|💺|cadeira;bed|🛌|cama;sofa|🛋️|sofá;lamp|💡|abajur;door|🚪|porta"),
    expressions: ["There is a sofa.", "There are two beds.", "Where is the kitchen?"],
    grammarFocus: "There is (1) / There are (2+)", examples: ["There is a lamp in my room.", "There are three chairs."],
    practice: { type: "sort", label: "Arraste os móveis para o cômodo certo.", bins: [{ label: "bedroom 🛏️", words: ["bed", "lamp"] }, { label: "living room 🛋️", words: ["sofa", "door"] }, { label: "kitchen 🍳", words: ["table", "chair"] }] },
    readingListening: { kind: "song", title: "My House Song", lines: ["This is my house, my happy house!", "There is a kitchen, there is a bed!", "There are two chairs and a big red sofa!", "This is my house, my happy house!"] },
    activities: ["House Tour Talk", "Point & Say", "Furniture Match", "Draw My House", "Pair Talk"],
    challenge: "Descreva seu quarto usando “There is / There are”.",
    challengeFrames: ["There is a ___ in my room.", "There are two ___s.", "There is a ___ in my room."],
  },
  {
    n: 10, title: "Yummy Food", topic: "“I like / I don't like”", emoji: "🍕",
    objective: "Aprender comidas, bebidas e “I like / I don't like”.",
    goal: "Falar sobre preferências alimentares.",
    prerequisites: "“There is / There are”; House.", grammar: "“I like / I don't like” + noun", review: "“There is/are” (Unit 9) — There is pizza on the table.",
    imageTheme: "Mesa colorida com frutas, pizza, suco e sorvete, crianças sorrindo.",
    warmUp: "Guess the Food: adivinhe a comida pelas dicas! 😋", context: "Um piquenique em família com comidas variadas.",
    vocab: v("apple|🍎|maçã;banana|🍌|banana;pizza|🍕|pizza;rice|🍚|arroz;chicken|🍗|frango;juice|🧃|suco;milk|🥛|leite;water|💧|água;cookie|🍪|biscoito;ice cream|🍦|sorvete"),
    expressions: ["I like pizza.", "I don't like fish.", "Do you like ice cream?"],
    grammarFocus: "I like / I don't like", examples: ["I like apples.", "I don't like milk."],
    practice: { type: "sort", label: "Do seu jeito! Separe o que você gosta e não gosta (qualquer resposta vale).", bins: [{ label: "I like 😋", words: [] }, { label: "I don't like 🙅", words: [] }] },
    readingListening: { kind: "song", title: "Yummy Food Song", lines: ["Apples, bananas, yummy, yummy!", "I like pizza in my tummy!", "Do you like ice cream? Yes, I do!", "I don't like fish... how about you?"] },
    activities: ["Food Survey", "Point & Say", "Picnic Role-play", "Draw Your Favorite Food", "Pair Talk"],
    challenge: "Entreviste um colega sobre 3 comidas favoritas.",
    challengeFrames: ["Do you like ___?", "Yes, I do! I like ___.", "No, I don't. I don't like ___."],
  },
  {
    n: 11, title: "At School", topic: "Classroom commands (imperatives)", emoji: "🎒",
    objective: "Aprender objetos escolares e comandos de sala de aula.",
    goal: "Nomear objetos escolares e seguir/dar comandos simples.",
    prerequisites: "“I like / I don't like”; Food & drinks.", grammar: "Imperatives (Stand up, Sit down, Open your book)", review: "Plural (Unit 6) — two pencils, three books.",
    imageTheme: "Sala de aula animada com crianças, carteiras, mochilas e materiais.",
    warmUp: "Simon Says com comandos de sala! 🙋", context: "Primeiro dia na sala de aula Speak2Kids.",
    vocab: v("pencil|✏️|lápis;book|📘|livro;backpack|🎒|mochila;eraser|🧽|borracha;ruler|📏|régua;scissors|✂️|tesoura;glue|🧴|cola;notebook|📓|caderno;crayon|🖍️|giz de cera;desk|🪑|carteira"),
    expressions: ["Open your book.", "Stand up, please.", "Where is my pencil?"],
    grammarFocus: "Imperatives", examples: ["Sit down!", "Close the door, please."],
    practice: { type: "tpr", label: "Siga cada comando e toque em Done!" },
    tpr: ["Stand up!", "Sit down!", "Open your book!", "Close your book!", "Raise your hand!"],
    readingListening: { kind: "story", title: "My School Bag", lines: ["This is my backpack!", "There is a book and a notebook.", "There are two pencils and a ruler.", "Where is my eraser? Here it is!"] },
    activities: ["Simon Says", "Point & Say", "Classroom Commands Game", "Backpack Check", "Pair Talk"],
    challenge: "Dê 3 comandos de sala para alguém seguir.",
    challengeFrames: ["Stand up, please!", "Open your ___.", "Close the ___, please."],
  },
  {
    n: 12, title: "What I'm Wearing", topic: "Present continuous “I am wearing”", emoji: "👕",
    objective: "Aprender roupas e “I am wearing...”.",
    goal: "Descrever o que está vestindo.",
    prerequisites: "Imperatives; School objects.", grammar: "Present continuous “I am wearing...”", review: "Colors (Unit 3) — I am wearing a red shirt.",
    imageTheme: "Guarda-roupa infantil colorido com crianças escolhendo o que vestir.",
    warmUp: "What Are You Wearing? Aponte para suas roupas! 👆", context: "Preparando a mochila e a roupa para um dia especial.",
    vocab: v("shirt|👕|camiseta;pants|👖|calça;dress|👗|vestido;shoes|👟|sapatos;socks|🧦|meias;hat|🧢|boné/chapéu;jacket|🧥|jaqueta;skirt|🩱|saia;shorts|🩳|bermuda;sweater|🧶|suéter"),
    expressions: ["I am wearing a hat.", "She is wearing a dress.", "What are you wearing?"],
    grammarFocus: "I am / He is / She is wearing...", examples: ["I am wearing blue shoes.", "He is wearing a jacket."],
    practice: { type: "match", label: "Vista o personagem: ligue cada roupa à figura." },
    readingListening: { kind: "song", title: "Get Dressed Song", lines: ["Put on your shirt, put on your pants!", "Put on your socks and do a dance!", "I am wearing a big blue hat!", "Get dressed, get dressed, just like that!"] },
    activities: ["Dress the Character", "Point & Say", "Fashion Show Talk", "Draw & Describe", "Pair Talk"],
    challenge: "Descreva a roupa de alguém usando “is wearing”.",
    challengeFrames: ["He is wearing a ___.", "She is wearing ___ ___.", "I am wearing a ___ ___."],
  },
  {
    n: 13, title: "Weather & Seasons", topic: "“It's...” for weather", emoji: "🌦️",
    objective: "Aprender o clima e as estações do ano.",
    goal: "Falar sobre o tempo e as estações.",
    prerequisites: "Present continuous; Clothes.", grammar: "“It's...” for weather", review: "Clothes (Unit 12) — It's cold, wear a jacket.",
    imageTheme: "Painel das quatro estações com crianças brincando em cada clima.",
    warmUp: "Faça mímica dos tipos de clima! ☔", context: "A previsão do tempo da semana com o robô Speak2Co.",
    vocab: v("sunny|☀️|ensolarado;rainy|🌧️|chuvoso;cloudy|☁️|nublado;windy|🌬️|ventando;snowy|❄️|nevando;hot|🥵|quente;cold|🥶|frio;spring|🌸|primavera;summer|🏖️|verão;winter|⛄|inverno"),
    expressions: ["It's sunny today.", "It's cold in winter.", "What's the weather like?"],
    grammarFocus: "It's + weather", examples: ["It's rainy.", "It's hot in summer."],
    practice: { type: "match", label: "Previsão do tempo: ligue cada ícone ao clima." },
    readingListening: { kind: "song", title: "What's the Weather Like Today?", lines: ["What's the weather like today?", "It's sunny, it's sunny, let's go and play!", "It's rainy, it's rainy, take your umbrella!", "It's cold, it's cold, wear a jacket, fella!"] },
    activities: ["Weather Reporter Role-play", "Point & Say", "Season Match", "Draw the Weather", "Pair Talk"],
    challenge: "Seja meteorologista e apresente o tempo de hoje.",
    challengeFrames: ["Good morning! Today it's ___.", "It's ___ and ___.", "Wear a ___!"],
  },
  {
    n: 14, title: "My Day", topic: "Present simple affirmative (daily routine)", emoji: "⏰",
    objective: "Aprender verbos da rotina e o present simple afirmativo.",
    goal: "Descrever a rotina diária em inglês.",
    prerequisites: "“It's...” for weather; Weather & Seasons.", grammar: "Present simple affirmative (I wake up, I go to school)", review: "Weather (Unit 13) — I wake up when it's sunny.",
    imageTheme: "Quadrinhos da rotina de uma criança, do café da manhã até dormir.",
    warmUp: "Coloque as figuras da rotina em ordem! 🖼️", context: "Um dia na vida de um personagem Speak2Kids.",
    vocab: v("wake up|⏰|acordar;get up|🛏️|levantar;brush teeth|🪥|escovar os dentes;eat breakfast|🥣|tomar café da manhã;go to school|🚌|ir para a escola;play|🤸|brincar;have lunch|🍽️|almoçar;do homework|📝|fazer a lição;take a bath|🛁|tomar banho;sleep|😴|dormir"),
    expressions: ["I wake up at seven.", "I go to school.", "I brush my teeth."],
    grammarFocus: "Present simple (I / she + s)", examples: ["I eat breakfast at home.", "She goes to school by bus."],
    practice: { type: "sequence", label: "Coloque a rotina em ordem: toque na primeira ação do dia, depois na próxima..." },
    readingListening: { kind: "story", title: "My Busy Day", lines: ["I wake up at seven. I brush my teeth.", "I eat breakfast and I go to school.", "I have lunch, I play and I do homework.", "I take a bath and I sleep. Good night!"] },
    activities: ["Daily Routine Sequence", "Point & Say", "Mime My Day", "Draw & Describe", "Pair Talk"],
    challenge: "Conte sua rotina de hoje usando 5 verbos aprendidos.",
    challengeFrames: ["I wake up at ___.", "I ___ and I ___.", "At night, I ___."],
  },
  {
    n: 15, title: "How Do You Feel?", topic: "“I feel / I am...” (feelings)", emoji: "😊",
    objective: "Aprender sentimentos e “I feel / I am...”.",
    goal: "Expressar como está se sentindo.",
    prerequisites: "Present simple affirmative; Daily routine.", grammar: "“I feel / I am...” + adjective", review: "Daily routine (Unit 14) — I feel sleepy at night.",
    imageTheme: "Rostinhos expressivos e coloridos mostrando emoções.",
    warmUp: "Faça mímica das emoções! 🎭", context: "Um personagem passa por situações e sentimentos diferentes durante o dia.",
    vocab: v("happy|😄|feliz;sad|😢|triste;angry|😠|bravo;tired|😩|cansado;scared|😱|com medo;excited|🤩|animado;hungry|🍔|com fome;thirsty|🥤|com sede;surprised|😮|surpreso;sleepy|😴|com sono"),
    expressions: ["I feel happy.", "I am tired.", "How do you feel?"],
    grammarFocus: "I feel / I am + feeling", examples: ["I feel excited.", "She is scared of the dark."],
    practice: { type: "match", label: "Ligue cada rostinho ao sentimento certo." },
    readingListening: { kind: "song", title: "How Do You Feel Today?", lines: ["How do you feel today?", "I feel happy, hip hooray!", "I feel sleepy, yawn, yawn, yawn!", "I feel hungry, let's eat on the lawn!"] },
    activities: ["Feelings Charades", "Point & Say", "Emotion Cards", "Draw Your Feeling", "Pair Talk"],
    challenge: "Conte como você está se sentindo hoje e por quê.",
    challengeFrames: ["I feel ___.", "How do you feel?"],
  },
  {
    n: 16, title: "Let's Play!", topic: "“I can” and “I like + verb-ing”", emoji: "⚽",
    objective: "Aprender esportes, hobbies, “I can” e “I like + -ing”.",
    goal: "Falar sobre esportes e hobbies que gosta e sabe fazer.",
    prerequisites: "“I feel / I am...”; Feelings.", grammar: "“I can” + “I like + -ing”", review: "“can” (Unit 7) — I can swim, I can jump.",
    imageTheme: "Playground vibrante com crianças jogando futebol, dançando, pintando e pulando corda.",
    warmUp: "Faça mímica de esportes e hobbies! 🤸", context: "Dia de recreação com atividades variadas na escola.",
    vocab: v("soccer|⚽|futebol;swimming|🏊|natação;dancing|💃|dançar;drawing|✏️|desenhar;singing|🎤|cantar;running|🏃|correr;jumping rope|🪢|pular corda;riding a bike|🚴|andar de bicicleta;painting|🎨|pintar;playing games|🎮|jogar"),
    expressions: ["I can swim.", "I like dancing.", "Do you like drawing?"],
    grammarFocus: "I can + verb / I like + verb-ing", examples: ["I can ride a bike.", "She likes singing."],
    practice: { type: "sort", label: "Separe: frases com “can” ou com “like + -ing”.", bins: [{ label: "I can... 💪", words: ["swim", "ride a bike", "jump"] }, { label: "I like... 💛", words: ["dancing", "drawing", "singing"] }] },
    readingListening: { kind: "song", title: "What Can You Do?", lines: ["What can you do? What can you do?", "I can swim and I can run too!", "I like dancing, I like singing!", "What can you do? Let's play, it's spring!"] },
    activities: ["Sports Charades", "Point & Say", "Hobby Interview", "Talent Show Talk", "Pair Talk"],
    challenge: "Apresente 2 coisas que você sabe fazer e 2 de que gosta.",
    challengeFrames: ["I can ___.", "I can ___ and ___.", "I like ___."],
  },
  {
    n: 17, title: "Around My Town", topic: "Prepositions of place (in, on, under, next to)", emoji: "🏙️",
    objective: "Aprender lugares da cidade e preposições de lugar.",
    goal: "Descrever lugares da cidade e onde as coisas estão.",
    prerequisites: "“I can” + “I like + -ing”; Sports & hobbies.", grammar: "Prepositions of place (in, on, under, next to)", review: "House/furniture (Unit 9) — The ball is under the table.",
    imageTheme: "Mapa ilustrado de uma cidadezinha com parque, escola, mercado e zoológico.",
    warmUp: "Where Is It? Procure objetos escondidos! 🔍", context: "Um passeio pela cidade em busca de um tesouro escondido.",
    vocab: v("park|🌳|parque;school|🏫|escola;supermarket|🛒|supermercado;hospital|🏥|hospital;library|📚|biblioteca;zoo|🦓|zoológico;playground|🛝|parquinho;bakery|🥐|padaria;street|🛣️|rua;house|🏠|casa"),
    expressions: ["The park is next to the school.", "The cat is under the table.", "Where is the library?"],
    grammarFocus: "in / on / under / next to", examples: ["The ball is on the chair.", "The dog is in the box."],
    practice: { type: "match", label: "Ligue cada lugar da cidade à figura certa." },
    readingListening: { kind: "story", title: "A Walk Around Town", lines: ["Let's walk around town!", "The park is next to the school.", "The bakery is next to the supermarket.", "The treasure is under the big tree in the park!"] },
    activities: ["Treasure Hunt Game", "Point & Say", "Map Talk", "Draw the Town", "Pair Talk"],
    challenge: "Dê 3 instruções de localização para alguém encontrar um objeto escondido.",
    challengeFrames: ["It is under the ___.", "It is next to the ___.", "It is in the ___."],
  },
  {
    n: 18, title: "Party Time!", topic: "“How old are you? / I am ___ years old”", emoji: "🎂",
    objective: "Aprender vocabulário de festa e “How old are you?”.",
    goal: "Falar sobre aniversários, idade e celebrações.",
    prerequisites: "Prepositions of place; Places in town.", grammar: "“How old are you? / I am ___ years old”", review: "Numbers (Unit 4) — I am eight years old.",
    imageTheme: "Festa de aniversário colorida com bolo, balões, velas e crianças felizes.",
    warmUp: "Cante “Happy Birthday” e conte as velas! 🕯️", context: "Preparativos para uma festa surpresa.",
    vocab: v("birthday|🥳|aniversário;cake|🎂|bolo;candle|🕯️|vela;balloon|🎈|balão;present|🎁|presente;party hat|🎉|chapéu de festa;friends|👫|amigos;celebrate|🎊|comemorar;surprise|😲|surpresa;invitation|💌|convite"),
    expressions: ["How old are you?", "I am eight years old.", "Happy Birthday!"],
    grammarFocus: "How old are you? I am ___ years old.", examples: ["I am nine years old.", "How old is she?"],
    practice: { type: "count", label: "Conte as velas e diga a idade certa." },
    readingListening: { kind: "song", title: "Happy Birthday to You (adaptada)", lines: ["Happy birthday to you!", "Happy birthday, dear friend!", "How old are you? I am eight!", "Let's celebrate, it's great!"] },
    activities: ["Birthday Interview", "Point & Say", "Party Planning Talk", "Draw Your Party", "Pair Talk"],
    challenge: "Pergunte a idade de 3 pessoas e responda sobre a sua.",
    challengeFrames: ["How old are you?", "I am ___ years old.", "Happy Birthday!"],
  },
  {
    n: 19, title: "Animals in Action", topic: "Movement verbs + “can / can't” (revisão ampliada)", emoji: "🐸",
    objective: "Aprender verbos de movimento e ampliar “can / can't”.",
    goal: "Descrever ações de animais e pessoas usando “can / can't”.",
    prerequisites: "“How old are you?”; Party.", grammar: "Movement verbs + “can / can't” (revisão ampliada)", review: "Farm/wild animals (Units 7–8) e “can” (Unit 7).",
    imageTheme: "Corrida divertida de animais na selva, cada um fazendo uma ação.",
    warmUp: "Animal Race: faça a mímica das ações! 🏁", context: "Olimpíadas na floresta com animais competindo.",
    vocab: v("run|🏃|correr;jump|🦘|pular;swim|🏊|nadar;fly|🦅|voar;climb|🧗|escalar;walk|🚶|andar;crawl|🐛|rastejar;hop|🐇|saltitar;dance|💃|dançar;spin|🌀|girar"),
    expressions: ["The monkey can climb.", "Birds can fly.", "Fish can't walk."],
    grammarFocus: "Movement verbs + can / can't", examples: ["The frog can jump high.", "The elephant can't fly."],
    practice: { type: "sort", label: "Separe: o peixe pode ou não pode?", bins: [{ label: "Fish can... 🐟✅", words: ["swim", "spin"] }, { label: "Fish can't... 🐟❌", words: ["walk", "climb", "fly"] }] },
    readingListening: { kind: "story", title: "The Jungle Race", lines: ["Welcome to the Jungle Race!", "The monkey can climb. The frog can jump.", "The bird can fly. The fish can swim.", "The snail can't run... but it never stops!"] },
    activities: ["Animal Olympics Game", "Point & Say", "Can/Can't Relay", "Draw & Describe", "Pair Talk"],
    challenge: "Escolha um animal e apresente 3 ações que ele pode ou não pode fazer.",
    challengeFrames: ["The ___ can ___.", "It can ___ and ___.", "It can't ___."],
  },
  {
    n: 20, title: "Super Speaker Show!", topic: "Cumulative review", emoji: "🏆",
    objective: "Revisar todo o Speak2Kids Beginner em uma comunicação celebrativa.",
    goal: "Apresentar-se e falar de família, preferências, rotina e habilidades.",
    prerequisites: "Movement verbs + can/can't.", grammar: "Revisão cumulativa de todas as estruturas do curso", review: "Units 1–19, especialmente “This is my...” (2), “I like / I don't like” (10) e “I can” (7, 16, 19).",
    imageTheme: "Palco festivo de talent show com crianças se apresentando, estrelas e troféus.",
    warmUp: "Recordação rápida com flashcards de todas as unidades! 🃏", context: "O show de talentos final da turma Speak2Kids.",
    vocab: v("favorite|💖|favorito;best friend|🤝|melhor amigo;favorite toy|🧸|brinquedo favorito;favorite food|🍕|comida favorita;favorite animal|🐶|animal favorito;superstar|🌟|superestrela;show|🎭|show;tell|🗣️|contar;proud|🥹|orgulhoso;amazing|🤩|incrível"),
    expressions: ["I've learned a lot!", "Now I can speak English!", "I am a Super Speaker!"],
    grammarFocus: "Todas as estruturas juntas", examples: ["My name is Ana, I am nine years old, and I like pizza.", "I can swim and I can dance."],
    practice: { type: "match", label: "Jogo de revisão: ligue cada palavra favorita à figura." },
    readingListening: { kind: "song", title: "I Am a Super Speaker!", lines: ["Hello, my name is... I am a star!", "This is my family, near and far!", "I like pizza, I can swim and dance!", "I am a Super Speaker — give me a chance!"] },
    activities: ["Show and Tell", "Point & Say", "Super Speaker Interview", "Talent Show Presentation", "Certificate Celebration"],
    challenge: "Faça seu Show and Tell completo: nome, idade, família, comida favorita e o que sabe fazer.",
    challengeFrames: ["My name is ___ and I am ___ years old.", "This is my ___.", "I like ___.", "I can ___. I am a Super Speaker!"],
  },
];

export const KIDS_UNITS_TOTAL = KIDS_UNITS.length;
export const getKidsUnit = (n: number) => KIDS_UNITS.find((u) => u.n === n);

export type QuickCheckQuestion = { id: string; prompt: string; emoji: string; options: string[]; answer: string };

/** Quick Check: 4 perguntas por unidade; Unit 20 tem exatamente 5, misturando unidades. */
export function buildQuickCheck(unit: KidsUnit): QuickCheckQuestion[] {
  const picture = (u: KidsUnit, i: number): QuickCheckQuestion => {
    const w = u.vocab[i % u.vocab.length];
    if (!w) throw new Error("Vocabulary missing");
    const options = [w.en, ...u.vocab.filter((x) => x.en !== w.en).slice(i % 3, i % 3 + 2).map((x) => x.en)];
    const rot = i % 3;
    return { id: `u${u.n}-q${i}`, prompt: `Which word means “${w.pt}”?`, emoji: w.emoji, options: [...options.slice(rot), ...options.slice(0, rot)], answer: w.en };
  };
  const grammar = (n: number, i: number, prompt: string, answer: string, other: string[]): QuickCheckQuestion => ({ id: `u${n}-grammar${i}`, prompt, emoji: "", answer, options: i % 2 ? [...other, answer] : [other[0] ?? "", answer, other[1] ?? ""] });
  const checks: Record<number, [string, string, string[]][]> = {
    1: [["Ana says hello. What does she say next?", "My name is Ana.", ["My Ana name.", "Name Ana my."]], ["Say your name: ___ Pedro.", "I am", ["My", "Hello my"]]],
    2: [["Introduce your mom.", "This is my mom.", ["This my is mom.", "My mom this."]], ["The dog belongs to Tom.", "This is Tom's dog.", ["This is dog Tom.", "This is Tom dog."]]],
    3: [["Choose a/an: It is ___ orange star.", "an", ["a", "two"]], ["Describe 🔵: It is a blue ___.", "circle", ["triangle", "square"]]],
    4: [["How many stars? ⭐⭐⭐⭐⭐", "five", ["three", "ten"]], ["Choose the plural.", "ten apples", ["ten apple", "apple ten"]]],
    5: [["I ___ two eyes.", "have", ["has", "am"]], ["She ___ curly hair.", "has", ["have", "is"]]],
    6: [["Two 🪆🪆: choose the plural.", "two dolls", ["two doll", "a dolls"]], ["One 🚲: choose the singular.", "a bike", ["a bikes", "two bikes"]]],
    7: [["The duck ___ swim.", "can", ["can't", "has"]], ["The pig ___ fly.", "can't", ["can", "is"]]],
    8: [["Describe 🐘.", "The elephant is big.", ["The elephant is small.", "The elephant is fast."]], ["Describe 🐢.", "It is slow.", ["It is fast.", "It is tall."]]],
    9: [["One sofa: ___ a sofa.", "There is", ["There are", "I have two"]], ["Two beds: ___ two beds.", "There are", ["There is", "It is a"]]],
    10: [["You enjoy pizza. Say it!", "I like pizza.", ["I don't like pizza.", "I pizza like not."]], ["You do not enjoy milk.", "I don't like milk.", ["I like milk.", "I milk not."]]],
    11: [["Which command opens a book?", "Open your book.", ["Close your book.", "Sit down."]], ["Which command asks you to sit?", "Sit down, please.", ["Stand up, please.", "Open your book."]]],
    12: [["Describe your shirt: I ___ a red shirt.", "am wearing", ["wearing is", "is wearing"]], ["Describe her dress: She ___ a dress.", "is wearing", ["am wearing", "wearing am"]]],
    13: [["Describe ☀️.", "It's sunny.", ["It's rainy.", "It's snowy."]], ["Describe ❄️.", "It's snowy.", ["It's hot.", "It's sunny."]]],
    14: [["Morning routine: I ___ my teeth.", "brush", ["sleep", "play"]], ["She ___ to school by bus.", "goes", ["go", "going"]]],
    15: [["Describe 😄: I feel ___.", "happy", ["sad", "scared"]], ["Describe 😴: I am ___.", "sleepy", ["surprised", "excited"]]],
    16: [["I like ___.", "dancing", ["dance", "can dance"]], ["I can ___.", "swim", ["swimming", "likes swimming"]]],
    17: [["The cat is below the table.", "The cat is under the table.", ["The cat is on the table.", "The cat is in the table."]], ["The park is beside the school.", "The park is next to the school.", ["The park is under the school.", "The park is in the school."]]],
    18: [["Count the candles: 🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️", "I am eight years old.", ["I am seven years old.", "I am nine years old."]], ["Ask a friend's age.", "How old are you?", ["What color is it?", "How many balloons?"]]],
    19: [["The monkey can ___.", "climb", ["fly", "swim like a fish"]], ["Fish ___ walk.", "can't", ["can", "has"]]],
    20: [["Introduce yourself.", "My name is Ana.", ["My Ana name.", "Name my Ana."]], ["Introduce your family.", "This is my mom.", ["My this mom.", "Mom is this my."]], ["Tell your age.", "I am nine years old.", ["I nine old.", "My old nine."]], ["Say your favorite food.", "I like pizza.", ["I pizza liking.", "Pizza my I."]], ["Describe an ability.", "I can swim.", ["I can swimming.", "I swim can."]]],
  };
  const grammarQuestions = (checks[unit.n] ?? []).map(([prompt, answer, other], i) => grammar(unit.n, i, prompt, answer, other));
  return unit.n === 20 ? grammarQuestions : [picture(unit, 0), picture(unit, 3), ...grammarQuestions];
}

export const KIDS_AVATARS = ["🦁", "🐼", "🦊", "🐸", "🐯", "🐨", "🦄", "🐙", "🐧", "🐵"];
