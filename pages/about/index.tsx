import { useTranslation, Trans } from 'next-i18next';
import { getCountryVariant } from 'utils/locales';
import { useLanguage } from 'utils/useLanguageHook';
import SEO from 'components/basecomponents/SEO';
import { H2, TextLink, P } from 'components/Typography';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { getServerSideTranslations } from 'utils/localization';
import articles from '../../data/articles/articles.json';

type Link = string;

type Links = {
  cs: Link;
  sk: Link;
  pl: Link;
  uk: Link;
};

type key = string;

const NAVIGATION: Record<key, Links> = {
  stojimezaukrajinou: {
    cs: 'https://www.stojimezaukrajinou.cz/',
    sk: 'https://www.stojimezaukrajinou.cz/',
    pl: 'https://www.stojimezaukrajinou.cz/en',
    uk: 'https://www.stojimezaukrajinou.cz/uk',
  },
  'cesko.digital': {
    cs: 'https://cesko.digital/',
    sk: 'https://cesko.digital/',
    pl: 'https://en.cesko.digital/',
    uk: 'https://en.cesko.digital/',
  },
};

const partners = [
  {
    title: 'Centrum pro integraci cizinců',
    url: 'https://www.cicops.cz/',
    logo: '/icons/about/cic_logo_bez_pozadí.png',
  },
  {
    title: 'Městská knihovna v Praze',
    url: 'https://www.mlp.cz/',
    logo: '/icons/about/mestska_knihovna_Praha_v2.svg',
  },
  {
    title: 'Post Bellum',
    url: 'https://www.postbellum.cz/',
    logo: '/icons/about/PB-logo-black-vertical-01.png',
  },
  {
    title: 'Katedra informačních studií a knihovnictví (KISK), Masarykova univerzita',
    url: 'https://kisk.phil.muni.cz/',
    logo: '/icons/about/logo-kisk.png',
  },
  {
    title: 'Prague Maidan - Ukrajinské Centrum Nusle',
    url: 'https://www.maidan.cz/',
    logo: '/icons/about/logo-maidan.png',
  },
];

type Partner = {
  title: string;
  url: string;
  logo: string;
};

type PartnerListProps = {
  partners: Partner[];
};

const PartnerList = ({ partners }: PartnerListProps) => {
  return (
    <ul className="flex flex-wrap xl:space-x-5">
      {partners.map((partner) => (
        <li key={partner.title} className={'w-36 my-5 xl:my-0 md:w-40 h-20 relative'}>
          <a href={partner.url} target="_blank" rel="noopener">
            <div className="relative w-full h-full">
              <Image src={partner.logo} fill alt={partner.title} title={partner.title} className="object-contain" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

interface TeamStucture {
  sections: [
    {
      name: {
        cs: string;
        pl: string;
        uk: string;
        sk: string;
        en: string;
      };
      members: [
        {
          name: string;
        }
      ];
    }
  ];
}

interface TeamSection {
  team: TeamStucture['sections'][number]['name'];
  members: string;
}

type ArticleType = {
  title: string;
  url: string;
  sourceName: string;
  lang: string;
  publishDate: string;
};

type ArticlesListProps = {
  articles: ArticleType[];
};

type ArticleProps = {
  article: ArticleType;
};

const flagEmojis: Record<string, string> = {
  uk: '🇺🇦',
  cs: '🇨🇿',
  de: '🇩🇪',
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
  it: '🇮🇹',
  pl: '🇵🇱',
  ru: '🇷🇺',
  sk: '🇸🇰',
};

const Article = ({ article }: ArticleProps): JSX.Element => {
  const [formatedDate, setFormatedDate] = React.useState<string>('');

  useEffect(() => {
    setFormatedDate(new Date(article.publishDate).toLocaleDateString());
  }, [article.publishDate]);

  return (
    <div className="w-full md:max-w-full md:flex p-2 md:p-4 bg-white border-b-1 border-b-primary-grey">
      <a className="hover:text-primary-blue mr-2" href={article.url}>
        {article.title}
      </a>
      <div className="font-light">
        <span className="inline-block lg:pl-2 pr-2">{article.sourceName}</span>
        <span className="inline-block pr-2">{formatedDate}</span>
        <span role="img">{flagEmojis[article.lang]}</span>
      </div>
    </div>
  );
};

const ArticlesList = ({ articles }: ArticlesListProps): JSX.Element => {
  return (
    <ul>
      {articles.map((article, index) => (
        <li key={index}>
          <Article article={article} />
        </li>
      ))}
    </ul>
  );
};

const About: NextPage<{ teams: TeamSection[] }> = ({ teams }) => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  return (
    <>
      <SEO title={t('seo.about_page_title')} description={t('seo.about_page_description')} />
      <div className="max-w-7xl m-auto pb-6">
        <h1 className="text-primary-blue">
          <Trans className="block my-2">{t('about_page.title')}</Trans>
        </h1>
        <H2>{t('about_page.movapp_goal_title')}</H2>
        {t(`about_page.movapp_goal_description.${getCountryVariant()}`)}
        <H2>{t('about_page.why_movapp_title')}</H2>
        <P>
          <Trans i18nKey={'about_page.why_movapp_mova'} />
        </P>
        <P>{t('about_page.why_movapp_description')}</P>
        <P>
          <Trans
            i18nKey={'about_page.why_movapp_license'}
            t={t}
            components={[
              <TextLink
                href={`https://creativecommons.org/licenses/by-nc/4.0/deed.${currentLanguage}`}
                target="_blank"
                key="creativecommons"
              />,
            ]}
          />
        </P>

        {currentLanguage.toString() === 'cs' || currentLanguage.toString() === 'uk' ? (
          <>
            <H2>{t('about_page.movapp_origin_title')}</H2>
            <Trans
              components={[
                <TextLink href={currentLanguage.toString() === 'cs' ? '/wiki/pribeh' : '/wiki/istorija'} key="movapp_story" />,
                <TextLink
                  href={currentLanguage.toString() === 'cs' ? '/wiki/vyvoj-titulni-stranky' : '/wiki/zminy-na-holovnii-storintsi'}
                  key="movapp_page_changes"
                />,
              ]}
            >
              {t('about_page.movapp_origin_description')}
            </Trans>
          </>
        ) : null}



        <H2>{t('about_page.how_to_find_us_title')}</H2>
        <Trans i18nKey={'about_page.how_to_find_us_description'} />




      </div>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const promise = await fetch('https://data.movapp.eu/team.v1.json');
  const teams: TeamStucture = await promise.json();

  if (promise.status === 404) {
    return {
      notFound: true,
    };
  }

  const pluck: TeamSection[] = teams.sections.map(({ name, members }) => ({
    team: name,
    members: members.map(({ name }) => name).join(', '),
  }));

  return {
    props: {
      teams: pluck,
      ...(await getServerSideTranslations(locale)),
    },
  };
};