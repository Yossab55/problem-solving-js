class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pages = this.makePages();
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    if (this.isEmpty()) return 0;
    return Math.ceil(this.itemCount() / this.getItemsPerPage());
  }
  pageItemCount(pageIndex) {
    if (this.isEmpty() || pageIndex > this.pageCount() - 1 || pageIndex < 0)
      return -1;
    let pages = this.makePages();
    return pages[pageIndex].length;
  }
  pageIndex(itemIndex) {
    if (this.isEmpty() || this.itemCount() - 1 < itemIndex || itemIndex < 0)
      return -1;
    if (itemIndex === 0) return 0;
    let index = Math.ceil(itemIndex / this.getItemsPerPage()) - 1;
    if (!(itemIndex % this.getItemsPerPage()))
      index++;
    return index;
  }
  isEmpty() {
    return this.itemCount() == 0 ? true : false;
  }
  getItemsPerPage() {
    return this.itemsPerPage;
  }
  makePages() {
    let result = [];
    for (let i = 0; i < this.itemCount(); i++) {
      result.push(this.collection.slice(i, i + this.getItemsPerPage()));
      i += this.getItemsPerPage() - 1;
    }
    return result;
  }
}
let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

console.log(helper.pageIndex(4));
console.log(helper.pageIndex(2));
console.log(helper.pageIndex(20));
console.log(helper.pageIndex(-10));
console.log(helper.pageIndex(0));
