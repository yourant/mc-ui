import Vue from 'vue'
// import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import McNestedTable from '@/packages/mc-nested-table/src/index.vue'
// import { ElementUI } from 'element-ui';
import ElementUI from 'element-ui'

describe('McNestedTable.vue', () => {
  // 划分作用域
  it('测试McNestedTable能否正常展示props传的数据', (done) => {
    // Vue.component('elTable', Table)
    Vue.use(ElementUI)
    const wrapper = shallowMount(McNestedTable, {
      propsData: {
        titles: [
          {
            label: '分类名称',
            children: [
              {
                label: '分类001',
                children: [
                  {
                    label: '分类123',
                    minWidth: '200px',
                    prop: 'name',
                    align: 'left'
                  }
                ]
              }
            ]
          },
          {
            label: '日期',
            children: [
              {
                label: '2021.2',
                children: [
                  { label: '11点30', minWidth: '300px', prop: '2021.2' }
                ]
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
              c: 'qingyun',
              id: 51,
              props: ['a', 'b', 'c']
            },
            2021.8: 85222
          }
        ]
      }
    })

    // expect(wrapper.text()).match(/qingyun/)
    console.log(wrapper, 'cccccccc')
    // wrapper.vm.$nextTick().then(() => {
    //   // expect(wrapper.text()).toMatch("qingyun");
    //   expect(wrapper.text()).to.have.string('qingyun')

    //   // expect(wrapper.isVisible()).to.equal();

    //   done()
    // })
  })
})

// describe('Button.vue', () => { // 划分作用域
//   it('测试button能否正常限时slot中的内容', () => { // 相等 不等 是否包含
//     const wrapper = shallowMount(Button, {
//       slots: {
//         default: 'zf-ui'
//       }
//     })
//     expect(wrapper.text()).to.equal('zf-ui')
//   })
//   it('测试icon传入的是否显示正常', () => {
//     const wrapper = shallowMount(Button, {
//       stubs: { // 替换功能
//         'zf-icon': Icon
//       },
//       propsData: {
//         icon: 'sousuo'
//       }
//     })
//     expect(wrapper.find('use').attributes('href')).to.eq('#icon-sousuo')
//   })
//   it('按钮传入position是否正常显示', () => {
//     const wrapper = shallowMount(Button, {
//       attachToDocument: true, // 在浏览器上测试
//       stubs: { // 替换功能
//         'zf-icon': Icon
//       },
//       slots: {
//         default: 'zf-ui'
//       },
//       propsData: {
//         iconPosition: 'left',
//         icon: 'sousuo'
//       }
//     })
//     const ele = wrapper.vm.$el.querySelector('span')
//     expect(getComputedStyle(ele).order).to.eq('2')
//     wrapper.setProps({ iconPosition: 'right' })
//     // 设置props 必须要在下一个事件环中取值
//     return wrapper.vm.$nextTick().then(() => {
//       expect(getComputedStyle(ele).order).to.eq('1')
//     })
//   })
//   it('测试按钮能否正常点击', () => {
//     const wrapper = shallowMount(Button, {})
//     wrapper.find('button').trigger('click')
//     expect(wrapper.emitted('click').length).to.eq(1)
//   })
// })
