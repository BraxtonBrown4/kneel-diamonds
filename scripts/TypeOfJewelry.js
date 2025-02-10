import { setTypeId } from "./TransientState.js"

export const typeOfJewelry = async () => {
    const response = await fetch('http://localhost:8088/types')
    const types = await response.json()

    setTypeId(types[0].id)

    let html = `<input type='radio' name='type' id='${types[0].id}' checked/>${types[0].type}`

    for (let i = 1; i < types.length; i++) {
        html += `<input type='radio' name='type' id='${types[i].id}'/>${types[i].type}`
    }

    return html
}

document.addEventListener(
    'click',
    (clickEvent) => {
        const {name, id} = clickEvent.target

        if (name === 'type') {
            setTypeId(id)
        }
    }
)