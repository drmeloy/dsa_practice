// Prerequisite: Trie
// Given a list of string str[] and a prefix string pre. The task is to count the number of words in list of string with given prefix using trie.

// Example:

// Input: str = [ “apk”, “app”, “apple”, “arp”, “array” ], pre = “ap”
// Output: 3

// Input: str = [ “gee”, “geek”, “geezer”, “geeksforgeeks”, “geekiness”, “geekgod” ], pre = “geek”
// Output: 4

class Node {
  constructor(data){
    this.value = data;
    this.children = [];
    this.isEnd = false;
  }
}

class Trie {
  constructor(){
    this.root = new Node(null);
  }

  add(word){
    // while there is a letter in the word
    // check if the letter is in the children array
    // if so, advance to next letter in the word (and its node)
    // if not, add the missing node to the children array
    // and advance to the next letter in the word and (and its node)
    // when end of the word is reached, mark as isEnd.
    
  let current = this.root;
    for(const char of word) {
      let found = false;
      for(let i = 0; i < current.children.length; i++){
        if(current.children[i].value === char) {
          current = current.children[i];
          found = true;
          break;
        }
      }
      if(!found){
        const node = new Node(char);
        current.children.push(node);
        current = node;
      }
    }          
    current.isEnd = true;
  }

  contains(word){
    let current = this.root;
    for(const char of word) {
      let found = false;
      for(let i = 0; i < current.children.length; i++){
        if(current.children[i].value === char) {
          current = current.children[i];
          found = true;
          break;
        }
      }
      if(!found) return false;
    }
    return current.isEnd;
  }

  countWordsWithPrefix(pre){
    let current = this.root;
    let found = false;
    const foundObj = {
      count: 0,
      words: []
    };

    for(const char of pre){
      for(let i = 0; i < current.children.length; i++){
        if(current.children[i].value === char) {
          current = current.children[i];
          found = true;
          break;
        }
      }
    }
    if(!found) return foundObj;

    const countWords = (current, functionParams, word = pre) => {
      if(current.isEnd){
        functionParams.words.push(word);
        functionParams.count++;
      }
      if(current.children.length > 0){
        current.children.forEach(node => {
          word = word + node.value;
          functionParams = countWords(node, functionParams, word);
        });
      }
      return functionParams;
    }
    
    return countWords(current, foundObj);
  }
  
  print() {
    console.log(JSON.stringify(this, null, 2));
  }
}

const aTrie = new Trie();
aTrie.add('apk');
aTrie.add('bat');
aTrie.add('apko');
aTrie.add('ba');
aTrie.add('bate')
aTrie.contains('b');
// aTrie.countWordsWithPrefix('a');
aTrie.countWordsWithPrefix('ba');
