function changeColor(){
    document.getElementById("special").style.color = "red";
}
function changeColorBack(){
    document.getElementById("special").style.color = "black";
}

function noHighlight(){
    // img.src = "..\pictures\NW Map.png"
    return "..\pictures\NW Map.png";
}

//don't know how to use jquery
// $(document).ready(function(){
//     $('#changeImage tr th a').hover(
//         function(){
//             //get current filename and use it for the src
//             var linkIndex = $(this).attr("data-filename");
//             $(this).addClass('hover');
//             $('.mapImage img').attr('src', linkIndex);
//         },
//         function(){
//             $(this).removeClass('hover');
//             $('.mapImage img child').attr('src', '..\pictures\NW Map.png');
//         }
//     );
// });

//receives a string that corresponds to the image file name, then calls the highlightedImage function to change the image
function highlighted(category){
    // console.log(`highlighted: ${category}`)
    switch(category){
        case 'mountains': {
            highlightedImage("..\\pictures\\NW Map-mountains.png");
            break;
        }
        case 'coast':{
            highlightedImage("..\\pictures\\NW Map-coast.png");
            break;
        }
        case 'gorge':{
            highlightedImage("..\\pictures\\NW Map-gorge.png");
            break;
        }
        case 'hawaii':{
            highlightedImage("..\\pictures\\NW Map-hawaii.png");
            break;
        }
        default:{
            highlightedImage("..\\pictures\\NW Map.png");
            break;
        }
    }
}

//changes the image
function highlightedImage(imgSrc){
    // console.log(`highlightedImage: ${imgSrc}`)
    document.getElementById("mapImage").src = imgSrc;
}



