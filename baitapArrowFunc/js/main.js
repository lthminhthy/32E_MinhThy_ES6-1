
const getElement = (id) => document.getElementById(id)
const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];



const renderColorList = () => {
    
const content = colorList.reduce((value, color ,index) => {
    return value+= `
    <tr>
        <td>
            <button class = "color-button ${color} ${index==0 &&"active"}" id="${color}"></button>
        </td>
    </tr>
    `
}, '')
getElement('colorContainer').innerHTML= content;

} 


renderColorList()



let colorPicker = document.getElementsByClassName("color-button"),
    house = document.getElementById("house");
    
for (let i = 0; i < colorPicker.length; i++)
    colorPicker[i].addEventListener("click", function () {
        let colorValue = colorList[i]
        changeColor(colorValue, i);
    });
changeColor = (color, index) => {
    for (const key in colorPicker) {
        colorPicker[key].classList.remove("active");
        colorPicker[index].classList.add("active"), (house.className = "house " + color);
    }
   
};





// document.addEventListener(
//     "contextmenu",
//     function (o) {
//         o.preventDefault();
//     },
//     !1
// ),
//     (document.onkeydown = function (o) {
//         return 123 != (o = o || window.event).keyCode && (!o.ctrlKey || !o.shiftKey || 73 != o.keyCode) && void 0;
//     });
// const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
// let container = document.getElementById("colorContainer");
// (loadColorPick = () => {
//     for (let o = 0; o < colorList.length; o++) container.innerHTML += 0 == o ? "<button class='color-button " + colorList[o] + " active'></button>" : "<button class='color-button " + colorList[o] + "'></button>";
// }),
//     loadColorPick();



// let colorPicker = document.getElementsByClassName("color-button"),
//     house = document.getElementById("house");
// for (let o = 0; o < colorPicker.length; o++)
//     colorPicker[o].addEventListener("click", function () {
//         changeColor(colorList[o], o);
//     });
// changeColor = (o, e) => {
//     for (let o = 0; o < colorPicker.length; o++) colorPicker[o].classList.remove("active");
//     colorPicker[e].classList.add("active"), (house.className = "house " + o);
// };