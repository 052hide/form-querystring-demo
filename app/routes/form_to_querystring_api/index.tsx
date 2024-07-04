import { useSearchParams } from '@remix-run/react'

import { useEffect, useMemo } from 'react'
import { z } from 'zod'

import { Content } from './_components/Content'

const SCHEMA = z.object({
  length: z
    .string()
    .transform((v) => Number(v))
    .pipe(z.number().positive()),
})

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useMemo(() => {
    const res = SCHEMA.safeParse({
      length: searchParams.get('length'),
    })

    if (!res.success) {
      return null
    }
    return res.data
  }, [searchParams])

  useEffect(() => {
    const res = SCHEMA.safeParse({
      length: searchParams.get('length'),
    })

    if (!res.success) {
      setSearchParams({
        length: '20',
      })
    }
  }, [searchParams, setSearchParams])

  return params && <Content params={params} />
}
