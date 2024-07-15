function stringChop(str, chunkLength) {
    // Check if the input string is null and return an empty array if it is
    if (str === null) {
        return [];
    }

    // Initialize an array to store the chunks
    const chunks = [];

    // Loop through the string and slice it into chunks
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.slice(i, i + chunkLength));
    }

    // Return the array of chunks
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

