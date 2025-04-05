import { useLanguage } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'pt')}>
      <SelectTrigger className="w-[120px]">
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue placeholder={t('common.language')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">{t('common.english')}</SelectItem>
        <SelectItem value="pt">{t('common.portuguese')}</SelectItem>
      </SelectContent>
    </Select>
  );
} 