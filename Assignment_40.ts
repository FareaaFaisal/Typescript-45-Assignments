/* Q40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album */

function make_album(artist_name:string, album_title:string, tracks?:number)
//? after parameter defines that it is an optional parameter which means  it is optional to paass arguments while calling a function
{
// Creating an object
    const album: {artist_name:string, album_title:string, tracks?:number} = {
        artist_name : artist_name,
        album_title : album_title
    }
    if(tracks !== undefined){    //we are using if conditional statement to check if the user gives function parameter then print it but if the user dont define it then it shouldn't print tracks
        album.tracks = tracks;   //if the user defines tracks then the tracks will automatically add with the alnum object
    } 
    return album;
}

const album1 = make_album('Jeon Jungkook', 'Golden');
console.log(album1);

const album2 = make_album('Kim Taehyung', 'Layover');
console.log(album2);

const album3 = make_album('Park Jimin', 'FACE', 6);//According to condition we have to define the tracks atleast once so here we defined tracks = 12 
console.log(album3);
