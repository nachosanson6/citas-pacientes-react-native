export const formatedDate = (date) => {
    const newDate = new Date(date)
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }

    return newDate.toLocaleDateString('es-ES', options)
}