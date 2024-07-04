import type { SCHEMA } from './const'
import type { useForm } from 'react-hook-form'

import type { z } from 'zod'

export type Input = z.input<typeof SCHEMA>
export type Context = unknown
export type Output = z.output<typeof SCHEMA>

export type FormContextParams = typeof useForm<Input, Context, Output>
