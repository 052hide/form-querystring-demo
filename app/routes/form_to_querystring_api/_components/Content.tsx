import { useSearchParams } from '@remix-run/react'

import { useFetchPersons } from '~/api/useFetchPersons'

import { Form } from './Form'

export const Content = ({ params }: { params: { length: number } }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_searchParams, setSearchParams] = useSearchParams()

  const fetchPersons = useFetchPersons({
    params,
  })

  return (
    <div>
      <div>
        <Form
          defaultValues={{
            length: `${params.length}`,
          }}
          onSubmit={(d) =>
            setSearchParams({
              length: `${d.length}`,
            })
          }
        />
      </div>
      <div>
        <p>{'result'}</p>
        {fetchPersons.data && <p>{JSON.stringify(fetchPersons.data)}</p>}
      </div>
    </div>
  )
}
