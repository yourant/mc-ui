<template>
  <div id="app">
    <mc-svg-icon icon="dashboard"></mc-svg-icon>
    <i class="m-icon-close fs-24"></i>
    <mc-nested-table
      ref="mctable"
      :titles="titles"
      :data="datas"
      :border="true"
      row-key="id"
      lazy
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      :load="loadFetch"
    />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data () {
    return {
      titles: [
        {
          label: '分类名称',
          minWidth: '200px',
          prop: 'name',
          align: 'left'
        },
        {
          label: '日期',
          children: [
            {
              label: '2021.2',
              minWidth: '300px',
              prop: '2021.2'
            }
          ]
        },
        {
          label: '颜色',
          children: [
            { label: '大红', minWidth: '300px', prop: '2021.8' },
            { label: '大紫', minWidth: '300px', prop: '2021.8' }
          ]
        }
      ],
      datas: [
        {
          id: 1,
          name: 'Women(女性)',
          mergeCell: true,
          2021.2: 'wolll',

          2021.8: 55
        },
        {
          id: 3,
          name: 'Dresses(连衣裙)',
          mergeCell: true,
          2021.2: 'xxx',
          2021.8: 785
        },
        {
          id: 5,
          name: 'HAHA(手套)',
          mergeCell: true,
          hasChildren: true,
          2021.2: {
            a: '总：2.3%',
            b: '复色：2%',
            c: '新品：2.3%',
            id: 51,
            props: ['a', 'b', 'c']
          },
          2021.8: 85222
        }
      ],
      datas2: [
        { id: 1, name: 'LALA(拉拉)', 2021.2: '66', 2021.5: '88', 2021.8: '99' },
        {
          id: 2,
          name: 'SASA(沙沙)',
          2021.2: '66',
          2021.5: '88',
          2021.8: '99',
          hasChildren: true
        }
      ]
    }
  },
  mounted () {
    console.log(this.$refs.mctable.$refs.childTable)
    console.log(this.$refs.mctable.$refs.mcTreeTable)
  },
  methods: {
    async sleep (n) {
      return new Promise((resolve) => {
        setTimeout(resolve, n)
      })
    },
    async loadFetch () {
      // 获取下一个层级的数据
      await this.sleep(1000)
      const Idx = Math.floor(Math.random() * 4 + 1)
      const Names = [
        '',
        'HAHA(手套)',
        'WAWA(哇哇)',
        'YAYA(吖吖)',
        'GUOGUO(果果)'
      ]
      const Item = { a: `总：${Idx}%`, b: `复色：${Idx}%`, c: `新品：${Idx}%` }
      const props = ['a', 'b', 'c']
      const Now = Date.now()
      return [
        {
          id: Now,
          name: Names[Idx],
          mergeCell: true,
          hasChildren: true,
          2021.2: { ...Item, props, id: Now + 1 },
          2021.5: { ...Item, props, id: Now + 2 },
          2021.8: { ...Item, props, id: Now + 3 }
        }
      ]
    },
    async loadFetch2 () {
      // 获取下一个层级的数据
      await this.sleep(1000)
      const Idx = Math.floor(Math.random() * 4 + 1)
      const Names = [
        '',
        'HAHA(手套)',
        'WAWA(哇哇)',
        'YAYA(吖吖)',
        'GUOGUO(果果)'
      ]
      return [
        {
          id: Date.now(),
          name: Names[Idx],
          hasChildren: true,
          2021.2: Idx + '%',
          2021.5: Idx + '%',
          2021.8: Idx + '%'
        }
      ]
    }
  }
})
</script>

<style lang="scss">
</style>
