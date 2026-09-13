//query Seletor can select more - function or id 
//compare to get ElementById 
document.querySelector('#addButton').addEventListener('click', addTask)

document.querySelector('#clear').addEventListener('click', clearTheList)
//add function
function addTask (){
    const task = document.getElementById('inputValue').value
    
    if (task === ''){
        alert('Please enter something');
    }else {
        const listSection = document.querySelector('#listSection')
        //create a new section go inside of list section 
        //this is going to hold all element of each task 
        const newSection = document.createElement('section');
        newSection.classList.add('listItem');

        // const checkbox = document.createElement('input');
        // checkbox.classList.add('checkbox'); //create class named checkbox 
        // checkbox.type = 'checkbox'; //change input default type from text to checkbox

        //create p for input
        const item = document.createElement('p')
        item.textContent = task

        //create a button in html for delete feature
        //come with class for design purpose
        
        //add classlist called stripethrough to do <p>
        item.addEventListener('click', ()=> {
            item.classList.add('strike');
        }) 

        // const deleteButton = document.createElement('button')
        // deleteButton.classList.add('deleteButton')
        // deleteButton.textContent = 'delete';

        
        // deleteButton.addEventListener('click',()=>{
        //     newSection.remove();
        // })

        listSection.append(newSection)
        newSection.append(item)
        
        document.getElementById('inputValue').value = ''

    }

}




function clearTheList(){
    document.querySelector('#listSection').innerHTML = '';
}


function clearTheCompletedList(){
    const child = document.querySelectorAll('.strike')
    for (i = 0; i < child.length; i++){
        console.log(child[i].parentElement)
        child[i].parentElement.remove();
    }

}

const clearTheCompletedButton = document.querySelector('#clearTheCompletedTask')
clearTheCompletedButton.addEventListener('click',clearTheCompletedList)
