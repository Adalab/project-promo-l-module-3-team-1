const inputsTextConfig = [
  {
    inputclassName: ".js-input-name",
    cardclassName: ".js-card-name",
    defaultValue: "Nombre apellidos",
    cardPrefix: "",
    cardElementAttribute: "innerHTML",
  },
  {
    inputclassName: ".js-input-job",
    cardclassName: ".js-card-job",
    defaultValue: "Developer",
    cardPrefix: "",
    cardElementAttribute: "innerHTML",
  },
  {
    inputclassName: ".js-input-email",
    cardclassName: ".js-card-email",
    defaultValue: "",
    cardPrefix: "mailto:",
    cardElementAttribute: "href",
  },
  {
    inputclassName: ".js-input-phone",
    cardclassName: ".js-card-phone",
    defaultValue: "",
    cardPrefix: "tel:",
    cardElementAttribute: "href",
  },
  {
    inputclassName: ".js-input-linkedin",
    cardclassName: ".js-card-linkedin",
    defaultValue: "",
    cardPrefix: "https://www.linkedin.com/in/",
    cardElementAttribute: "href",
  },
  {
    inputclassName: ".js-input-github",
    cardclassName: ".js-card-github",
    defaultValue: "",
    cardPrefix: "https://www.github.com/",
    cardElementAttribute: "href",
  },
];
function updateAllInputs() {
  for (const e of inputsTextConfig) {
    const t = document.querySelector(e.inputclassName),
      a = document.querySelector(e.cardclassName);
    let n = t.value;
    "innerHTML" === e.cardElementAttribute
      ? ((n = "" === t.value ? e.defaultValue : t.value), (a.innerHTML = n))
      : "href" === e.cardElementAttribute &&
        ("" === t.value
          ? (n = "#")
          : ((n = n.replace(e.cardPrefix, "")), (n = e.cardPrefix + n)),
        (a.href = n));
  }
  saveInLocalStorage();
}
const inputTextElements = document.querySelectorAll(".js-input-text");
for (const e of inputTextElements) e.addEventListener("keyup", updateAllInputs);
const collapsableHeaders = document.querySelectorAll(".js-collapsable-header");
for (const e of collapsableHeaders)
  e.addEventListener("click", changeCollapsable);
function changeCollapsable(e) {
  const t = e.currentTarget.parentNode,
    a = document.querySelectorAll(".js-collapsable-container");
  for (const e of a)
    t === e
      ? e.classNameList.toggle("collapsable--close")
      : e.classNameList.add("collapsable--close");
}
const hiddenButton = document.querySelector(".js-hidden");
function handleHiddenButton(e) {
  const t = document.querySelector(".js-hidden-collapsable");
  console.log(t);
  const a = e.currentTarget;
  console.log(a), a !== t && t.classNameList.remove("hidden");
}
hiddenButton.addEventListener("click", handleHiddenButton);
const paletteElements = document.querySelectorAll(".js-palette"),
  photoCardElement = document.querySelector(".js-card");
function updatePalette() {
  photoCardElement.classNameList.remove(
    "palette-1",
    "palette-2",
    "palette-3",
    "palette-4"
  );
  const e = document.querySelector(".js-palette:checked").value;
  photoCardElement.classNameList.add("palette-" + e), saveInLocalStorage();
}
for (const e of paletteElements) e.addEventListener("change", updatePalette);
const fr = new FileReader(),
  uploadBtn = document.querySelector(".js__profile-trigger"),
  fileField = document.querySelector(".js__profile-upload-btn"),
  profileImage = document.querySelector(".js__profile-image"),
  profilePreview = document.querySelector(".js__profile-preview");
let photo = "";
function getImage(e) {
  e.preventDefault();
  const t = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage), fr.readAsDataURL(t);
}
function writeImage() {
  (photo = fr.result), updatePhoto(), saveInLocalStorage();
}
function updatePhoto() {
  const e = photo || "url(../images/photo-preview2.jpg)";
  (profilePreview.style.backgroundImage = `url(${e})`),
    (profileImage.style.backgroundImage = `url(${e})`);
}
function fakeFileClick(e) {
  e.preventDefault(), fileField.click();
}
function getUserData() {
  return {
    photo: photo,
    palette: parseInt(document.querySelector(".js-palette:checked").value),
    name: document.querySelector(".js-input-name").value,
    job: document.querySelector(".js-input-job").value,
    email: document.querySelector(".js-input-email").value,
    phone: document.querySelector(".js-input-phone").value,
    linkedin: document.querySelector(".js-input-linkedin").value,
    github: document.querySelector(".js-input-github").value,
  };
}
function saveInLocalStorage() {
  const e = getUserData(),
    t = JSON.stringify(e);
  localStorage.setItem("userData", t);
}
function getFromLocalStorage() {
  const e = localStorage.getItem("userData");
  if (null !== e) {
    const t = JSON.parse(e);
    (document.querySelector(".js-input-name").value = t.name),
      (document.querySelector(".js-input-job").value = t.job),
      (document.querySelector(".js-input-email").value = t.email),
      (document.querySelector(".js-input-phone").value = t.phone),
      (document.querySelector(".js-input-linkedin").value = t.linkedin),
      (document.querySelector(".js-input-github").value = t.github),
      (photo = t.photo);
    const a = document.querySelectorAll(".js-palette");
    for (const e of a) parseInt(e.value) === t.palette && (e.checked = !0);
    updateAllInputs(), updatePalette(), updatePhoto();
  }
}
uploadBtn.addEventListener("click", fakeFileClick),
  fileField.addEventListener("change", getImage);
const resetButtonElement = document.querySelector(".js-reset");
function resetInfo() {
  resetInputsForm(),
    resetPhotocardPalettes(),
    resetPalettes(),
    resetShare(),
    clearPhoto(),
    localStorage.clear();
}
function resetInputsForm() {
  const e = document.querySelectorAll(".js-input-text");
  for (const t of e) t.value = "";
  updateAllInputs();
}
function resetPhotocardPalettes() {
  const e = document.querySelector(".js-palette:checked").value;
  photoCardElement.classNameList.remove("palette-" + e),
    photoCardElement.classNameList.add("palette-1");
}
function resetPalettes() {
  document.querySelector(".js-palette:checked").checked = !1;
  (document.querySelector(".js-paletteDefault").checked = !0), updatePalette();
}
function clearPhoto() {
  (photo = ""),
    (profilePreview.style.backgroundImage = ""),
    (profileImage.style.backgroundImage = ""),
    updatePhoto();
}
function resetShare() {
  document.querySelector(".js-create-btn").disabled = !1;
  document.querySelector(".js-card-result").innerHTML = "";
}
resetButtonElement.addEventListener("click", resetInfo);
const createBtn = document.querySelector(".js-create-btn"),
  cardResultElement = document.querySelector(".js-card-result");
function handleCreateBtn(e) {
  (cardResultElement.innerHTML = ""), e.preventDefault();
  const t = getUserData();
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(t),
    headers: { "Content-Type": "application/json" },
  })
    .then((e) => e.json())
    .then((e) => {
      if (
        (console.log("Server response:", e),
        (shareLink = e.cardURL),
        !0 === e.success)
      ) {
        (cardResultElement.innerHTML +=
          '<h3 className="section__share_copy">La tarjeta ha sido creada:</h3>'),
          (cardResultElement.innerHTML += `<p><a href="${shareLink}" className="text_link_card section__twitter__button js-twitter-link" target="_blank">${shareLink}</a></p>`),
          (cardResultElement.innerHTML +=
            '<a className="share js-btn-twitter" target="_blank">\n        <i className="fa fa-twitter" aria-hidden="true"></i> Compartir en Twitter\n      </a>'),
          (createBtn.disabled = !0);
        document
          .querySelector(".js-btn-twitter")
          .setAttribute(
            "href",
            "https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=" +
              shareLink
          );
      } else
        (cardResultElement.innerHTML +=
          '<h4 className= "title1">La tarjeta no puede ser creada aún</h4>'),
          (cardResultElement.innerHTML +=
            '<h4 className = "title1">Por favor, completa todos los campos marcados con *</h4>');
    });
}
createBtn.addEventListener("click", handleCreateBtn), getFromLocalStorage();
