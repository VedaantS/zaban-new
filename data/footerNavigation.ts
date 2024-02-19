import { CountryVariant } from 'utils/locales';

type Link = {
  title: string;
  description: string;
  link: string;
};

type FooterLinks = {
  cs?: Link[];
  sk?: Link[];
  pl?: Link[];
  uk: Link[];
};

export const FOOTER_NAVIGATION: Record<CountryVariant, FooterLinks> = {
  cs: {
    cs: [
      {
        title: 'Beti padhao, Beti bachao',
        description: 'Every Indian deserves an education, no matter their sex.',
        link: 'https://www.pmindia.gov.in/en/government_tr_rec/beti-bachao-beti-padhao-caring-for-the-girl-child/',
      },
      {
        title: 'Pratham India',
        description: 'Keeping children in school and learning well.',
        link: 'https://www.pratham.org/',
      },
      {
        title: 'Vedaant Srivastava',
        description: "Using tech to make the world a better place.",
        link: 'https://github.com/VedaantS',
      },
    ],
    uk: [
      {
        title: 'बेटी पढ़ाओ, बेटी बचाओ',
        description: 'प्रत्येक भारतीय शिक्षा का हकदार है, चाहे लड़की हो या लड़का.',
        link: 'https://www.pmindia.gov.in/en/government_tr_rec/beti-bachao-beti-padhao-caring-for-the-girl-child/',
      },
      {
        title: 'प्रथम इंडिया',
        description: 'ताकि बच्चे स्कूल में रहें और अच्छे से पढ़ाई करें.',
        link: 'https://www.pratham.org/',
      },
      {
        title: 'Vedaant Srivastava',
        description: 'दुनिया को एक बेहतर जगह बनाने के लिए तकनीक का उपयोग करना.',
        link: 'https://github.com/VedaantS',
      },
    ],
  },
  sk: {
    sk: [
      {
        title: 'Help Ukraine',
        description: 'Portál na sprostredkovanie ponúk pomoci',
        link: 'https://helpukraine.sk/sk/',
      },
      {
        title: 'Ukraine Slovakia',
        description: 'Nezávislý informačný rázcestník',
        link: 'https://www.ukraineslovakia.sk/sk/',
      },
      {
        title: 'Česko.Digital',
        description: 'Cez jednotky a nuly meníme Česko k lepšiemu',
        link: 'https://cesko.digital',
      },
    ],
    uk: [
      {
        title: 'Help Ukraine',
        description: 'Майданчик з пропозиціями допомоги',
        link: 'https://helpukraine.sk/ua/',
      },
      {
        title: 'Ukraine Slovakia',
        description: 'Незалежний інформаційний довідник',
        link: 'https://www.ukraineslovakia.sk/uk/',
      },
      {
        title: 'Česko.Digital',
        description: 'Через одиниці і нулі змінюємо Чехію на краще',
        link: 'https://en.cesko.digital/',
      },
    ],
  },
  pl: {
    pl: [
      {
        title: 'Pomagam Ukrainie',
        description: 'Portal pośredniczący ofertom pomocy',
        link: 'https://pomagamukrainie.gov.pl',
      },
      {
        title: 'Česko.Digital',
        description: 'Przez jedynki i zera zmieniamy Czechy na lepsze (link w języku angielskim)',
        link: 'https://en.cesko.digital/',
      },
    ],
    uk: [
      {
        title: 'Pomagam Ukrainie',
        description: 'Майданчик з пропозиціями допомоги',
        link: 'https://pomagamukrainie.gov.pl/ua',
      },
      {
        title: 'www.gov.pl/ua',
        description: 'Сайт Республіки Польща для громадян України',
        link: 'https://www.gov.pl/web/ua',
      },
      {
        title: 'Česko.Digital',
        description: 'Через одиниці і нулі змінюємо Чехію на краще',
        link: 'https://en.cesko.digital/',
      }, 
    ],
  },
};
