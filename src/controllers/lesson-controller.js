export class LessonController {
  constructor({ lessonId, dataPath, rootSelector }) {
    this.lessonId = lessonId;
    this.dataPath = dataPath;
    this.rootSelector = rootSelector;
    this.currentIndex = 0;
    this.onChangeCb = () => {};
  }

  async loadLesson() {
    const res = await fetch(`${this.dataPath}/${this.lessonId}.json`);
    const json = await res.json();
    this.title = json.title;
    this.description = json.description;
    this.excercises = json.exercises;
    this._emitChange();
  }

  nextExercise() {
    if (this.currentIndex < this.exercises.length - 1) {
      this.currentIndex++;
      this._emitChange();
    } else {
      alert(`🎉 You’ve completed this lesson!`);
    }
  }

  onExerciseChange(cb) {
    this.onChangeCb = cb;
  }

  _emitChange() {
    this.onChangeCb(this.exercises[this.currentIndex]);
  }
}
