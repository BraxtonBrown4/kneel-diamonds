import { CreateCustomJewelry } from './CreateCustomJewelry.js'
import { MetalOptions } from './MetalOptions.js'
import { Orders } from './OrderList.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { typeOfJewelry } from './TypeOfJewelry.js'

const container = document.querySelector('#container')

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const typeHTML = await typeOfJewelry()
    const createButtonHtml = CreateCustomJewelry()
    const ordersHTML = await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article id="choices" class="margin">
            <section class="choice">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choice">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choice">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="margin">
            ${typeHTML}
        </article>

        <article class="margin">
            ${createButtonHtml}
        </article>

        <article class="margin">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

render()

document.addEventListener("OrderSaved", () => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})