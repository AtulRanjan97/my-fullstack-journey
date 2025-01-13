// run this file in browser console tab with index.html(not with node terminal)
console.log('Learning objects');

// Declaring an object
let student = {};   // Empty object
console.log(product);
console.log(typeof product);    // Output: object

let product = {
    company: 'Nike',                // valid variable name according to JS
    'item-name': 'Running Shoes',   // key with special character is only allowed if written as a string 
    price: 2500,                    
    avgRating: 4.5,                 
    numberOfRatings: 38,
    // In general standard company me practice yahi hoti hai ki hum last property value ke sath  bhi comma(,) lagayein kyunki agar future mein nayi property add karni padi toh purani wali line me bhi comma(,) lagana padega, and jaise hi hum purani wali line mein comma(,) lagayenge toh humne ek aisi line ko chhed diya hai jisme humein sirf ek comma lagaya tha but is line pr bhi jab koi git ka blame dekhega ki yeh line kisne likhi hai toh humara naam aa jayega ki last line to humne likhi thi, sirf comma lagane ki vajah se, so basically coding mein aisi practices banayi jaati hai ki aap vahi line ko chhed chhad karein jin line ko aap actually own karna chahte hai
}


// Dot Notation
console.log(product.company);
// console.log(product.item-name);   // can't access this property using dot notation as property name(ie. `item-name`) contains special character

// Bracket Notation
console.log(product[avgRating]);

// When to use Bracket Notation?
    // 1. Useful for properties with special characters.
        console.log(product['item-name']);
    // 2. Most of the time hum jo object access kar rahe hote hai humko nahi pata hota ki uske ander kaun-kaunsi 'keys' hai because vo (server/ backend/ network call/ function etc) se mil rahi hoti hai, agar is case me dot notation ka use karenge to exact property(ie, key) ka naam pata hona chahiye tabhi hum dot laga kar access kar sakte hai. 
    let key = 'company';    // assume ki yeh key(ie, company) kisi function call ya kahin aur se aaya hai jise humne apne key naam ke variable me store kiya hai
    console.log(product[key]);
    // now we can write this key directly in our code using bracket notation


// Modifying the object
product.discount = 50;      // we can add a new key-value pair in existing object 
product.price = 3000;       // we can update value of a key
delete product.numberOfRatings;     // we can delete any key-value pair using delete keyword
console.log(product);

