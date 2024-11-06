function findAllFoxes(text) {
    const search = /fox\d{1}/g

    results = text.match(search)

    return results
}

const paragraph = "The quick brown fox1 jumps over the lazy dog. Another fox2 is hiding in the bushes. There is a fox3 in the hole and another fox4 in the den.";

console.log(findAllFoxes(paragraph));