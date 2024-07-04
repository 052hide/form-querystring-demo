import { useState } from 'react'

import type { Person } from './type'

const sleep = (msec: number) => {
  new Promise((resolve) => setTimeout(resolve, msec))
}

export const useCreatePerson = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const mutate = async ({
    params,
  }: {
    params: {
      name: string
      age: number
    }
  }) => {
    setLoading(true)

    await sleep(1000)
    setLoading(false)

    return {
      data: {
        id: Math.floor(Math.random() * 1000000),
        ...params,
      } satisfies Person,
    }
  }

  return { loading, mutate }
}
