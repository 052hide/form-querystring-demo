import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm, FormProvider } from 'react-hook-form'

import type { Input, Context, Output } from './type'

import type { Person } from '~/api/type'

import { useCreatePerson } from '~/api/useCreatePerson'

import { SCHEMA } from './const'
import { FormFieldAge } from './FormFieldAge'
import { FormFieldName } from './FormFieldName'

export const Form = ({
  onSubmitSuccess,
}: {
  onSubmitSuccess: (data: Person) => void
}) => {
  const methods = useForm<Input, Context, Output>({
    resolver: zodResolver(SCHEMA),
    defaultValues: {
      name: '',
      age: '',
    },
  })

  const { mutate } = useCreatePerson()

  const handleSubmit = async (data: Output) => {
    const res = await mutate({ params: data })
    onSubmitSuccess(res.data)
  }

  return (
    <form
      onSubmit={methods.handleSubmit(handleSubmit)}
      className={clsx('tw-flex tw-flex-col tw-gap-4')}
    >
      <FormProvider {...methods}>
        <FormFieldName />
        <FormFieldAge />

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
