const regexPattern = document.querySelector("#pattern")
const stringToTest = document.querySelector("#test-string")
const testButton  = document.querySelector("#test-btn")
const testResult = document.querySelector("#result")

const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
  let str = ""
  if (caseInsensitiveFlag.checked) {str += "i"}
  if (globalFlag.checked) {str += "g"}
  return str 
}



testButton.addEventListener("click", () => {
  if (regexPattern.value === "") {
    testResult.innerText = "no match"
    
    return
    }
  
  
  
  const flags = getFlags()
  const patternValue = regexPattern.value

  const originalText = stringToTest.textContent

  const re = new RegExp(patternValue, flags);
  const matches = originalText.match(re);
  if (matches) {
  const listaParaMostrar = flags.includes("g") ? matches : [matches[0]];
  testResult.innerText = listaParaMostrar.join(", ");
  stringToTest.innerHTML = originalText.replace(re, (match) => {
      return `<span class="highlight">${match}</span>`
      })
  } else {
    testResult.innerText = "no match";
    stringToTest.innerHTML = originalText;
  }
})
