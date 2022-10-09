import { Label, MultiStepContainer, Step, Steps } from './styles'

interface MultiStepProps {
  currentStep?: number
  size: number
}

const MultiStep = ({ currentStep = 1, size }: MultiStepProps) => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'

export { type MultiStepProps, MultiStep }
