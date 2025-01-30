import { setStyleId } from "./TransientState.js"

const handleStyleChanges = (changeEvent) => {
    if (changeEvent.target.name === 'style') {
        const intId = parseInt(changeEvent.target.id)
        setStyleId(intId)
    }

}

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")

    const styles = await response.json()

    document.addEventListener('change', handleStyleChanges)

    let optionsHTML = ''
    
    styles.filter(style => {
        optionsHTML += `<div>
            <input type='radio' name='style' id='${style.id}' /> ${style.style}
        </div>`
    })

    return optionsHTML
}