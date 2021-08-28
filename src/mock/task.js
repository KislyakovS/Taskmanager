const defaultRepeatingDays = {
    mo: false,
    tu: false,
    we: false,
    th: false,
    fr: false,
    sa: false,
    su: false,
}

const generateTask = () => ({
    text: "Example default task with default color.",
    dueDate: new Date(),
    repeatingDays: Object.assign(defaultRepeatingDays, { tu: true }),
    color: 'pink',
    isArchive: true,
    isFavorite: false,
})

const generateTasks = (count) => new Array(count).fill(``).map(generateTask);

export {
    generateTask,
    generateTasks
}