function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`You have ordered a ${size} T-shirt with the message: "${message}".`);
}

// Calling the function with default values
make_shirt(); // Large shirt with default message
make_shirt('Medium'); // Medium shirt with default message

// Calling the function with different size and message
make_shirt('Small', 'Keep coding!'); // Small shirt with custom message