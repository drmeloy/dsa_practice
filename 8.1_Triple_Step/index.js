// 8.1 Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

// ex1: for n = 2, there are 2 unique ways to run up the stairs: [1, 1] or [2]
// ex2: for n = 3, there are 4 unique ways:  [1, 1, 1], [1, 2], [2, 1], or [3]
// ex3: for n = 4, there are 7 unique ways: [1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2], [1, 3], [3, 1]

// pseudo code
// start with step sizes
// for each step size, add step size to total steps
// check if total steps >=n
// if total steps = n, add to count.  if total steps > n, stop.
// add each step size to current total steps checking if total steps >= n...

const countWays = n => {
  const stepSizes = [1, 2, 3];
  let count = 0;

  if(n < 1) return;

  const takeOneHop = stepsTaken => {
    stepSizes.forEach(step => {
      let stepsAfterHop = stepsTaken;
      stepsAfterHop += step;

      if(stepsAfterHop < n){
        takeOneHop(stepsAfterHop)
      }
      else if(stepsAfterHop === n){
        count++;
      }

      // FOR LOOP IMPLEMENTATION
      // for(let i = 1; i <= Math.min(3, n - stepsTaken); ++i) {
      //   let stepsAfterHop = stepsTaken;
      //   stepsAfterHop += i;
      //   if(stepsAfterHop < n){
      //     takeOneHop(stepsAfterHop)
      //   }
      //   else if(stepsAfterHop === n){
      //     count++;
      //   }
      // }
    })
  }

  takeOneHop(0);
  return count;
}

countWays(4);

// Second way to recursively solve
const countWaysTakeTwo = n => {
  if (n < 0){
    return 0;
  }
  else if (n === 0) {
    return 1;
  }
  else {
    return countWaysTakeTwo(n - 1) + countWaysTakeTwo(n - 2) + countWaysTakeTwo(n - 3);
  }
}

countWaysTakeTwo(4);