import SignUpInput from '../atoms/SignUpInput';

function SignUp() {
  return (
    <section className="py-[10%] flex justify-center items-center">
      <h2 className="sr-only">회원가입 페이지</h2>

      <div className="flex flex-col justify-center gap-10 border rounded-2xl w-[60.62rem] py-20 stroke-3.64 stroke-gray-400 items-center">
        <h2 className="text-5xl">회원가입</h2>

        <SignUpInput />
      </div>
    </section>
  );
}

export default SignUp;
