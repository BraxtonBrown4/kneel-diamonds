export const Orders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=type")
    const orders = await response.json()

    let ordersHTML = ''
    orders.filter(order => {

        const orderPrice = (order.metal.price + order.style.price + order.size.price) * order.type.multiplier

        ordersHTML += `
        <section class="order">
            <div>Order #${order.id} cost $${orderPrice}</div>
        </section>
        `
    })

    return ordersHTML
}