//hw5 assignment2 bonus

var agents = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 30; i++) {
    agents.push({
      x: random(width),
      y: random(height),
      angle: random(TWO_PI),
      state: floor(random(3)),
			h: random(10,100)
    });
  }
}

function draw() {
  rectMode(CENTER);
  background(220);
  agents.forEach(activateAgent);
  agents.forEach(drawAgent);
}

function drawAgent(agent) {
  push();
  translate(agent.x, agent.y);
  rotate(agent.angle);
  stroke(0);
  fill(agent.h,agent.h,150,)
  rect(0, 0, 20, 10);
  fill(agent.h+50,agent.h+50,150,);
	noStroke();
  rect(0, 0, 2, 2);
  pop();
	colorMode(HSB)
}

function activateAgent(agent) {
  if (random(100) < 1) {
    agent.state = floor(random(3));
  }

  if (agent.state == 1) {
    agent.angle += PI / 200;
  }

  if (agent.state == 2) {
    agent.x += cos(agent.angle) / 3;
    agent.y += sin(agent.angle) / 3;

    if (agent.x > width) {
      agent.x = 0;
    } else if (agent.x < 0) {
      agent.x = width;
    }

    if (agent.y > height) {
      agent.y = 0;
    } else if (agent.y < 0) {
      agent.y = height;
    }
  }
}
