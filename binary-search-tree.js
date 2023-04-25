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
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let cur = this.root;
    while (true) {
      if (val < cur.val) {
        if (cur.left === null) {
          cur.left = new Node(val);
          return this;
        } else {
          cur = cur.left;
        }
      } else if (val > cur.val) {
        if (cur.right === null) {
          cur.right = new Node(val);
          return this;
        } else {
          cur = cur.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, cur = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < cur.val) {
      if (cur.left === null) {
        cur.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, cur.left);
    } else {
      if (cur.right === null) {
        cur.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, cur.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let cur = this.root;
    let found = false;

    if (val === cur.val) {
      return cur;
    }

    while (!found && cur) {
      if (val < cur.val) {
        cur = cur.left;
      } else if (val > cur.val) {
        cur = cur.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return undefined;
    }
    return cur;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, cur = this.root) {
    if (this.root === null) {
      return undefined;
    }

    if (val < cur.val) {
      if (cur.left === null) {
        return undefined;
      }
      return this.findRecursively(val, cur.left);
    } else if (val > cur.val) {
      if (cur.right === null) {
        return undefined;
      }
      return this.findRecursively(val, cur.right);
    }
    return cur;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];
    let cur = this.root;

    function traverse(node) {
      arr.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(cur);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    let cur = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      arr.push(node.val);
      node.right && traverse(node.right);
    }

    traverse(cur);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    let cur = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      arr.push(node.val);
    }

    traverse(cur);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let cur = this.root;
    let queue = [];
    let arr = [];

    queue.push(cur);

    while (queue.length) {
      cur = queue.shift();
      arr.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    return arr;
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
