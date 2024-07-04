import { clsx } from 'clsx'
import { useFormContext } from 'react-hook-form'

import type { Input, Context, Output } from './type'

import { FormFieldWrapper } from './FormFieldWrapper'

const FIELD_KEY = 'name'

export const FormFieldName = () => {
  const formContext = useFormContext<Input, Context, Output>()

  return (
    <FormFieldWrapper
      inputNode={
        <input
          type="text"
          className={clsx('tw-h-[40px] tw-rounded tw-border')}
          {...formContext.register(FIELD_KEY)}
        />
      }
      label={FIELD_KEY}
      errorMessage={formContext.formState.errors[FIELD_KEY]?.message || ''}
    />
  )
}
