import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full text-gray-700 antialiased">
      <header className="navbar bg-base-100">
        <div className="flex-1">
          <Image src="/icon.png" alt={AppConfig.name} width={60} height={20} />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>demo</li>
          </ul>
        </div>
      </header>

      <main>{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.name}.
        {` ${t('made_with')} `}
        <a
          href="https://creativedesignsguru.com"
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
        >
          CreativeDesignsGuru
        </a>
      </footer>
    </div>
  );
};

export { BaseTemplate };
