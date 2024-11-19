let availableKeywords = [
    'Dog Kennel',
    'Bird Backpack',
    'Scratching Post',
    'Heat Lamp',
    'Reptile Santa Hat',
    'Holly Leash',
    'Christmas Dog Bed',
    'Cat Food',
    'Cat Toy',
    'Litter Box',
    'Dog Food',
    'Dog Toy',
];

const resultsBox = document.querySelector("#result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=> {
            return keyword.toLowerCase().includes(input.toLowerCase());
        })
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';

    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li><a href='" + list + ".html'>" + list + "</a></li>";

    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
