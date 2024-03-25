import { SignIn } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInPage = () => (
  <SignIn
    appearance={{
      elements: {
        socialButtons: {
          display: 'none',
        },
        dividerRow: {
          display: 'none',
        },
        footer: {
          display: 'none',
        },
        formFieldAction__password: {
          display: 'none',
        },
      },
    }}
  />
);

export default SignInPage;
