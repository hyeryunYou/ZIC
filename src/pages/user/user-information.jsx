import { useState } from "react";
import Header from "../../components/header"; // 공용 header 컴포넌트 가져오기
import NextButton from "../../components/button"; // 공용 button 컴포넌트 가져오기
import "./user-information.css";

export default function UserInformation() {
    const [selectedInstruments, setSelectedInstruments] = useState([]);

    const instruments = [
        "피아노", "바이올린",
        "기타", "베이스",
        "드럼", "플룻",
        "하프", "트럼펫",
        "비올라", "사물놀이",
    ];

    const toggleInstrument = (instrument) => {
        if (selectedInstruments.includes(instrument)) {
            // 이미 선택된 악기를 클릭하면 선택 해제
            setSelectedInstruments(selectedInstruments.filter(item => item !== instrument));
        } else {
            // 선택되지 않은 악기를 클릭하면 추가
            setSelectedInstruments([...selectedInstruments, instrument]);
        }
    };

    return (
        <div className="user-information-container">
            <Header />
            <div className="user-content">
                {/*지역 입력*/}
                <div className="user-region-section">
                    <label className="label">지역</label>
                    <div className="search-bar">
                        <input
                            type="text" placeholder="도로명, 지번, 건물명 검색" className="search-input"
                        />
                        <button>search-icon</button> {/*수정 필요 - 검색 아이콘 받기*/}
                    </div>
                </div>

                {/*연주 가능 종목*/}
                <div className="instruments-section">
                    <h2 className="label">연주 가능 종목</h2>
                    <div className="instruments-grid">
                        {instruments.map((instrument, index) => (
                            <button
                                key={index}
                                className={`instrument-button ${
                                    selectedInstruments.includes(instrument) ? "active" : ""}`}
                                onClick={() => toggleInstrument(instrument)}>{instrument}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <NextButton text="다음"/> {/*다음 버튼 공용 컴포넌트 사용*/}
        </div>
    );
}