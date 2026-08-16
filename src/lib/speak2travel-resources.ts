/**
 * Speak2Travel — Material Complementar.
 * Conteúdo desenvolvido de cada seção: vocabulário, gramática, laboratório de
 * pronúncia, inglês de sobrevivência, dicas culturais e pocket dictionary.
 * Todo item é praticável: áudio da IA (modelo nativo) + fala do aluno para checagem.
 */

export type ResourceItem = {
  /** Frase ou palavra em inglês — é o que a IA pronuncia e avalia. */
  en: string;
  /** Tradução ou significado em português. */
  pt: string;
  /** Observação de uso, gramática, pronúncia ou cultura. */
  note?: string;
};

export type ResourceGroup = {
  id: string;
  title: string;
  subtitle?: string;
  intro?: string;
  items: ResourceItem[];
};

export type TravelResourceContent = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  /** Como usar a seção (passo a passo em português). */
  howTo: string[];
  groups: ResourceGroup[];
};

export const TRAVEL_RESOURCE_CONTENT: TravelResourceContent[] = [
  {
    id: "travel-vocabulary",
    title: "Vocabulary with IPA",
    subtitle: "Travel Vocabulary · palavras essenciais sempre dentro de uma frase real",
    description:
      "Vocabulário organizado pelas seis áreas que aparecem em toda viagem. Cada palavra vem com a frase em que ela realmente é usada — decore a frase, não a palavra solta.",
    howTo: [
      "Toque em Ouvir para escutar a pronúncia nativa da IA.",
      "Repita em voz alta imitando o ritmo (shadowing).",
      "Grave sua voz e receba a nota de precisão com os sons a corrigir.",
    ],
    groups: [
      {
        id: "airport",
        title: "Aeroporto",
        subtitle: "Check-in, embarque e conexões",
        items: [
          { en: "Where is the check-in counter for this flight?", pt: "Onde fica o balcão de check-in deste voo?", note: "check-in counter = balcão de check-in." },
          { en: "I'd like an aisle seat, please.", pt: "Eu gostaria de um assento no corredor, por favor.", note: "aisle soa 'ail' — o 's' é mudo." },
          { en: "Is this the boarding gate for flight 402?", pt: "Este é o portão de embarque do voo 402?" },
          { en: "I have one carry-on and one checked bag.", pt: "Tenho uma bagagem de mão e uma despachada." },
          { en: "My connecting flight leaves in one hour.", pt: "Meu voo de conexão sai em uma hora." },
          { en: "Where can I pick up my luggage?", pt: "Onde posso pegar minha bagagem?", note: "baggage claim = esteira de bagagem." },
          { en: "The flight has been delayed.", pt: "O voo foi atrasado." },
          { en: "Do I need to go through security again?", pt: "Preciso passar pela segurança de novo?" },
        ],
      },
      {
        id: "hotel",
        title: "Hotel",
        subtitle: "Reserva, quarto e serviços",
        items: [
          { en: "I have a reservation under the name Silva.", pt: "Tenho uma reserva no nome Silva." },
          { en: "What time is check-out?", pt: "Que horas é o check-out?" },
          { en: "Could I have a late check-out, please?", pt: "Posso fazer o check-out mais tarde, por favor?" },
          { en: "Is breakfast included in the rate?", pt: "O café da manhã está incluso na diária?" },
          { en: "The air conditioning isn't working.", pt: "O ar-condicionado não está funcionando." },
          { en: "Could you send extra towels to room 512?", pt: "Pode mandar toalhas extras para o quarto 512?" },
          { en: "Can I leave my luggage here after check-out?", pt: "Posso deixar minha bagagem aqui depois do check-out?" },
          { en: "What's the Wi-Fi password?", pt: "Qual é a senha do Wi-Fi?" },
        ],
      },
      {
        id: "transport",
        title: "Transporte",
        subtitle: "Táxi, metrô, ônibus e aluguel de carro",
        items: [
          { en: "Could you take me to this address, please?", pt: "Pode me levar até este endereço, por favor?" },
          { en: "How much is the fare to downtown?", pt: "Quanto custa a corrida até o centro?", note: "fare = tarifa/corrida; fee = taxa." },
          { en: "Which line goes to Central Station?", pt: "Qual linha vai para a Estação Central?" },
          { en: "Do I need to transfer to another train?", pt: "Preciso baldear para outro trem?" },
          { en: "One round-trip ticket, please.", pt: "Uma passagem de ida e volta, por favor.", note: "one-way = só ida." },
          { en: "Where's the nearest bus stop?", pt: "Onde fica o ponto de ônibus mais próximo?" },
          { en: "I'd like to rent a compact car for three days.", pt: "Quero alugar um carro compacto por três dias." },
          { en: "Does the price include insurance?", pt: "O preço inclui seguro?" },
        ],
      },
      {
        id: "restaurant",
        title: "Restaurante",
        subtitle: "Pedir, adaptar e pagar",
        items: [
          { en: "A table for two, please.", pt: "Uma mesa para dois, por favor." },
          { en: "Could I see the menu, please?", pt: "Poderia ver o cardápio, por favor?" },
          { en: "What do you recommend?", pt: "O que você recomenda?" },
          { en: "I'm allergic to peanuts.", pt: "Sou alérgico(a) a amendoim." },
          { en: "I'd like it medium rare, please.", pt: "Gostaria no ponto para mal passado, por favor." },
          { en: "Could we have the check, please?", pt: "Poderia trazer a conta, por favor?", note: "EUA: check. Reino Unido: bill." },
          { en: "Is the tip included?", pt: "A gorjeta está incluída?" },
          { en: "Can I pay by card?", pt: "Posso pagar com cartão?" },
        ],
      },
      {
        id: "shopping",
        title: "Compras",
        subtitle: "Tamanhos, preços e trocas",
        items: [
          { en: "I'm just looking, thank you.", pt: "Estou só olhando, obrigado(a)." },
          { en: "Do you have this in a smaller size?", pt: "Você tem isto em um tamanho menor?" },
          { en: "Can I try it on?", pt: "Posso experimentar?" },
          { en: "How much is this one?", pt: "Quanto custa este?" },
          { en: "Is this on sale?", pt: "Isto está em promoção?", note: "on sale = em promoção; for sale = à venda." },
          { en: "Can I get a refund if it doesn't fit?", pt: "Posso ser reembolsado se não servir?" },
          { en: "Could I have a receipt, please?", pt: "Poderia me dar o recibo, por favor?" },
          { en: "Do you accept international cards?", pt: "Vocês aceitam cartões internacionais?" },
        ],
      },
      {
        id: "health",
        title: "Saúde",
        subtitle: "Farmácia, sintomas e atendimento",
        items: [
          { en: "I don't feel well.", pt: "Não estou me sentindo bem." },
          { en: "I have a headache and a sore throat.", pt: "Estou com dor de cabeça e dor de garganta." },
          { en: "Do I need a prescription for this?", pt: "Preciso de receita médica para isto?" },
          { en: "Is there a pharmacy nearby?", pt: "Tem uma farmácia por perto?" },
          { en: "I need to see a doctor.", pt: "Preciso ver um médico." },
          { en: "I have travel insurance — here's my policy number.", pt: "Tenho seguro viagem — aqui está o número da apólice." },
          { en: "I'm taking medication for blood pressure.", pt: "Estou tomando remédio para pressão." },
          { en: "It hurts here.", pt: "Dói aqui." },
        ],
      },
    ],
  },
  {
    id: "travel-grammar",
    title: "Travel Grammar",
    subtitle: "Só a gramática que aparece em toda viagem",
    description:
      "Cinco estruturas resolvem 90% das conversas de viagem. Aqui você treina cada uma pelo som, não pela regra: escute o padrão, repita e grave.",
    howTo: [
      "Leia a regra curta de cada bloco (1 linha).",
      "Ouça as frases-modelo e repita mantendo a entonação.",
      "Grave sua voz: a IA confere se você manteve a estrutura completa.",
    ],
    groups: [
      {
        id: "can",
        title: "Can — pedir e perguntar sobre possibilidade",
        intro: "Can + verbo base. Direto e informal. Sempre 'Can I...?' — nunca 'Can I to...'.",
        items: [
          { en: "Can I pay by card?", pt: "Posso pagar com cartão?" },
          { en: "Can you help me, please?", pt: "Você pode me ajudar, por favor?" },
          { en: "Can I leave my bags here?", pt: "Posso deixar minhas malas aqui?" },
          { en: "Can we sit by the window?", pt: "Podemos sentar perto da janela?" },
          { en: "I can't find my gate.", pt: "Não consigo achar meu portão.", note: "can't (americano) soa 'kænt'." },
        ],
      },
      {
        id: "could",
        title: "Could — a versão educada de can",
        intro: "Could deixa qualquer pedido mais gentil. Use com estranhos e em serviços.",
        items: [
          { en: "Could you speak more slowly, please?", pt: "Poderia falar mais devagar, por favor?" },
          { en: "Could I have a window seat?", pt: "Poderia me dar um assento na janela?" },
          { en: "Could you repeat that, please?", pt: "Poderia repetir, por favor?" },
          { en: "Could you write it down for me?", pt: "Poderia escrever isso para mim?" },
          { en: "Could we have five more minutes?", pt: "Poderíamos ter mais cinco minutos?" },
        ],
      },
      {
        id: "would",
        title: "Would like — dizer o que você quer sem soar rude",
        intro: "'I want' soa exigente. 'I'd like' é o padrão em hotéis, lojas e restaurantes.",
        items: [
          { en: "I'd like a coffee, please.", pt: "Eu gostaria de um café, por favor.", note: "I'd = I would, som curto 'aid'." },
          { en: "I'd like to check in, please.", pt: "Gostaria de fazer o check-in, por favor." },
          { en: "We'd like to book a tour for tomorrow.", pt: "Gostaríamos de reservar um passeio para amanhã." },
          { en: "Would you like anything else?", pt: "Você gostaria de mais alguma coisa?" },
          { en: "I'd rather sit outside.", pt: "Eu preferiria sentar do lado de fora." },
        ],
      },
      {
        id: "how-much",
        title: "How much / How many / How long",
        intro: "How much = preço e incontáveis. How many = contáveis. How long = tempo.",
        items: [
          { en: "How much does it cost?", pt: "Quanto custa?" },
          { en: "How much is the ticket to the airport?", pt: "Quanto custa a passagem para o aeroporto?" },
          { en: "How many nights are you staying?", pt: "Quantas noites você vai ficar?" },
          { en: "How long does the tour take?", pt: "Quanto tempo dura o passeio?" },
          { en: "How far is it from here?", pt: "Fica a que distância daqui?" },
        ],
      },
      {
        id: "where-is",
        title: "Where is... / Is there... — achar tudo",
        intro: "Where is + lugar específico. Is there + algo que talvez exista por perto.",
        items: [
          { en: "Where is the bathroom?", pt: "Onde fica o banheiro?" },
          { en: "Where is the baggage claim?", pt: "Onde fica a esteira de bagagem?" },
          { en: "Is there an ATM near here?", pt: "Tem um caixa eletrônico perto daqui?" },
          { en: "Is there a bus to the city center?", pt: "Tem ônibus para o centro da cidade?" },
          { en: "Are there any tables available?", pt: "Há alguma mesa disponível?" },
        ],
      },
      {
        id: "past-future",
        title: "Passado e futuro que você realmente precisa",
        intro: "Para explicar um problema (passado) e combinar algo (futuro).",
        items: [
          { en: "I booked a room for two nights.", pt: "Reservei um quarto por duas noites." },
          { en: "My flight was cancelled.", pt: "Meu voo foi cancelado." },
          { en: "I left my phone in the taxi.", pt: "Esqueci meu celular no táxi." },
          { en: "I'm going to arrive around ten p.m.", pt: "Vou chegar por volta das dez da noite." },
          { en: "We'll be back in twenty minutes.", pt: "Voltaremos em vinte minutos." },
        ],
      },
    ],
  },
  {
    id: "pronunciation-lab",
    title: "Pronunciation Lab",
    subtitle: "Áudios nativos, shadowing e repetição guiada",
    description:
      "O laboratório ataca os sons que mais entregam o sotaque brasileiro e treina o ritmo da frase. Ouça o modelo da IA, repita junto e grave para receber a nota de precisão.",
    howTo: [
      "Ouça o modelo duas vezes antes de gravar.",
      "Na segunda vez, fale junto com o áudio (shadowing).",
      "Grave e leia as dicas de som: repita até passar de 85%.",
    ],
    groups: [
      {
        id: "th",
        title: "O som TH",
        subtitle: "Língua entre os dentes — não é 'f', 'd' nem 's'",
        intro: "Coloque a ponta da língua entre os dentes e solte o ar. Treine devagar.",
        items: [
          { en: "Thank you so much.", pt: "Muito obrigado(a).", note: "TH surdo: só ar, sem voz." },
          { en: "I think this is the wrong gate.", pt: "Acho que este é o portão errado." },
          { en: "The other one, please.", pt: "O outro, por favor.", note: "TH sonoro: garganta vibra." },
          { en: "Is there something cheaper?", pt: "Tem algo mais barato?" },
          { en: "Three thirty in the afternoon.", pt: "Três e meia da tarde.", note: "Clássico teste de TH + R." },
        ],
      },
      {
        id: "final-sounds",
        title: "Finais de palavra",
        subtitle: "Não acrescente vogal no fim",
        intro: "Brasileiro tende a dizer 'flighti', 'stopi'. Termine seco na consoante.",
        items: [
          { en: "My flight is at eight.", pt: "Meu voo é às oito.", note: "flight termina em 't' seco." },
          { en: "The bus stop is on the right.", pt: "O ponto de ônibus é à direita." },
          { en: "I need help with my bags.", pt: "Preciso de ajuda com minhas malas." },
          { en: "It's cold outside.", pt: "Está frio lá fora." },
          { en: "Please don't forget my passport.", pt: "Por favor, não esqueça meu passaporte." },
        ],
      },
      {
        id: "minimal-pairs",
        title: "Pares mínimos",
        subtitle: "Sons parecidos que mudam o sentido",
        intro: "Grave cada par: a IA mostra se o ouvinte entendeu a palavra certa.",
        items: [
          { en: "I want to leave now, not live here.", pt: "Quero ir embora agora, não morar aqui.", note: "leave (longo) × live (curto)." },
          { en: "The beach is only ten minutes from here.", pt: "A praia fica a só dez minutos daqui.", note: "Alongue o 'ee' de beach — o 'i' curto muda a palavra." },
          { en: "Please sit on this seat.", pt: "Por favor, sente neste assento.", note: "sit (curto) × seat (longo)." },
          { en: "Can I have a full refund?", pt: "Posso ter o reembolso total?", note: "full (curto) × fool." },
          { en: "The ship left the port at six.", pt: "O navio saiu do porto às seis.", note: "ship × sheep." },
        ],
      },
      {
        id: "linking",
        title: "Ligação entre palavras (linking)",
        subtitle: "Nativos não separam as palavras",
        intro: "Consoante final gruda na vogal seguinte: 'check in' vira 'che-kin'.",
        items: [
          { en: "I'd like to check in, please.", pt: "Gostaria de fazer o check-in, por favor.", note: "che-kin." },
          { en: "Pick it up over there.", pt: "Pegue ali.", note: "pi-ki-tup." },
          { en: "What time does it open?", pt: "Que horas abre?", note: "wha-tai-mda-zit." },
          { en: "Can I have a bit of water?", pt: "Posso ter um pouco de água?", note: "bi-tov." },
          { en: "Turn it off, please.", pt: "Desligue, por favor.", note: "tur-ni-tof." },
        ],
      },
      {
        id: "shadowing",
        title: "Shadowing — frases longas",
        subtitle: "Ritmo e respiração",
        intro: "Fale junto com a IA, sem pausar. Objetivo: manter o ritmo até o fim.",
        items: [
          { en: "Excuse me, I think my connecting flight leaves from a different terminal.", pt: "Com licença, acho que meu voo de conexão sai de outro terminal." },
          { en: "I have a reservation for three nights and I'd like a quiet room, if possible.", pt: "Tenho reserva para três noites e gostaria de um quarto silencioso, se possível." },
          { en: "Could you tell me how long it takes to get downtown by train?", pt: "Poderia me dizer quanto tempo leva para chegar ao centro de trem?" },
          { en: "We'd like to order two starters, one main course and a bottle of sparkling water.", pt: "Gostaríamos de pedir duas entradas, um prato principal e uma garrafa de água com gás." },
          { en: "I'm sorry to bother you, but the room next door is extremely noisy.", pt: "Desculpe incomodar, mas o quarto ao lado está muito barulhento." },
        ],
      },
    ],
  },
  {
    id: "survival-english",
    title: "Survival English",
    subtitle: "As frases que salvam qualquer viagem",
    description:
      "O kit mínimo. Se você só puder treinar uma seção antes de embarcar, treine esta — são as frases que resolvem problema, pedem ajuda e evitam mal-entendido.",
    howTo: [
      "Treine primeiro os blocos Emergências e Não entendi.",
      "Grave cada frase até acertar sem olhar o texto.",
      "Salve esta página nos favoritos: funciona como colinha na viagem.",
    ],
    groups: [
      {
        id: "emergency",
        title: "Emergências",
        subtitle: "Diga alto e devagar",
        items: [
          { en: "I need help, please.", pt: "Preciso de ajuda, por favor." },
          { en: "Call an ambulance!", pt: "Chame uma ambulância!" },
          { en: "Call the police, please.", pt: "Chame a polícia, por favor." },
          { en: "My passport was stolen.", pt: "Meu passaporte foi roubado." },
          { en: "I'm allergic to penicillin.", pt: "Sou alérgico(a) a penicilina." },
          { en: "Where is the nearest hospital?", pt: "Onde fica o hospital mais próximo?" },
          { en: "I need to contact my embassy.", pt: "Preciso entrar em contato com minha embaixada." },
          { en: "I've lost my luggage.", pt: "Perdi minha bagagem." },
        ],
      },
      {
        id: "not-understanding",
        title: "Quando você não entendeu",
        subtitle: "Nunca finja que entendeu",
        items: [
          { en: "Sorry, I didn't catch that.", pt: "Desculpe, não entendi." },
          { en: "Could you speak more slowly, please?", pt: "Poderia falar mais devagar, por favor?" },
          { en: "Could you repeat that, please?", pt: "Poderia repetir, por favor?" },
          { en: "How do you spell that?", pt: "Como se escreve isso?" },
          { en: "Could you write it down, please?", pt: "Poderia escrever, por favor?" },
          { en: "Do you speak Portuguese or Spanish?", pt: "Você fala português ou espanhol?" },
          { en: "I don't speak much English, but I'm learning.", pt: "Não falo muito inglês, mas estou aprendendo." },
          { en: "Let me show you on my phone.", pt: "Deixe-me mostrar no meu celular." },
        ],
      },
      {
        id: "requests",
        title: "Pedidos do dia a dia",
        subtitle: "Educado sempre funciona melhor",
        items: [
          { en: "Excuse me, could you help me?", pt: "Com licença, pode me ajudar?" },
          { en: "Just a moment, please.", pt: "Um momento, por favor." },
          { en: "May I use your restroom?", pt: "Posso usar o banheiro?" },
          { en: "Could I have some water, please?", pt: "Poderia me trazer água, por favor?" },
          { en: "Is it okay if I sit here?", pt: "Tudo bem se eu sentar aqui?" },
          { en: "Thank you, I really appreciate it.", pt: "Obrigado(a), agradeço muito." },
        ],
      },
      {
        id: "directions",
        title: "Direções",
        subtitle: "Perguntar e entender a resposta",
        items: [
          { en: "Excuse me, I'm lost. Where am I on this map?", pt: "Com licença, estou perdido(a). Onde estou neste mapa?" },
          { en: "How do I get to the train station?", pt: "Como chego à estação de trem?" },
          { en: "Is it walking distance?", pt: "Dá para ir a pé?" },
          { en: "Go straight and turn left at the corner.", pt: "Siga reto e vire à esquerda na esquina.", note: "Frase que você vai OUVIR — treine para reconhecer." },
          { en: "It's across the street, next to the bank.", pt: "É do outro lado da rua, ao lado do banco." },
          { en: "Could you show me on the map?", pt: "Poderia me mostrar no mapa?" },
        ],
      },
      {
        id: "numbers",
        title: "Números e preços",
        subtitle: "Onde mais se perde dinheiro",
        items: [
          { en: "How much is it in total?", pt: "Quanto é no total?" },
          { en: "That's fifteen fifty, right?", pt: "São quinze e cinquenta, certo?", note: "fifteen (FIF-teen) × fifty (FIF-ty)." },
          { en: "Is there an extra fee?", pt: "Há alguma taxa extra?" },
          { en: "Do you have change for a twenty?", pt: "Você tem troco para vinte?" },
          { en: "Could you write the price down?", pt: "Poderia escrever o preço?" },
          { en: "I think there's a mistake in the bill.", pt: "Acho que há um erro na conta." },
        ],
      },
    ],
  },
  {
    id: "culture-tips",
    title: "Culture Tips",
    subtitle: "Diferenças culturais por destino",
    description:
      "O que você diz importa; como você diz importa mais. Gorjeta, formalidade, fila e pequenos gestos mudam completamente a percepção sobre você.",
    howTo: [
      "Leia a nota cultural de cada frase antes de treinar.",
      "Ouça o modelo: entonação educada faz parte da mensagem.",
      "Grave e compare — soar gentil é tão importante quanto acertar as palavras.",
    ],
    groups: [
      {
        id: "usa",
        title: "Estados Unidos",
        subtitle: "Gorjeta obrigatória e simpatia rápida",
        intro: "Gorjeta de 18% a 20% em restaurantes e 1 a 2 dólares por mala. 'How are you?' é cumprimento, não pergunta.",
        items: [
          { en: "Hi, how are you doing today?", pt: "Oi, como você está hoje?", note: "Responda 'Good, thanks. And you?' e siga." },
          { en: "I'll leave the tip in cash.", pt: "Vou deixar a gorjeta em dinheiro." },
          { en: "Could we split the check?", pt: "Podemos dividir a conta?" },
          { en: "Excuse me, sorry about that.", pt: "Com licença, desculpe.", note: "Americanos pedem desculpa por qualquer esbarrão." },
          { en: "To go, please.", pt: "Para viagem, por favor.", note: "Nos EUA é 'to go'; no Reino Unido, 'takeaway'." },
        ],
      },
      {
        id: "uk",
        title: "Inglaterra",
        subtitle: "Fila sagrada e 'please' em tudo",
        intro: "Nunca fure a fila (queue). Gorjeta ~10% e muitas vezes já incluída como 'service charge'.",
        items: [
          { en: "Sorry, is this the end of the queue?", pt: "Desculpe, este é o fim da fila?" },
          { en: "Could I have a flat white, please?", pt: "Poderia me dar um flat white, por favor?" },
          { en: "Is service included?", pt: "O serviço está incluído?" },
          { en: "Cheers, thanks a lot.", pt: "Valeu, muito obrigado.", note: "'Cheers' também significa obrigado." },
          { en: "Sorry to bother you, but could you help me?", pt: "Desculpe incomodar, mas poderia me ajudar?" },
        ],
      },
      {
        id: "canada",
        title: "Canadá",
        subtitle: "Educação acima de tudo",
        intro: "Gorjeta de 15% a 18%. Excesso de 'sorry' e 'thank you' é normal e bem-visto.",
        items: [
          { en: "Sorry, could I get by?", pt: "Desculpe, posso passar?" },
          { en: "Thanks so much, have a good one.", pt: "Muito obrigado, tenha um bom dia." },
          { en: "Is it fifteen percent tip on the machine?", pt: "A gorjeta na maquininha é de quinze por cento?" },
          { en: "Do you take tap payment?", pt: "Vocês aceitam pagamento por aproximação?" },
          { en: "It's pretty cold out there, eh?", pt: "Está bem frio lá fora, né?", note: "'eh' é o marcador canadense." },
        ],
      },
      {
        id: "australia",
        title: "Austrália",
        subtitle: "Informalidade e sem gorjeta obrigatória",
        intro: "Gorjeta não é esperada. Tratamento é informal, mesmo em serviços.",
        items: [
          { en: "G'day, how's it going?", pt: "Olá, como vai?" },
          { en: "No worries, mate.", pt: "Sem problema, amigo.", note: "Expressão nacional — use à vontade." },
          { en: "Can I grab a coffee, please?", pt: "Pode me ver um café, por favor?", note: "'grab' = pedir, informal." },
          { en: "Where's the closest servo?", pt: "Onde fica o posto mais próximo?", note: "servo = service station." },
          { en: "This arvo works for me.", pt: "Esta tarde funciona para mim.", note: "arvo = afternoon." },
        ],
      },
      {
        id: "universal",
        title: "Regras universais",
        subtitle: "Funciona em qualquer destino",
        items: [
          { en: "Excuse me, may I ask you something?", pt: "Com licença, posso lhe perguntar algo?" },
          { en: "Thank you for your patience.", pt: "Obrigado pela paciência." },
          { en: "I'm sorry, I didn't mean to be rude.", pt: "Desculpe, não quis ser mal-educado(a)." },
          { en: "Is it okay to take a photo here?", pt: "Tudo bem tirar foto aqui?" },
          { en: "Have a great day!", pt: "Tenha um ótimo dia!" },
        ],
      },
    ],
  },
  {
    id: "mini-dictionary",
    title: "Pocket Dictionary",
    subtitle: "Consulta rápida por tema",
    description:
      "Palavra por palavra, agrupada pelos temas dos 10 módulos. Ideal para consultar no meio da viagem — e cada verbete tem áudio para você conferir a pronúncia na hora.",
    howTo: [
      "Use a busca do navegador (Ctrl/Cmd + F) para achar a palavra.",
      "Toque em Ouvir para conferir a pronúncia antes de falar.",
      "Grave para checar se sua pronúncia é reconhecida.",
    ],
    groups: [
      {
        id: "dic-airport",
        title: "Aeroporto",
        items: [
          { en: "Boarding pass", pt: "Cartão de embarque" },
          { en: "Gate", pt: "Portão de embarque" },
          { en: "Departure", pt: "Partida" },
          { en: "Arrival", pt: "Chegada" },
          { en: "Layover", pt: "Conexão / escala" },
          { en: "Baggage claim", pt: "Esteira de bagagem" },
          { en: "Carry-on", pt: "Bagagem de mão" },
          { en: "Customs", pt: "Alfândega" },
          { en: "Delay", pt: "Atraso" },
          { en: "Aisle seat", pt: "Assento no corredor" },
        ],
      },
      {
        id: "dic-hotel",
        title: "Hotel",
        items: [
          { en: "Front desk", pt: "Recepção" },
          { en: "Check-in", pt: "Entrada / registro" },
          { en: "Check-out", pt: "Saída" },
          { en: "Rate", pt: "Diária / tarifa" },
          { en: "Housekeeping", pt: "Camareira / arrumação" },
          { en: "Deposit", pt: "Caução" },
          { en: "Vacancy", pt: "Vaga disponível" },
          { en: "Amenities", pt: "Comodidades" },
          { en: "Wake-up call", pt: "Chamada para acordar" },
          { en: "Luggage storage", pt: "Guarda-volumes" },
        ],
      },
      {
        id: "dic-transport",
        title: "Transporte",
        items: [
          { en: "Fare", pt: "Tarifa / corrida" },
          { en: "Round trip", pt: "Ida e volta" },
          { en: "One-way", pt: "Somente ida" },
          { en: "Platform", pt: "Plataforma" },
          { en: "Transfer", pt: "Baldeação" },
          { en: "Schedule", pt: "Horário" },
          { en: "Rush hour", pt: "Horário de pico" },
          { en: "Toll", pt: "Pedágio" },
          { en: "Gas station", pt: "Posto de combustível" },
          { en: "Ride-share", pt: "Aplicativo de corrida" },
        ],
      },
      {
        id: "dic-restaurant",
        title: "Restaurante",
        items: [
          { en: "Starter", pt: "Entrada" },
          { en: "Main course", pt: "Prato principal" },
          { en: "Side dish", pt: "Acompanhamento" },
          { en: "Rare / medium / well done", pt: "Mal passado / ao ponto / bem passado" },
          { en: "Refill", pt: "Reposição da bebida" },
          { en: "Tip", pt: "Gorjeta" },
          { en: "Check / bill", pt: "Conta" },
          { en: "Takeaway", pt: "Para viagem" },
          { en: "Sparkling water", pt: "Água com gás" },
          { en: "Vegetarian", pt: "Vegetariano" },
        ],
      },
      {
        id: "dic-shopping",
        title: "Compras",
        items: [
          { en: "Fitting room", pt: "Provador" },
          { en: "Receipt", pt: "Recibo" },
          { en: "Refund", pt: "Reembolso" },
          { en: "Exchange", pt: "Troca" },
          { en: "Discount", pt: "Desconto" },
          { en: "On sale", pt: "Em promoção" },
          { en: "Tax free", pt: "Isento de imposto" },
          { en: "Size", pt: "Tamanho" },
          { en: "Cash register", pt: "Caixa" },
          { en: "Sold out", pt: "Esgotado" },
        ],
      },
      {
        id: "dic-health",
        title: "Saúde e emergências",
        items: [
          { en: "Pharmacy / drugstore", pt: "Farmácia" },
          { en: "Prescription", pt: "Receita médica" },
          { en: "Painkiller", pt: "Analgésico" },
          { en: "Fever", pt: "Febre" },
          { en: "Sore throat", pt: "Dor de garganta" },
          { en: "Emergency room", pt: "Pronto-socorro" },
          { en: "Insurance policy", pt: "Apólice de seguro" },
          { en: "Allergy", pt: "Alergia" },
          { en: "Embassy", pt: "Embaixada" },
          { en: "Police report", pt: "Boletim de ocorrência" },
        ],
      },
    ],
  },
];

export function getTravelResource(id: string): TravelResourceContent | undefined {
  return TRAVEL_RESOURCE_CONTENT.find((r) => r.id === id);
}
