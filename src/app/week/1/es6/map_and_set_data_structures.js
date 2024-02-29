/**
 * Map and Set Data Structures
 */

function mapAndSetDataStructures() {
  // Map
  const map = new Map();
  map.set('name', 'John');
  map.set('age', 30);
  console.log(map.get('name')); // John
  
  // Set
  const set = new Set([1, 2, 3, 3, 3, 4, 5]);
  console.log(set); // Set { 1, 2, 3, 4, 5 }
}

mapAndSetDataStructures()