window.onresize = function () {
  waterFull('.ul')
}
window.onload = function () {
  waterFull('.ul')
}

function waterFull(element, space, children) {
  //目标，上下间距，子节点
  if (!element) {
    return
  }
  space = space || 10 //上下间距
  children = children || 'li' //子节点

  //获取页面元素
  //大盒子
  var box = document.querySelector(element)
  //获取所有的子节点
  var oLi = box.getElementsByTagName(children)

  //获取子元素的宽度
  var spaceWidth = oLi[0].offsetWidth
  //获取大盒子的宽度
  var boxWidth = box.offsetWidth

  //获取显示的列数
  var colNum = Math.floor(boxWidth / spaceWidth)
  //获取元素之间的padding left
  var padding = Math.floor((boxWidth - colNum * spaceWidth) / (colNum + 1))

  //存放初始的top和left值
  var column = new Array()

  var maxHeight = 0
  for (var i = 0; i < colNum; i++) {
    column[i] = new Object()
    column[i].top = space
    column[i].left = spaceWidth * i + padding * (i + 1)
  }

  //开始布局了
  for (var i = 0; i < oLi.length; i++) {
    //计算元素属于第几列
    if ((i + 1) % colNum == 0) {
      sub = colNum
    } else {
      sub = (i + 1) % colNum
    }
    oLi[i].style.position = 'absolute'
    oLi[i].style.top = column[sub - 1].top + 'px'
    oLi[i].style.left = column[sub - 1].left + 'px'
    //计算各列新高度
    column[sub - 1].top += oLi[i].offsetHeight + space
  }
  for (var i = 0; i < column; i++) {
    if (column[i].top > maxHeight) {
      maxHeight = column[i].top
    }
  }
  oLi.style.height = maxHeight + 'px'
}
