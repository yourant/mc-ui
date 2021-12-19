/**
 * 滚动到表格顶部, 针对el-table表格
 * @param {String} tableClassName 表格类名
 */
export default function tableScrollTop (tableClassName) {
  const target = document.querySelector(`.${tableClassName} .el-table__body-wrapper`)
  if (target) {
    target.scrollTo(0, 0)
  }
}
