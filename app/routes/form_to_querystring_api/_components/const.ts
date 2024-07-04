import { z } from 'zod'

export const SCHEMA = z.object({
  length: z
    .string()
    .min(1, { message: '必須です' })
    .transform((v) => Number(v))
    .pipe(
      z
        .number({
          message: '数値を入力してください',
        })
        .positive({ message: '正の数を入力してください' })
    ),
})
