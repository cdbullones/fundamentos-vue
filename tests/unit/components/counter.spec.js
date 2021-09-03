import { shallowMount } from '@vue/test-utils'
import Counter from '@/Components/Counter'

describe('Counter Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    });

    // test('debe hacer match con el snapshot', () => {

    // //Arreglar
    // const wrapper = shallowMount( Counter )
      
    // //Observar el resultado
    // expect( wrapper.html() ).toMatchSnapshot()
    //})

    test('ha debe tener el valor por defecto "Counter"', () => {

        //const wrapper = shallowMount( Counter )

        //const h2 = wrapper.find('h2')

        //console.log(h2.text())

        expect ( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe( 'Counter' )
        
    })

    test('el valor por defecto de p debe ser 100 ', () => {

        //const wrapper = shallowMount( Counter )

        //const pTags = wrapper.findAll('p')

        //console.log(pTags)

        //expect( pTags[1].text() ).toBe("100")

        const value = wrapper.find('[data-testid="counter"]').text()
        expect( value ).toBe("100")

    })

    test('debe de incrementar y decrementar el valor del contador ', async() => {

        // //const wrapper = shallowMount( Counter )      
        // const btnTags = wrapper.findAll('button')

        // //console.log(btnTags)

        // await btnTags[0].trigger('click')
        // await btnTags[0].trigger('click')
        // await btnTags[0].trigger('click')

        // await btnTags[1].trigger('click')
        // await btnTags[1].trigger('click')

        // let value = wrapper.find('[data-testid="counter"]').text()

        // expect( value ).toBe("101")

        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

        //console.log(btnTags)

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe("101")
        
    })
    
    
    

})