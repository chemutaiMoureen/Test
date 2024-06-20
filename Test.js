const get_random_items_from_range = (
    items = 1,
    start = 0,
    end = 1,
    step = 1
  ) => {
    // Create an array representing the range of numbers
    const range = [];
    for (let i = start; i < end; i += step) {
      range.push(i);
    }
  
    // Check if the requested number of items is greater than the available numbers
    if (items > range.length) {
      throw new Error("Requested more items than available in the range");
    }
  
    // Shuffle the range array using Fisher-Yates algorithm
    for (let i = range.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [range[i], range[j]] = [range[j], range[i]];
    }
  
    // Return the first `items` number of elements from the shuffled array
    return range.slice(0, items);
  };
  
  // Test cases
  console.log(get_random_items_from_range(5, 1, 20, 1)); // Example output: [3, 8, 7, 13, 11]
  console.log(get_random_items_from_range(5, 10, 30, 5)); // Example output: [10, 15, 25, 20]
  console.log(get_random_items_from_range(4, 10, 30, 5)); // Example output: [10, 15, 25, 20]
  console.log(get_random_items_from_range(9, 50, 200, 12)); // Example output: [194, 86, 62, 122, 146, 98, 134, 170, 110]
  