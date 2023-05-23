const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
  return[
    "halo, perkenalkan nama saya 404_bot. Siapa nama kamu ?",
    `halo ${data?.nama}, berapa usia kamu?`,
    `ohh ${data?.usia}, hoby kamu apa?`,
    `waaw, sama dong hoby aku juga ${data?.hobi},btw punya pacar ga?`,
    `ohh ${data?.pacar}, ya udah kalo gitu, udahan ya 😉`
  ]
  }
  
    pertanyaan.innerHTML = botSay()[0]
    let usersData = []

function botStart() {
  if(jawaban.value.length < 1) return alert("isi jawaban dulu")
    init++
 if(init === 1){
setTimeout(botDelay({ nama: jawaban.value}))
  } else if(init === 2){
 setTimeout(botDelay({ usia: jawaban.value}))
  } else if(init === 3){
setTimeout(botDelay({ hobi: jawaban.value}))
  } else if(init === 4){
setTimeout(botDelay({ pacar: jawaban.value}))
  } else if(init === 5){
   finishing()
  }
  else{
    botEnd()
  }
}

function botDelay(jawabanUser) {
 loaders.style.display = "block"
 container[0].style.filter = "blur(8px)"
  setTimeout(() =>{
pertanyaan.innerHTML = botSay(jawabanUser)[init]
 loaders.style.display = "none"
 container[0].style.filter = "none"
  }, [1500])
  usersData.push(jawaban.value)
 jawaban.value = ""
}

function finishing() {
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() =>{
  pertanyaan.innerHTML = `Thank You  ya ${usersData[0]} udah mampir ke 404_bot, kali kali ajakin aku ${usersData[2]} bareng ya. 😉 `
 loaders.style.display = "none"
 container[0].style.filter = "none"
  }, [1500])
userData.push(jawaban.value)
jawaban.value = "😉"
}
function botEnd() {
  alert 
  (`Thanks ${usersData[0]} sudah berkunjung,anda akan di arahkan ke menu awal.`)
  alert 
  (`Hai ${usersData[0]} selamat hari raya Idhul Fitri`)
  alert
(`mampir ke Instagram ku yuk, clik W8_0 di atas, follow ya. ${usersData[0]}`)
  window.location.reload()
}