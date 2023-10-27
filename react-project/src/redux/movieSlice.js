import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    // name : 슬라이스의 이름 정의 (관리하기 편한대로 작성하기)
    name : "movies",

    // initialState : 초기 상태 (보통 변수 초기값 적어줌)
    initialState : {
        popularMovies : [],
        topRatedMovies : [],
        upComingMovies : []
    } ,

    // reducers : 액션을 처리하는 함수
    reducers : {

        getPopularMovies : (state, action)=>{
            // payload는 내가 행위(action)를 할 때 창고지기에게 돈을 주는것.
            // "나 5000원(payload) 입금하고 싶어" = action
            // "나 helloworld(payload)라는 데이터를 popularMovies라는 state에 넣고싶어" = action
            // 보통 action.payload에 API값이 들어감
            state.popularMovies = action.payload;
        },
        getTopRatedMovies : (state, action)=>{
            state.topRatedMovies = action.payload;
        }, 
        getUpComingMovies : (state, action)=>{
            state.upComingMovies = action.payload;
        }
    }
})

export const {getPopularMovies, getTopRatedMovies, getUpComingMovies} = movieSlice.actions;


//바깥에서 movieSlice에 보관해둔 애들을 한번에 쓸 수 있음
export default movieSlice.reducer;

