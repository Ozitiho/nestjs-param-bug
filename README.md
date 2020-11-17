# Nestjs Bug Demo

To reproduce the strange behavior, simply boot the server using `npm start`. Going to localhost:3000 returns the expected result. Going to localhost:3000/:id works as expected. Going to localhost:3000/byDate executes /:id instead.
