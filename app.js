const form = document.querySelector("form")
const cont = document.querySelector(".cont")

//Using the form as to submit

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //Set the value of the form in html text named input's value
  let text = form.text.value;

  //if the input is not empty we can go further
  if (text != "") {

    //First create a wrapper 
    var wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    //Append to the cont initialised above
    cont.appendChild(wrapper);

    //The first input will bear the classlist of block 
    var firstElement = document.createElement('input');
    firstElement.classList.add('block');
    firstElement.type = 'text';
    //Set the valu to the text written above
    firstElement.value = text;
    //Set to readonly it will be clear below
    firstElement.setAttribute('readonly', 'readonly');
    //append this to the wrapper
    wrapper.appendChild(firstElement);

    //Create a delete button
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    //This attached to the wrapper
    wrapper.appendChild(deleteButton);
    //Edit button as well 
    var editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    wrapper.appendChild(editButton);
    //Text value be null here because it is given further and input list should be empty 
    form.text.value = ""

    //Click events on edit and delete
    editButton.addEventListener('click', (e) => {
      //If it shows edit change innertext to save and remove readonly
      if (editButton.innerText.toLowerCase() == "edit") {
        editButton.innerText = "Save";
        firstElement.removeAttribute("readonly");
        editButton.focus();
        //If it shows save, change to edit 
      } else if (editButton.innerText.toLowerCase() == "save") {
        editButton.innerText = "Edit";
        //Set to readonly to edit the text
        firstElement.setAttribute("readonly", "readonly");
      }
    });

    //Delete the wrapper to delete the whole block,button.etc..
    deleteButton.addEventListener('click', (e) => {
      wrapper.remove()

    });



  }



})
