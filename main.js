var index = 0;
var image = ["https://www.w3.org/2016/10/tbl.jpeg", 
    "https://cdn.vox-cdn.com/thumbor/eX-lkRUnTxUO6kMeXzBxk2IBT6I=/0x0:6478x4293/1200x800/filters:focal(2721x1629:3757x2665)/cdn.vox-cdn.com/uploads/chorus_image/image/65766822/1178895878.jpg.0.jpg", 
    "https://media.vanityfair.com/photos/5b351925420bf26882fee28c/master/w_2000,h_1337,c_limit/founder-of-the-web-08-2018-embed01.jpg", 
    "https://webfoundation.org/docs/2012/06/TimBLforAbout1.jpg"];

function next(){
    document.getElementById("Tim").src=image[index];
    index++;
    if (index == 4){
        index = 0;
    }
}