import { useState } from "react";
import Header from "../../components/header"; // 공용 header 컴포넌트 가져오기
import NextButton from "../../components/button"; // 공용 button 컴포넌트 가져오기
import "./user-information.css";

export default function UserInformation() {
    const [selectedInstruments, setSelectedInstruments] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [regionList, setRegionList] = useState([
        { name: "서울", population: 9330000 },
        { name: "경기", population: 13690000 },
        { name: "부산", population: 3260000 },
        { name: "대구", population: 2360000 },
        { name: "경남", population: 3220000 },
        { name: "전남", population: 1780000 },
        { name: "인천", population: 3020000 },
        { name: "광주", population: 1400000 },
        { name: "대전", population: 1430000 },
        { name: "울산", population: 1090000 },
        { name: "강원", population: 1510000 },
        { name: "충북", population: 1590000 },
        { name: "충남", population: 2130000 },
        { name: "전북", population: 1730000 },
        { name: "제주", population: 670000 }
    ]);

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

    const handleSearch = () => {
        const matchedRegion = regionList.find(region => region.name.includes(searchInput));
        if (matchedRegion) {
            const updatedList = [
                matchedRegion,
                ...regionList
                    .filter(region => region.name !== matchedRegion.name)
                    .sort((a, b) => b.population - a.population),
            ];
            setRegionList(updatedList);
        }
    };

    return (
        <div className="user-information-container">
            <Header />
            <div className="user-progress-bar"/>

            {/*지역 입력*/}
            <div className="region-section">
                <label>지역</label>
                <div className="search-bar">
                    <input
                        type="text" placeholder="도로명, 지번, 건물명 검색"
                    />
                    <button className="search-button">
                        <img src="/searchbutton.png"/>
                    </button>
                </div>
                <div className="region-list">
                    {regionList.map((region, index) => (
                        <button
                            key={index} className="region-button"
                        >{region.name}
                        </button>
                    ))}
                </div>
            </div>

            {/*연주 가능 종목*/}
            <div className="instruments-section">
                <label>연주 가능 종목</label>
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

            <NextButton text="다음"/> {/*다음 버튼 공용 컴포넌트 사용*/}
        </div>
    );
}