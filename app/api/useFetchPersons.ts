import { useEffect, useState } from 'react'

import type { Person } from './type'

const PERSONS = [
  {
    id: 174569,
    name: '佐藤',
    age: 34,
  },
  {
    id: 952345,
    name: '鈴木',
    age: 28,
  },
  {
    id: 483210,
    name: '高橋',
    age: 41,
  },
  {
    id: 750183,
    name: '田中',
    age: 37,
  },
  {
    id: 392017,
    name: '伊藤',
    age: 45,
  },
  {
    id: 860925,
    name: '渡辺',
    age: 22,
  },
  {
    id: 528496,
    name: '山本',
    age: 30,
  },
  {
    id: 315789,
    name: '中村',
    age: 26,
  },
  {
    id: 482567,
    name: '小林',
    age: 38,
  },
  {
    id: 951072,
    name: '加藤',
    age: 29,
  },
  {
    id: 604319,
    name: '吉田',
    age: 33,
  },
  {
    id: 781456,
    name: '山田',
    age: 27,
  },
  {
    id: 417362,
    name: '佐々木',
    age: 39,
  },
  {
    id: 693518,
    name: '松本',
    age: 31,
  },
  {
    id: 820741,
    name: '斎藤',
    age: 42,
  },
  {
    id: 156879,
    name: '木村',
    age: 25,
  },
  {
    id: 734925,
    name: '井上',
    age: 36,
  },
  {
    id: 583210,
    name: '清水',
    age: 40,
  },
  {
    id: 951483,
    name: '山口',
    age: 32,
  },
  {
    id: 237491,
    name: '森',
    age: 24,
  },
] as const satisfies Person[]

const sleep = (msec: number) => {
  new Promise((resolve) => setTimeout(resolve, msec))
}

export const useFetchPersons = ({
  params,
}: {
  params: {
    length: number
  }
}) => {
  const [data, setData] = useState<Person[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      setLoading(true)

      await sleep(1000)
      setLoading(false)

      const length = params.length <= 0 ? PERSONS.length : params.length

      setData([...PERSONS].slice(0, length))
      setLoading(false)
    })()
  }, [params])

  return { data, loading }
}
