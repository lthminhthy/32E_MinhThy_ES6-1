
// const diemTrungBinh = ( ...param) => {
//     // const sum = a + b + c
//     let diem = 0
//     return (diemTrungBinh.map((diemTB) =>{
//         diem += parseFloat(diemTB);
//     }),
//     (diem / diemTB.length).toFixed(2)
//     // let ketQua = 0
//     // for (let i = 0; i < param.length; i++) {
//     //     diem += param[i]
//     // }


// );
// }


const tinhDiemTrungBinh = (...param) => {
    let diem = 0;
    return (
        param.map((param) => {
            diem += parseFloat(param);
        }),
        (diem / param.length).toFixed(2)
    );
}

document.getElementById("btnKhoi1").onclick = () => {
    let diem1 = document.getElementById("inpToan").value,
        diem2 = document.getElementById("inpLy").value,
        diem3 = document.getElementById("inpHoa").value;
    document.getElementById("tbKhoi1").innerHTML = tinhDiemTrungBinh(diem1, diem2, diem3);
},
    document.getElementById("btnKhoi2").onclick = () => {
        let diem1 = document.getElementById("inpVan").value,
            diem2 = document.getElementById("inpSu").value,
            diem3 = document.getElementById("inpDia").value,
            diem4 = document.getElementById("inpEnglish").value;
        document.getElementById("tbKhoi2").innerHTML = tinhDiemTrungBinh(diem1, diem2, diem3, diem4);
    };
