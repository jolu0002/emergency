const openBtn1 = document.querySelector(".news_card:first-of-type .read-more");
const closeBtn1 = document.querySelector(".news_card:first-of-type dialog button");
const dialog1 = document.querySelector(".news_card:first-of-type dialog");
openBtn1.addEventListener("click", openDialog1);
closeBtn1.addEventListener("click", closeDialog1);

function openDialog1() {
  dialog1.showModal();
}
function closeDialog1() {
  dialog1.close();
}

// const openBtn2 = document.querySelector(".news_card:last-child .read-more");
// const closeBtn2 = document.querySelector(".news_card:last-child dialog button");
// const dialog2 = document.querySelector(".news_card:last-child dialog");
// openBtn2.addEventListener("click", openDialog2);
// closeBtn2.addEventListener("click", closeDialog2);

// function openDialog2() {
//   dialog2.showModal();
// }
// function closeDialog2() {
//   dialog2.close();
// }
const openBtn2 = document.querySelector(".news_card:last-child .read-more");
const closeBtn2 = document.querySelector(".news_card:last-child dialog button");
const dialog2 = document.querySelector(".news_card:last-child dialog");
openBtn2.addEventListener("click", openDialog2);
closeBtn2.addEventListener("click", closeDialog2);

function openDialog2() {
  dialog2.showModal();
}
function closeDialog2() {
  dialog2.close();
}