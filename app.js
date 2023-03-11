function ShowTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${h} : ${m} : ${s}`;
}
setInterval(ShowTime, 1000);
