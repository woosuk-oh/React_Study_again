/* eslint-disable no-mixed-spaces-and-tabs */
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
    //Render: componentWillMount() -> render() -> componentDidMount()
    //Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component

/*

    constructor(props){
        super(props);

        this.state = {
            greeting: 'Hello!'
        }
    }

*/

    state = {
        greeting: 'Hello'
    }





    componentDidMount() {
        setTimeout(() => {
            this.setState({
                movies: [
                    {
                        title: 'Oldboy',
                        poster: 'http://image.cine21.com/cine21/poster/2013/1114/10_42_00__52842a68c7fda.jpg'

                    },
                    {
                        title: 'Star Wars',
                        poster: 'http://t1.daumcdn.net/movie/469c5c4957bee98cabe85e04e630f174dc0b7670'

                    },
                    {
                        title: 'Full Metal Jacket',
                        poster: 'http://image.cine21.com/cine21/poster/2005/0607/M0010102_.jpg'

                    },
                    {
                        title: 'Matrix',
                        poster: 'https://lh3.googleusercontent.com/TQp6Lb2rArWLcWaUkXyBfecjm8DWrk00rbpU_Z5h3Xe6RNC2Oc3QfHCTi96tud31urnYUeK027Ft'

                    },
                    {
                        title: "Trainspotting",
                        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9lGgMvpMRSoihTZ9o3amizgbHRHStBuyA3WhkZXg0AKQVT2AQItxzg"
                    }
                ]

            })
        }, 5000)
    };

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
                {this.state.movies ? this._renderMoives():'Loading...'}
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