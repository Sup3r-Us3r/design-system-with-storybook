import '../styles/tokens-grid.css'

interface ITokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

const TokensGrid = ({ tokens, hasRemValue = false }: ITokensGridProps) => {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <td>Name</td>
          <td>Value</td>
          {hasRemValue && <td>Pixels</td>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { TokensGrid }
