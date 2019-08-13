export default {
  getPreviousValidIndex(index, length) {
    const deprecatedIndex = index - 1;
    return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
  },
  getNextValidIndex(index, length) {
    const incrementedIndex = index + 1;
    return incrementedIndex > length - 1 ? 0 : incrementedIndex;
  }
}
