import React from 'react';
import './start.css';

export default function Start() {
    return (
        <div className="start-container">
            <header className="start-header">
                <div className="text-and-logo">
                    <p>당신이 연주할 곳은 여기</p>
                    <div className="logo-container">
                        <img src="/path-to-images/piano5line.png" className="piano-lines" />
                        <img src="/path-to-images/logo-on-lines.png" className="logo" />
                    </div>
                </div>
            </header>
            <footer className="footer">
                <button className="kakao-button">카카오로 시작하기</button>
                <button className="email-button">다른 이메일로 시작하기</button>
            </footer>
        </div>
    );
}
