const namaSaya = "yasin alfa salam";
let tahunKelahiran = 2002;

function generateBiodata() {
    let gen;

    if (tahunKelahiran > 1900 && tahunKelahiran < 2000) {
        gen = "gen millenial"
    } else if (tahunKelahiran > 1999 && tahunKelahiran < 2015) {
       gen = "gen z"
    } else {
        gen = "gen alpha"
    }

    return console.log('generasi saya adalah', gen)
}

console.log(namaSaya);


generateBiodata();