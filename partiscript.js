/* --------------------------
 * THANKS BRICKSANDMORTARWEB.COM FOR GETTING ME STARTED:
   www.bricksandmortarweb.com/web-design/how-to-make-an-interactive-particle-logo-using-canvas
 * -------------------------- */

    
/* --------------------------
 * CANVAS VARIABLES
 * -------------------------- */
 
var canvasInteractive = document.getElementById('canvas-interactive'),
    canvasReference = document.getElementById('canvas-reference'), // Reference Canvas to parse the image data from
    contextInteractive = canvasInteractive.getContext('2d'),
    contextReference = canvasReference.getContext('2d'),
    image = document.getElementById('img'),
    global_width = window.innerWidth * 2,
    global_height = window.innerHeight * 2;
    
    /**
    * Compensate for High Density Screens
    */ 
    
    // Set canvas for twice the intended size
    canvasInteractive.width = canvasReference.width = global_width;
    canvasInteractive.height = canvasReference.height = global_height;
    
    // Scale the Canvas back to Normal Size
    canvasInteractive.style.width = canvasReference.style.width = global_width / 2;
    canvasInteractive.style.height =  canvasReference.style.height = global_height / 2;


/* --------------------------
 * LOGO VARIABLES
 * -------------------------- */
  
var logoDimensions = {
    x: 800,
    y: 800
};
 
var global_center = {
    x: (global_width / 2),
    y: (global_height / 2)
};
 
var logoLocation = {
    x: (global_center.x - logoDimensions.x / 2),
    y: (global_center.y - logoDimensions.y / 2)
};
 
var particleArr = [];
var particleAttributes = {
    spacing: 9,
    radius: 3,
    color: "#FC9200"
};


/* --------------------------
 * PARTICLE VARS
 * -------------------------- */

/**
* Set up Particle
*/ 
 
function Particle(x, y) {
    this.x = this.originX = x;
    this.y = this.originY = y;
}



/* --------------------------
 * INIT
 * -------------------------- */
 
function init() {
    
    //Add Greensock Ticker to Update the Canvas
    TweenLite.ticker.addEventListener("tick", animate);  
    
    // Set up the draw particles
    contextReference.drawImage(image,logoLocation.x, logoLocation.y);
    var pixels = contextReference.getImageData(0, 0, global_width, global_height).data;
    var index;
    for(var y = 0; y < global_height; y += particleAttributes.spacing) {
        for(var x = 0; x < global_width; x += particleAttributes.spacing) {
            index = (y * global_width + x) * 4;
            if(pixels[++index] > 0) {
                particleArr.push(new Particle(x, y));
            }
        }
    }
    
    // Animate the particles in from around the stage
    for(var i = 0; i < particleArr.length; i++) {
         TweenLite.from(particleArr[i], randomNumber(1, 2), {y: randomNumber(-100, canvasInteractive.height + 100), x: randomNumber(-100, canvasInteractive.width + 100)});
     }
    
};
init();


/* --------------------------
 * RESIZE THE CANVAS
 * -------------------------- */

function resize() {
    
    // Clear the canvas for redraw
    contextInteractive.clearRect(0, 0, canvasInteractive.width, canvasInteractive.height);
    
    // Destroy the Greensock Ticker
    TweenLite.ticker.removeEventListener("tick", animate);
    
    // Clear the particle array
    particleArr = [];
    
    
    /**
    * Reset Stage and logo vars
    */ 
    
    global_width = window.innerWidth * 2,
    global_height = window.innerHeight * 2;
    
    global_center = {
        x: (global_width / 2),
        y: (global_height / 2)
    };
 
    logoLocation = {
        x: (global_center.x - logoDimensions.x / 2),
        y: (global_center.y - logoDimensions.y / 2)
    };
    
    
    /**
    * Compensate for High Density Screens
    */ 
    
    // Set canvas for twice the intended size
    canvasInteractive.width = canvasReference.width = global_width;
    canvasInteractive.height = canvasReference.height = global_height;
    
    // Scale the Canvas back to Normal Size
    canvasInteractive.style.width = canvasReference.style.width = global_width / 2;
    canvasInteractive.style.height =  canvasReference.style.height = global_height / 2;
    
    init();
    
    // Create a New Ticker
    TweenLite.ticker.addEventListener("tick", animate);

};

window.addEventListener('resize', resize, false);


/* --------------------------
 * RENDER
 * -------------------------- */
 
function render() {
    // Draw the particles
    
     contextInteractive.clearRect(0, 0, global_width, global_height);
     for(var i = 0; i < particleArr.length; i++) {
         var p = particleArr[i];
         contextInteractive.beginPath();
         contextInteractive.arc(p.x, p.y, particleAttributes.radius, 0, 2 * Math.PI, false);
         contextInteractive.fillStyle = particleAttributes.color;
         contextInteractive.fill();
     }
};


/* --------------------------
 * ANIMATE
 * -------------------------- */

function animate (event) {
 
     // Particle render
     render();
     
}


/* --------------------------
 * INTERACTIONS
 * -------------------------- */

/**
* Mouse Down
*/ 
     
document.body.addEventListener("mousedown", function(event) {
    for(var i = 0; i < particleArr.length; i++) {
         
         // Animate particles off the stage
         TweenLite.to(particleArr[i], randomNumber(.1, 1), {y: randomExcluded(-200, canvasInteractive.height + 200, -10, canvasInteractive.height + 10), x: randomNumber(-100, canvasInteractive.width + 100)});
         
     }
});


/**
* Mouse Up
*/ 
document.body.addEventListener("mouseup", function(event) {
    for(var i = 0; i < particleArr.length; i++) {
         
         // Put the particles back at their origin
         TweenLite.to(particleArr[i], randomNumber(1, 3), {y: particleArr[i].originY, x: particleArr[i].originX});
         
     }
});


/**
* Touch Start
*/ 
     
document.body.addEventListener("touchstart", function(event) {
    for(var i = 0; i < particleArr.length; i++) {
         
         // Animate particles off the stage
         TweenLite.to(particleArr[i], randomNumber(.1, 1), {y: randomExcluded(-200, canvasInteractive.height + 200, -10, canvasInteractive.height + 10), x: randomNumber(-100, canvasInteractive.width + 100)});
         
     }
});


/**
* Touch End
*/ 
document.body.addEventListener("touchend", function(event) {
    for(var i = 0; i < particleArr.length; i++) {
         
         // Put the particles back at their origin
         TweenLite.to(particleArr[i], randomNumber(1, 3), {y: particleArr[i].originY, x: particleArr[i].originX});
         
     }
});


/* --------------------------
 * REUSABLE FUNCTIONS FOR SELECTING
   A RANDOM NUMBER WITH A MIN & MAX
 * -------------------------- */

// Random Whole Number 
function randomWholeNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// Random Number Without Rounding
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
} 

// Random Number with a Range Exclusion
function randomExcluded(min, max, minExcluded, maxExcluded) {
    var n = minExcluded
    while (n >= minExcluded && n <=maxExcluded)
        n = Math.floor(Math.random() * (1 + max - min) + min);
    return n;
}