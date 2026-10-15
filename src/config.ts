export const business = {
  name: 'Doctor Clean', tagline: 'Higienização de Estofados', city: 'São Manuel, SP', phone: '(14) 99111-9419', whatsapp: '5514991119419',
  message: 'Olá! Vim pelo site e gostaria de solicitar um orçamento de higienização.',
  cities: ['São Manuel', 'Botucatu', 'Aparecida de São Manuel', 'Lençóis Paulista', 'Barra Bonita', 'Igaraçu do Tietê', 'Areiópolis'],
  services: [
    {name:'Sofás', subject:'sofá', description:'Do sofá da sala ao seu cantinho de descanso. Conte como é a sua peça.'},
    {name:'Colchões', subject:'colchão', description:'Cuidado com o estofado que faz parte da sua rotina de descanso.'},
    {name:'Poltronas', subject:'poltrona', description:'Atenção ao tecido e aos detalhes da sua poltrona favorita.'},
    {name:'Cadeiras', subject:'cadeiras', description:'Para os assentos que acompanham os encontros à mesa.'},
    {name:'Bancos automotivos', subject:'bancos automotivos', description:'Higienização dos estofados que acompanham você no caminho.'},
  ],
  images: {hero:'./images/living-room.webp', detail:'./images/chair.webp'},
};
export const whatsappLink = (subject?:string) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(subject ? `Olá! Vim pelo site e gostaria de solicitar um orçamento de higienização de ${subject}.` : business.message)}`;
export const faqs = [
  ['Como solicitar um orçamento?', 'Envie fotos do estofado pelo WhatsApp e informe sua cidade. Converse com a Doctor Clean sobre a peça e o serviço necessário para receber seu orçamento.'],
  ['Quais tipos de estofados são atendidos?', 'Sofás, colchões, poltronas, cadeiras e bancos automotivos. Envie fotos para avaliar o tecido e as condições da sua peça.'],
  ['Minha cidade é atendida?', `O atendimento divulgado inclui ${business.cities.join(', ')}. Consulte a disponibilidade para sua localização pelo WhatsApp.`],
  ['Quanto tempo leva para secar?', 'O tempo varia conforme o tecido, as condições do estofado, a ventilação e o clima. Peça ao profissional uma orientação específica para sua peça e seu ambiente.'],
  ['Todas as manchas podem ser removidas?', 'Cada mancha precisa ser avaliada. O resultado depende do tecido, da origem da mancha e das condições da peça. Converse com o profissional sobre as possibilidades e os limites do serviço.'],
];
