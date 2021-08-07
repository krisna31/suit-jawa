// ! cara sendiri
// var tanya = true
// while (tanya) {

//   var pilihanUser = prompt('masukkan pilihan semut, gajah, manusia');

//   var random = Math.random();
//   if (random < 0.34) {
//     var pilihanComp = 'manusia';
//   } else if (random >= 0.34 && random < 0.67) {
//     var pilihanComp = 'gajah';
//   } else {
//     var pilihanComp = 'semut';
//   }

//   if (pilihanUser == pilihanComp) {
//     alert('Anda Memasukkan ' + pilihanUser + ' dan komputer memilih ' + pilihanComp + '\nHasilnya SERI.');
//   } else if (pilihanUser == 'semut' && pilihanComp == 'gajah' || pilihanUser == 'gajah' && pilihanComp == 'manusia' || pilihanUser == 'manusia' && pilihanComp == 'semut') {
//     alert('Anda Memasukkan ' + pilihanUser + ' dan komputer memilih ' + pilihanComp + '\nHasilnya Kamu MENANG.')
//   } else if (pilihanUser == 'gajah' && pilihanComp == 'semut' || pilihanUser == 'manusia' && pilihanComp == 'gajah' || pilihanUser == 'semut' && pilihanComp == 'manusia') {
//     alert('Anda Memasukkan ' + pilihanUser + ' dan komputer memilih ' + pilihanComp + '\nHasilnya Kamu KALAH.')
//   } else {

//     alert('Anda Memasukkan ' + pilihanUser + ' dan komputer memilih ' + pilihanComp + '\nHasilnya Kamu  MEMASUKKAN Pilihan Yang SALAH.')
//   }
//   tanya = confirm('Mau Main Lagi ?')
// }
// alert('Terimakasih Sudah Bermain.')


// !cara lebih baik dari wpu
var tanya = true
while (tanya) {

  // pilihan user dan comp
  var p = prompt('masukkan pilihan semut, gajah, manusia');
  var comp = Math.random();
  if (comp < 0.34) {
    var comp = 'manusia';
  } else if (comp >= 0.34 && comp < 0.67) {
    var comp = 'gajah';
  } else {
    var comp = 'semut';
  }

  // Rules
  var hasil = '';
  if (p == comp) {
    hasil = "SERI"
  } else if (p == 'semut') {
    // if (comp == 'gajah') { hasil = 'MENANG'} else {hasil = 'KALAH'}
    hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
  } else if (p == 'gajah') {
    hasil = (comp == 'semut') ? 'KALAH' : 'MENANG';
  } else if (p == 'manusia') {
    hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
  } else {
    hasil = 'PILIHAN YANG SALAH'
  }

  // menampilkan hasil
  alert('Anda Memilih ' + p + ' dan komputer memilih ' + comp + '\nMaka Hasilnya Kamu ' + hasil + '.')
  tanya = confirm('Mau Main Lagi ?')
}
alert('Terimakasih Sudah Bermain.')
