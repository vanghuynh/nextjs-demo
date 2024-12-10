const SignInPage = ({ params }: { params: { 'sign-in': string[] } }) => {
  console.log(params);
  console.log(params['sign-in'][0]);
  return (
    <div>
      <h1 className='text-7xl'>Sign In Page: {params['sign-in'][0]}</h1>
    </div>
  );
};

export default SignInPage;
