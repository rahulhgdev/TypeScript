"use strict";
// Constructor is a special method that is very first method to called when an object of the class is created.
// 1 way 
class MusicMaker1 {
    constructor(song_name, singer, song_length, released_year, song_thumbnail = 'something.jpg') {
        this.song_name = song_name;
        this.singer = singer;
        this.song_length = song_length;
        this.released_year = released_year;
        this.song_thumbnail = song_thumbnail;
    }
}
// 2nd way
class MusicMaker2 {
    constructor(song_name, singer, song_length, released_year, song_thumbnail = 'thumbnail.jpg') {
        this.song_name = song_name;
        this.singer = singer;
        this.song_length = song_length;
        this.released_year = released_year;
        this.song_thumbnail = song_thumbnail;
    }
}
let m1 = new MusicMaker1("Haan", "Mickey Singh", 3000, 2022);
let m2 = new MusicMaker2("Kina Chir", "Prophe C", 3500, 2019, "Overrided_thumbnail.jpg");
console.log(m1);
console.log(m2);
// In this ex., we can update any value of object, we should not happen
m1.singer = "Doraemon";
m1.song_name = "Nhi";
m2.song_length = 8000;
m2.released_year = 2050;
console.log(m1);
console.log(m2);
