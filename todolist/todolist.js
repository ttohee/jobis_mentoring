function onClickInputButton(elem)
{
  let inputBoxElem = document.getElementById("input_box");
  let inputBoxValue = inputBoxElem.value;
  document.getElementById("to_do_list").innerHTML += `
  <li>
    <input 
    type="checkbox" 
    id="checkbox"
    />
    <span>${inputBoxValue}</span>
    <img 
    src="/images/bi_trash-fill.png"
    width="36px"
    height="36px"
    alt="trash_img"
    />
  </li>
  `;
  inputBoxElem.value = "";
}
function onClickDeleteButton(deleteElem)
{
  deleteElem.parentElement.remove();
}
function onClickCheckbox(checkboxElem)
{
  let liElem = checkboxElem.parentElement;
  let spanElem = liElem.querySelector("span");
  if(checkboxElem.checked)
  {
    spanElem.innerHTML = `<s>${spanElem.innerText}</s>`;
  }
  else
  {
    spanElem.innerHTML = `${spanElem.innerText}`;
  }
}