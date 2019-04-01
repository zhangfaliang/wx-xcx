Component({
    relations: {
      '../page-item/index': {
        type: 'child', // 关联的目标节点应为子节点
        linked: function(target) {
          // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        },
        linkChanged: function(target) {
          // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
        },
        unlinked: function(target) {
          // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
        }
      }
    },
    methods: {
      _getAllLi: function(){
        // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
        var nodes = this.getRelationNodes('../page-item/index')
      }
    },
    ready: function(){
      this._getAllLi()
    }
  })