const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  
  root() {

    this.rootNode = null;      
    
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(/*data*/ value) {    

    this.rootNode = aDD(this.root(), value);  

    function aDD(node, value) {
      
      if(!node) {        
        node.value = value;  
        node.left = null;
        node.right = null;        
      }

      if(node.value === value) return node;

      if(value < node.value) {
        node.left = aDD(node.left, value);
      } else {
        node.right = aDD(node.right, value);
      }

      return node;       
    }
    
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {

    searchVal(this.rootNode, data);

    function searchVal(node, value) {

      if(!node) {
        return false;
      }

      if(node.value === value) return true;      

      return value < node.value ? searchVal(node.left, value) : searchVal(node.right, value);       
    }
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {

    findVal(this.rootNode, data);

    function findVal(node, value) {

      if(!node) {
        return null;
      }

      if(node.value === value) return node.value;      

      return value < node.value ? findVal(node.left, value) : findVal(node.right, value);       
    }


    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {

    this.rootNode = removeVal(this.rootNode, data);

    function removeVal(node, value) {

      if(!node) {
        return null;
      }

      if(value < node.value) {
        node.left = removeVal(node.left, value);
        return node;
      } else if(value > node.value) {
        node.right = removeVal(node.right, value);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minR = node.right;
        while(minR.left) {
          minR = minR.left;
        }
        node.value = minR.value;
        node.right = removeVal(node.right, minR.value);
        return node;

      }
      
         
    }

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.rootNode) return;

    let node = this.rootNode;
    while(node.left) {
      node = node.left;
    }

    node = node.value;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if(!this.rootNode) return;

    let node = this.rootNode;
    while(node.right) {
      node = node.right;
    }

    node = node.value;

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};