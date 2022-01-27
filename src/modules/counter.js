// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const intitialState = {
	number: 0,
};

function counter(state = intitialState, action) {
	switch (action.type) {
		case INCREASE:
			return {
				numbner: state.number + 1,
			};
		case DECREASE:
			return {
				number: state.number - 1,
			};
		default:
			return state;
	}
}

export default counter;
