import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ItemComponent from '@/components/items/children/Item.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'

describe('Item.component.vue', () => {
    it('Render Item de forma correcta', () => {
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1',
            selected: false
        }
        const wrapper = shallowMount(ItemComponent, {
            props: {
                model: model
            }
        })
        expect(wrapper.text()).to.include('Unit text item 1');
        let domEl = wrapper.find('div.name');
        expect(domEl.text()).to.equal('Unit text item 1');
    })
    it('Tiene clase CSS corecta cuando el atributo "selected" es False', () => {
        const model: ItemInterface = {
            id: 2,
            name: 'Unit test item 2',
            selected: false
        }
        const wrapper = shallowMount(ItemComponent, {
            props: {
                model: model
            }
        })
// comprobar la lista de clases css del componente
        const classes = wrapper.classes()
        expect(classes).to.be.an('array')
            .that.includes('item');

        expect(classes).to.be.an('array')
            .that.does.not.includes('selected');
    })
    it('Tiene clase CSS corecta cuando el atributo "selected" es True', () => {
        const model: ItemInterface = {
            id: 3,
            name: 'Unit test item 3',
            selected: true /* cambiando a selected = true aquí */
        }
        const wrapper = shallowMount(ItemComponent, {
            props: {
                model: model
            }
        })
        // comprobar la lista de clases css del componente
        const classes = wrapper.classes()
        expect(classes).to.be.an('array')
            .that.includes('item')
        expect(classes).to.be.an('array')
            .that.includes('selected')
    })
})