function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("You have ordered a ".concat(size, " T-shirt with the message: \"").concat(message, "\"."));
}
// Calling the function with default values
make_shirt(); // Large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
// Calling the function with different size and message
make_shirt('Small', 'Keep coding!'); // Small shirt with custom message
