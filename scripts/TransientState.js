const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0,
    "typeId": 0
}

export const setMetalId = (chosenMetal) => {
    transientState.metalId = chosenMetal
}

export const setSizeId = (chosenSize) => {
    transientState.sizeId = chosenSize
}

export const setStyleId = (chosenStyle) => {
    transientState.styleId = chosenStyle
}

export const setTypeId = (chosenType) => {
    transientState.typeId = parseInt(chosenType)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("OrderSaved")
    document.dispatchEvent(customEvent)
}
