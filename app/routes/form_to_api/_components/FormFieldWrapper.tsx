import { clsx } from 'clsx'

import type { ReactNode } from 'react'

export const FormFieldWrapper = ({
  inputNode,
  label,
  errorMessage,
}: {
  inputNode: ReactNode
  label: string
  errorMessage: string
}) => {
  return (
    <div>
      <p>{label}</p>
      {inputNode}
      {errorMessage && (
        <p className={clsx('tw-text-sm tw-text-red-500')}>{errorMessage}</p>
      )}
    </div>
  )
}
