import React from 'react';
import { Button } from '@somaui/ui/button';
import { Stepper } from '@somaui/ui/stepper';

export default function FunctionalStepper() {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <>
      <Stepper currentIndex={currentStep} className="w-full">
        <Stepper.Step title="Step 1" description="This is a description" />
        <Stepper.Step title="Step 2" description="This is a description" />
        <Stepper.Step title="Step 3" description="This is a description" />
        <> </>
      </Stepper>

      <div className="mt-7 flex space-x-4">
        <Button
          disabled={currentStep === 3}
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Next
        </Button>

        {currentStep === 3 && (
          <Button onClick={() => setCurrentStep(0)}>Reset</Button>
        )}
      </div>
    </>
  );
}
