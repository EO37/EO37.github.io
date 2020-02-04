var aritstlist = document.getElementById("artistList");
var artistDir = document.getElementById("artistDirectory");

//adding list form
var addArtist = document.createElement("button");
addArtist.id = "btn_addArtist";
addArtist.setAttribute("class", "btn_Form button")
addArtist.textContent = "Add Artist";
document.getElementById("aDTop").appendChild(addArtist);

var artistForm = document.createElement("div");
var artistName = document.createElement("input");
var artistAbout = document.createElement("input");
var artistImg = document.createElement("input");
var addButton = document.createElement("button");

artistForm.setAttribute("id", "artistForm");
artistForm.style.display = "none";

artistName.setAttribute("class", "artistFormInput");
artistName.type = "text";
artistName.setAttribute("placeHolder", "Artist Name");
artistName.setAttribute("maxlength", "40");

artistAbout.setAttribute("class", "artistFormInput");
artistAbout.setAttribute("maxlength", "40");
artistAbout.setAttribute("placeHolder", "About Artist");

artistImg.setAttribute("class", "artistFormInput");
artistImg.type = "text";
artistImg.setAttribute("placeHolder", "Img url");

addButton.id = "btn_createNewArtist";
addButton.setAttribute("class", "btn_Form button");
addButton.textContent = "Add";

artistForm.appendChild(artistName);
artistForm.appendChild(artistAbout);
artistForm.appendChild(artistImg);
artistForm.appendChild(addButton);
artistDir.insertBefore(artistForm, aritstlist);
addArtist.addEventListener("click", showArtistForm);

addButton.addEventListener("click", createArtist);


//Functions
function showArtistForm() {
    if(artistForm.style.display == "none") {
        artistForm.style.display = "block";
    } else {
        clearForm();
        artistForm.style.display = "none";
        
    }
}

function createArtist() {
    var newArtistProfile = document.createElement("div");
    newArtistProfile.setAttribute("class", "artistProfile");
    var newArtistImg = document.createElement("img");
    var newArtistInfo = document.createElement("div");
    newArtistInfo.setAttribute("class", "artistInfo");
    var newArtistName = document.createElement("span");
    newArtistName.setAttribute("class", "artistName");
    var newArtistAbout = document.createElement("span");
    newArtistAbout.setAttribute("class", "artistAbout");
    var lineBreak = document.createElement("br");
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn_delete button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", removeArtist);
    
    newArtistName.textContent = artistName.value;
    newArtistAbout.textContent = artistAbout.value;
    newArtistImg.setAttribute("src", artistImg.value);

    newArtistInfo.appendChild(newArtistName);
    newArtistInfo.appendChild(lineBreak);
    newArtistInfo.appendChild(newArtistAbout);
    newArtistProfile.appendChild(newArtistImg);
    newArtistProfile.appendChild(newArtistInfo);
    newArtistProfile.appendChild(deleteButton);
    aritstlist.appendChild(newArtistProfile);
    clearForm();
}

function removeArtist() {
    this.parentElement.remove();
}

function clearForm() {
    artistName.value = "";
    artistAbout.value = "";
    artistImg.value = "";
}