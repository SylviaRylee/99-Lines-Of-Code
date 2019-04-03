let friends = ["Jay", "Katie", "Tait", "Cliff", "Meredith"];

for (let i = 0; i < friends.length; ++i ) {
    console.log(friends[i]);
    for (let j = 99; j > 0; j-- ) {
        console.log(j + " " + "lines of code in the file," 
        + " " + j + " " + "lines of code;" +
        " " + friends[i] + " " + "strikes out, clears in all out," 
        + " " + j + " " + "lines of code in the file");
    }
};