// Function to format price string to a number
export function formatPrice(priceString) {
    return parseFloat(priceString.replace(/[^0-9.-]/g, ''));
}

// Function to calculate subtotal
export function calculateSubtotal(price, quantity) {
    return price * quantity;
}

// Function to check if elements are sorted
export function isSorted(arr) {
    return arr.every((val, i, arr) => !i || (val >= arr[i - 1]));
}
