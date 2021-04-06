function displayType(model) {
    var modelType = model.getAttribute("data-model-type");
    alert(modelType + " is a " + model.innerHTML + " make!");
}