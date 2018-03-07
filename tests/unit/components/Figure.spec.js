import { mount } from '@vue/test-utils'
import Figure from '@/components/Figure'

describe('Figure', () => {
  let wrapper
  let aFigureNumber = 123
  let aFigureText = 'Foobar' 

  beforeEach(() => {
    wrapper = mount(Figure, {
      propsData: {
        figureNumber: aFigureNumber,
        figureText: aFigureText
      }
    })
  });

  it('renders a div with figure class', () => {
    expect(wrapper.contains('.figure')).toBe(true)
  })

  it('renders a paragraph with the figure number', () => {
    const p = wrapper.find('p')

    expect(p.text()).toBe(aFigureNumber.toString())
  })

  it('renders a paragraph with the class figure__number', () => {
    const p = wrapper.find('p')

    expect(p.classes()).toContain('figure__number')
  })

  it('renders a span with the figure text', () => {
    const span = wrapper.find('span')

    expect(span.text()).toBe(aFigureText)
  })

  it('renders a paragraph with the class figure__text', () => {
    const span = wrapper.find('span')
    
    expect(span.classes()).toContain('figure__text')
  })
})