// Higher Order Function

function cookFood(order) {
    console.log(`Preparing ${order}`);
}

function serveDrink(drinkOrders) {
    console.log(`Serving ${drinkOrders}`);
}

// 
function Restaurant(cookFood, serveDrink, order, orderType) {
    
    if (orderType == "Food") {
        return cookFood(order);
    } else if (orderType == "Drink") {
        return serveDrink(order);
    } else {
        throw new Error("Incompatible order type");
    }
}

// Restaurant(cookFood, serveDrink, "Pizza", "Food");

// Restaurant(cookFood, serveDrink, "Coke", "Drink");
