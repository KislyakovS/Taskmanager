class Task {
    constructor(data) {
        this.id = data['id'];
        this.text = data['description'] || '';
        this.dueDate = data['due_date'] ? new Date(data['due_date']) : null;
        this.repeatingDays = data['repeating_days'];
        this.color = data['color'];
        this.isFavorite = data['is_favorite'];
        this.isArchive = data['is_archived'];
    }

    static parseTask(task) {
        return new Task(task);
    }

    static parseTasks(tasks) {
        return tasks.map(Task.parseTask);
    }

    toRAW() {
        return {
            id: this.id,
            description: this.text,
            due_date: this.dueDate ? this.dueDate.toISOString() : null,
            repeating_days: this.repeatingDays,
            color: this.color,
            is_favorite: this.isFavorite,
            is_archived: this.isArchive
        }
    }
}

export {
    Task
}