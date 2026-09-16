class Snake { //snake class from class
    constructor(row, col, name = "Snake") {
        this.name = name;
        this.alive = true;
        this.direction = { dx: 1, dy: 0 }; // move right
        this.nextDirection = null;          // queued turn
        this.segments = [{ row, col }];
        this.score = 0;                    
        const palette = 
        [   '#FF4C4C',
            '#4CFF4C',
            '#4C4CFF', 
            '#FFFF4C', 
            '#FF4CFF', 
            '#4CFFFF', 
            '#FF804C', 
            '#80FF4C', 
            '#4CFF80', 
            '#804CFF', 
            '#FF4C80', 
            '#4C80FF', 
            '#FFC14C', 
            '#4CFFC1', 
            '#C14CFF', 
            '#FF4CC1', 
            '#4CC1FF', 
            '#80C14C', 
            '#C1FF4C', 
            '#FFB84C'  
        ];
        this.color = color(random(palette));
        this.lastUpdate = millis(); 
        this.updateInterval = random(80, 200);
    }

    think() {

    }

    update() {
        if (!this.alive) return;
        //time based movement
        if (millis() - this.lastUpdate < this.updateInterval) return;
        this.lastUpdate = millis();

        if (this.nextDirection) {
            this.direction = this.nextDirection;
            this.nextDirection = null;
        }

        const head = this.segments[0];
        const newHead = {
            row: head.row + this.direction.dy,
            col: head.col + this.direction.dx
        };

        // Edge collision or snake collision
        if (this.edgeDetect(newHead) || this.checkCollision(newHead)) {
            this.die();
            return;
        }

        // Food collision
        const foodIndex = food.findIndex(f => f.row === newHead.row && f.col === newHead.col);
        let justAte = false;
        if (foodIndex !== -1) {
            this.score += 50;
            food.splice(foodIndex, 1);
            justAte = true;
        }

        this.segments.unshift(newHead);
        if (!justAte) this.segments.pop();
    }

    draw() {
        if (!this.alive) return;
        noStroke();
        fill(this.color);

        for (let seg of this.segments) {
            rect(seg.col * cellSize, seg.row * cellSize, cellSize, cellSize, 4);
        }
    }

    setDirection(dir) {
        if ((dir.dx === -this.direction.dx && dir.dy === -this.direction.dy) ||
            (dir.dx !== 0 && dir.dy !== 0)) return; // block reverse 
        this.nextDirection = dir;
    }

    die() {
        this.alive = false;
    }

    edgeDetect(pos) { 
        return pos.col < 0 || pos.row < 0 || pos.col >= maxCols || pos.row >= maxRows;
    }

    checkCollision(pos) {
        // Check self collision
        for (let seg of this.segments) {
            if (seg.row === pos.row && seg.col === pos.col) return true;
        }

        // Check collisions with other snakes
        for (let other of snakes) {
            if (other === this) continue; // skip self
            for (let seg of other.segments) {
                if (seg.row === pos.row && seg.col === pos.col) return true;
            }
        }
        return false;
    }
}

// ---- Simple AI Snake ----
class SimpleSnake extends Snake {
    constructor(row, col, name) {
        super(row, col, name);
    }

    think() {
        const directions = [
            { dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 }
        ];
        this.setDirection(random(directions));
    }
}



