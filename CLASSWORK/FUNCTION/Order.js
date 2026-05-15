const order = {
    id: 1, 
    status: "pending"
};

function updateOrderStatus(order) {
    order.status = "delivered";
    return order;
}
