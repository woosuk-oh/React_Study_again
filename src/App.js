/* eslint-disable no-mixed-spaces-and-tabs */
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
    //Render: componentWillMount() -> render() -> componentDidMount()
    //Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component

    state = {
        greeting: 'Hello'
    }


    componentDidMount() {

       // console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'));

        fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
            .then(data => data.json())
            .then(json =>
                this.setState({
                    moives: json.data.movies
                }))
            .catch(err => console.log(err))

//자바스크립트 컨셉인 fetch라는 promise 사용 (fetch 후에 .then으로 case 관리)(Async)



        /**   AJAX 사용
         *
         * Modern JavaScript 사용하여 AJAX를 fetch로 간단하게 사용가능. (fetch란 무언가를 집어온다는 뜻)

         AJAX란?
         URL을 JavaScript로 Asynchronous(비동기) 방법으로 불러옴. and XML
         (xml 방식으로, 그러나 요새는 XML을 안쓰고 JSON 방식으로 쓰므로, 정확히 말하면 'AJAX'가 아닌 'AJAJ' 이다.)


         AJAX 사용 이유
         1. 사용하기 간단 (fetch)
         2. React와 연계하여 사용하면 불러올때마다 새로고침을 하지 않아도 된다.
         3. ( 로딩과 동시에 API와 평점을 불러온다..), **/


    }

    _renderMoives = () => { // = () => 는 ES6 문법
        // 언더바 쓰는 이유는 React 기본 펑션과 내가 작성한 펑션 차이 두기 위함.

        const movies =
            this.state.movies.map((movie, idx) => {
                return <Movie title={movie.title} poster={movie.poster} key={idx}/>;
            })
        return movies;
    };


    render() {
        return (
            <div className="App">
                {this.state.movies ? this._renderMoives() : 'Loading...'}
                {/* movies가 불려지지 않았으면 Loading 문구 출력, movies 불려졌으면 movies 타이틀과 poster 출력*/}
            </div>
        );
    }
}

export default App;


/*const movieTitle = [
    "Oldboy",
    "Star Wars",
    "Full Metal Jackets",
    "Matrix"

]

const movieImages = []*/