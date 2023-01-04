export default class HolbertonCourse {
  constructor(name, length, students) {
    try {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      }
      if (!Array.isArray(students)) {
        throw new TypeError('Students must be an array');
      }
    } catch (error) {
      return error;
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
    return this._name;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (newLength !== 'string') {
      throw new TypeError('Length must be a string');
    }
    this._length = newLength;
    return this._length;
  }

  get students() {
    return this._students;
  }

  set students(newArray) {
    if (newArray !== 'string') {
      throw new TypeError('Students must be an array');
    }
    this._students = newArray;
    return this._students;
  }
}
