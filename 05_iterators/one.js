// for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

// let us look at nested loop

for (let i = 0; i <=10; i++) {
    // console.log(`Outer value for i : ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`Outer value for j : ${j}`);
    }    
}

// looping overr arrays

array=["flash","batman","superman"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

// break and continue

for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log(`detected 5`);
        break
    }
}

for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log("detected 5");
        continue
    }
    console.log(`${i}`);
}
