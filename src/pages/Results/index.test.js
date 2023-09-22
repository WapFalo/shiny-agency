import { formatJobList, formatQueryParams } from './'
import { rest } from 'msw'
import { setupServer } from 'msw/lib/node'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test'
import Results from './'

describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })

  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('The formatQueryParams function', () => {
  it('should use the right format for parameters', () => {
    const expectedState = 'a1=answer1'
    expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
  })
  it('should concatenate params with a &', () => {
    const expectedState = 'a1=answer1&a2=answer2'
    expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
      expectedState,
    )
  })
})

const resultsMockedData = [
  {
    title: 'backend',
    description: `Le backend consiste en la partie émergée de l'iceberg : ce qui permet de faire tourner une application mais qui n'est pas visible par l'utilisateur`,
  },
  {
    title: 'frontend',
    description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
  },
]

const server = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    return res(ctx.json({ resultsList: resultsMockedData }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('The results component', () => {
  it('should display the results after the data is sent', async () => {
    render(<Results />)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
    const jobTitles = screen.getAllByTestId('job-title')
    expect(jobTitles[0].textContent).toBe('backend')
    expect(jobTitles.length).toBe(2)
    const jobDescriptions = screen.getAllByTestId('job-description')
    expect(jobDescriptions[1].textContent).toBe(
      resultsMockedData[1].description,
    )
    expect(jobDescriptions.length).toBe(2)
  })
})
