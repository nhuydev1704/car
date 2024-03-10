import dynamic from 'next/dynamic';
import { getTranslations } from 'next-intl/server';

const HomeCar = dynamic(() => import('@/components/HomeCar/HomeCar'), {
  ssr: false,
});

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <div className="min-h-[100vh]">
      <HomeCar />
    </div>
  );
}
