import Card from './'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('The Card component', () => {
  it('should render without crashing', async () => {
    render(
      <ThemeProvider>
        <Card title="John Doe" label="Frontend dev" picture="/myPicture.png" />
      </ThemeProvider>,
    )
  })
  it('should use the correct picture and title', async () => {
    render(
      <ThemeProvider>
        <Card title="John Doe" label="Frontend dev" picture="/myPicture.png" />
      </ThemeProvider>,
    )
    const cardPicture = screen.getByRole('img')
    const cardTitle = screen.getByText(/john/i)
    expect(cardPicture.src).toBe('http://localhost/myPicture.png')
    expect(cardTitle.textContent).toBe(' John Doe ')
  })
  it('should change as favorite', async () => {
    render(
      <ThemeProvider>
        <Card title="John Doe" label="Frontend dev" picture="/myPicture.png" />
      </ThemeProvider>,
    )
    const cardTitle = screen.getByText(/john/i)
    fireEvent.click(cardTitle)
    expect(cardTitle.textContent).toBe('⭐️ John Doe ⭐️')
  })
})
