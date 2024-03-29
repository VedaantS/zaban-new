import { TranslationContainer as TranslationContainer } from 'components/basecomponents/TranslationsContainer';
import { Phrase } from '../../utils/getDataUtils';

interface CategoryDictionaryProps {
  translations: Phrase[];
  searchText: string;
}

export const CategoryDictionary = ({ translations, searchText }: CategoryDictionaryProps): JSX.Element => {
  return (
    <>
      {translations.map((translation, index) => {
        return <TranslationContainer key={index} translation={translation} searchText={searchText} />;
      })}
    </>
  );
};
