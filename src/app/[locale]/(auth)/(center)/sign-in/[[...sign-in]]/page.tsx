import { SignIn } from '@clerk/nextjs';

export async function generateMetadata() {
  return {
    title: 'SignIn',
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
