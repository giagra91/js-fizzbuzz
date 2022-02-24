
let wrapper = document.getElementById("fizzbuzz-wrapper");
wrapper.classList.add("d-flex", "bg-success", "flex-wrap", "justify-content-center", "rounded" );

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0)
    {
        wrapper.innerHTML += `<div class="box-blue">Fizzbuzz</div>`;
        console.log("FizzBuzz");

    } else if (i % 5 == 0) 
    {
        wrapper.innerHTML += `<div class="box-red">Buzz</div>`;
        console.log("Buzz");
    } else if (i % 3 == 0)
    {
        wrapper.innerHTML += `<div class="box-blue">Fizz</div>`;
        console.log("Fizz");

    } else 
    {
        wrapper.innerHTML+= `<div class="box-red">` + i + `</div>`;
        console.log(i)
    }
    // if (i % 3 == 0 && i % 5 == 0)
    // {
    //     let newDiv = document.createElement(`div`);
    //     newDiv.classList.add(`box-blue`);
    //     newDiv.innerHTML = "Fizzbuzz";
    //     wrapper.append(newDiv);
    //     console.log("FizzBuzz");

    // } else if (i % 5 == 0) 
    // {
    //     let newDiv = document.createElement(`div`);
    //     newDiv.classList.add(`box-red`);
    //     newDiv.innerHTML = "Buzz";
    //     wrapper.append(newDiv);
    //     console.log("Buzz");
    // } else if (i % 3 == 0)
    // {
    //     let newDiv = document.createElement(`div`);
    //     newDiv.classList.add(`box-blue`);
    //     newDiv.innerHTML = "Fizz";
    //     wrapper.append(newDiv);
    //     console.log("Fizz");

    // } else 
    // {
    //     let newDiv = document.createElement(`div`);
    //     newDiv.classList.add(`box-red`);
    //     newDiv.innerHTML = i;
    //     wrapper.append(newDiv);
    //     console.log(i)
    // }

}