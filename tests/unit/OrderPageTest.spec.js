import { shallowMount } from '@vue/test-utils'
import Orders from '../../src/components/Orders'

describe('Order.vue', () => {

    it('See if CoffeeType textbox is there', () => {
        const wrapper = shallowMount(Orders)
        expect(wrapper.html()).toContain(`<form><input type=\"text\" name=\"CoffeeType\" placeholder=\"What would you like to drink?\">`)
        
    }),
    it('See if place order button is there', () => {
        const wrapper = shallowMount(Orders)
        expect(wrapper.html()).toContain(`<input type=\"submit\" value=\"Place order\" class=\"placeOrderbtn\">`)      
    }),
    it('See if add user button is there', () => {
        const wrapper = shallowMount(Orders)
        expect(wrapper.html()).toContain(`<input type=\"submit\" value=\"Place order\" class=\"placeOrderbtn\">`)      
    })
  
});

