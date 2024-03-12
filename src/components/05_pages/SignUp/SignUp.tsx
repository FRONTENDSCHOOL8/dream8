import SignUpInput from '@/components/02_molecules/SignUp/SignUpInput';

function SignUp() {
  return (
    <section className="py-36">
      <div className='flex flex-col gap-10 items-center justify-center w-[64rem] m-auto py-20 border border-gray-200 rounded-[50px]'>
        <h2 className="text-5xl">회원가입</h2>
        <div className="">
          <SignUpInput />
        </div>
      </div>
    </section>
  );
}

export default SignUp;
