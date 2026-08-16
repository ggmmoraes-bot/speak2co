/**
 * Learning Tools — Vocabulary with IPA (banco geral).
 * Conteúdo independente, sem vínculo com nenhum Product Line.
 * Palavras do dia a dia com IPA, tradução, definição em inglês e exemplo.
 */

export type GeneralWord = {
  term: string;
  ipa: string;
  pt: string;
  definition: string;
  example: string;
  examplePt: string;
};

export type GeneralVocabCategory = {
  id: string;
  title: string;
  titlePt: string;
  words: GeneralWord[];
};

export const GENERAL_VOCABULARY: GeneralVocabCategory[] = [
  {
    id: "everyday-english",
    title: "Everyday English",
    titlePt: "Inglês do dia a dia",
    words: [
      { term: "morning", ipa: "/ˈmɔːrnɪŋ/", pt: "manhã", definition: "The early part of the day, before noon.", example: "I drink coffee every morning.", examplePt: "Eu tomo café toda manhã." },
      { term: "busy", ipa: "/ˈbɪzi/", pt: "ocupado(a)", definition: "Having a lot of things to do.", example: "She is busy until four o'clock.", examplePt: "Ela está ocupada até as quatro." },
      { term: "again", ipa: "/əˈɡen/", pt: "de novo", definition: "One more time.", example: "Could you say that again, please?", examplePt: "Você pode repetir, por favor?" },
      { term: "maybe", ipa: "/ˈmeɪbi/", pt: "talvez", definition: "Possibly, but not certainly.", example: "Maybe we can meet tomorrow.", examplePt: "Talvez possamos nos encontrar amanhã." },
      { term: "enough", ipa: "/ɪˈnʌf/", pt: "suficiente", definition: "As much as is needed.", example: "We don't have enough chairs.", examplePt: "Não temos cadeiras suficientes." },
      { term: "actually", ipa: "/ˈæktʃuəli/", pt: "na verdade", definition: "Used to say what is true, often correcting something.", example: "Actually, the meeting is on Friday.", examplePt: "Na verdade, a reunião é na sexta." },
    ],
  },
  {
    id: "people-relationships",
    title: "People & Relationships",
    titlePt: "Pessoas e relacionamentos",
    words: [
      { term: "neighbour", ipa: "/ˈneɪbər/", pt: "vizinho(a)", definition: "A person who lives next to or near you.", example: "My neighbour helped me carry the boxes.", examplePt: "Meu vizinho me ajudou a carregar as caixas." },
      { term: "colleague", ipa: "/ˈkɑːliːɡ/", pt: "colega de trabalho", definition: "Someone you work with.", example: "I had lunch with a colleague from the office.", examplePt: "Almocei com um colega do escritório." },
      { term: "sibling", ipa: "/ˈsɪblɪŋ/", pt: "irmão ou irmã", definition: "A brother or a sister.", example: "Do you have any siblings?", examplePt: "Você tem irmãos?" },
      { term: "friendly", ipa: "/ˈfrendli/", pt: "simpático(a)", definition: "Behaving in a kind and pleasant way.", example: "The staff here is very friendly.", examplePt: "A equipe aqui é muito simpática." },
      { term: "couple", ipa: "/ˈkʌpl/", pt: "casal", definition: "Two people who are together in a relationship.", example: "The couple has been married for ten years.", examplePt: "O casal está casado há dez anos." },
      { term: "acquaintance", ipa: "/əˈkweɪntəns/", pt: "conhecido(a)", definition: "Someone you know a little, but not well.", example: "He is an acquaintance, not a close friend.", examplePt: "Ele é um conhecido, não um amigo próximo." },
    ],
  },
  {
    id: "home",
    title: "Home",
    titlePt: "Casa",
    words: [
      { term: "kitchen", ipa: "/ˈkɪtʃɪn/", pt: "cozinha", definition: "The room where food is prepared.", example: "The kids are doing homework in the kitchen.", examplePt: "As crianças estão fazendo lição na cozinha." },
      { term: "living room", ipa: "/ˈlɪvɪŋ ruːm/", pt: "sala de estar", definition: "The room where people relax and receive guests.", example: "We watch films in the living room.", examplePt: "Assistimos a filmes na sala de estar." },
      { term: "furniture", ipa: "/ˈfɜːrnɪtʃər/", pt: "móveis", definition: "Objects such as tables, chairs and beds.", example: "They bought new furniture for the flat.", examplePt: "Eles compraram móveis novos para o apartamento." },
      { term: "laundry", ipa: "/ˈlɔːndri/", pt: "roupa suja / lavanderia", definition: "Clothes that need washing, or the place to wash them.", example: "I do the laundry on Sundays.", examplePt: "Eu lavo as roupas aos domingos." },
      { term: "rent", ipa: "/rent/", pt: "aluguel", definition: "Money paid regularly to use a house or flat.", example: "The rent is due on the fifth.", examplePt: "O aluguel vence no dia cinco." },
      { term: "tidy", ipa: "/ˈtaɪdi/", pt: "arrumado(a)", definition: "Neat and with everything in its place.", example: "Please keep your room tidy.", examplePt: "Por favor, mantenha seu quarto arrumado." },
    ],
  },
  {
    id: "work",
    title: "Work",
    titlePt: "Trabalho",
    words: [
      { term: "deadline", ipa: "/ˈdedlaɪn/", pt: "prazo final", definition: "The latest time by which something must be finished.", example: "The deadline is next Monday.", examplePt: "O prazo final é na próxima segunda." },
      { term: "meeting", ipa: "/ˈmiːtɪŋ/", pt: "reunião", definition: "An organised event where people discuss something.", example: "I have a meeting at ten.", examplePt: "Tenho uma reunião às dez." },
      { term: "salary", ipa: "/ˈsæləri/", pt: "salário", definition: "The money you receive for your job, usually monthly.", example: "She negotiated a higher salary.", examplePt: "Ela negociou um salário maior." },
      { term: "skill", ipa: "/skɪl/", pt: "habilidade", definition: "An ability you develop through training or practice.", example: "Communication is a valuable skill.", examplePt: "Comunicação é uma habilidade valiosa." },
      { term: "report", ipa: "/rɪˈpɔːrt/", pt: "relatório", definition: "A written document with information or results.", example: "I'll send the report by email.", examplePt: "Vou enviar o relatório por e-mail." },
      { term: "overtime", ipa: "/ˈoʊvərtaɪm/", pt: "hora extra", definition: "Extra time worked beyond normal hours.", example: "He worked overtime to finish the project.", examplePt: "Ele fez hora extra para terminar o projeto." },
    ],
  },
  {
    id: "education",
    title: "Education",
    titlePt: "Educação",
    words: [
      { term: "homework", ipa: "/ˈhoʊmwɜːrk/", pt: "lição de casa", definition: "School work students do at home.", example: "I finished my homework before dinner.", examplePt: "Terminei a lição de casa antes do jantar." },
      { term: "degree", ipa: "/dɪˈɡriː/", pt: "diploma / graduação", definition: "A qualification given by a university.", example: "She has a degree in economics.", examplePt: "Ela tem graduação em economia." },
      { term: "subject", ipa: "/ˈsʌbdʒɪkt/", pt: "matéria", definition: "An area of study, such as maths or history.", example: "My favourite subject was geography.", examplePt: "Minha matéria favorita era geografia." },
      { term: "exam", ipa: "/ɪɡˈzæm/", pt: "prova", definition: "A formal test of knowledge.", example: "The exam lasts two hours.", examplePt: "A prova dura duas horas." },
      { term: "teacher", ipa: "/ˈtiːtʃər/", pt: "professor(a)", definition: "A person whose job is to teach.", example: "Our teacher speaks slowly and clearly.", examplePt: "Nossa professora fala devagar e com clareza." },
      { term: "improve", ipa: "/ɪmˈpruːv/", pt: "melhorar", definition: "To become better or make something better.", example: "I want to improve my listening.", examplePt: "Quero melhorar minha escuta." },
    ],
  },
  {
    id: "food-drinks",
    title: "Food & Drinks",
    titlePt: "Comidas e bebidas",
    words: [
      { term: "breakfast", ipa: "/ˈbrekfəst/", pt: "café da manhã", definition: "The first meal of the day.", example: "Breakfast is served until ten.", examplePt: "O café da manhã é servido até as dez." },
      { term: "meal", ipa: "/miːl/", pt: "refeição", definition: "The food eaten at one time.", example: "That was a delicious meal.", examplePt: "Foi uma refeição deliciosa." },
      { term: "spicy", ipa: "/ˈspaɪsi/", pt: "apimentado(a)", definition: "Having a strong, hot flavour from spices.", example: "This sauce is too spicy for me.", examplePt: "Este molho é apimentado demais para mim." },
      { term: "thirsty", ipa: "/ˈθɜːrsti/", pt: "com sede", definition: "Needing or wanting to drink.", example: "I'm thirsty — can I have some water?", examplePt: "Estou com sede — posso beber água?" },
      { term: "recipe", ipa: "/ˈresəpi/", pt: "receita", definition: "Instructions for cooking a dish.", example: "She shared her family recipe.", examplePt: "Ela compartilhou a receita de família." },
      { term: "taste", ipa: "/teɪst/", pt: "sabor / provar", definition: "The flavour of something, or to try food.", example: "Would you like to taste it?", examplePt: "Você quer provar?" },
    ],
  },
  {
    id: "health",
    title: "Health",
    titlePt: "Saúde",
    words: [
      { term: "headache", ipa: "/ˈhedeɪk/", pt: "dor de cabeça", definition: "A pain in your head.", example: "I have a bad headache today.", examplePt: "Estou com uma forte dor de cabeça hoje." },
      { term: "appointment", ipa: "/əˈpɔɪntmənt/", pt: "consulta / horário marcado", definition: "An arranged time to meet a doctor or professional.", example: "I have a dentist appointment at three.", examplePt: "Tenho consulta no dentista às três." },
      { term: "medicine", ipa: "/ˈmedɪsn/", pt: "remédio", definition: "A substance used to treat illness.", example: "Take this medicine twice a day.", examplePt: "Tome este remédio duas vezes ao dia." },
      { term: "sick", ipa: "/sɪk/", pt: "doente", definition: "Not feeling well; ill.", example: "He stayed home because he was sick.", examplePt: "Ele ficou em casa porque estava doente." },
      { term: "healthy", ipa: "/ˈhelθi/", pt: "saudável", definition: "In good physical condition.", example: "Walking every day keeps me healthy.", examplePt: "Caminhar todo dia me mantém saudável." },
      { term: "injury", ipa: "/ˈɪndʒəri/", pt: "lesão", definition: "Physical harm to the body.", example: "The injury kept him out of the game.", examplePt: "A lesão o tirou do jogo." },
    ],
  },
  {
    id: "feelings",
    title: "Feelings & Emotions",
    titlePt: "Sentimentos e emoções",
    words: [
      { term: "happy", ipa: "/ˈhæpi/", pt: "feliz", definition: "Feeling pleasure or joy.", example: "I'm really happy with the result.", examplePt: "Estou muito feliz com o resultado." },
      { term: "worried", ipa: "/ˈwɜːrid/", pt: "preocupado(a)", definition: "Anxious about something that may happen.", example: "She's worried about the exam.", examplePt: "Ela está preocupada com a prova." },
      { term: "excited", ipa: "/ɪkˈsaɪtɪd/", pt: "animado(a)", definition: "Feeling happy and enthusiastic about something.", example: "We're excited about the trip.", examplePt: "Estamos animados com a viagem." },
      { term: "tired", ipa: "/ˈtaɪərd/", pt: "cansado(a)", definition: "Needing rest or sleep.", example: "I'm too tired to go out tonight.", examplePt: "Estou cansado demais para sair hoje." },
      { term: "proud", ipa: "/praʊd/", pt: "orgulhoso(a)", definition: "Feeling satisfaction with your own or others' achievements.", example: "I'm proud of your progress in English.", examplePt: "Estou orgulhosa do seu progresso em inglês." },
      { term: "upset", ipa: "/ʌpˈset/", pt: "chateado(a)", definition: "Unhappy or disappointed about something.", example: "He was upset about the news.", examplePt: "Ele ficou chateado com a notícia." },
    ],
  },
  {
    id: "shopping",
    title: "Shopping",
    titlePt: "Compras",
    words: [
      { term: "receipt", ipa: "/rɪˈsiːt/", pt: "recibo / nota", definition: "A paper showing you paid for something.", example: "Keep the receipt in case you return it.", examplePt: "Guarde o recibo caso queira devolver." },
      { term: "discount", ipa: "/ˈdɪskaʊnt/", pt: "desconto", definition: "A reduction in the normal price.", example: "There's a twenty percent discount today.", examplePt: "Há vinte por cento de desconto hoje." },
      { term: "refund", ipa: "/ˈriːfʌnd/", pt: "reembolso", definition: "Money returned to you for a product.", example: "Can I get a refund for this item?", examplePt: "Posso pedir reembolso deste item?" },
      { term: "size", ipa: "/saɪz/", pt: "tamanho", definition: "How big or small something is.", example: "Do you have this in a larger size?", examplePt: "Você tem isso em tamanho maior?" },
      { term: "expensive", ipa: "/ɪkˈspensɪv/", pt: "caro(a)", definition: "Costing a lot of money.", example: "That jacket is too expensive.", examplePt: "Aquela jaqueta é cara demais." },
      { term: "cashier", ipa: "/kæˈʃɪr/", pt: "caixa (pessoa)", definition: "The person who takes payment in a shop.", example: "Please pay the cashier over there.", examplePt: "Por favor, pague no caixa ali." },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    titlePt: "Tecnologia",
    words: [
      { term: "device", ipa: "/dɪˈvaɪs/", pt: "dispositivo", definition: "A piece of equipment made for a purpose.", example: "You can use the app on any device.", examplePt: "Você pode usar o app em qualquer dispositivo." },
      { term: "password", ipa: "/ˈpæswɜːrd/", pt: "senha", definition: "A secret word used to access an account.", example: "I forgot my password again.", examplePt: "Esqueci minha senha de novo." },
      { term: "download", ipa: "/ˈdaʊnloʊd/", pt: "baixar", definition: "To copy data from the internet to your device.", example: "Download the file before the meeting.", examplePt: "Baixe o arquivo antes da reunião." },
      { term: "screen", ipa: "/skriːn/", pt: "tela", definition: "The flat surface where images are shown.", example: "The screen is too bright.", examplePt: "A tela está muito clara." },
      { term: "update", ipa: "/ˌʌpˈdeɪt/", pt: "atualizar / atualização", definition: "To make something more modern or current.", example: "You should update the app.", examplePt: "Você deveria atualizar o aplicativo." },
      { term: "charger", ipa: "/ˈtʃɑːrdʒər/", pt: "carregador", definition: "A device used to put power into a battery.", example: "May I borrow your charger?", examplePt: "Posso pegar seu carregador emprestado?" },
    ],
  },
  {
    id: "transportation",
    title: "Transportation",
    titlePt: "Transporte",
    words: [
      { term: "traffic", ipa: "/ˈtræfɪk/", pt: "trânsito", definition: "The vehicles moving on a road.", example: "There's heavy traffic this morning.", examplePt: "O trânsito está pesado esta manhã." },
      { term: "subway", ipa: "/ˈsʌbweɪ/", pt: "metrô", definition: "An underground urban train system.", example: "The subway is faster than the bus.", examplePt: "O metrô é mais rápido que o ônibus." },
      { term: "ticket", ipa: "/ˈtɪkɪt/", pt: "passagem / bilhete", definition: "A paper or card allowing you to travel.", example: "I bought a return ticket.", examplePt: "Comprei uma passagem de ida e volta." },
      { term: "driver", ipa: "/ˈdraɪvər/", pt: "motorista", definition: "The person who drives a vehicle.", example: "The driver stopped at the corner.", examplePt: "O motorista parou na esquina." },
      { term: "commute", ipa: "/kəˈmjuːt/", pt: "deslocamento diário", definition: "To travel regularly between home and work.", example: "I commute for an hour every day.", examplePt: "Levo uma hora no trajeto todo dia." },
      { term: "fare", ipa: "/fer/", pt: "tarifa", definition: "The money you pay for a journey.", example: "The bus fare went up this year.", examplePt: "A tarifa do ônibus subiu este ano." },
    ],
  },
  {
    id: "places",
    title: "Places",
    titlePt: "Lugares",
    words: [
      { term: "neighbourhood", ipa: "/ˈneɪbərhʊd/", pt: "bairro", definition: "An area of a town where people live.", example: "It's a quiet neighbourhood.", examplePt: "É um bairro tranquilo." },
      { term: "downtown", ipa: "/ˌdaʊnˈtaʊn/", pt: "centro da cidade", definition: "The central business area of a city.", example: "We had dinner downtown.", examplePt: "Jantamos no centro." },
      { term: "library", ipa: "/ˈlaɪbreri/", pt: "biblioteca", definition: "A place where books are kept for reading.", example: "I study at the library on Saturdays.", examplePt: "Estudo na biblioteca aos sábados." },
      { term: "crowded", ipa: "/ˈkraʊdɪd/", pt: "lotado(a)", definition: "Full of people.", example: "The café was crowded at lunchtime.", examplePt: "O café estava lotado na hora do almoço." },
      { term: "nearby", ipa: "/ˌnɪrˈbaɪ/", pt: "perto / próximo", definition: "A short distance away.", example: "Is there a pharmacy nearby?", examplePt: "Tem uma farmácia por perto?" },
      { term: "building", ipa: "/ˈbɪldɪŋ/", pt: "prédio", definition: "A structure with walls and a roof.", example: "My office is in that tall building.", examplePt: "Meu escritório fica naquele prédio alto." },
    ],
  },
  {
    id: "nature",
    title: "Nature",
    titlePt: "Natureza",
    words: [
      { term: "weather", ipa: "/ˈweðər/", pt: "tempo (clima)", definition: "The condition of the air, such as rain or sun.", example: "The weather is lovely today.", examplePt: "O tempo está ótimo hoje." },
      { term: "beach", ipa: "/biːtʃ/", pt: "praia", definition: "An area of sand next to the sea.", example: "We spent the day at the beach.", examplePt: "Passamos o dia na praia." },
      { term: "forest", ipa: "/ˈfɔːrɪst/", pt: "floresta", definition: "A large area covered with trees.", example: "They went hiking in the forest.", examplePt: "Eles fizeram trilha na floresta." },
      { term: "storm", ipa: "/stɔːrm/", pt: "tempestade", definition: "Very bad weather with wind and rain.", example: "The storm lasted all night.", examplePt: "A tempestade durou a noite toda." },
      { term: "sunrise", ipa: "/ˈsʌnraɪz/", pt: "nascer do sol", definition: "The time when the sun appears in the morning.", example: "We woke up before sunrise.", examplePt: "Acordamos antes do nascer do sol." },
      { term: "wildlife", ipa: "/ˈwaɪldlaɪf/", pt: "vida selvagem", definition: "Animals and plants living in nature.", example: "The park protects local wildlife.", examplePt: "O parque protege a vida selvagem local." },
    ],
  },
  {
    id: "time-dates",
    title: "Time & Dates",
    titlePt: "Tempo e datas",
    words: [
      { term: "weekend", ipa: "/ˈwiːkend/", pt: "fim de semana", definition: "Saturday and Sunday.", example: "What are your plans for the weekend?", examplePt: "Quais são seus planos para o fim de semana?" },
      { term: "schedule", ipa: "/ˈskedʒuːl/", pt: "agenda / cronograma", definition: "A plan of times for activities.", example: "My schedule is full this week.", examplePt: "Minha agenda está cheia esta semana." },
      { term: "early", ipa: "/ˈɜːrli/", pt: "cedo", definition: "Before the usual or expected time.", example: "She arrived early for the interview.", examplePt: "Ela chegou cedo para a entrevista." },
      { term: "deadline day", ipa: "/ˈdedlaɪn deɪ/", pt: "dia do prazo", definition: "The final day to complete something.", example: "Friday is deadline day.", examplePt: "Sexta é o dia do prazo." },
      { term: "fortnight", ipa: "/ˈfɔːrtnaɪt/", pt: "quinzena", definition: "A period of two weeks.", example: "We meet once a fortnight.", examplePt: "Nos encontramos uma vez por quinzena." },
      { term: "meanwhile", ipa: "/ˈmiːnwaɪl/", pt: "enquanto isso", definition: "At the same time as something else.", example: "Meanwhile, I'll prepare the slides.", examplePt: "Enquanto isso, vou preparar os slides." },
    ],
  },
  {
    id: "common-actions",
    title: "Common Actions",
    titlePt: "Ações comuns",
    words: [
      { term: "bring", ipa: "/brɪŋ/", pt: "trazer", definition: "To take something to the place where you are.", example: "Please bring your notebook.", examplePt: "Por favor, traga seu caderno." },
      { term: "borrow", ipa: "/ˈbɑːroʊ/", pt: "pegar emprestado", definition: "To take something and return it later.", example: "Can I borrow your pen?", examplePt: "Posso pegar sua caneta emprestada?" },
      { term: "choose", ipa: "/tʃuːz/", pt: "escolher", definition: "To decide between options.", example: "You can choose any topic.", examplePt: "Você pode escolher qualquer tema." },
      { term: "explain", ipa: "/ɪkˈspleɪn/", pt: "explicar", definition: "To make something clear to someone.", example: "Could you explain that again?", examplePt: "Você poderia explicar de novo?" },
      { term: "remember", ipa: "/rɪˈmembər/", pt: "lembrar", definition: "To keep something in your mind.", example: "I can't remember his name.", examplePt: "Não consigo lembrar o nome dele." },
      { term: "practice", ipa: "/ˈpræktɪs/", pt: "praticar", definition: "To do something repeatedly to improve.", example: "Practice speaking for ten minutes a day.", examplePt: "Pratique a fala por dez minutos por dia." },
    ],
  },
  {
    id: "adjectives",
    title: "Adjectives",
    titlePt: "Adjetivos",
    words: [
      { term: "reliable", ipa: "/rɪˈlaɪəbl/", pt: "confiável", definition: "Able to be trusted to do what is expected.", example: "He's a reliable colleague.", examplePt: "Ele é um colega confiável." },
      { term: "quiet", ipa: "/ˈkwaɪət/", pt: "silencioso(a)", definition: "Making little or no noise.", example: "I'd like a quiet table, please.", examplePt: "Eu gostaria de uma mesa silenciosa, por favor." },
      { term: "difficult", ipa: "/ˈdɪfɪkəlt/", pt: "difícil", definition: "Not easy to do or understand.", example: "This exercise is difficult but useful.", examplePt: "Este exercício é difícil, mas útil." },
      { term: "cheap", ipa: "/tʃiːp/", pt: "barato(a)", definition: "Costing little money.", example: "We found a cheap flight.", examplePt: "Encontramos um voo barato." },
      { term: "polite", ipa: "/pəˈlaɪt/", pt: "educado(a)", definition: "Showing good manners and respect.", example: "It's polite to say thank you.", examplePt: "É educado dizer obrigado." },
      { term: "awful", ipa: "/ˈɔːfl/", pt: "horrível", definition: "Very bad or unpleasant.", example: "The service was awful.", examplePt: "O atendimento foi horrível." },
    ],
  },
  {
    id: "useful-words",
    title: "Useful Everyday Words",
    titlePt: "Palavras úteis do cotidiano",
    words: [
      { term: "however", ipa: "/haʊˈevər/", pt: "porém", definition: "Used to introduce a contrast.", example: "It's expensive; however, it lasts longer.", examplePt: "É caro; porém, dura mais." },
      { term: "therefore", ipa: "/ˈðerfɔːr/", pt: "portanto", definition: "For that reason.", example: "It rained; therefore, we stayed in.", examplePt: "Choveu; portanto, ficamos em casa." },
      { term: "instead", ipa: "/ɪnˈsted/", pt: "em vez disso", definition: "In the place of something else.", example: "Let's take the train instead.", examplePt: "Vamos pegar o trem em vez disso." },
      { term: "besides", ipa: "/bɪˈsaɪdz/", pt: "além disso", definition: "In addition to what has been said.", example: "Besides, it's cheaper this way.", examplePt: "Além disso, assim é mais barato." },
      { term: "although", ipa: "/ɔːlˈðoʊ/", pt: "embora", definition: "Despite the fact that.", example: "Although it was late, we kept working.", examplePt: "Embora fosse tarde, continuamos trabalhando." },
      { term: "in fact", ipa: "/ɪn fækt/", pt: "de fato", definition: "Used to add true or surprising information.", example: "In fact, she speaks three languages.", examplePt: "De fato, ela fala três idiomas." },
    ],
  },
  {
    id: "confused-words",
    title: "Commonly Confused Words",
    titlePt: "Palavras que confundem",
    words: [
      { term: "make / do", ipa: "/meɪk/ · /duː/", pt: "fazer (criar) / fazer (executar)", definition: "Make = create something; do = perform an activity.", example: "I make coffee and do the dishes.", examplePt: "Eu faço café e lavo a louça." },
      { term: "lend / borrow", ipa: "/lend/ · /ˈbɑːroʊ/", pt: "emprestar / pegar emprestado", definition: "You lend to someone; you borrow from someone.", example: "He lent me a book, so I borrowed it.", examplePt: "Ele me emprestou um livro, então eu o peguei emprestado." },
      { term: "say / tell", ipa: "/seɪ/ · /tel/", pt: "dizer / contar", definition: "Tell needs a person as object; say usually does not.", example: "Tell me what she said.", examplePt: "Me conte o que ela disse." },
      { term: "affect / effect", ipa: "/əˈfekt/ · /ɪˈfekt/", pt: "afetar / efeito", definition: "Affect is usually a verb; effect is usually a noun.", example: "The news affected me; the effect lasted days.", examplePt: "A notícia me afetou; o efeito durou dias." },
      { term: "travel / trip", ipa: "/ˈtrævl/ · /trɪp/", pt: "viajar / viagem", definition: "Travel is the activity; a trip is one journey.", example: "I love to travel, and this trip was perfect.", examplePt: "Adoro viajar, e esta viagem foi perfeita." },
      { term: "fun / funny", ipa: "/fʌn/ · /ˈfʌni/", pt: "divertido / engraçado", definition: "Fun = enjoyable; funny = makes you laugh.", example: "The class was fun, and the teacher was funny.", examplePt: "A aula foi divertida e o professor era engraçado." },
    ],
  },
];

export const GENERAL_VOCABULARY_TOTAL = GENERAL_VOCABULARY.reduce(
  (sum, c) => sum + c.words.length,
  0,
);
