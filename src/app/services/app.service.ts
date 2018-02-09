import {Injectable} from '@angular/core';

@Injectable()
export class AppService{
    private data = [
        {
            title: 'After Earth',
            description: 'This is description for After Earth',
            imgUrl: '/assets/imgs/film/after_earth.png'
        },
        {
            title: 'American Hustle',
            description: 'This is description for After Earth',
            imgUrl: '/assets/imgs/film/american-hustle-poster.jpg'
        },
        {
            title: 'Captain Phillips',
            description: 'This is description for Captain Phillips',
            imgUrl: '/assets/imgs/film/captain-phillips-poster.jpg'
        },
        {
            title: 'Eat Pray Love',
            description: 'This is description for Eat Pray Love',
            imgUrl: '/assets/imgs/film/eat_pray_love.jpg'
        },
        {
            title: 'Ghost Busters',
            description: 'This is description for Ghost Busters',
            imgUrl: '/assets/imgs/film/ghostbusters.jpg'
        },
        {
            title: 'Here come the boom',
            description: 'This is description for Here come the boom',
            imgUrl: '/assets/imgs/film/here_comes_the_boom.jpg'
        }
    ];
    constructor(){
    
    }

    getMovieInfo(){
        return this.data;       
    }
}