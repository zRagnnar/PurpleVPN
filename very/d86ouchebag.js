var NumberOfWords = 31
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://enrt.eu/cu21MA"
words[2] = "https://stfly.io/Aw86"
words[3] = "https://stfly.io/41YJa6"
words[4] = "https://stfly.io/WN9KQ24"
words[5] = "https://stfly.io/so9q"
words[6] = "https://stfly.io/sxvpK83pS"
words[7] = "https://stfly.io/q5Uzn"
words[8] = "https://stfly.io/EjCCcgUS"
words[9] = "https://stfly.io/n9fb"
words[10] = "https://stfly.io/1CXL"
words[11] = "https://stfly.io/s29jg5BrK"
words[12] = "https://stfly.io/wNfEob63"
words[13] = "https://stfly.io/JPsP6cy"
words[14] = "https://stfly.io/kck1W"
words[15] = "https://stfly.io/EftePt"
words[16] = "https://stfly.io/HYJjyJ"
words[17] = "https://stfly.io/bzsQ"
words[18] = "https://stfly.io/hAoC"
words[19] = "https://stfly.io/tmw1vyKo"
words[20] = "https://stfly.io/DRFa46V"
words[21] = "https://stfly.io/cMbUx5Ve"
words[22] = "https://stfly.io/cJOd4cD0O"
words[23] = "https://stfly.io/mZcS"
words[24] = "https://stfly.io/G1vZ"
words[25] = "https://stfly.io/lIXWwWI"
words[26] = "https://stfly.io/ddtT"
words[27] = "https://stfly.io/hzT8FcASX"
words[28] = "https://stfly.io/UMjnHmte"
words[29] = "https://stfly.io/p7ulcEz5"
words[30] = "https://stfly.io/fDkUBnoFQ"
words[31] = "https://stfly.io/OrVAhP"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}