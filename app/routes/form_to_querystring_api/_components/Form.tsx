import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm, FormProvider } from 'react-hook-form'

import type { Input, Context, Output } from './type'

import { SCHEMA } from './const'
import { FormFieldLength } from './FormFieldLength'

export const Form = ({
  defaultValues,
  onSubmit,
}: {
  defaultValues: Input
  onSubmit: (data: Output) => void
}) => {
  const methods = useForm<Input, Context, Output>({
    resolver: zodResolver(SCHEMA),
    defaultValues,
  })

  const handleSubmit = async (data: Output) => {
    onSubmit(data)
  }

  return (
    <form
      onSubmit={methods.handleSubmit(handleSubmit)}
      className={clsx('tw-flex tw-flex-col tw-gap-4')}
    >
      <FormProvider {...methods}>
        <FormFieldLength />

        <button
          type="submit"
          className={clsx(
            'tw-h-[40px]',
            'tw-rounded',
            'tw-border',
            'tw-px-4',
            'tw-bg-black tw-text-white'
          )}
        >
          {'Submit'}
        </button>
      </FormProvider>
    </form>
  )
}
