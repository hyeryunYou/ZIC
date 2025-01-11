import { useState } from "react";
import Header from "../../components/header"; // 공용 header 컴포넌트 가져오기
import NextButton from "../../components/button"; // 공용 button 컴포넌트 가져오기
import "./owner-information.css";

export default function OwnerInformation() {
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
        <div className="owner-information-container">
            <Header />
            <div className="owner-content">
                {/*상호명 입력*/}
                <div className="owner-form-section">
                    <label htmlFor="store-name" className="label">상호명</label>
                    <input type="text" id="store-name" className="input" placeholder="상호명을 입력해주세요." />
                </div>

                {/*사업자 번호 입력*/}
                <div className="owner-form-section">
                    <label htmlFor="business-number" className="label">사업자 번호</label>
                    <input type="text" id="business-number" className="input" placeholder="사업자 번호를 입력해주세요." />
                </div>

                {/*주소 입력*/}
                <div className="owner-form-section">
                    <label htmlFor="address" className="label">주소</label>
                    <div className="search-bar">
                        <input
                            type="text" id="address" className="input" placeholder="도로명, 지번, 건물명 검색"
                        />
                        <button>search-icon</button> {/*수정 필요 - 검색 아이콘 받기*/}
                    </div>
                    <input
                        type="text" className="input" placeholder="상세주소를 작성해주세요."
                    />
                </div>

                {/*연주 가능 종목*/}
                <div className="instruments-section">
                    <h2 className="label">연주 가능 종목</h2>
                    <div className="instruments-grid">
                        {instruments.map((instrument, index) => (
                            <button
                                key={index}
                                className={`instrument-button ${selectedInstruments.includes(instrument) ? "active" : ""}`}
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