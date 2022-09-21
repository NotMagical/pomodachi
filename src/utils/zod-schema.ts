import { z } from 'zod';

export const TIMER = z.object({
  name: z.string(),
  maxRange: z.number().nonnegative(),
  minRange: z.number().nonnegative(),
  skipRange: z.number().nonnegative(),
});
