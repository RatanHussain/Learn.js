function getSelectedOptions() {
    const selectElement = document.getElementById("multipleSelect");
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
    alert("Selected options: " + selectedOptions.join(", "));
  } 