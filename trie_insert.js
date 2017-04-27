// For each letter in the word:
//
// 1. if the letter exists on the tree, go to the letter. If it does not exist, create it.
// 2. If there is another letter, return to the previous step. If not, add a word terminating marker.

var trie = function() {
    this.head = {};
};

trie.prototype.validate = function(word) {
    if((word === undefined) || (word === null)) throw "The given word is invalid.";
    if (typeof word !== "string") throw "The given word is not a string";
}

trie.prototype.add = function(word) {
    this.validate(word);

    var current = this.head;

    for (var i = 0; i < word.length; i++) {
        if(!(word[i] in current)) {
            current[word[i]] = {};
        }

        current = current[word[i]]
    };

    current.$ = 1;  //word end marker
};

console.log(trie.prototype.add("foobar"));
