export default function NumberBox({ amount, itemType, range, setItemType }) {
    const voyels = ["a", "e", "i", "o", "u", "y"]

    const setText = (str) => {
        for (let v of voyels) {
            if (str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").startsWith(v)) {
                return "Nombre d'"
            }
        }
        return "Nombre de "
    }

    const text = setText(itemType)

    const handleInputChange = (e) => {
        let value = parseInt(e.target.innerText.replace(/\D/g, ""), 10) || 0
        if (value >= 0 && value <= 999) {
            setItemType(value)
        } else {
            setItemType(0) // Reset si invalide
        }
    }

    return (
        <div className="bg-white p-6 text-center w-40 flex flex-col justify-between items-center h-64 ">
            {/* Zone de nombre éditable */}
            <div
                contentEditable
                suppressContentEditableWarning
                className="text-5xl font-bold text-primary-dark outline-none focus:ring-2 focus:ring-primary-dark px-2"
                onBlur={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") e.target.blur() // Valider avec Entrée
                }}
            >
                {amount.toString().padStart(3, "0")}
            </div>

            <p className="text-yellow-700 text-sm">{text}{itemType}</p>

            {/* Slider stylisé */}
            <input
                value={amount}
                type="range"
                min={0}
                max={500}
                className="mt-2 w-full appearance-none h-1 bg-primary-dark rounded-lg cursor-pointer 
                           accent-primary-dark  focus:outline-none"
                onChange={(e) => range(e, setItemType)}
            />
        </div>
    )
}
