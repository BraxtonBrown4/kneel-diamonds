import { placeOrder } from "./TransientState.js"

const handleButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "CreateCustomJewelry") {
        placeOrder()
    }
}
export const CreateCustomJewelry = () => {
    document.addEventListener('click', handleButtonClick)

    return "<div><button id='CreateCustomJewelry'>Create Custom Jewelry</button><div>"
}