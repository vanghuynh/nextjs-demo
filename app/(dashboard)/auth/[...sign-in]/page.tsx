const SignInPage = ({ params }: { params: { 'sign-in': string[] } }) => {
  console.log(params);
  return (
    <div>
      <h1 className='text-7xl'>Sign In Page</h1>
    </div>
  );
};

export default SignInPage;
