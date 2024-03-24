import { useNavigate } from 'react-router-dom';
import { pb } from '@/api/pocketbase';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface UserData {
  user_name: string;
  nickName: string;
  password: string;
  passwordConfirm: string;
  email: string;
  phone_number: string;
  address: string;
}

function SignUpInput() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const handleAddress = () => {
    new daum.Postcode({
      oncomplete: function (data: { jibunAddress: string | number }) {
        setValue('address', data.jibunAddress);
        // 주소 선택 후 입력 창에 주소 채우기
      },
    }).open();
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // 회원가입 처리 로직 추가
    try {
      // 데이터베이스에서 이미 가입된 회원 정보 가져오기
      const existingUsers = await pb.collection('users').getFullList();

      // 각 입력값과 데이터베이스에 있는 회원 정보 비교하여 중복 확인
      for (const user of Array.from(existingUsers)) {
        for (const key of Object.keys(data)) {
          if (data[key as keyof UserData] === user[key as keyof UserData]) {
            alert(`${key}이(가) 이미 사용 중입니다. 다른 값을 입력해주세요.`);
            return;
          }
        }
      }

      await pb.collection('users').create(data);
      alert('회원가입이 완료되었습니다.');
    } catch (error) {
      console.error('Error logging in:', error);
    }

    navigate('/SignIn');
  };

  return (
    <form
      className="w-[30rem] flex flex-col gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="email">이메일</label>
        <input
          {...register('email', {
            required: '이메일을 필수 입력입니다.',
            pattern: {
              value:
                /^[a-zA-Z]+[!#$%&'*+-/=?^_`(){|}~]*[a-zA-Z0-9]*@[\w]+\.[a-zA-Z0-9-]+[.]*[a-zA-Z0-9]+$/,
              message: '이메일 형식이 아닙니다.',
            },
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
          className="border rounded-xl w-full h-[3rem] p-2 mt-2"
        />
        <p className="text-red-600">
          {typeof errors.email?.message === 'string'
            ? errors.email.message
            : ''}
        </p>
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="*******"
          {...register('password', {
            required: '비밀번호는 필수 입력입니다.',
            pattern: {
              value:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message:
                '비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.',
            },
          })}
          aria-invalid={errors.password ? 'true' : 'false'}
          className="border rounded-xl w-full h-[3rem] p-2 mt-2"
        />
        <p className="text-red-600">
          {typeof errors.password?.message === 'string'
            ? errors.password.message
            : ''}
        </p>
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          id="passwordConfirm"
          type="password"
          placeholder="*******"
          {...register('passwordConfirm', {
            required: '비밀번호 확인은 필수 입력입니다',
            validate: {
              check: (passwordConfirmValue) => {
                if (getValues('password') !== passwordConfirmValue) {
                  return '비밀번호가 일치하지 않습니다.';
                }
              },
            },
          })}
          aria-invalid={errors.passwordConfirmValue ? 'true' : 'false'}
          className="border rounded-xl w-full h-[3rem] p-2 mt-2"
        />
        <p className="text-red-600">
          {typeof errors.passwordConfirm?.message === 'string'
            ? errors.passwordConfirm.message
            : ''}
        </p>
      </div>

      <div>
        <label htmlFor="user_name">이름</label>

        <input
          id="user_name"
          type="user_name"
          placeholder="*******"
          {...register('user_name', {
            required: '이름은 필수 입력입니다',
            minLength: {
              value: 2,
              message: '이름은 최소 2글자 이상',
            },
          })}
          aria-invalid={errors.user_name ? 'true' : 'false'}
          className="border rounded-xl w-full h-[3rem] p-2 mt-2"
        />
        <p className="text-red-600">
          {typeof errors.user_name?.message === 'string'
            ? errors.user_name.message
            : ''}
        </p>
      </div>
      <div>
        <label htmlFor="nickName">닉네임</label>

        <input
          id="nickName"
          type="nickName"
          placeholder="*******"
          {...register('nickName', {
            required: '닉네임은 필수 입력입니다',
            minLength: {
              value: 2,
              message: '두글자 이상으로 해주세요',
            },
          })}
          aria-invalid={errors.nickName ? 'true' : 'false'}
          className="border rounded-xl w-full h-[3rem] p-2 mt-2"
        />
        <p className="text-red-600">
          {typeof errors.nickName?.message === 'string'
            ? errors.nickName.message
            : ''}
        </p>
      </div>
      <div>
        <label htmlFor="phone_number">휴대폰 번호</label>
        <input
          id="phone_number"
          type="phone_number"
          placeholder="*******"
          {...register('phone_number', {
            required: '전화번호는 필수 입력입니다',
            pattern: {
              value: /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/,
              message: '"-"(하이픈)을 제외하고 입력해주세요.',
            },
          })}
          aria-invalid={errors.phone_number ? 'true' : 'false'}
          className="border rounded-xl w-full h-[3rem] p-2 mt-2"
        />
        <p className="text-red-600">
          {typeof errors.phone_number?.message === 'string'
            ? errors.phone_number.message
            : ''}
        </p>
      </div>
      <div>
        <div className="flex gap-3 justify-center items-end">
          <label htmlFor="address" className="flex-1">
            주소
            <input
              id="address"
              type="address"
              placeholder="*******"
              {...register('address', {
                required: '주소 입력을 필수입니다.',
                minLength: {
                  value: 2,
                  message: '최소 2글자이상 입력해주세요',
                },
              })}
              aria-invalid={errors.address ? 'true' : 'false'}
              className="border rounded-xl w-full h-[3rem] p-2 mt-2"
            />
          </label>
          <button
            type="button"
            className="border rounded-xl w-20 h-[3rem] hover:shadow-root"
            onClick={handleAddress}
          >
            주소입력
          </button>
        </div>
        <p className="text-red-600">
          {typeof errors.address?.message === 'string'
            ? errors.address.message
            : ''}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="text-xl border-2 rounded-xl w-full h-[3rem] border-blue-primary hover:shadow-root"
        >
          확인
        </button>

        <button
          type="button"
          className="text-white text-xl rounded-xl w-full h-[3rem] bg-blue-primary hover:shadow-root"
          onClick={() => window.history.back()}
        >
          취소
        </button>
      </div>
    </form>
  );
}

export default SignUpInput;
