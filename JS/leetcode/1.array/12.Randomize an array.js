/*
    Randomize an array:

*/

function random(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
}

// console.log(random([1,2,3,4,5,6,7,8,9,10]))

/*
    -- create a music libray which will have songs.
    -- Play random songs from the library
    -- if all the songs are done. play songs randomly again

*/


class SongsLibrary {
    constructor(songs) {
        this.songs = random(songs);
        this.currentSong = -1;
    }
    random(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array;
    }
    next() {
        this.currentSong += 1;
        if (this.currentSong < this.songs.length) {
            console.log(this.songs[this.currentSong]);
        } else {
            this.songs = random(songs);
            this.currentSong = -1;
        }

    }
}

let songs = ['Kam Dhande chah ke', 'Sufna from Ammy virk', 'titli by Babbu mann', 'Awaaz mari - Qismat'];

let lib = new SongsLibrary(songs);

setInterval(() => {
    lib.next();
}, 1000)

