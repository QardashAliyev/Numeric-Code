let eded = Number(prompt("Ededi daxil edin:"));
let cem = 0;
for (let i = 1; i <= eded; i++) {
    if (eded % i == 0) {

        cem += i;
    }
}
if (cem / 2 == eded) {
    console.log(`${eded}-i Mukemmel ededdir`);

}
else {
    console.log(`${eded}-i Mukemmel eded deyil`);
}
