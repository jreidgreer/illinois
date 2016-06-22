class BinaryTree {
  constructor(input) {
    this.val = input;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    // If the input is less than parent value
    if (val < this.val) {
      //  If no left node add to left
      if (!this.left) {
        this.left = new BinaryTree(val);
      // Else call insert on left child
      } else {
        this.left.insert(val);
      }
    // Else if greater than parent value
    } else if (val >= this.val) {
      // If no right node add ot right
      if (!this.right) {
        this.right = new BinaryTree(val);
      // Else call insert on right child
      } else {
        this.right.insert(val);
      }
    }
  }

  find(val) {
    // If the input is less than parent value
    if (val < this.val) {
      //  If no left node add to left
      if (!this.left) {
        return null;
      // Else call insert on left child
      } else {
        return this.left.find(val);
      }
    // Else if greater than parent value
    } else if (val >= this.val) {
      // If no right node add ot right
      if (!this.right) {
        return null;
      // Else call insert on right child
      } else {
        return this.right.find(val);
      }
    }
  }
  }

  delete(val) {
    //TODO
  }

  getRandomNode() {
    //TODO
  }
}

//=========TESTING================>>>>
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
console.log('Should find inserted values', tree.find(3));
console.log('Should return false for non-existant vals', tree.find(5));