
let wrapper = document.getElementById("fizzbuzz-wrapper");
wrapper.classList.add("d-flex", "bg-success", "flex-wrap" );


for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0)
    {
        let newDiv = document.createElement(`div`);
        newDiv.classList.add(`box`);
        newDiv.innerHTML = "Fizzbuzz";
        wrapper.append(newDiv);
        console.log("FizzBuzz");

    } else if (i % 5 == 0) 
    {
        let newDiv = document.createElement(`div`);
        newDiv.classList.add(`box`);
        newDiv.innerHTML = "Buzz";
        wrapper.append(newDiv);
        console.log("Buzz");
    } else if (i % 3 == 0)
    {
        let newDiv = document.createElement(`div`);
        newDiv.classList.add(`box`);
        newDiv.innerHTML = "Fizz";
        wrapper.append(newDiv);
        console.log("Fizz");

    } else 
    {
        let newDiv = document.createElement(`div`);
        newDiv.classList.add(`box`);
        newDiv.innerHTML = i;
        wrapper.append(newDiv);
        console.log(i)
    }

    // let newDiv = document.createElement(`div`);
    // newDiv.classList.add(`box`);
    // newDiv.innerHTML = i;
    // wrapper.append(newDiv);


}