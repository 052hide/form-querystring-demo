import { useState } from 'react'

import type { ComponentProps } from 'react'

import { Form } from './_components/Form'

export default function Index() {
  const [result, setResult] = useState<
    Parameters<ComponentProps<typeof Form>['onSubmitSuccess']>[0] | null
  >(null)

  return (
    <div>
      <div>
        <Form onSubmitSuccess={setResult} />
      </div>
      <div>
        <p>{'result'}</p>
        {result && <p>{JSON.stringify(result)}</p>}
      </div>
    </div>
  )
}
