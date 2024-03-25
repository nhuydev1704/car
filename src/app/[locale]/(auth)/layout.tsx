import { frFR, viVN } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let clerkLocale = viVN;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  // const dashboardUrl = '/dashboard';
  let dashboardProductUrl = '/admin/category';

  if (props.params.locale === 'fr') {
    clerkLocale = frFR;
  }

  if (props.params.locale !== 'en') {
    signInUrl = `/${props.params.locale}${signInUrl}`;
    signUpUrl = `/${props.params.locale}${signUpUrl}`;
    dashboardProductUrl = `/${props.params.locale}${dashboardProductUrl}`;
  }

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      afterSignInUrl={dashboardProductUrl}
      afterSignUpUrl={dashboardProductUrl}
    >
      {props.children}
    </ClerkProvider>
  );
}
