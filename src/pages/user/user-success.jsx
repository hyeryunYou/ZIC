import '../successpage.css';
import NextButton from '../../components/button';

export default function UserSuccess() {
    return (
        <div className="success-container">
            {/* <div className="success-left"></div> 비어 있는 왼쪽 영역 */}
            <main className="success-center"> {/*가운데 콘텐츠 영역*/}
                <p>회원가입에</p>
                <h1>성공했어요!</h1>
                <NextButton text="예약하기"/> {/*다음 버튼 공용 컴포넌트 사용*/}
                <button className="skip-btn">건너뛰기</button>
            </main>
            {/* <div className="success-right"></div>비어 있는 오른쪽 영역 */}
        </div>
    );
}
