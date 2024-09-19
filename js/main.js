let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})

//создание и вывод массива
const newsItems = document.querySelectorAll(".news-item");

const newsArray = [];

newsItems.forEach(item => {
const title = item.querySelector("h3").textContent;
const content = item.querySelector(".news-item__p").textContent;
newsArray.push({ title: title, content: content });
});

newsArray.forEach(news => {
console.log(`Заголовок: ${news.title}`);
console.log(`Текст: ${news.content}`);
console.log("-----");
});

//валидация полей

document.getElementById("send").addEventListener("click", function (event) {
    event.preventDefault();
  
    var nazavanieField = document.getElementById("form-elem");
    var descriptionField = document.getElementById("form-elem textarea");
    var message = document.getElementById("message");
    var message2 = document.getElementById("meassage2");
  
    if (nazavanieField.value.length < 8 && nazavanieField.value.length >= 1) {
        nazavanieField.setAttribute("style", "border-color: red;")
      message.innerText = "Символов не должно быть меньше восьми";
    } else if (nazavanieField.value === "") {
        nazavanieField.setAttribute("style", "border-color: red;")
      message.innerText = "Поле не должно быть пустым";
    }else{
    nazavanieField.setAttribute("style", "border-color: black;")
      message.innerText = "";
    }

    if (descriptionField.value.length > 300 && descriptionField.value.length >= 1) {
        descriptionField.setAttribute("style", "border-color: red;")
      message2.innerText = "Символов не должно быть больше 300";
    } else if (descriptionField.value === "") {
        descriptionField.setAttribute("style", "border-color: red;")
      message2.innerText = "Поле не должно быть пустым";
    }else{
        descriptionField.setAttribute("style", "border-color: black;")
      message2.innerText = "";
    }

  });

  //цвет фона

  const body = document.body;
const whiteBtn = document.querySelector('.white');
const blackBtn = document.querySelector('.black');

whiteBtn.addEventListener('click', () => {
 body.style.backgroundColor = 'white';
});

blackBtn.addEventListener('click', () => {
 body.style.backgroundColor = 'black';
});