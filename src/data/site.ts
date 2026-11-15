// Centrale gegevens voor de hele site.

export const site = {
  name: 'Boitelle',
  suffix: 'HR Proactief',
  tagline: 'Datagedreven aanpak voor verzuimreductie',
  phone: '085 - 8768778',
  phoneHref: 'tel:+31858768778',
  email: 'info@boitelle.nl',
  address: {
    org: 'Boitelle Opleidingen',
    attn: 't.a.v. de directeur',
    postbus: 'Postbus 31236',
    city: '6503 CE Nijmegen',
  },
  director: 'drs. Mark Boitelle, psycholoog NIP',
};

// Hoofdmenu — exact zoals nu. "Opleidingen" bewust NIET opgenomen
// (bestaat als pagina, alleen bereikbaar via directe URL).
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Over', href: '/over' },
  { label: 'Kwaliteit', href: '/kwaliteit' },
  { label: 'Voorwaarden', href: '/voorwaarden' },
];

export const testimonials = [
  {
    quote: 'Tijdig voldoende aandacht geven aan collega’s geeft resultaat.',
    name: 'Frank',
    role: 'manager callcenter',
  },
  {
    quote: 'Deze datagedreven aanpak werkt al voordat je het doorhebt.',
    name: 'Mo',
    role: 'manager personenvervoer',
  },
  {
    quote: 'Verzuim is spectaculair gedaald. Een heel leuk traject.',
    name: 'Erik',
    role: 'directeur ICT-bedrijf',
  },
  {
    quote:
      'Een duidelijke, stapsgewijze aanpak. Het helpt dat ons management nu dezelfde taal spreekt.',
    name: 'Hanneke',
    role: 'HR-manager',
  },
];

// Klantnamen — voor de logostrook. Logo-bestanden volgen later;
// tot die tijd tonen we de namen als nette plekhouders.
export const clients = [
  'VGZ',
  'Dichterbij',
  'Wageningen Universiteit',
  'Politie Academie',
];

export const stats = [
  { value: 20, suffix: '+', label: 'jaar ervaring' },
  { value: 400, suffix: '+', label: 'leidinggevenden begeleid' },
  { value: 200, suffix: '+', label: 'teams getraind' },
];
