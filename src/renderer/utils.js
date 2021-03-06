// 创建 svg 元素
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

// 将 child 节点挂载到 parent 节点上面
export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

// 给 element 设置属性
export function applyAttributes(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    // 将驼峰语法属性改成，短横线语法
    const kebabCaseKey = key.replace(/[A-Z]g/, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, value);
  }
}
