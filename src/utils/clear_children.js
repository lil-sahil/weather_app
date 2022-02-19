export const clearChildren = (domElement) => {
  while (domElement.firstChild){
    domElement.removeChild(domElement.firstChild)
  }
}