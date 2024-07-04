import { z } from 'zod'

export const SCHEMA = z.object({
  name: z
    .string({ message: '文字列を入力してください' })
    .min(1, { message: '必須です' }),
  age: z
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
