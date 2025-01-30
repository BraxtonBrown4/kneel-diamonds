import { setMetalId } from "./TransientState.js"

const handleMetalChanges = (changeEvent) => {
    if (changeEvent.target.name === 'metal') {
        const intId = parseInt(changeEvent.target.id)
        setMetalId(intId)
    }

}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")

    const metals = await response.json()

    document.addEventListener('change', handleMetalChanges)

    let optionsHTML = ''
    
    metals.filter(metal => {
        optionsHTML += `<div>
            <input type='radio' name='metal' id='${metal.id}' /> ${metal.metal}
        </div>`
    })

    return optionsHTML
}