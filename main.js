//This project randomly generates an artist and song each time it is ran and adds it to a playlist.

let songArr = new Array("All Time Low - PMA", "We the Kings - Check Yes Juliet", "Ice Nine Kills - Freak Flag", "A Day to Remember - Brickwall",
"Boys Like Girls - Two is Better Than One", "Owl City - Fireflies", "Tiesto - Town Called Paradise", "Cassadee Pope - Hoodie", "The Devil Wears Prada - Constance",
"We Are the In Crowd - For the Win", "Paramore - Daydreaming", "Taylor Swift - Red", "Knuckle Puck - Breathe" );

//Generates a random number based off of the length of songArr
let randIndexGenerator = () => {
    let randNum = Math.floor(Math.random()*songArr.length);
    return randNum;
}

//Creates a randomized playlist from songArr with no repeated songs.
let getSongForPlaylist = () => {
    let playListLength = randIndexGenerator();
    let tempArr = songArr;
    let myPlaylist = [];
    while(playListLength != 0) {
        let songIndex = randIndexGenerator();
        myPlaylist.push(tempArr[songIndex]);
        tempArr.splice(songIndex, 1);
        playListLength--;
    }
    return myPlaylist;
};

console.log("Welcome to your playlist creation station!");
console.log();
console.log(getSongForPlaylist());