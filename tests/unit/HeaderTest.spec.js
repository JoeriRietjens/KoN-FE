import { shallowMount } from '@vue/test-utils'
import Header from '../../src/components/Header'

describe('Header.vue', () => {

    it('See if title is there', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.html()).toContain(`<h1>Koffie of nie!!</h1>`)
    }),

    it('See if navigation is there', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.html()).toContain(`<div id="nav">`
        )
    }),

    it('See if navigation place order is there', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.html()).toContain(`<router-link to="/">Place order</router-link>`
        )
    }),

    it('See if navigation Overview is there', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.html()).toContain(`<router-link to="/Overview">Order overview</router-link>`
        )
    })
})

