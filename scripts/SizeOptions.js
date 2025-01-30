import { setSizeId } from "./TransientState.js"

const handleSizeChanges = (changeEvent) => {
    if (changeEvent.target.name === 'size') {
        const intId = parseInt(changeEvent.target.id)
        setSizeId(intId)
    }

}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")

    const sizes = await response.json()

    document.addEventListener('change', handleSizeChanges)

    let optionsHTML = ''
    
    sizes.filter(size => {
        optionsHTML += `<div>
            <input type='radio' name='size' id='${size.id}' /> ${size.carets}
        </div>`
    })

    return optionsHTML
}