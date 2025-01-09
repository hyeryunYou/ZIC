import { useState } from "react";
import Header from "../components/header"; // 공용 header 컴포넌트 가져오기
import NextButton from "../components/button"; // 공용 button 컴포넌트 가져오기기
import "./categorization.css";

export default function Categorization() {
    const [selected, setSelected] = useState<string>("");

    return (
        <div className="categorization-container"> {/*전체 레이아웃*/}

            <Header /> {/*공용 컴포넌트 사용*/}
            <div className="progress-bar" /> {/*진행 바*/}

            <div className="content"> {/*콘텐츠 영역*/}
                <h1 className="question">어떤 목적으로 가입하시나요?</h1>

                <div className="button-group"> {/*버튼 그룹 영역(클래스) 안에 이용자/대여자 분류 버튼*/}
                    <button
                        className={`category-button ${selected === "user" ? "active" : ""}`} 
                        /*selected === "user"가 true 일 때 className="category-button active" , selected !== "owner"가 true일 때 className="category-button"*/
                        onClick={() => setSelected("user")}> {/*버튼이 클릭되었을 때 selected 상태를 user로 업데이트*/}
                        <span>연습실</span>
                        <p>이용자</p>
                    </button>
                    <button
                        className={`category-button ${selected === "owner" ? "active" : ""}`}
                        onClick={() => setSelected("owner")}>
                        <span>연습실</span>
                        <p>대여자</p>
                    </button>
                </div>

                <NextButton text="다음"/> {/*다음 버튼 공용 컴포넌트 사용*/}
            </div>

        </div>
    );
}