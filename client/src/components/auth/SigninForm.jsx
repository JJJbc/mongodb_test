import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Api from '../../axios/api';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../atoms/userAtom';

const SigninForm = () => {
  const setUserInfo = useSetRecoilState(userState); // 사용자 정보 설정 함수 가져오기

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // React Hook Form 훅 사용

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await Api.post(
        '/api/auth/signin',
        {
          userId: data.userId,
          pwd: data.pwd,
        },
        { withCredentials: true }
      );

      // 서버에서 반환된 데이터에서 액세스 토큰과 리프레시 토큰 추출
      const accessToken = res.data.token; // 액세세 토큰
      const userInfo = res.data.data;

      localStorage.setItem('token', accessToken); // JWT 저장
      setUserInfo({
        user: { userName: userInfo.userName, roles: userInfo.roles },
        loading: false,
      }); // 사용자 정보 업데이트

      navigate('/home');
    } catch (error) {
      toast.error(
        error.response?.data.msg ||
          '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
      ); // 에러 메시지 표시
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <input
          type="text"
          {...register('userId', { required: true })}
          placeholder="ID"
        />{' '}
        {errors.userId && <p>ID is required</p>}
      </div>
      <div className="input-container">
        <input
          type="password"
          {...register('pwd', { required: true })}
          placeholder="Password"
        />{' '}
        {errors.pwd && <p>Password is required</p>}
      </div>
      <div className="btn-container">
        <button className="btn" type="submit">
          로그인
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
