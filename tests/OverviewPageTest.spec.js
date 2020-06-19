import { shallowMount } from '@vue/test-utils'
import Overview from '../../src/components/Overview'
import axios from 'axios';

export const fetchData = async query => {
    return await axios.get("https://localhost:44320/api/Products/all")
};
jest.mock('axios')
describe('Overview.vue', () => {

    it('fetched data succesfully from API', async () => {
        const data = {
            data :
            [
                {
                   "id":15,
                   "name":"John Doe",
                   "orders":[
                      {
                         "id":10,
                         "userId":15,
                         "products":[
                            {
                               "id":23,
                               "orderId":10,
                               "productType":"Espresso",
                               "sugar":"1",
                               "milk":"0"
                            },
                            {
                               "id":24,
                               "orderId":10,
                               "productType":"Americano",
                               "sugar":"1",
                               "milk":"1"
                            }
                         ]
                      }
                   ]
                },
                {
                   "id":16,
                   "name":"Brad",
                   "orders":[
                      {
                         "id":11,
                         "userId":16,
                         "products":[
                            {
                               "id":25,
                               "orderId":11,
                               "productType":"Earl Grey Tea",
                               "sugar":"1",
                               "milk":"1"
                            },
                            {
                               "id":26,
                               "orderId":11,
                               "productType":"Cappuccino",
                               "sugar":"0",
                               "milk":"0"
                            }
                         ]
                      }
                   ]
                },
                {
                   "id":17,
                   "name":"Siora",
                   "orders":[
                      {
                         "id":12,
                         "userId":17,
                         "products":[
                            {
                               "id":27,
                               "orderId":12,
                               "productType":"Witte Chocomel",
                               "sugar":"0",
                               "milk":"0"
                            }
                         ]
                      }
                   ]
                },
                {
                   "id":18,
                   "name":"Joeri",
                   "orders":[
                      {
                         "id":13,
                         "userId":18,
                         "products":[
                            {
                               "id":28,
                               "orderId":13,
                               "productType":"Espresso",
                               "sugar":"1",
                               "milk":"0"
                            },
                            {
                               "id":29,
                               "orderId":13,
                               "productType":"Cappuccino",
                               "sugar":"1",
                               "milk":"1"
                            }
                         ]
                      }
                   ]
                }
            ]
        
        }

        axios.get.mockImplementationOnce(() => Promise.resolve(data))
    });
});

