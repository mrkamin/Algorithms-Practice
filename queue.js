//Create Queue
function createQueue() {
 // Define an Empty Array to store queue
   let queue = [];
   console.log("queue", queue)
// Add element to the back of queue
function enqueue(element) {
   queue.push(element)
   console.log("enqueue", queue)
}

// Remove the element from the front of the queue means the element added first removed first
function dequeue() {
   return queue.shift()
   console.log("Dequeue", queue)
}
return {
   queue,
   enqueue,
   dequeue
}
}

const numbersqueu = createQueue()

numbersqueu.enqueue(10)
numbersqueu.enqueue(20)
console.log(numbersqueu.queue)


console.log(numbersqueu.dequeue())

