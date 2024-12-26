import { createContext, useContext, useEffect, useState } from 'react';
import Api from '../axios/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  const handleLogout = () => {
    localStorage.clear();
    setUser(null); // 사용자 정보 초기화
  };

  // 새로고침 시에 사용자 정보를 다시 가져옴
  const fetchUserData = async () => {
    try {
      const response = await Api.get('/api/auth/me');
      setUser(response.data.data);
    } catch (error) {
      handleLogout(); // 권한 없음 시 로그아웃 처리
    } finally {
      setLoading(false); // 로딩 완료
    }
  };

  // 컴포넌트가 렌더링된 후 비동기 작업 수행 -> context도 동일
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        await fetchUserData(token);
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // 처음 마운트될 때 한 번만 실행하게 하기 위해 비워둠 -> 초기 데이터 로딩/설정 작업 수행

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
