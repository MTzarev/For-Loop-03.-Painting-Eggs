function paintingEggsLoop(input) {

    let index = 0;
    let size = input[index];
    index++;
    let collor = input[index];
    index++;
    let batches = Number(input[index]);
    index++
    let price = 0
    for (let i = 0; i < input.length; i++) {
        if (size === "Large" && collor === "Red") {
            price = 16 * batches;
        } else if (size === "Large" && collor === "Green") {
            price = 12 * batches;
        } else if (size === "Large" && collor === "Yellow") {
            price = 9 * batches;
        } else if (size === "Medium" && collor === "Red") {
            price = 13 * batches;
        } else if (size === "Medium" && collor === "Green") {
            price = 9 * batches;
        } else if (size === "Medium" && collor === "Yellow") {
            price = 7 * batches;
        } else if (size === "Small" && collor === "Red") {
            price = 9 * batches;
        } else if (size === "Small" && collor === "Green") {
            price = 8 * batches;
        } else if (size === "Small" && collor === "Yellow") {
            price = 5 * batches;
        }
    }
    console.log(`${(price * 0.65).toFixed(2)} leva.`);
}
paintingEggsLoop(["Large", "Red", "7"])