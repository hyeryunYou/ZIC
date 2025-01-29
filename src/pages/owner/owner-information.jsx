import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header"; // 공용 header 컴포넌트 가져오기
import NextButton from "../../components/button"; // 공용 button 컴포넌트 가져오기
import "./owner-information.css";
import "../../styles/fonts.css";
import "../../App.css"

export default function OwnerInformation() {
    const [selectedInstruments, setSelectedInstruments] = useState([]);
    const navigate = useNavigate();

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

    const handleNext = () => {
        //여기에서 추가적인 유효성 검사 할 수 있음
        navigate("/owner-success");
    };

    return (
        <div className="content-wrap owner-information">
            <Header />
            <div className="progress-bar-container">
                <div className="owner-progress-bar"/>
            </div>
            
            {/*상호명 입력*/}
            <div className="label-section">
                <label>상호명</label>
                <div className="input-bar">
                    <input type="text" placeholder="상호명을 입력해주세요." />
                </div>
            </div>

            {/*사업자 번호 입력*/}
            <div className="business-number-section">
                <label>사업자 번호</label>
                <div className="input-bar">
                    <input type="text" placeholder="사업자 번호를 입력해주세요." />
                </div>                
            </div>

            {/*주소 입력*/}
            <div className="address-section">

                <label>주소</label>
                <div className="input-bar">
                    <input
                        type="text" placeholder="도로명, 지번, 건물명 검색"
                    />
                    <button className="search-button">
                        <img src="/searchbutton.png"/>
                    </button>
                </div>
                <div className="second-input-bar">
                    <input
                        type="text" placeholder="상세주소를 작성해주세요."
                    />
                </div>
            </div>

            {/*연주 가능 종목*/}
            <div className="owner-instruments-section">
                <label>연주 가능 종목</label>
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
            <NextButton text="다음" onClick={handleNext}/> {/*다음 버튼 공용 컴포넌트 사용*/}
        </div>
    );
}