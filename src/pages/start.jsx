import React, {useEffect} from 'react';
import './start.css';

export default function Start() {
    useEffect(() => {
        // 카카오 SDK 스크립트 동적 로드
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.onload = () => {
            // 스크립트 로드 완료 후 카카오 SDK 초기화
            if (window.Kakao && !window.Kakao.isInitialized()) {
                // 여기서 앱 키를 넣어 초기화
                window.Kakao.init('f1c1be5764e3d1e9d99b64e47e00ac1b');
            }
        };
        document.head.appendChild(script);

        // 컴포넌트 언마운트 시 스크립트 제거
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handleKakaoLogin = () => {
        if (window.Kakao) {
            //카카오 로그인 요청
            window.Kakao.Auth.login({
                scope: 'profile_nickname, profile_image',
                success: function(authObj) {
                    console.log(authObj);

                    // 세션과 로컬 스토리지 클리어
                    //sessionStorage.clear();
                    //localStorage.clear();

                    //사용자 정보 요청
                    window.Kakao.API.request({
                        url: '/v2/user/me',
                        success: res => {
                            const kakao_account = res.kakao_account;
                            console.log(kakao_account);
                            
                            // 연결 끊기 요청
                            window.Kakao.API.request({
                                url: '/v1/user/unlink',
                                success: function(response) {
                                    console.log("연결 끊기 성공", response);
                                    window.location.href = "http://localhost:5173/categorization"; //Redirect URL
                                },
                                fail: function(error) {
                                    console.error("연결 끊기 실패", error);
                                }
                            });
                        },
                        fail: function(error) {
                            console.error("사용자 정보 요청 실패", error);
                        }
                    });
                },
                fail: function(err) {
                    console.error("로그인 실패", err);
                }
            });
        }
    };

    return (
        <div className="start-container">

            <header className="text-and-logo">
                <p>당신이 연주할 곳은 여기</p>
                <img src="/piano5line.png" className="piano-lines" />
                <img src="/logo-on-lines.png" className="start-logo" />
            </header>

            <footer className="footer">
                <button className="kakao-button" onClick={handleKakaoLogin}>
                    <img src="/kakaobutton.png"/>
                </button>
                <button className="email-button">다른 이메일로 시작하기</button>
            </footer>

        </div>
    );
}
