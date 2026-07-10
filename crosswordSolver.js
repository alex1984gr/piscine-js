function crosswordSolver(puzzle, words) {
    // Type validation
    if (typeof puzzle !== 'string' || !Array.isArray(words)) {
        console.log('Error');
        return;
    }
    
    // Parse the grid
    const grid = puzzle.split('\n').map(row => row.split(''));
    const rows = grid.length;
    
    // Handle empty puzzle
    if (rows === 0 || (rows === 1 && grid[0].length === 1 && grid[0][0] === '')) {
        console.log('Error');
        return;
    }
    
    const cols = grid[0].length;
    
    // Validate grid dimensions are consistent
    for (let r = 0; r < rows; r++) {
        if (grid[r].length !== cols) {
            console.log('Error');
            return;
        }
    }
    
    // Find all word slots
    const slots = [];
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c];
            if (cell === '.' || cell === '0') continue;
            
            const num = parseInt(cell);
            if (isNaN(num) || num < 1 || num > 2) {
                console.log('Error');
                return;
            }
            
            let count = 0;
            
            // Check horizontal: word starts here if left is edge/dot and right is not dot
            const isHorizontalStart = (c === 0 || grid[r][c-1] === '.') && 
                                       c + 1 < cols && grid[r][c+1] !== '.';
            // Check vertical: word starts here if above is edge/dot and below is not dot
            const isVerticalStart = (r === 0 || grid[r-1][c] === '.') && 
                                     r + 1 < rows && grid[r+1][c] !== '.';
            
            if (isHorizontalStart) count++;
            if (isVerticalStart) count++;
            
            if (count !== num) {
                console.log('Error');
                return;
            }
            
            if (isHorizontalStart) {
                let len = 0;
                while (c + len < cols && grid[r][c+len] !== '.') len++;
                slots.push({ row: r, col: c, dir: 'h', len });
            }
            if (isVerticalStart) {
                let len = 0;
                while (r + len < rows && grid[r+len][c] !== '.') len++;
                slots.push({ row: r, col: c, dir: 'v', len });
            }
        }
    }
    
    // Check if number of words matches number of slots
    if (words.length !== slots.length) {
        console.log('Error');
        return;
    }
    
    // Check for duplicate words
    if (new Set(words).size !== words.length) {
        console.log('Error');
        return;
    }
    
    // Check if word lengths match slot lengths
    const slotLens = slots.map(s => s.len).sort((a, b) => a - b);
    const wordLens = words.map(w => w.length).sort((a, b) => a - b);
    for (let i = 0; i < slotLens.length; i++) {
        if (slotLens[i] !== wordLens[i]) {
            console.log('Error');
            return;
        }
    }
    
    // Build intersection map
    const intersections = [];
    for (let i = 0; i < slots.length; i++) {
        for (let j = i + 1; j < slots.length; j++) {
            const s1 = slots[i];
            const s2 = slots[j];
            if (s1.dir === s2.dir) continue;
            
            const h = s1.dir === 'h' ? s1 : s2;
            const v = s1.dir === 'v' ? s1 : s2;
            
            if (h.row >= v.row && h.row < v.row + v.len &&
                v.col >= h.col && v.col < h.col + h.len) {
                intersections.push({
                    hIdx: s1.dir === 'h' ? i : j,
                    vIdx: s1.dir === 'v' ? i : j,
                    hPos: v.col - h.col,
                    vPos: h.row - v.row
                });
            }
        }
    }
    
    // Sort slots by length descending for efficiency
    const order = slots.map((_, i) => i).sort((a, b) => slots[b].len - slots[a].len);
    
    // Backtracking solver
    const solution = new Array(slots.length).fill(null);
    const usedWords = new Set();
    let solutions = [];
    
    function backtrack(pos) {
        if (pos === order.length) {
            // Build the solved grid
            const result = grid.map(row => [...row]);
            for (let i = 0; i < slots.length; i++) {
                const slot = slots[i];
                const word = solution[i];
                for (let k = 0; k < word.length; k++) {
                    if (slot.dir === 'h') {
                        result[slot.row][slot.col + k] = word[k];
                    } else {
                        result[slot.row + k][slot.col] = word[k];
                    }
                }
            }
            solutions.push(result.map(row => row.join('')).join('\n'));
            return;
        }
        
        const idx = order[pos];
        const slot = slots[idx];
        const candidates = words.filter(w => 
            w.length === slot.len && !usedWords.has(w)
        );
        
        for (const word of candidates) {
            // Check intersections with already placed words
            let valid = true;
            for (const inter of intersections) {
                let otherIdx, myPos, otherPos;
                if (inter.hIdx === idx) {
                    otherIdx = inter.vIdx;
                    myPos = inter.hPos;
                    otherPos = inter.vPos;
                } else if (inter.vIdx === idx) {
                    otherIdx = inter.hIdx;
                    myPos = inter.vPos;
                    otherPos = inter.hPos;
                } else {
                    continue;
                }
                
                if (solution[otherIdx] !== null) {
                    if (word[myPos] !== solution[otherIdx][otherPos]) {
                        valid = false;
                        break;
                    }
                }
            }
            
            if (!valid) continue;
            
            solution[idx] = word;
            usedWords.add(word);
            backtrack(pos + 1);
            usedWords.delete(word);
            solution[idx] = null;
            
            if (solutions.length > 1) return;
        }
    }
    
    backtrack(0);
    
    if (solutions.length !== 1) {
        console.log('Error');
        return;
    }
    
    console.log(solutions[0]);
}