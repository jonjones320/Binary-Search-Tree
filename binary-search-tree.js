class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
  
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
  
    let current = this.root;
  
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  };
  

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
  
    if (node === null) {
      return new Node(val);
    }
  
    if (val < node.val) {
      node.left = this.insertRecursively(val, node.left);
    } else {
      node.right = this.insertRecursively(val, node.right);
    }

    return node;
  }
  

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
  
    while (current !== null) {
      if (val === current.val) {
        return current;
      } else if (val < current.val) {
        current = current.left;
      } else if (val > current.val){
        current = current.right;
      } else {
        return undefined;
      }
    }
  }
  

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) return undefined;
  
    if (val === node.val) return node;

    if (val < node.val) return this.findRecursively(val, node.left);

    return this.findRecursively(val, node.right);
  }
  

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];
    
    function traverse(node) {
      result.push(node.val);

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
    };
  
    traverse(this.root);
    return result;
  }
  

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];
    
    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    }
  
    traverse(this.root);
    return result;
  }
  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];
    
    function traverse(node) {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);

      result.push(node.val);
    };
  
    traverse(this.root);
    return result;
  }
  

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = [];
    const queue = [];
  
    if (this.root) {
      queue.push(this.root)
    };
  
    while (queue.length) {
      const node = queue.shift();

      result.push(node.val);

      if (node.left) {
        queue.push(node.left)
      };

      if (node.right) {
        queue.push(node.right)
      };
    }
  
    return result;
  }
  

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
