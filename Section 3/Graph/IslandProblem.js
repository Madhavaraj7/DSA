var numIslands = function (grid) {
    // Check if the grid is empty or null
    if (!grid || grid.length === 0) return 0;

    // Get the number of rows and columns in the grid
    const rows = grid.length;
    const cols = grid[0].length;

    // Initialize island count
    let count = 0; 

    // Depth-First Search (DFS) function to explore the grid
    function dfs(row, col) {
        // Base cases:
        // 1. If the current cell is out of bounds
        // 2. If the current cell is water ('0')
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
            return;
        }

        // Mark the current cell as visited by changing its value to '0'
        grid[row][col] = '0';

        // Explore adjacent cells: up, down, left, and right
        dfs(row + 1, col); // down
        dfs(row - 1, col); // up
        dfs(row, col + 1); // right
        dfs(row, col - 1); // left
    }

    // Iterate through each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If the current cell is land ('1')
            if (grid[i][j] === '1') {
                // Increment island count
                count++;
                // Start DFS traversal from the current cell
                dfs(i, j);
            }
        }
    }

    // Return the total count of islands
    return count;
};

console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"], 
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
])); // Output: 3
